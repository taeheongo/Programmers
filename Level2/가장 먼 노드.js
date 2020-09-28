const WHITE = "white";
const GREY = "grey";
const BLACK = "black";

const initializeColor = (vertices) => {
  let color = {};

  for (let v of vertices) {
    color[v] = WHITE;
  }

  return color;
};

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
    this.vertices = []; // 노드들
    this.adjList = new Map(); // 간선들
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // 무방향 그래프
  }

  bfs(v, callback) {
    const color = initializeColor(this.vertices);
    const queue = new Queue();
    queue.enqueue([v]);
    color[v] = GREY;
    let vByDistance = [];

    while (!queue.isEmpty()) {
      let vArr = queue.dequeue();
      let newArray = [];

      for (let w of vArr) {
        for (let key of this.adjList.get(w)) {
          if (color[key] === WHITE) {
            color[key] = GREY;
            newArray.push(key);
          }
        }

        color[w] = BLACK;
      }
      if (newArray.length !== 0) {
        queue.enqueue(newArray);
        vByDistance.push(newArray);
        // console.log(newArray);
      }
    }

    callback(vByDistance[vByDistance.length - 1].length);
  }

  dfs(v) {}
}

function solution(n, edge) {
  var answer = 0;

  const graph = new Graph();
  // 노드 추가
  for (let i = 0; i < n; i++) {
    graph.addVertex(i + 1);
  }

  // 간선 추가
  for (let i = 0; i < edge.length; i++) {
    graph.addEdge(edge[i][0], edge[i][1]);
  }
  console.log(graph);

  graph.bfs(graph.vertices[0], (vByDistance) => {
    answer = vByDistance;
  });

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); // expected: 3
