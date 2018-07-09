const solution = (zeroes, ones) => {
  const count = (lastSymbol, zeroCount, oneCount) => {
    if (zeroCount === 0) {
      return oneCount > 0 ? count(1, zeroCount, oneCount - 1) : 1;
    }
    if (oneCount === 0) {
      return lastSymbol === 1 ? count(0, zeroCount - 1, oneCount) : 0;
    }
    if (lastSymbol === 0) return count(1, zeroCount, oneCount - 1);
    return count(1, zeroCount, oneCount - 1) + count(0, zeroCount - 1, oneCount);
  };
  return count(null, zeroes, ones);
};
console.log(solution(2, 3));
