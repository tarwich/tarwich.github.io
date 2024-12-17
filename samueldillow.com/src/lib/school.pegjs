Document = value:Statement* {
  return { type: 'document', value }
}

Statement = HeaderStatement / SectionStatement / CommentStatement / EmptyLine

HeaderStatement = _ "header" __ value:Flow NL {
  return { type: 'header', value: value.filter(Boolean) }
}

SectionStatement = _ "section" __ important:"!"? _ header:Flow _ NL _ value:(
  NoteStatement / TableStatement / CommentStatement
)* {
  return { type: 'section', important, header, value }
}

EmptyLine = _ NL {
  return { type: 'empty' }
}

NoteStatement = _ "notes" __ value:Note|.., _ "." _ | _ NL tail:NoteStatement? {
  return {
    type: 'notes',
    value: value.concat(tail?.value || []).filter(Boolean)
  }
}

Note = value:Flow {
  return { type: 'note', value }
}

TableStatement = _ header:TableHeader? _ rows:TableRow|.., _ NL _ | NL {
  return { type: 'table', header, rows }
}

TableHeader = _ "|" value:Flow NL {
  return { type: 'header', value }
}

TableRow = _ "|" _ important:"!"? _ key:(Text / Annotation)+ ":" _ value:Note|.., _ "." _ | _ {
  return { type: 'row', key, important, value }
}

CommentStatement = _ "//" _ value:$(!NL .)+ _ NL tail:CommentStatement? {
  return {
    type: 'comment',
    value: [value, tail?.value || ''].join('\n').trim()
  }
}

Flow = (Text / Annotation)*

Important = "!" {
  return { type: 'important' }
}

Text = value:$[^\(\[\r\n".:)]+ {
  return { type: 'text', value }
}

Annotation = Page / Year

Page = "(" _ value:$[^\)]+ _ ")" {
  return { type: 'page', value }
}

Year = "[" _ value:$[^\]]+ _ "]" {
  return { type: 'year', value }
}

ALPHABET = $[a-zA-Z]
NUMBER = $[0-9]
ALPHA_NUMBER = $[a-zA-Z0-9]
_ "whitespace" = $[ \t]*
__ "whitespace" = $[ \t]+
NL "newline" = $[\n\r]+
EOL = NL / EOF
EOF = !.
