{{
/* eslint-disable @typescript-eslint/no-unused-vars */

const extractDates = (text) => {
  const annotations = [];

  return {
    type: 'text',
    annotations,
    value: text
      .replace(/\[([^\] ]+)\]/g, (_, value) => {
        annotations.push({ type: 'date', value});
        return '';
      })
      .replace(/\(([^\) ]+)\)/g, (_, value) => {
        annotations.push({ type: 'page', value});
        return '';
      })
      .trim()
  }
}

}}

Document = value:Statement* EOF {
  return {type: 'school-work', value: value.filter(Boolean) }
}

Statement = HeaderStatement / SectionStatement / BlockComment / BlankLine

BlankLine = _ NL {}

BlockComment = "/*" $(!"*/" .)+ "*/"

HeaderStatement = _ "header" __ title:Text NL {
  return { type: 'header', title }
}

SectionStatement = _ "section" __ important:"!"? title:Text NL _ value:SectionChild|.., _ NL _| {
  return { type: 'section', important, title, value }
}

SectionChild = List / Table

List = _ "." items:ListItem|..,  _ "." _| (_ NL _ List)? {
  return { type: 'list', items }
}

ListItem = _ title:$(!(NL / ".") .)+ {
  return extractDates(title)
}

Text = value:$(!NL .)+ {
  return extractDates(value)
}

Table = rows:TableRow|.., _ NL _| {
  return { type: 'table', value: rows }
}

TableRow = _ header:HeaderCell data:DataCell? {
  return {
    type: 'table-row',
    header,
    value: data,
  }
}

TableText = value:$(!(NL / ":") .)+ {
  return extractDates(value)
}

HeaderCell = _ "|" _ important:"!"? value:TableText {
  return { type: 'header-cell', important, value }
}

DataCell = _ ":" _ important:"!"? value:(WS* &"." @List / @Text) {
  return { type: 'data-cell', important, value }
}

// Terminals

_ = [ \t]*
__ = [ \t]+
NL = [\r\n]
WS = [ \t\r\n]
EOF = !.
