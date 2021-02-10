function solution(phone_number) {
  return phone_number.replace(
    /^(.*)([0-9]{4})$/,
    (_, p1, p2) => "*".repeat(p1.length) + p2
  );
}
