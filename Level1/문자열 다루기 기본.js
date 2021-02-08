function solution(s) {
  var answer = true;

  answer = (s.length === 4 || s.length === 6) && !/[^0-9]/g.test(s);

  return answer;
}
