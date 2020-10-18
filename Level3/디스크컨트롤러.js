function solution(jobs) {
  let answer = 0;
  let total = 0;
  let passedTime = 0; // 실제 소요되는 시간

  const toDos = Array.from(jobs);
  // 요청시간의 오름차순
  toDos.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      if (a[1] > b[1]) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  console.log(toDos);
  // 작업 큐
  let queue = [];
  queue.push(toDos.shift());

  // 작업 루프
  while (queue.length) {
    console.log(queue);
    let job = queue.shift();

    let start = 0;
    if (job[0] > passedTime) {
      passedTime += job[1] + job[0] - passedTime;
    } else {
      passedTime += job[1];
    }
    let end = passedTime;

    total += passedTime - job[0];
    console.log(start, end);

    let nextJob;
    let index;
    for (let j = 0; j < toDos.length; j++) {
      // 현재 처리 중인 작업의 요청시간보다 요청시간이 늦고 작업 종료시간과 같거나 빨리 요청된 작업을 temp배열에 보관
      if (toDos[j][0] > start && toDos[j][0] <= end) {
        if (!nextJob) {
          nextJob = toDos[j];
          index = j;
        } else {
          if (nextJob[1] > toDos[j][1]) {
            nextJob = toDos[j];
            index = j;
          }
        }
      }
    }

    if (nextJob) {
      toDos.splice(index, 1);
      queue.push(nextJob);
    } else {
      if (toDos.length) {
        queue.push(toDos.shift());
      }
    }
  }

  answer = Math.floor(total / jobs.length);
  console.log(total);
  return answer;
}

console.log(
  solution([
    [0, 3],
    [4, 3],
    [8, 3],
  ])
); // Expected 3

console.log(
  solution([
    [0, 1],
    [1, 2],
    [3, 6],
    [3, 1],
  ])
); // Expected 11

// console.log(solution()); // Expected 3
