function solution(numbers) {
  var answer = [];

  let set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  answer = [...set.values()];
  answer.sort((a, b) => a - b);

  return answer;
}
