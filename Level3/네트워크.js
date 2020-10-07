// 플로이드 워셔 알고리즘을 이용한 풀이
function Graph(n, computers) {
  let matrix = [];

  this.init = () => {
    for (let i = 0; i < n; i++) {
      matrix[i] = computers[i];
    }
    return matrix;
  };

  this.Floyd = () => {
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
          if (matrix[i][j] && matrix[j][k]) {
            matrix[i][k] = 1;
          }
        }
      }
    }
    return matrix;
  };
}

function solution(n, computers) {
  var answer = 0;
  const graph = new Graph(n, computers);
  const network = graph.init();
  network = graph.Floyd();

  let nodes = [];
  for (let i = 0; i < n; i++) {
    nodes.push(i);
  }

  while (nodes.length) {
    let node = nodes.shift();

    for (let i = 0; i < network[node].length; i++) {
      if (network[node][i] === 1) {
        nodes = nodes.filter((elem) => elem !== i);
      }
    }
    answer++;
  }

  return answer;
}

// DFS를 이용한 풀이
function Graph(n, computers) {
  let matrix = [];

  this.init = () => {
    for (let i = 0; i < n; i++) {
      matrix[i] = computers[i];
    }
  };

  this.dfs = () => {
    let status = {};
    let netNum = 0;

    // not visited 0, visited 1, finished 2
    for (let i = 0; i < n; i++) {
      status[i] = 0;
    }

    for (let i = 0; i < n; i++) {
      if (status[i] === 0) {
        this.dfsVisit(i, status);
        netNum++;
      }
    }

    return netNum;
  };

  this.dfsVisit = (v, status) => {
    status[v] = 1;

    let neighbor = [];
    for (let i = 0; i < matrix[v].length; i++) {
      if (matrix[v][i] === 1) {
        neighbor.push(i);
      }
    }

    for (let u of neighbor) {
      if (status[u] === 0) {
        this.dfsVisit(u, status);
      }
    }

    status[v] = 2;
  };
}

function solution(n, computers) {
  let answer;

  const graph = new Graph(n, computers);
  graph.init();
  answer = graph.dfs();

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // expected 1
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // expected 2
