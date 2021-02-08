function solution(s) {
  var answer = "";

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  const callback = (a, b) => {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  };

  arr.sort(callback);

  answer = arr.join("");

  return answer;
}
