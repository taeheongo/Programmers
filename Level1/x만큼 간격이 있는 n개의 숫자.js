function solution(x, n) {
  var answer = [];

  let count = 0;
  while (count < n) {
    answer.push(x * (count + 1));
    count++;
  }

  return answer;
}
