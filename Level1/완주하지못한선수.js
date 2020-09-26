function solution(participant, completion) {
  const hash = {};
  let answer;

  for (let val of participant) {
    if (!hash[val]) hash[val] = 0;
    hash[val]++;
  }

  completion.forEach((c) => hash[c]--);

  for (let key of Object.keys(hash)) {
    if (hash[key]) {
      return key;
    }
  }
}
