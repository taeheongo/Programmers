class IntegerTriangle {
  constructor(triangle) {
    this.triangle = triangle;
    this.cache = [];
  }

  findMaxNum() {
    let lastArray = this.triangle[this.triangle.length - 1];

    let sum = 0;
    for (let i = 0; i < lastArray.length; i++) {
      let newSum = this.findMaxNumHelper(this.triangle.length - 1, i);
      if (sum < newSum) {
        sum = newSum;
      }
    }

    return sum;
  }

  findMaxNumHelper(hIndex, vIndex) {
    // vertical index, horizontal index
    if (this.cache[hIndex][vIndex]) {
      return this.cache[hIndex][vIndex];
    }

    if (this.triangle[hIndex].length === 1) {
      let root = this.triangle[hIndex][0];
      this.cache[hIndex] = [root];
      return root;
    }

    let array = this.triangle[hIndex];

    let left = hIndex !== 0 ? this.findMaxNumHelper(hIndex - 1, [i - 1]) : 0;
    let right =
      hIndex !== array.length - 1 ? this.findMaxNumHelper(hIndex - 1, i) : 0;

    if (left > right) {
      return (this.cache[hIndex][vIndex] = left);
    } else {
      return (this.cache[hIndex][vIndex] = right);
    }
  }
}

const solution = () => {
  let answer;
  let integerTriangle = new IntegerTriangle([
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 7, 4, 4],
    [4, 5, 2, 6, 5],
  ]);
  answe = integerTriangle.findMaxNum();

  return answer;
};

console.log(solution()); // expected 30
