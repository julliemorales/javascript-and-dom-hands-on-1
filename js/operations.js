function getSum(arr) {
  return arr.reduce((total, arrayN) => total + arrayN, 0);
}

module.exports = { getSum };
