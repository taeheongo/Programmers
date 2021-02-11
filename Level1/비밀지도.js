function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    let num = arr1[i] | arr2[i];
    let s = "";

    while (num) {
      let rem = num % 2;
      s = rem + s;
      num = Math.floor(num / 2);
    }
    s = s.length === n ? s : "0".repeat(n - s.length) + s;

    s = s.replace(/1/g, "#");
    s = s.replace(/0/g, " ");

    answer[i] = s;
  }

  return answer;
}
