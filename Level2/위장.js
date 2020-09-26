function solution(clothes) {
  var answer = 1;

  const hash = {};

  clothes.forEach((elem) => {
    if (!hash[elem[1]]) {
      hash[elem[1]] = 2;
      return;
    }

    hash[elem[1]] += 1;
  });

  for (let key of Object.keys(hash)) {
    answer = answer * hash[key];
  }

  answer -= 1;

  return answer;
}
