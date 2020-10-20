function solution(number, k) {
  var answer = "";

  let count = 0;
  let num = [];

  for (let i = 0; i < number.length; i++) {
    if (count < k) {
      for (let j = num.length - 1; j >= 0; j--) {
        if (parseInt(num[j]) < number[i] && count < k) {
          num.splice(j, 1);
          count++;
        } else {
          break;
        }
      }

      num.push(number[i]);
    } else {
      num = num.concat(number.slice(i).split(""));
      break;
    }
  }

  answer = num.slice(0, number.length - k).join("");

  return answer;
}
