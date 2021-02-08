function solution(n) {
  var answer = 0;

  n = `${n}`;
  let numbers = [];
  for (let i = 0; i < n.length; i++) {
    numbers.push(n[i]);
  }

  const callback = (a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  };

  numbers.sort(callback);

  answer = Number(numbers.join(""));

  return answer;
}
