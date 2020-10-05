// sort 라이브러리 사용한 풀이
function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a);

  for (let count = citations.length; count > 0; count--) {
    if (citations[count - 1] >= count) {
      answer = count;
      break;
    }
  }

  return answer;
}

// 삽입정렬 사용한 풀이
class ArrayList {
  constructor(array) {
    this.array = array;
  }

  // 삽입정렬
  insertionSort() {
    const { length } = this.array;

    for (let i = 0; i < length; i++) {
      let j = i;
      let temp = this.array[i];
      while (j > 0 && this.array[j - 1] < temp) {
        this.array[j] = this.array[j - 1];
        j--;
      }
      this.array[j] = temp;
    }
    return [].concat(this.array);
  }
}

// insertion sort
function solution(citations) {
  var answer = 0;

  let arraylist = new ArrayList(citations);
  citations = arraylist.insertionSort();

  for (let count = citations.length; count > 0; count--) {
    if (citations[count - 1] >= count) {
      answer = count;
      break;
    }
  }

  return answer;
}
