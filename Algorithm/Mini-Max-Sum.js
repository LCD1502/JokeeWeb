const inputList = [
  [1, 2, 3, 4, 5],
  [1, 3, 5, 7, 9],
  [1, 12, 56, 34, 45],
];

let sum = 0;
let min = 0;
let max = 0;
let evenArr = [];
let oddArr = [];
let minSum = 0;
let maxSum = 0;

function miniMaxSum(arr) {
  arr.forEach((element, i) => {
    if (i === 0) {
      min = element;
      max = element;
    } else {
      if (element < min) min = element;
      if (element > max) max = element;
    }
    sum += element;
    if (element % 2 === 0) evenArr.push(element);
    else oddArr.push(element);
  });
}

inputList.forEach((element) => {
  sum = 0;
  min = 0;
  max = 0;
  evenArr = [];
  oddArr = [];
  minSum = 0;
  maxSum = 0;

  console.log("-----------------");
  miniMaxSum(element);
  minSum = sum - max;
  maxSum = sum - min;
  console.log(minSum + " " + maxSum);

  // Bonus
  console.log("Total of array: ", sum);
  console.log("Min: " + min + ", Max: " + max);
  console.log("even elements: " + evenArr);
  console.log("odd elements: " + oddArr);
});
