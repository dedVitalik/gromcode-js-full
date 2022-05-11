export default arr => {
    return arr.reduce((prev, cur) => {
        const currentRes = Math.pow(Math.abs(cur), 2);
        if (currentRes < prev) {
            return  currentRes
        } else {
            return prev
        }
    }, Math.pow(Math.abs(arr[0]), 2));
}