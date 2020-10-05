class ArrayList {
  constructor(array) {
    this.array = array;
  }

  quickSort() {
    this.quick(this.array, 0, this.array.length - 1);
    return [].concat(this.array);
  }

  quick(array, left, right) {
    let index;

    if (array.length > 1) {
      index = this.partition(array, left, right);

      if (left < index - 1) {
        this.quick(array, left, index - 1);
      }
      if (right > index) {
        this.quick(array, index, right);
      }
    }
  }

  partition(array, left, right) {
    let i = left,
      j = right,
      pivot = Math.floor((array[i] + array[j]) / 2);

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        this.quickSwap(array, i, j);
        i++;
        j--;
      }
    }

    return i;
  }

  quickSwap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function solution(array, commands) {
  var answer = [];

  for (let command of commands) {
    let newArray = array.slice(command[0] - 1, command[1]);
    newArray = new ArrayList(newArray).quickSort();

    answer.push(newArray[command[2] - 1]);
  }

  return answer;
}
