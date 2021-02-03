// 내 첫 번째 풀이
function solution(progresses, speeds) {
  var answer = [];
  const { length } = progresses;

  let i = 0;
  let j = -1;
  let passedDay = 0; // 지난 일수

  while (progresses[length - 1] < 100) {
    progresses[i] += passedDay * speeds[i]; // 지난 일 수 만큼 진도 나가기

    // 진행작업이 100 이상이면 배포수 +1
    if (progresses[i] >= 100) {
      answer[j] = answer[j] ? answer[j] + 1 : 1;
      i++;

      continue;
    }
    const requiredDay = Math.ceil((100 - progresses[i]) / speeds[i]); // 100% 되기까지 필요한 일수
    progresses[i] += requiredDay * speeds[i]; // 진도 끝내기
    passedDay += requiredDay; // 지난 일수 업데이트
    answer[++j] = 1; // 배포 수 초기화
    i++;
  }

  return answer;
}

// 좀 더 깔끔한 코드
function solution(progresses, speeds) {
  let answer = [];

  let requiredDays = 0;
  progresses.forEach((p, i) => {
    p = p + requiredDays * speeds[i]; // 지나간 날만큼 진도율 증가

    if (p >= 100) {
      answer[answer.length - 1]++;
    } else {
      requiredDays += Math.ceil((100 - p) / speeds[i]);
      answer.push(1);
    }
  });

  return answer;
}
