// const tempArr = [1, 4, 6, 11, 45, 16, 56, 307, -4, 23];
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
  const inputArr = [
    parseInt(document.getElementById("input1").value),
    parseInt(document.getElementById("input2").value),
    parseInt(document.getElementById("input3").value),
    parseInt(document.getElementById("input4").value),
    parseInt(document.getElementById("input5").value),
    parseInt(document.getElementById("input6").value),
    parseInt(document.getElementById("input7").value),
    parseInt(document.getElementById("input8").value),
    parseInt(document.getElementById("input9").value),
    parseInt(document.getElementById("input10").value),
  ];
  // if (inputArr.length < 10) {
  //   alert("Please fill out all the fields.");
  //   return;
  // }
  console.log("A. The Sum of Element: ", getSum(inputArr));
  console.log("B. Sort By Desc: ", getSortDesc(inputArr));
  console.log("C. Greatest Number is: ", getMax(inputArr));
  console.log("D. The Average of Element: ", getAverage(inputArr));
  getOddEven(inputArr);
  console.log("F. Missing numbers: ", getMissing(inputArr));
});

function getSum(arr) {
  return arr.reduce((prevTotal, item) => prevTotal + item, 0);
}

function getSortDesc(arr) {
  return arr.sort((a, b) => a - b).reverse();
}

function getMax(arr) {
  return Math.max(...arr);
}

function getAverage(arr) {
  return (getSum(arr) / arr.length).toFixed(1);
}

function getOddEven(arr) {
  console.log("E. Check Odd or Even ");
  const descArr = getSortDesc(arr);
  descArr.forEach((item) => {
    if (item % 2 !== 0) {
      console.log(item, "Odd");
    } else console.log(item, "Even");
  });
}

function getMissing(arr) {
  const tempArr = [Number(0), 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return tempArr.filter((item, index) =>
    !arr.includes(index) ? Number.isFinite(item) : false
  );
}

// Requirement 2

const submitButtonTwo = document.getElementById("submitTwo");

submitButtonTwo.addEventListener("click", function () {
  const inputString = document.getElementById("inputReqTwo").value;
  const tempInput = "test 1 and 0";

  console.log("A. Display string of array: ", getStringArr(inputString));
  console.log("B. Total Number of Character: ", getTotalChar(inputString));
  console.log("Total Number of Number: ", getTotalNum(inputString));
  console.log("Total Number of Non-Number: ", getTotalNonNum(inputString));
  getReverse(inputString);
  console.log("D. Given String: ", getReverseOrder(inputString));
  console.log("E. Add every character by 1: ", getIncrement(inputString));
  console.log("F. ", getUpperCase(inputString));
  console.log("G. ", getLowerCase(inputString));
  console.log("H. String Length: ", getStringLength(inputString));
  console.log("Number of UpperCase: ", getUpperCaseNum(inputString));
  console.log("Number of Lowercase: ", getLowerCaseNum(inputString));
  console.log("Number of NonAlphabet: ", getTotalNonAlph(inputString));
  getChar(inputString);
  console.log("J. Removed the First Value: ", getFirstValRemoved(inputString));
  console.log("K. Replace a to $: ");
  console.log(inputString);
  console.log(getReplaced(inputString));
  console.log("L. String Value: ", inputString);
  getCopy(inputString);
});

function getStringArr(input) {
  return input.split(" ");
}

function getTotalChar(input) {
  return input.split(" ").join("").length;
}

function getTotalNum(input) {
  return input.replace(/[^0-9]/g, "").length;
}

function getTotalNonNum(input) {
  return input.replace(/[^a-z]/gi, "").length;
}

function getReverse(input) {
  const splitArr = input.split(" ");
  console.log("C. Display every element in reverse:");
  splitArr.forEach((item) => {
    console.log(item.split("").reverse().join(""));
  });
}

function getReverseOrder(input) {
  return input.split("").reverse().join("");
}

function getIncrement(input) {
  const splitArr = input.split("");
  const newArr = [];
  splitArr.forEach((item) => {
    newArr.push(String.fromCharCode(item.charCodeAt(0) + 1));
  });
  return newArr.join("");
}

function getUpperCase(input) {
  return input.toUpperCase();
}

function getLowerCase(input) {
  return input.toLowerCase();
}

function getStringLength(input) {
  return input.split("").join("").length;
}

function getUpperCaseNum(input) {
  return (input.match(/[A-Z]/g) || []).length;
}

function getLowerCaseNum(input) {
  return (input.match(/[a-z]/g) || []).length;
}

function getTotalNonAlph(input) {
  const spaceLength = input.split(" ").length - 1;
  return input.replace(/[^0-9]/g, "").length + spaceLength;
}

function getChar(input) {
  const splitArr = input.split("");
  console.log("I. Printing now per Character!: ");
  splitArr.forEach((item) => {
    console.log(item);
  });
}

function getFirstValRemoved(input) {
  return input.split("").slice(1).join("");
}

function getReplaced(input) {
  return input.replace("a", "$");
}

function getCopy(input) {
  const str = input;
  const new_str = str.slice();

  console.log("String After copied: ", new_str);
}
