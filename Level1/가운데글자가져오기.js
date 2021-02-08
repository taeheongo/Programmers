function solution(s) {
  var answer = "";

  let mid = s.length / 2;

  answer = s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[Math.floor(mid)];

  return answer;
}
