/*

Grammar:

document {
  statement* EOF
}

statement {
  header | section
}

header {
  text
}

section {
  important text NL section-content*
}

section-content {
  list | table
}

list {
  list-item*
}

list-item {
  . text
}

table {
  (table-header | table-row)+
}

table-header {
  "|" text
}

table-row {
  "|" text ":" text
}

table-cell {
  text
}

NL {
  \n
}

Sample Document:

header Notes for History 101 Test 1

section First section
  . foo . bar
  . bin

section Second section
  | Important Dates
  | 1492: Columbus sails the ocean blue
  | 1607: Jamestown, Virginia
  | Important People
  | Columbus: Explorer
  | Jamestown: Settler

*/

type Node = {
  type: string;
  value?: string;
  children?: Node[];
};

export class SchoolParser {
  private pos: number = 0;
  private input: string = '';
  private lines: string[] = [];
  private currentLine: number = 0;

  parse(input: string): Node {
    this.input = input;
    this.lines = input.split('\n').map((line) => line.trim());
    this.currentLine = 0;

    return this.parseDocument();
  }

  private parseDocument(): Node {
    const statements: Node[] = [];

    while (this.currentLine < this.lines.length) {
      const statement = this.parseStatement();
      if (statement) statements.push(statement);
    }

    return {
      type: 'document',
      children: statements,
    };
  }

  private parseStatement(): Node | null {
    const line = this.lines[this.currentLine];

    if (!line) {
      this.currentLine++;
      return null;
    }

    if (line.startsWith('section ')) {
      return this.parseSection();
    }

    // Assume it's a header if it's not a section
    return this.parseHeader();
  }

  private parseHeader(): Node {
    const line = this.lines[this.currentLine];
    this.currentLine++;

    return {
      type: 'header',
      value: line,
    };
  }

  private parseSection(): Node {
    const sectionLine = this.lines[this.currentLine];
    this.currentLine++;

    const content: Node[] = [];

    while (this.currentLine < this.lines.length) {
      const line = this.lines[this.currentLine];

      if (!line.startsWith('  ')) {
        break;
      }

      if (line.trim().startsWith('.')) {
        content.push(this.parseListItem());
      } else if (line.trim().startsWith('|')) {
        content.push(...this.parseTable());
      }
    }

    return {
      type: 'section',
      value: sectionLine.substring(8), // Remove "section " prefix
      children: content,
    };
  }

  private parseListItem(): Node {
    const line = this.lines[this.currentLine].trim();
    this.currentLine++;

    return {
      type: 'list-item',
      value: line.substring(2), // Remove ". " prefix
    };
  }

  private parseTable(): Node[] {
    const tableRows: Node[] = [];

    while (this.currentLine < this.lines.length) {
      const line = this.lines[this.currentLine].trim();

      if (!line.startsWith('|')) {
        break;
      }

      const content = line.substring(1).trim(); // Remove "| " prefix

      if (content.includes(':')) {
        // This is a table row
        const [key, value] = content.split(':').map((s) => s.trim());
        tableRows.push({
          type: 'table-row',
          children: [
            { type: 'table-cell', value: key },
            { type: 'table-cell', value: value },
          ],
        });
      } else {
        // This is a table header
        tableRows.push({
          type: 'table-header',
          value: content,
        });
      }

      this.currentLine++;
    }

    return tableRows;
  }
}
