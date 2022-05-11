const getSquaredArray = arr => {
    return arr.map(el => el * el)
}

const getOddNumbers = (arr) => {
    return arr.filter(el => el % 2 !== 0)
}

export default (a, b) => {
    return a + b;
}

export {getSquaredArray, getOddNumbers}