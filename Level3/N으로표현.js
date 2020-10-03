const solution = (N, number) => {
  const cache = [new Set()];

  for (let i = 1; i <= 8; i++) {
    cache.push(new Set([new Array(i).fill(N).join("") * 1]));

    for (let j = 1; j <= i; j++) {
      for (let x1 of [...cache[j]]) {
        for (let x2 of [...cache[i - j]]) {
          cache[i].add(x1 + x2);
          cache[i].add(x1 - x2);
          cache[i].add(x1 * x2);
          if (x2) {
            cache[i].add(x1 / x2 - ((x1 / x2) % 1));
          }
        }
      }
    }
    if (cache[i].has(number)) {
      return i;
    }
  }
  return -1;
};

console.log(solution(2, 22));
