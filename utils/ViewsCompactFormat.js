export function ViewCompactFormat(number) {
    const nf = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
        roundingIncrement: 5,
    });
    return nf.format(number);
}
