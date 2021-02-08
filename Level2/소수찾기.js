function solution(numbers) {
  var answer = 0;

  let possibleNumbers = new Set();

  function findNumbers(str, possible, start) {
    // 가능한 모든 수를 배열로 반환.
    for (let i = 0; i < str.length; i++) {
      possible.add(Number(start + str[i]));
      let tmp_str = str.slice(0, i) + str.slice(i + 1, str.length);
      findNumbers(tmp_str, possible, start + str.slice(i, i + 1));
    }
  }

  // 1 2 3 4 5
  // {1} 2345

  // 2 3 4 5
  // {1, 12} 3 4 5

  // 3 4 5
  // {1, 12, 123}

  findNumbers(numbers, possibleNumbers, "");

  for (let num of possibleNumbers.values()) {
    console.log(num);
    let count = 0;
    for (let n = 1; n <= num; n++) {
      if (num % n === 0) {
        count++;
      }
    }
    if (count === 2) {
      answer++;
    }
  }

  return answer;
}
