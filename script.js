



























































































const arr = [
  '1234567890',
  '234567890',
  '34567890',
  '4567890',
  '567890',
  '67890',
  '7890',
];

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (num[0] == '2' || num[0] == '4') {
    console.log(num);
  }
}

const simpleNum = function () {
  for (let i = 2; i < 101; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      console.log(i, `Делители этого числа: 1 и ${i}`);
    } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      continue;
    } else if (i % i === 0) {
      console.log(i, `Делители этого числа: 1 и ${i}`);
    }
  }
};

simpleNum();
