export default arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce((prev, cur) => {
        const currentRes = Math.pow(Math.abs(cur), 2);
        return currentRes < prev ? currentRes : prev;
    }, Math.pow(Math.abs(arr[0]), 2));
}