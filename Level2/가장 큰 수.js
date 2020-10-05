// 라이브러리 없이 하지 않는 풀이
class ArrayList {
  constructor(array) {
    this.array = array;
  }

  mergeSort() {
    this.array = this.mergeSortRec(this.array);
    return [].concat(this.array);
  }

  mergeSortRec(array) {
    const { length } = array;

    if (length === 1) {
      return array;
    }

    let mid = Math.floor(length / 2);

    let left = array.slice(0, mid);
    let right = array.slice(mid, length);

    return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
  }

  merge(left, right) {
    let il = 0,
      ir = 0,
      result = [];

    while (il < left.length && ir < right.length) {
      // left와 right를 문자열로 바꾸고
      let strLeft = "" + left[il] + right[ir];
      let strRight = "" + right[ir] + left[il];
      let index = 0;

      // left와 right를 비교
      while (index < strLeft.length) {
        let numL = parseInt(strLeft[index]);
        let numR = parseInt(strRight[index]);

        if (numL < numR) {
          result.push(right[ir++]);
          break;
        } else if (numL > numR) {
          result.push(left[il++]);
          break;
        } else {
          if (index === strLeft.length - 1) {
            result.push(left[il++]);
          }

          index++;
        }
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }

    return result;
  }
}

function solution(numbers) {
  var answer = "";

  let array = new ArrayList(numbers).mergeSort();
  answer = array.join("");

  return answer.startsWith("0") ? "0" : answer;
}

// 라아비르러 이용한 풀이
function solution2(numbers) {
  const answer = numbers
    .sort((a, b) => {
      a = a.toString();
      b = b.toString();
      return b + a - (a + b);
    })
    .join("");

  return answer.startsWith("0") ? "0" : answer;
}
