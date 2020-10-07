// 플로이드 워셜을 이용한 풀이
function Graph(n) {
  let matrix = [];

  this.init = () => {
    for (let i = 1; i <= n; i++) {
      matrix[i] = [];
      for (let j = 1; j <= n; j++) {
        matrix[i][j] = false;
      }
    }

    return matrix;
  };

  this.Floyd = () => {
    //가운데 노드
    for (let j = 1; j <= n; j++) {
      //시작 노드
      for (let i = 1; i <= n; i++) {
        //마지막 노드
        for (let k = 1; k <= n; k++) {
          if (matrix[i][j] && matrix[j][k]) {
            matrix[i][k] = true;
          }
        }
      }
    }
  };
}

const solution = (n, results) => {
  let answer = 0;

  const graph = new Graph(n);
  let matrix = graph.init();

  for (let result of results) {
    matrix[result[0]][result[1]] = true;
  }

  graph.Floyd();

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (matrix[i][j] || matrix[j][i]) {
        count++;
      }
    }
    if (count === n - 1) {
      answer++;
    }
  }

  return answer;
};

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
); // expected 2

// 내가 처음 푼 풀이 bfs이용
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  bfs() {
    let status = this.initializeStatus();
    let pred = {};
    let desc = {};

    for (let vertex of this.vertices) {
      pred[vertex] = new Set();
      desc[vertex] = new Set();
    }

    for (let v of this.vertices) {
      if (status[v] === 0) {
        this.bfsVisit(v, status, pred, desc);
      }
    }

    for (let v of this.vertices) {
      for (let p of pred[v].values()) {
        for (let pp of pred[p].values()) {
          pred[v].add(pp); // pred[v]에 원소를 추가하면 2번째 for문의 pred[v].values()가 증가한다.
        }
      }

      for (let d of desc[v].values()) {
        for (let dd of desc[d].values()) {
          desc[v].add(dd); // desc[v]에 원소를 추가하면 2번째 for문의 desc[v].values()가 증가한다.
        }
      }
    }

    return {
      pred,
      desc,
    };
  }

  bfsVisit(v, status, pred, desc) {
    if (!this.vertices.some((elem) => elem === v)) {
      return -1;
    }

    let queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      status[u] = 1;

      let neighbors = this.adjList.get(u);

      for (let w of neighbors) {
        pred[w].add(u);
        desc[u].add(w);
        if (status[u] === 0) {
          queue.enqueue(w);
        }
      }

      status[u] = 2;
    }
  }

  initializeStatus() {
    let status = {};
    // 0 unvisited
    // 1 visited
    // 2 finished
    for (let v of this.vertices) {
      status[v] = 0;
    }

    return status;
  }
}

const solution = (n, results) => {
  let answer = 0;

  const graph = new Graph();
  // do something
  for (let i = 1; i <= n; i++) {
    graph.addVertex(i);
  }

  for (let result of results) {
    graph.addEdge(result[0], result[1]);
  }

  const { pred, desc } = graph.bfs();

  console.log(pred, desc);

  for (let i = 1; i <= n; i++) {
    if (pred[i].size + desc[i].size === n - 1) {
      answer++;
    }
  }

  return answer;
};

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
); // expected 2
