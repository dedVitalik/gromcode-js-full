let sum = 0;
for (let i = 1; i <= 1000; i += 1) {
  sum += i;
}
let rest = sum % 1234;
let int = Math.floor(sum / 1234);
console.log(int > rest ? true : false);
