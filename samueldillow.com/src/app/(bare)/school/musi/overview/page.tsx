import SchoolNotes from '@/components/school-notes';

export default function Page() {
  return (
    <SchoolNotes
      data={`
header Music Appreciation - The Renaissance (III) (93)

section Characteristics of Renaissance (95)
  | renaissance : rebirth
  | humanism : human life & accomplishments
  | education : status symbol
  | printing : abundant books
  | texture : polyphonic, 4 octaves
  | instruments : voices only, sparse instruments
  | rhythm : independent

section Josquin Deprez (100) [1440 CE]
  | Ave Maria :
    . voices: 4
    . type: motet (choral)
    . venue: choral (church)
    . texture: polyphonic imitation

section Giovanni Pierluigi da Palestrina (102)
  | Kyrie :
    . voices: 6, soprano, alto, tenor, bass
    . instruments: none
    . texture: polyphonic imitation (joined at end)
    . function: mass
    . dynamics: mezzo forte
    . language: latin
    . period: renaissance
    . notes: A lead introduces the piece, imitated by others. Two voices seem to combat each other, fighting for first place, while still not overcoming the lead. All the voices join in harmony on the same chord at the end of each verse. A pause between each verse both allows the singers to recover from sustaining such a long chorus and allows the congregation to focus attention on the upcoming verse

section Thomas Weelkes (106)
  | As Vesta Was Descending :
    . voices: male and female
    . instruments: none
    . texture: polyphonic, imitation, almost homophonic
    . dynamics: mezzo forte
    . function: madrigal, performance of a poem
    . language: English
    . period: renaissance
    . other: word painting

section John Dowland (107)
  | Flow My Tears :
    . voices: one male voice
    . instruments: one lute
    . texture: homophonic
    . dynamics: piano, mezzo piano
    . function: music for a poem (madrigal)
    . period: renaissance
    . language: English
    . notes: This soft piece was sung by a lead male with a lute accompaniment. The lute was so quiet, it was almost unnoticeable at times -- though it did have a moment where it was almost polyphonic. The piece used two-note stepwise intervals and a paired meter to sound like a human crying. The song was primarily in the minor key, but verse B began in a major key. While it's possible this was done to break up the piece, it's interesting that just as a low-high-low note sounds like a human sobbing, a minor-major-minor verse progression could have the same effect. The John Downland seems to really like pairs in this song. Just as notes are paired, the verses are also repeated, AA, BB, CC. This piece would have been performed as an act, or a part of a show. Perhaps as chamber music. This piece was written in the Renaissance period, and reflects the heightened sense of dismay that was prevalent in the culture at the time

section Pierre Fransisque Caroubel (110)
  | Passamezzo :
    . voices: none
    . instruments: violin, lute
    . texture: polyphonic
    . dynamics: mezzo forte
    . function: dance
    . period: renaissance
    . tempo: slow
    . language: none
  | Galliard :
    . voices: none
    . instruments: lute, violin, viola
    . texture: polyphonic
    . dynamics: mezzo piano
    . function: dance
    . tempo: fast
    . period: renaissance
    . language: none

section Giovanni Gabrieli (112)
  | Plaudite :
    . voices: males + females chorus
    . instruments: cornet, organ
    . texture: polyphonic
    . genre: polychoral motet
    . dynamics: mezzo piano, mezzo forte
    . period: renaissance
    . language: latin
    `}
    />
  );
}
