import minSqModuleOfArray from './getMinSquaredNumbers.js';

it('should ', function () {
    const resIfArray = minSqModuleOfArray([-777, 3, -2, 6, 45, -20]);
    expect(resIfArray).toEqual(4);
    const resIfNullLength = minSqModuleOfArray([]);
    expect (resIfNullLength).toEqual(null);
    const resIfNotArray = minSqModuleOfArray('str');
    expect (resIfNotArray).toEqual(null);
});

