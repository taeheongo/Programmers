function solution(answers) {
  var answer = [];

  let corrects = [0, 0, 0];
  let patternOne = [1, 2, 3, 4, 5];
  let patternTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  let patternThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === patternOne[i % 5]) {
      corrects[0] = corrects[0] + 1;
    }

    if (answers[i] === patternTwo[i % 8]) {
      corrects[1] = corrects[1] + 1;
    }

    if (answers[i] === patternThree[i % 10]) {
      corrects[2] = corrects[2] + 1;
    }
  }

  let max = 0;

  corrects.forEach((elem, i) => {
    if (elem >= max) {
      max = elem;
    }
  });

  corrects.forEach((elem, i) => {
    if (elem === max) {
      answer.push(i + 1);
    }
  });

  return answer;
}
