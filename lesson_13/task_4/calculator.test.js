import {calc} from "./calculator.js";

it('should calculate from string', function () {
    const resOfAdding = calc('1 + 2');
    expect(resOfAdding).toEqual('1 + 2 = 3');
    const resOfSubtraction = calc('3 - 1');
    expect(resOfSubtraction).toEqual('3 - 1 = 2');
    const resOfDividing = calc('6 / 3');
    expect(resOfDividing).toEqual('6 / 3 = 2');
    const resOfMult = calc('3 * 2');
    expect(resOfMult).toEqual('3 * 2 = 6');
    const resOfNotString = calc(3);
    expect(resOfNotString).toEqual(null);

});