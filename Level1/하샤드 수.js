function solution(x) {
  let sum = 0;
  for (let i = 0; i < `${x}`.length; i++) {
    sum += Number(`${x}`[i]);
  }

  return x % sum === 0 ? true : false;
}
