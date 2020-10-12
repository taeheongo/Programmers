function solution(brown, yellow) {
  var answer = [];

  let x = yellow;
  let y = 1;
  while (x >= y) {
    if (yellow / x === y && brown === (x + 2) * 2 + 2 * y) {
      answer = [x + 2, y + 2];
      break;
    }
    x--;
    y = yellow / x;
  }

  return answer;
}
