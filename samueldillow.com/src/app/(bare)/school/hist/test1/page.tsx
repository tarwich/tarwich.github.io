import PrinterPaper from '@/components/printer-paper';
import { parse as parseSchool } from '@/lib/school.peg.js';
import { cn } from '@/lib/utils';
import { ComponentProps, Fragment } from 'react';

const metadata = {
  topic: 'History',
  section: 'Test 1',
};

export default function Page() {
  const sections = getData();

  return (
    <PrinterPaper className="p-4 flex flex-col gap-4">
      <title>
        {metadata.topic} - {metadata.section}
      </title>

      <h1
        className={cn(
          'text-capitalize flex flex-row items-center justify-between',
          'font-bold text-2xl'
        )}
      >
        {metadata.topic}
        <small className="text-sm text-gray-500">{metadata.section}</small>
      </h1>

      <div className="flex flex-col gap-4">
        {sections.map((section, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-between">
                {/* Title */}
                <h2 className="text-lg font-bold first-letter:uppercase">
                  {section.title}
                </h2>
                <div className="flex flex-row gap-2">
                  {/* Page */}
                  <PageNumber>{section.page}</PageNumber>

                  {/* Year */}
                  <Year>{section.year}</Year>
                </div>
              </div>

              {/* Note-list */}
              {section.notes?.type === 'note-list' && (
                <NoteList notes={section.notes.value} />
              )}
              {/* Note-block */}
              {section.notes?.type === 'note-block' && (
                <NoteBlock notes={section.notes.notes} />
              )}
            </div>
          );
        })}
      </div>
    </PrinterPaper>
  );
}

const PageNumber = (props: ComponentProps<'small'>) => {
  return (
    <small
      className="text-sm bg-blue-200 px-2 rounded-full empty:hidden"
      {...props}
    />
  );
};

const Year = (props: ComponentProps<'small'>) => {
  return (
    <small
      className="text-sm border border-gray-500 px-1 rounded-md empty:hidden"
      {...props}
    />
  );
};

const NoteList = ({ notes }: { notes: string[] }) => {
  return (
    <ul className="block">
      {notes.map((note, index) => (
        <li
          key={index}
          className="before:content-['•'] before:text-gray-500 before:mr-2 inline mr-2"
        >
          {note}
        </li>
      ))}
    </ul>
  );
};

const NoteBlock = ({ notes }: { notes: INoteBlock['notes'] }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
      {notes.map((note, index) => (
        <Fragment key={index}>
          {/* Key */}
          <div
            key={`key-${index}`}
            className="bg-gray-100 px-2 py-1 rounded text-gray-600 first-letter:uppercase"
          >
            {note.key}
          </div>

          {/* Value */}
          <div key={`value-${index}`} className="flex items-center gap-2">
            <NoteList notes={note.value} />

            {/* Page */}
            <PageNumber>{note.page}</PageNumber>

            {/* Year */}
            <Year>{note.year}</Year>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

type INoteList = {
  type: 'note-list';
  value: string[];
};

type INoteBlock = {
  type: 'note-block';
  notes: {
    key: string;
    value: string[];
    page?: number;
    year?: number;
  }[];
};

type ISection = {
  type: 'section';
  title: string;
  notes?: INoteList | INoteBlock;
  page?: number;
  year?: number;
};

type ISchool = ISection[];

const getData = () => {
  return parseSchool(
    `
section /star/ Prince Henry Navigator (31) [1455]
  notes caravel. lateen. sugar. West Africa. Portuguese
section Columbus (33) [1492]
  notes earth 28000 miles
section Puritans (43)
  notes
    Queen Elizabeth I: defender of Protestantism [1553]
    Puritans: label from opponents
    predestination: core belief
    Gilbert, Raleigh: notable (44) [1578]
    Roanoke: first settlement. failed (1584)
    denominations: Presbyterians. Congregationalists
    Massachusetts Bay: Salem. John Winthrop (1629)
    John Winthrop: city on hill. wilderness errand (87) [1630]
    healthy: food. natural increase
    slave state: no
    Roger Williams: church and state. fled. Rhode Island (91) [1631]
section Sir Walter Raleigh (44) [1584]
  notes
    Gilbert: stepbrother. ship sunk
    colony: Virginia. destroyed by Wingina
    rescued: Sir Francis Drake
    second Roanoke: "CROATOAN". lost colony
section mercantilism (57)
  notes trade only with England. trade on English ships (captain + 3/4 crew). income must exceed expense.
section Virginia Company (59) [1606]
  notes
    founded Jamestown: private company
    later dissolved: by King. royal colony
    indentured servants: 4-7 years. 40% fatality rate
section Declaratory Act (143, 155) [1766]
  notes
    Stamp Act: repealed
    Parliment: power to make law in all cases
section Jamestown (59) [1607]
  notes
    agriculture: cash crops (tobacco)
    government: martial law
    slave state: originally indentured, later slave
    loss: 90%. only sustained through ingress
    John Smith: work not, eat not
    Powhatan: Pocahontas. John Rolfe (52) [1614]
section Anne Hutchinson (91) [1634]
  notes
    problem: expanded on John Cotton's sermons
    expelled: to Rhode Island
    killed: by Indians in Long Island [1638]
section !John Elliot (94) [1640]
  notes
    translated bible: Algonquian (Massachusetts)
    Harvard College: for educating English &amp; Indian youth
section Quakers (96) [1670]
  notes
    aka: Society of Friends
    John Woolman: Quaker. New Jersey. New England [1720]
    Inner Light: 100% equality. no harm
section Bacon Rebellion (62) [1676]
  notes
    Indians: no protection
    trade: Berkeley monopoly
    died: of dissentary
section !Benjamin Lay (N/A) [1682]
  notes
    anti-slavery: Quaker. winter protest
section Lord Cornbury (N/A) [1696]
  notes parliment = Queene Mary (&amp; William). sent to colonies. cross-dresser
section !House of Burgesses (141) [1765]
  notes Patrick Henry uneducated. demagogue. right to tax held by representatives
section Townshend Acts (143) [1767]
  notes tax = lead, paint, paper, glass, tea. troops = seaports. quartering. salaries = for officials
section Great Awakening (123) [1730]
  notes George Whitfield pew rent. New Lights Old Lights
section !John Peter Zenger (N/A) [1733]
  notes printer = New York Weekly Journal. libel
section !Albany Congress (133,150) [1755]
  notes 7 years war. Benjamin Franklin. weak noodles
section Boston Massacre (145) [1770]
  notes organizer = Samuel Adams. actions = taunted, snowballs. Samuel Adams possibly yelled "Fire!". loss: 5 killed, 11 injured. John Adams defended Cap. of Guard
section Committees of Correspondence (147) [1773]
  notes communication between colonies
section Boston Tea Party (145) [1773]
  notes disguised as Indians (showed "Americanism"). organizer = Samuel Adams. loss = 90,000 LBS tea &#8776; 10,000 sterling
section Intolerable Acts (149) [1774]
  notes aka = Coercive Acts. close Bostom Harbor until King ok. tea repaid. later rules. Massachusetts govt. = w\\royal. Impartial Administration of Justice Act = trials in England or other colonies. Quartering Act
section !Lexington (151) [1775]
  notes Paul Revere. Concord magazine
section Lord Dunmore's Proclamation (173) [1775]
  notes freedom for blacks in military
section Bunker Hill (158) [1775]
  notes aka = Breed Hill. Thomas Gage vs William Prescott. strategy = shelling followed by raid. conclusion = inconclusive, Americans will fight
section Benedict Arnold (167,175) [1776]
  notes Saratoga. later traitor
section Benjamin Franklin (167) [1776]
  notes France. homespun
section !Monmouth Courthouse (169) [1778]
  notes Baron von Steuben. never lost a battle since. Molly Pitcher
section !Cowpens (172) [1781]
  notes split = Greene + Morgan. British = Cornwallis + Tarleton
section Yorktown (175) [1781]
  notes Treaty of Paris. USA assumes debt. Virginia = home of George Washington
section George III (N/A) [1760]
  notes patriotic. bi-lingual
section King Phillips War (93)
section letters of marque (N/A)
section mechanical courage
section Navigation Acts (60,98)
section New Lights, Old Lights
section Pitt (133)
section Salutory Neglect (126)
section Saratoga (167)
section Sons of Liberty (142,144)
section Stamp Act (140)
section Stono Rebillion (122,128)
section terms of indenture (59)
section The Middle Passage (65)
section Thomas Paine (152)
section Virtual Representation (142)

section !deference submission. passivity
section !Gullah Speech (N/A)
section headrights (N/A)
section mourning war (N/A)
section privateers (N/A)
`.trim()
  ) as ISchool;
};
