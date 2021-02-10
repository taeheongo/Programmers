function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
    arr1[i].forEach((num, j) => (answer[i][j] = num + arr2[i][j]));
  }

  return answer;
}
