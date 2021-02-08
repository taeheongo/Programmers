function solution(a, b) {
  var answer = 0;

  if (a > b) {
    let temp = 0;
    temp = b;
    b = a;
    a = temp;
  }

  while (a <= b) {
    answer += a;
    a++;
  }

  return answer;
}
