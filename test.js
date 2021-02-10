function solution(n, m) {
  var answer = 0;

  let i = 1;
  let tmp = n;
  n = Math.max(n, m);
  m = Math.min(tmp, m);

  let max, min;

  while (true) {
    if (!((n * i) % m)) {
      min = n * i;
      break;
    }
    i++;
  }

  i = m;
  while (i) {
    if (!(m % i) && !(n % i)) {
      max = i;
      break;
    }

    i--;
  }

  answer = [max, min];

  return answer;
}

console.log(solution(2, 5));
