function solution(citations) {
  const { length } = citations;
  citations.sort((a, b) => b - a);
  let hIndex = citations[0];

  while (hIndex > 0) {
    let isHindex = false;

    for (let i = 0; i < length; i++) {
      if (citations[i] < hIndex) break;

      isHindex = i + 1 >= hIndex && length - (i + 1) <= hIndex;
    }

    if (isHindex) {
      break;
    }

    hIndex--;
  }

  return hIndex;
}
