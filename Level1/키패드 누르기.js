function solution(numbers, hand) {
  var answer = "";

  let keyPads = [
    [1, 4, 7, "*"],
    [2, 5, 8, 0],
    [3, 6, 9, "#"],
  ];

  let leftIndex = [0, 3];
  let rightIndex = [2, 3];

  numbers.forEach((num) => {
    let tmpL = keyPads[0].findIndex((key) => key === num);
    let tmpR = keyPads[2].findIndex((key) => key === num);

    if (tmpL !== -1 && tmpR === -1) {
      leftIndex = [0, tmpL];
      answer += "L";
    } else if (tmpL === -1 && tmpR !== -1) {
      rightIndex = [2, tmpR];
      answer += "R";
    } else if (tmpL === -1 && tmpR === -1) {
      let numIndex = keyPads[1].findIndex((key) => key === num);

      let distanceL =
        Math.abs(1 - leftIndex[0]) + Math.abs(numIndex - leftIndex[1]);
      let distanceR =
        Math.abs(1 - rightIndex[0]) + Math.abs(numIndex - rightIndex[1]);

      if (distanceL > distanceR) {
        rightIndex = [1, numIndex];
        answer += "R";
      } else if (distanceL < distanceR) {
        leftIndex = [1, numIndex];
        answer += "L";
      } else {
        if (hand === "left") {
          leftIndex = [1, numIndex];
          answer += "L";
        } else {
          rightIndex = [1, numIndex];
          answer += "R";
        }
      }
    }
  });

  return answer;
}
