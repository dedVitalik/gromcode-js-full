it('should show that 17 = 17', () => {
    expect(17).toEqual(17);
});

it('should show that 18 isn\'t 17', () => {
    expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => {
    return arr.filter(number => number % 2 === 0);
}

it('should ', function () {
    const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([2, 4, 6]);
});