function solution(d, budget) {
  var answer = 0;

  while (d.length) {
    let min = d[0];
    let index = 0;
    d.forEach((val, i) => {
      if (min > val) {
        min = val;
        index = i;
      }
    });

    if (budget < min) {
      break;
    }

    budget -= d[index];
    answer++;
    d.splice(index, 1);
  }

  return answer;
}
