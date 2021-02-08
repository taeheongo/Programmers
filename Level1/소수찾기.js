function solution(n) {
  var answer = 0;

  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  for (let i = 1; Math.pow(numbers[i], 2) < n; i++) {
    let num = numbers[i];

    if (num) {
      for (let j = num * num; j <= n; j += num) {
        numbers[j - 1] = 0;
      }
    }
  }

  let primeNumbers = numbers.filter((n) => n);
  primeNumbers.shift();
  answer = primeNumbers.length;

  return answer;
}
