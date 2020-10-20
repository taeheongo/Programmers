// 나의 풀이
function solution(operations) {
  var answer = [];
  let queue = [];

  for (let o of operations) {
    if (o.match(/^I -?[0-9]+/g)) {
      let num = parseInt(o.match(/(-?[0-9]+)/g)[0]);
      queue.push(num);
    } else if (o === "D 1") {
      let max = 0,
        index = 0;
      for (let i = 0; i < queue.length; i++) {
        if (max < queue[i]) {
          max = queue[i];
          index = i;
        }
      }
      queue.splice(index, 1);
    } else {
      let min = 0,
        index = 0;
      for (let i = 0; i < queue.length; i++) {
        if (min > queue[i]) {
          min = queue[i];
          index = i;
        }
      }
      queue.splice(index, 1);
    }
  }
  console.log(queue);
  let max = queue[0] || 0,
    min = queue[0] || 0;
  queue.forEach((num) => {
    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  });

  answer = [max, min];

  return answer;
}

// 다른 사람 풀이
function solution(arg) {
  var list = [];
  arg.forEach((t) => {
    if (t[0] === "I") {
      list.push(+t.split(" ")[1]);
    } else {
      if (!list.length) return;

      var val = (t[2] === "-" ? Math.min : Math.max)(...list);
      var delIndex = list.findIndex((t) => t === val);

      list.splice(delIndex, 1);
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}
