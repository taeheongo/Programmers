function solution(numbers) {
  const answer = numbers
    .sort((a, b) => {
      a = a.toString();
      b = b.toString();
      return b + a - (a + b); // 문자열끼리 - 하면 자동으로 숫자로 형변환됨.
    })
    .join("");

  return answer.startsWith("0") ? "0" : answer;
}
