function solution(tickets) {
  let answer = [];

  tickets.sort();
  let done = false;
  dfs("ICN", tickets, []);

  function dfs(start, left, order) {
    if (done) return;

    const potential = left.filter((item) => item[0] === start);

    potential.forEach((pTicket) => {
      let tmp_left = Array.from(left);
      let tmp_order = Array.from(order);

      const index = tmp_left.findIndex((item) => item === pTicket);
      tmp_left.splice(index, 1);

      if (tmp_order.length === tickets.length - 1) {
        tmp_order = tmp_order.concat(pTicket);
        done = true;
        answer = tmp_order;
      } else {
        tmp_order.push(pTicket[0]);
        dfs(pTicket[1], tmp_left, tmp_order);
      }
    });
  }

  return answer;
}

console.log(
  solution([
    ["ICN", "A"],
    ["A", "C"],
    ["A", "D"],
    ["D", "ICN"],
    ["ICN", "B"],
    ["B", "A"],
  ])
);
