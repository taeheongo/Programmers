function Graph(tickets) {
  let vertices = new Set();
  let adjList = new Map();

  this.init = () => {
    for (let t of tickets) {
      vertices.add(t[0]);
      vertices.add(t[1]);

      if (adjList.has(t[0])) {
        adjList.get(t[0]).push(t[1]);
      } else {
        adjList.set(t[0], [t[1]]);
      }
      adjList.get(t[0]).sort();

      if (!adjList.has(t[1])) {
        adjList.set(t[1], []);
      }
    }

    return {
      vertices,
      adjList,
    };
  };

  this.dfs = () => {
    let status = {};
    // not visited 0, visited 1, finished 2
    for (let v of vertices.values()) {
      status[v] = 0;
    }

    let result = ["ICN"];
    let left = [];
    const count = this.dfsVisit("ICN", status, result, 0, left);

    if (count !== vertices.size) {
      console.log(left[0]);
      this.dfsVisit(result[result.length - 1], status, result, count, left);
    }

    return result;
  };
  this.dfsVisit = (v, status, result, count, left) => {
    status[v] = 1;
    count++;
    let neighbor = adjList.get(v);

    for (let n of neighbor) {
      if (adjList.get(n).length === 0 && count !== vertices.size - 1) {
        left.push(n);
        continue;
      }

      result.push(n);

      if (status[n] === 0) {
        count = this.dfsVisit(n, status, result, count, left);
      }
    }

    status[v] = 2;

    return count;
  };
}

function solution(tickets) {
  var answer;
  const graph = new Graph(tickets);
  console.log(graph.init());
  answer = graph.dfs();

  return answer;
}

// console.log(
//   solution([
//     ["ICN", "SFO"],
//     ["ICN", "ATL"],
//     ["SFO", "ATL"],
//     ["ATL", "ICN"],
//     ["ATL", "SFO"],
//   ])
// ); // expected [ICN, ATL, ICN, SFO, ATL, SFO]

console.log(
  solution([
    ["ICN", "A"],
    ["A", "C"],
    ["A", "D"],
    ["D", "ICN"],
    ["ICN", "B"],
    ["B", "A"],
  ])
); // expected [[ICN, A, D, B, A, C]
