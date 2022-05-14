import {reverseArray, withdraw, getAdults} from "./previoustasks.js";

// tests for reverseArray function

it('should return an reversed array', function () {
    const res = reverseArray([1, 2, 3]);
    expect(res).toEqual([3, 2, 1]);
});

it('should return null (if the entered variable is not an array)', function () {
    const res = reverseArray('notArray');
    expect(res).toEqual(null);
});

it('should check the reversed array if there are not only numbers in the array', function () {
    const res = reverseArray([1, 2, 'a']);
    expect(res).toEqual(['a', 2, 1]);
});

// tests for withdraw function

it('should correctly defines the result if the balance is enough', function () {
    const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
    expect(res).toEqual(37);
});

it('should return -1 if the balance is not enough', function () {
    const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
    expect(res).toEqual(-1);
});

it('should not mutate the original array', function () {
    const incomeBalances = [1400, 87, -6];
    const res = withdraw(['Ann', 'John', 'User'], incomeBalances, 'John', 50);
    expect(incomeBalances).toEqual([1400, 87, -6]);
});

// tests for getAdults function

it('should return only people over 18 years old is case where the keys in the object are with quotation marks', function () {
    const res = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(res).toEqual({ 'John Doe': 19, Bob: 18 })
});

it('should return only people over 18 years old is case where the keys in the object are without quotation marks', function () {
    const res = getAdults({ Ann: 56, Andrey: 7 });
    expect(res).toEqual({ Ann: 56 });
});

it('should return an empty object if there are no people over 18', function () {
    const res = getAdults({ Ann: 6, Andrey: 7 });
    expect(res).toEqual({});
}); 