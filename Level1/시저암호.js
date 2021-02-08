function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
      continue;
    }

    let utf = s[i].charCodeAt();

    console.log(utf);
    if (utf >= 65 && utf < 97) {
      answer += String.fromCharCode(65 + ((utf - 65 + n) % 26));
    } else {
      answer += String.fromCharCode(97 + ((utf - 97 + n) % 26));
    }
  }

  return answer;
}
