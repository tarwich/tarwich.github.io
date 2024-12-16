{{
/* eslint-disable @typescript-eslint/no-unused-vars */

const join = (a, b) => {
  if (Array.isArray(a)) { return a.concat(b) }
  if (a === undefined || a === null) return b;
  if (typeof b === 'string') return (a + b).trim();

  return a + b;
}

}}

SDocument = value:(SSection / SNewline)+ {
  return value.filter(v => v.type !== 'newline')
}

SSection = "section" TSpace+ title:STextBlock notes:(TNewline TSpace+ @SNotes)? {
  const section = title.reduce((acc, n) => {
    return {
      ...acc,
      [n.type]: join(acc[n.type], n.value)
    }
  }, { type: 'section' });

  section.title = section.title || section.text;
  delete section['text']

  section.notes = notes;

  return section;
}

TSpace = [ \t]

TNewline = [\r\n]

TStar = "!" / "/star/"

TPage = "(" @$[0-9]+ ")"

TYear = "[" @$[0-9]+ "]"

TNote = "note" "s"?

SWhitespace = TSpace / TNewline

SNewline = value:TNewline { return { type: 'newline', value } }

SStar = TStar { return { type: 'star', value: true } }

SPage = value:TPage { return { type: 'page', value } }

SYear = value:TYear { return { type: 'year', value } }

SAnnotation = SPage / SYear

SAnnotationList = annotation:SAnnotation|.., TSpace| {
  return annotation;
}

SText = value:$(!(SAnnotation / TNewline / ":") .)+ {
  return { type: 'text', value: value?.trim() }
}

STextBlock = star:SStar? text:SText+ annotation:(@SAnnotation TSpace*)* {
  return [
    star,
    ...text,
    ...annotation
  ].filter(Boolean)
}

SNote = value:$(!("." / TNewline / SAnnotation) .)+ TSpace* {
  return {
    type: 'note',
    value
  }
}

SNoteList = TSpace+ value:SNote|.., "."| "."? {
  return {
    type: 'note-list',
    value: value.map(n => n.value?.trim()).filter(Boolean)
  }
}

SNoteBlockEntry = key:SText ":" value:SNoteList annotations:SAnnotationList TNewline {
  return {
    key: key.value,
    value: value.value,
    ...Object.fromEntries(annotations.map(a => [a.type, a.value]))
  }
}

SNoteBlock = TSpace* TNewline value:SNoteBlockEntry+ {
  return {
    type: 'note-block',
    notes: value
  }
}

SNotes = TNote @(SNoteList / SNoteBlock)
