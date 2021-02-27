function solution(w, h) {
  let g = gcd(w, h);

  return w * h - (w + h - g);
}

function gcd(a, b) {
  let r = a % b;

  if (r === 0) {
    return b;
  } else {
    return gcd(b, r);
  }
}

// 대각선이 지나는 단위 정사각형
// 참조 : https://m.blog.naver.com/PostView.nhn?blogId=zzinuhelios&logNo=120024685950&proxyReferer=https:%2F%2Fwww.google.com%2F

/*
    명제 1
    서로소인 a, b에 대하여
    a * b의 직사각형에서 대각선이 지나는 단위 정사각형의 개수는 a + b - 1이다.

    명제 2
    자연수 m * n에 때하여 
    m * n의 직사각형에서 대각선이 지나는 단위 정사각형의 개수는 m + n - g이다.

    증명

        m = g * a, n = g * b (a, b는 서로소, g는 m과 n의 최대공약수)
        m * n 직사각형에서 a *b의 직사각형의 개수는 g^2개이다.

        그중에서 대각선이 지나는 a*b 직사각형은 g개
        따라서 대각선이 지나는 단위 정사각형의 개수는
        g * (a + b -1)
            = g*a + g*b - g
            = g * (a + b - 1)
*/
