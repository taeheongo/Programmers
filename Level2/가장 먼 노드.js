function solution(n, edge) {
  var answer = 0;

  let graph = new Graph(n);

  for (let e of edge) {
    graph.addEdge(e[0], e[1]);
  }

  let { d, max } = graph.bfs(1, (elem) => console.log(elem));
  // let {d, max} = graph.dfs(1, (elem)=>console.log(elem)); // 실패.. 원인파악 중...
  let longgestNodes = [...d.keys()].filter((key) => d.get(key) === max);

  return longgestNodes.length;
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
    return this.items.shift();
  }

  get isNotEmpty() {
    return !!this.items.length;
  }
}

class Graph {
  constructor(n) {
    this.vertices = [];
    this.adjList = new Map();
    this.max = 0;
    this.reservated = new Set();

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
    state.set(v, VISITED);
    let d = new Map(); // distances from 1
    let max = 0;

    for (let vert of this.vertices) {
      d.set(vert, 0);
    }

    while (queue.isNotEmpty) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);

      for (let n of neighbors) {
        if (state.get(n) === UNVISITED) {
          queue.enqueue(n);
          state.set(n, VISITED);
          d.set(n, d.get(u) + 1);
        }
      }

      state.set(u, COMPLETED);
      if (callback && typeof callback === "function") {
        callback(u);
      }
      max = d.get(u);
    }

    return {
      d,
      max,
    };
  }

  dfs(u, callback) {
    const state = this._initState();
    const d = new Map();
    const reservated = new Set();
    reservated.add(u);

    for (let v of this.vertices) {
      d.set(v, 0);
    }

    this._dfsVisit(u, d, state, callback, reservated);

    return {
      d,
      max: this.max,
    };
  }

  _dfsVisit(v, d, state, callback, reservated) {
    const neighbors = this.adjList.get(v);
    state.set(v, VISITED);
    this.max = this.max > d.get(v) ? this.max : d.get(v);

    if (callback && typeof callback === "function") {
      callback(`${v} ${d.get(v)}`);
    }

    let newReservated = new Set();

    for (let n of [...neighbors.values()]) {
      newReservated.add(n);
    }

    for (let n of neighbors) {
      if (state.get(n) === UNVISITED && !reservated.has(n)) {
        d.set(n, d.get(v) + 1);
        this._dfsVisit(n, d, state, callback, newReservated);
      }
    }

    state.set(v, COMPLETED);
  }
}
