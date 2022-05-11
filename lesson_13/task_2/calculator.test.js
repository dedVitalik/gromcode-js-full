import getSum, {getSquaredArray, getOddNumbers} from "./calculator.js";


it('should return squred elements of array in array',
    () => {
        const result = getSquaredArray([1, 2, 3]);
        expect(result).toEqual([1, 4, 9]);
    });

it('should ', function () {
    const res = getOddNumbers([1, 2, 3, 4, 5]);
    expect(res).toEqual([1, 3, 5]);
});

it('should ', function () {
    const res = getSum(1, 2);
    expect(res).toEqual(3);
});