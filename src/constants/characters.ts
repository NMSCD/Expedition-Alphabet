export interface IAlphabetCharacters {
    display?: string;
    unknown?: boolean;
    name: string;
    img: string;
}

export const alphabetCharacters: Array<IAlphabetCharacters> = [
    { name: 'a', img: '/assets/img/alphabet/a.svg' },
    { name: 'b', img: '/assets/img/alphabet/b.svg' },
    { name: 'c', img: '/assets/img/alphabet/c.svg' },
    { name: 'd', img: '/assets/img/alphabet/d.svg' },
    { name: 'e', img: '/assets/img/alphabet/e.svg' },
    { name: 'f', img: '/assets/img/alphabet/f.svg' },
    { name: 'g', img: '/assets/img/alphabet/g.svg' },
    { name: 'h', img: '/assets/img/alphabet/h.svg' },
    { name: 'i', img: '/assets/img/alphabet/i.svg' },
    { name: 'j', img: '/assets/img/alphabet/j.svg' },
    { name: 'k', img: '/assets/img/alphabet/k.svg' },
    { name: 'l', img: '/assets/img/alphabet/l.svg' },
    { name: 'm', img: '/assets/img/alphabet/m.svg' },
    { name: 'n', img: '/assets/img/alphabet/n.svg' },
    { name: 'o', img: '/assets/img/alphabet/o.svg' },
    { name: 'p', img: '/assets/img/alphabet/p.svg' },
    { name: 'q', img: '/assets/img/alphabet/q.svg' },
    { name: 'r', img: '/assets/img/alphabet/r.svg' },
    { name: 's', img: '/assets/img/alphabet/s.svg' },
    { name: 't', img: '/assets/img/alphabet/t.svg' },
    { name: 'u', img: '/assets/img/alphabet/u.svg' },
    { name: 'v', img: '/assets/img/alphabet/v.svg' },
    { name: 'w', img: '/assets/img/alphabet/w.svg' },
    { name: 'x', img: '/assets/img/alphabet/x.svg' },
    { name: 'y', img: '/assets/img/alphabet/y.svg' },
    { name: 'z', img: '/assets/img/alphabet/z.svg' },
    { name: '0', img: '/assets/img/alphabet/0.svg' },
    { name: '1', img: '/assets/img/alphabet/1.svg' },
    { name: '2', img: '/assets/img/alphabet/2.svg' },
    { name: '3', img: '/assets/img/alphabet/3.svg' },
    { name: '4', img: '/assets/img/alphabet/4.svg' },
    { name: '5', img: '/assets/img/alphabet/5.svg' },
    { name: '6', img: '/assets/img/alphabet/6.svg' },
    { name: '7', img: '/assets/img/alphabet/7.svg' },
    { name: '8', img: '/assets/img/alphabet/8.svg' },
    { name: '9', img: '/assets/img/alphabet/9.svg' },
    { name: '.', display: 'Period', img: '/assets/img/alphabet/period.svg' },
    { name: ':', display: 'Colon', img: '/assets/img/alphabet/colon.svg' },
    { name: ' ', display: 'Space', img: '/assets/img/alphabet/space.svg' },
    { name: '🥩', display: '?', unknown: true, img: '/assets/img/alphabet/unknown1.svg' },
    { name: '🥐', display: '?', unknown: true, img: '/assets/img/alphabet/unknown2.svg' },
];

export const additionalAlphabetCharacters = {
    space: { name: 'Space', img: '/assets/img/alphabet/space.svg' },
};

const keyLayouts = {
    other: ['.', ':', ' ', '🥩', '🥐'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    alphabetical: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    qwerty: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    dvorak: [',', '.', 'p', 'y', 'f', 'g', 'c', 'r', 'l', '?', 'a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's', 'q', 'j', 'k', 'x', 'b', 'm', 'w', 'v', 'z'],
}

export const keyboardDropdownOpts = [
    {
        id: 'alphabet',
        name: 'Alphabetical',
        layout: [...keyLayouts.alphabetical, ...keyLayouts.numbers, ...keyLayouts.other],
    },
    {
        id: 'qwerty',
        name: 'QWERTY',
        layout: [...keyLayouts.qwerty, ...keyLayouts.numbers, ...keyLayouts.other],
    },
    {
        id: 'dvorak',
        name: 'DVORAK',
        layout: [...keyLayouts.dvorak, ...keyLayouts.numbers, ...keyLayouts.other],
    },
]