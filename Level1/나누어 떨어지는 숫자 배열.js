function solution(arr, divisor) {
  var answer = [];

  arr.forEach((val) => {
    if (!(val % divisor)) {
      answer.push(val);
    }
  });

  answer.sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}
