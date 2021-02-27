function solution(n, results) {
  var answer = 0;

  const dag = new DAG();
  for (let num = 1; num <= n; num++) {
    dag.addVertex(num);
  }

  for (let r of results) {
    dag.addEdge(r[0], r[1]);
  }

  const { cache, ranks } = dag.dfs();

  return ranks.size;
}

const UNVISITED = "UNVISITED";
const VISITED = "VISITED";
const COMPLETED = "COMPLETED";

// Directed Acyclic Graph
class DAG {
  constructor(n) {
    this.vertices = [];
    this.loserList = new Map();
    this.winnerList = new Map();
  }

  addVertex(v) {
    this.vertices.push(v);
    for (let vert of this.vertices) {
      vert;
    }
    this.loserList.set(v, []); // v한테 진 놈들 리스트
    this.winnerList.set(v, []); // v가 이긴 놈들 리스트
  }

  addEdge(v, w) {
    this.loserList.get(v).push(w); // v는 w를 이겼다
    this.winnerList.get(w).push(v); // w는 v한테 졌다.
  }

  dfs() {
    const ranks = new Map();
    const cache = new Map();

    for (let v of this.vertices) {
      cache.set(v, [null, null]); // [v를 이긴놈들의 수, v한테 진놈들의 수]
    }

    for (let v of this.vertices) {
      let c = cache.get(v);
      let set = new Set();
      // v를 이긴 놈들 순회
      if (c[0] === null) {
        this.winnerDfsVisit(v, cache, set);
      }

      // v한테 진 놈들 순회
      set.clear();
      if (c[1] === null) {
        this.loserDfsVisit(v, cache, set);
      }
    }

    for (let key of cache.keys()) {
      let numW = cache.get(key)[0];
      let numL = cache.get(key)[1];

      if (numW + numL === this.vertices.length - 1) {
        ranks.set(key, cache.get(key)[0] + 1);
      }
    }

    return {
      cache,
      ranks,
    };
  }

  winnerDfsVisit(v, cache, set) {
    let neighbors = this.winnerList.get(v);
    let c = cache.get(v);

    for (let n of neighbors) {
      if (!set.has(n)) {
        if (cache.get(n)[0] === null) {
          c[0] += this.winnerDfsVisit(n, cache, set) + 1;
        } else {
          c[0] += cache.get(n)[0] + 1;
        }
      }

      for (let l of this.winnerList(n)) {
        set.add(l);
      }
      set.add(n);
    }

    return c[0] === null ? 0 : c[0];
  }

  loserDfsVisit(v, cache, set) {
    let neighbors = this.loserList.get(v);
    let c = cache.get(v);

    for (let n of neighbors) {
      if (!set.has(n)) {
        if (cache.get(n)[1] === null) {
          c[1] += this.loserDfsVisit(n, cache, set) + 1;
        } else {
          c[1] += cache.get(n)[1] + 1;
        }
      }

      for (let l of this.loserList(n)) {
        set.add(l);
      }
      set.add(n);
    }

    return c[1] === null ? 0 : c[1];
  }
}
/*

   for(let l of this.loserList(n)){         
            set.add(l);
        }
      set.add(n);


       for(let l of this.winnerList(n)){         
            set.add(l);
        }
      set.add(n);
*/
