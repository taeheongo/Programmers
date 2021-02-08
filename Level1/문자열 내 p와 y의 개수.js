function solution(s) {
  var answer = true;

  let pNum = 0,
    yNum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === "p") {
      pNum++;
    }
    if (s[i].toLowerCase() === "y") {
      yNum++;
    }
  }

  answer = pNum === yNum ? true : false;

  return answer;
}
