const solution = (n, times) => {
  const { length } = times;
  // 내림차순으로 심사위원 정렬
  times.sort((a, b) => a - b);

  // 시간의 최솟값, 최댓값 구하기
  let low = 0;
  let high = times[length - 1] * n;
  let mid = Math.floor((low + high) / 2);
  let count = 0;

  // 이진탐색
  while (low <= high) {
    // mid값으로 최대 몇 명까지 탐색가능한지 구하기
    for (let time of times) {
      count += Math.floor(mid / time);
    }

    // 그 수가 n보다 크거나 같으면 high는 mid-1
    // n이랑 같아도 mid-1을 해줘야 한다. n명측정할 수 있는 경우의 수가 1가지가 아니기 때문.
    if (count >= n) {
      high = mid - 1;
    }
    // 그 수가 n보다 작으면 low는 mid+1.
    else if (count < n) {
      low = mid + 1;
    }
    count = 0;
    mid = Math.floor((low + high) / 2);
  }

  // 해가 될수 있는 후보 low에 대하여 n명을 측정할 수 있는지 테스트
  for (let time of times) {
    count += Math.floor(low / time);
  }

  if (count >= n) {
    return low;
  } else {
    return -1;
  }
};
