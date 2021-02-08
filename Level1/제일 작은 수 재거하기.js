function solution(arr) {
  let min = arr.reduce((ac, cur) => (ac > cur ? cur : ac));
  let answer = arr.filter((num) => num !== min);

  return answer.length ? answer : [-1];
}
