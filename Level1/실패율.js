function solution(N, stages) {
  let answer = [];
  stages.sort((a, b) => a - b);

  let map = new Map();
  for (let i = 0; i < N; i++) {
    map.set(i + 1, 0);
  }

  let count = 0;
  let total = 0;
  for (let i = 0; i < stages.length; i++) {
    let s = stages[i];
    if (s > N) {
      break;
    }

    count++;
    if (s !== stages[i + 1]) {
      map.set(s, count / (stages.length - total));
      total += count;
      count = 0;
    }
  }
  for (let key of map.keys()) {
    answer.push([key, map.get(key)]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((elem) => elem[0]);
}
