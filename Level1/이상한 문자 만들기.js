function solution(s) {
  var answer = "";

  let words = s.matchAll(/\w+/g);

  let end = 0;
  for (let word of words) {
    let count = word["index"] - end;
    answer += " ".repeat(count);
    end += count;

    for (let i = 0; i < word[0].length; i++) {
      answer += i % 2 ? word[0][i].toLowerCase() : word[0][i].toUpperCase();
    }

    end += word[0].length;
  }

  answer += " ".repeat(s.length - end);
  return answer;
}

function toWeirdCase(s) {
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
