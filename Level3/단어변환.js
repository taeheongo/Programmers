function Graph(begin, target, words) {
  let vertices = [begin, ...words];

  this.bfs = () => {
    if (!vertices.includes(target)) {
      return 0;
    }

    let status = {};
    // not visited 0, visited 1, finished 2
    for (let v of vertices) {
      status[v] = 0;
    }
    let result = this.bfsVisit(vertices[0], status);
    return result;
  };

  this.bfsVisit = (v, status) => {
    let queue = [[v]];
    let count = 0;

    while (queue.length) {
      console.log(queue);
      let popped = queue.shift();

      if (popped.includes(target)) {
        return count;
      }
      let words = [];
      for (let p of popped) {
        for (let u of vertices) {
          if (status[u] === 0 && this.compare(p, u)) {
            status[u] = 1;
            words.push(u);
          }
        }
      }
      count++;
      queue.push(words);

      status[v] = 2;
    }
    return 0;
  };

  this.compare = (str1, str2) => {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diff++;
      }
    }
    if (diff === 1) {
      return true;
    }
    return false;
  };
}

function solution(begin, target, words) {
  var answer = 0;
  const graph = new Graph(begin, target, words);
  answer = graph.bfs();

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
