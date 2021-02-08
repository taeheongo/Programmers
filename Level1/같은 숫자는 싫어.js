// reduce를 이용한 풀이
function solution(arr) {
  var answer = [];

  if (!arr.length) {
    return [];
  }

  answer.push(arr[0]);
  arr.reduce((ac, cur, i) => {
    if (ac !== cur) {
      answer.push(cur);
    }
    return cur;
  });

  return answer;
}

// filter를 이용한 풀이
function solution(arr) {
  return arr.filter((val, index) => val !== arr[index + 1]);
}
