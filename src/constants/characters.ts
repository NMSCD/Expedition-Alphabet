export const alphabetCharacters = [
    { name: 'a', img: '/expedition-alphabet/assets/img/alphabet/a.svg' },
    { name: 'b', img: '/expedition-alphabet/assets/img/alphabet/b.svg' },
    { name: 'c', img: '/expedition-alphabet/assets/img/alphabet/c.svg' },
    { name: 'd', img: '/expedition-alphabet/assets/img/alphabet/d.svg' },
    { name: 'e', img: '/expedition-alphabet/assets/img/alphabet/e.svg' },
    { name: 'f', img: '/expedition-alphabet/assets/img/alphabet/f.svg' },
    { name: 'g', img: '/expedition-alphabet/assets/img/alphabet/g.svg' },
    { name: 'h', img: '/expedition-alphabet/assets/img/alphabet/h.svg' },
    { name: 'i', img: '/expedition-alphabet/assets/img/alphabet/i.svg' },
    { name: 'j', img: '/expedition-alphabet/assets/img/alphabet/j.svg' },
    { name: 'k', img: '/expedition-alphabet/assets/img/alphabet/k.svg' },
    { name: 'l', img: '/expedition-alphabet/assets/img/alphabet/l.svg' },
    { name: 'm', img: '/expedition-alphabet/assets/img/alphabet/m.svg' },
    { name: 'n', img: '/expedition-alphabet/assets/img/alphabet/n.svg' },
    { name: 'o', img: '/expedition-alphabet/assets/img/alphabet/o.svg' },
    { name: 'p', img: '/expedition-alphabet/assets/img/alphabet/p.svg' },
    { name: 'q', img: '/expedition-alphabet/assets/img/alphabet/q.svg' },
    { name: 'r', img: '/expedition-alphabet/assets/img/alphabet/r.svg' },
    { name: 's', img: '/expedition-alphabet/assets/img/alphabet/s.svg' },
    { name: 't', img: '/expedition-alphabet/assets/img/alphabet/t.svg' },
    { name: 'u', img: '/expedition-alphabet/assets/img/alphabet/u.svg' },
    { name: 'v', img: '/expedition-alphabet/assets/img/alphabet/v.svg' },
    { name: 'w', img: '/expedition-alphabet/assets/img/alphabet/w.svg' },
    { name: 'x', img: '/expedition-alphabet/assets/img/alphabet/x.svg' },
    { name: 'y', img: '/expedition-alphabet/assets/img/alphabet/y.svg' },
    { name: 'z', img: '/expedition-alphabet/assets/img/alphabet/z.svg' },
    { name: '0', img: '/expedition-alphabet/assets/img/alphabet/0.svg' },
    { name: '1', img: '/expedition-alphabet/assets/img/alphabet/1.svg' },
    { name: '2', img: '/expedition-alphabet/assets/img/alphabet/2.svg' },
    { name: '3', img: '/expedition-alphabet/assets/img/alphabet/3.svg' },
    { name: '4', img: '/expedition-alphabet/assets/img/alphabet/4.svg' },
    { name: '5', img: '/expedition-alphabet/assets/img/alphabet/5.svg' },
    { name: '6', img: '/expedition-alphabet/assets/img/alphabet/6.svg' },
    { name: '7', img: '/expedition-alphabet/assets/img/alphabet/7.svg' },
    { name: '8', img: '/expedition-alphabet/assets/img/alphabet/8.svg' },
    { name: '9', img: '/expedition-alphabet/assets/img/alphabet/9.svg' },
    { name: '.', display: 'Period', img: '/expedition-alphabet/assets/img/alphabet/period.svg' },
    { name: ':', display: 'Colon', img: '/expedition-alphabet/assets/img/alphabet/colon.svg' },
    { name: ' ', display: 'Space', img: '/expedition-alphabet/assets/img/alphabet/space.svg' },
    { name: '🥩', display: '?', unknown: true, img: '/expedition-alphabet/assets/img/alphabet/unknown1.svg' },
    { name: '🥐', display: '?', unknown: true, img: '/expedition-alphabet/assets/img/alphabet/unknown2.svg' },
];

export const additionalAlphabetCharacters = {
    space: { name: 'Space', img: '/expedition-alphabet/assets/img/alphabet/space.svg' },
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