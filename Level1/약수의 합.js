function solution(n) {
  var answer = 0;

  let num = 1;
  while (num <= n) {
    if (n % num === 0) {
      answer += num;
    }
    num++;
  }

  return answer;
}
