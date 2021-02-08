function solution(n) {
  var answer = 0;

  let reversedThreeBase = "";

  while (n) {
    reversedThreeBase += n % 3;
    n = Math.floor(n / 3);
  }

  let rTB = reversedThreeBase;

  for (let i = 0; i < rTB.length; i++) {
    answer += Math.pow(3, rTB.length - 1 - i) * rTB[i];
  }

  return answer;
}
