const digitToName = [
    { digit: '.', name: 'period' },
    { digit: ':', name: 'colon' },
]

export const mapFromDigitToName = (digit: string) => {
    for (const mapping of digitToName) {
        if (mapping.digit === digit) return mapping.name;
    }
    return digit;
}

export const mapFromNameToDigit = (name: string) => {
    for (const mapping of digitToName) {
        if (mapping.name === name) return mapping.digit;
    }
    return name;
}