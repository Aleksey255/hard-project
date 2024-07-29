const num = 266219

let initNum = 1

const numbers = num.toString().split('')

for ( const number of numbers) {
  initNum *= number
}

let nums = initNum**3

console.log(nums.toString().substring(0,2));

