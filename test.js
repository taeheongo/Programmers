function solution(n, edge) {
  var answer = 0;

  let graph = new Graph(n);

  for (let e of edge) {
    graph.addEdge(e[0], e[1]);
  }

  graph.bfs(1, (elem) => console.log(elem));

  return answer;
}

const UNVISITED = "UNVISITED";
const VISITED = "VISITED";
const COMPLETED = "COMPLETED";

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(e) {
    this.items.push(e);
  }

  dequeue() {
    this.shift();
  }

  get isNotEmpty() {
    return !!this.itmes.length;
  }
}

class Graph {
  constructor(n) {
    this.vertices = [];
    this.adjList = new Map();

    for (let i = 1; i <= n; i++) {
      this.addVertex(i);
    }
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  _initState() {
    let state = new Map();
    for (let v of this.vertices) {
      state.set(v, UNVISITED);
    }

    return state;
  }

  bfs(v, callback) {
    let queue = new Queue();
    queue.enqueue(v);
    const state = this._initState();
    state.set(v, VISITIED);

    while (queue.isNotEmpty) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);

      for (let n of neighbors) {
        if (state[n] === UNVISITIED) {
          queue.enqueue(n);
          state.set(n, VISITIED);
        }
      }

      state.set(u, COMPLETED);
      callback(u);
    }
  }
}
