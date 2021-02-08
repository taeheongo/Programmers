function solution(s) {
  return s[0] === "-" ? parseInt(s.slice(1)) * -1 : parseInt(s);
}
