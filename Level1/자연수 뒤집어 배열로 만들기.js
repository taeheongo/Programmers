function solution(n) {
  let answer = [];
  n = `${n}`;
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }

  return answer;
}
