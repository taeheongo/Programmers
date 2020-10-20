function solution(n, lost, reserve) {
  var answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    let j = reserve.findIndex((elem) => elem === lost[i]);

    if (j !== -1) {
      answer++;
      reserve.splice(j, 1);
      lost.splice(i, 1);
      i--;
    }
  }

  for (let l of lost) {
    let index = reserve.findIndex((elem) => elem === l - 1 || elem === l + 1);

    if (index !== -1) {
      answer++;
      reserve.splice(index, 1);
    }
  }

  return answer;
}
