function solution(a, b) {
  var answer = "";

  let daysOfMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let type = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  let passedDays = 0;

  for (let i = 0; i < a - 1; i++) {
    passedDays += daysOfMonths[i];
  }
  passedDays += b - 1;

  answer = type[(passedDays + 4) % 7]; // // +3은 +4에서 index니까 -1

  return answer;
}
