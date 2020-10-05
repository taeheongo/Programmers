class IntegerTriangle {
  constructor(triangle) {
    this.triangle = triangle;
    this.cache = [];
    for (let i = 0; i < this.triangle.length; i++) {
      this.cache[i] = [];
    }
  }

  findMaxNum() {
    let lastArray = this.triangle[this.triangle.length - 1];

    let max = 0;
    for (let i = 0; i < lastArray.length; i++) {
      let newMax = this.findMaxNumHelper(this.triangle.length - 1, i);
      if (max < newMax) {
        max = newMax;
      }
    }

    return max;
  }

  findMaxNumHelper(hIndex, vIndex) {
    // vertical index, horizontal index
    if (this.cache[hIndex][vIndex]) {
      return this.cache[hIndex][vIndex];
    }

    if (this.triangle[hIndex].length === 1) {
      let root = this.triangle[hIndex][0];
      this.cache[hIndex][0] = root;
      return root;
    }

    let left = vIndex !== 0 ? this.findMaxNumHelper(hIndex - 1, vIndex - 1) : 0;
    let right =
      vIndex !== this.triangle[hIndex].length - 1
        ? this.findMaxNumHelper(hIndex - 1, vIndex)
        : 0;

    if (left > right) {
      return (this.cache[hIndex][vIndex] =
        left + this.triangle[hIndex][vIndex]);
    } else {
      return (this.cache[hIndex][vIndex] =
        right + this.triangle[hIndex][vIndex]);
    }
  }
}

const solution = (triangle) => {
  let answer;
  let integerTriangle = new IntegerTriangle(triangle);
  answer = integerTriangle.findMaxNum();

  return answer;
};

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])); // expected 30
