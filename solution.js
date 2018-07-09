const solution = (zeroes, ones) => {
while
  let stack = [{
    zeroesCount: zeroes,
    onesCount: ones,
    lastSymbol: null,
  }];

  let counter = 0;

  while (stack.length > 0) {
    let currentNode = stack.pop();
    while (currentNode) {
      if (currentNode.onesCount === 0) {
        if (currentNode.zeroesCount === 0) {
          counter += 1;
          currentNode = null;
        } else if (currentNode.lastSymbol === 0) {
          currentNode = null;
        } else {
          currentNode = {
            zeroesCount: currentNode.zeroesCount - 1,
            onesCount: currentNode.onesCount,
            lastSymbol: 0,
          };
        }
      } else {
        if (currentNode.zeroesCount > 0 && currentNode.lastSymbol !== 0) {
          stack.push({
            zeroesCount: currentNode.zeroesCount - 1,
            onesCount: currentNode.onesCount,
            lastSymbol: 0,
          });
        }
        currentNode = {
          zeroesCount: currentNode.zeroesCount,
          onesCount: currentNode.onesCount - 1,
          lastSymbol: 1,
        };
      }
    }
  }
  return counter;
};
console.log(solution(5, 9000));
