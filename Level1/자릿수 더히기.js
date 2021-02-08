function solution(n) {
  let answer = 0,
    i = 0;
  n = `${n}`;
  while (i < n.length) {
    answer += Number(n[i]);
    i++;
  }

  return answer;
}
