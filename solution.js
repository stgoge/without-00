const solution = (zeroes, ones) => {
  const count = (lastSimbol, zeroCount, oneCount) => {
    if (zeroCount === 0) {
      return oneCount > 0 ? count(1, zeroCount, oneCount - 1) : 1;
    }
    if (oneCount === 0) {
      return lastSimbol === 1 ? count(0, zeroCount - 1, oneCount) : 0;
    }
    if (lastSimbol === 0) return count(1, zeroCount, oneCount - 1);
    return count(1, zeroCount, oneCount - 1) + count(0, zeroCount - 1, oneCount);
  };
  return count(null, zeroes, ones);
};
console.log(solution(2, 3));
