function solution(n, m) {
  var answer = [];

  answer = [gcd(n, m), lcd(n, m)];

  return answer;
}

// a = bq + r
// gcd(a, b) = gcd(b, r)
function gcd(a, b) {
  let r = a % b;

  if (r === 0) {
    return b;
  } else {
    return gcd(b, r);
  }
}

// lcm(a, b) = a * b / gcd(a, b)
function lcd(a, b) {
  return (a * b) / gcd(a, b);
}

/*
유클리드 호제법
출처 : https://namu.wiki/w/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C%20%ED%98%B8%EC%A0%9C%EB%B2%95

(a > b), a = bq + r; (0<= r < b)

	gcd(a, b) = gcd(b, r)

단 r=0,  gcd(b, r) = b;
——————————————————————————

증명 : 

    gcd(a, b) = G

    적당한 서로소 A, B에 대하여 a = GA, b = GB가 성립

    a = bq + r에 대입

    GA = GBq + r

    r = G(A-Bq)


——————————————————————————


    b = GB, r = G(A-Bq)

    B와 (A-Bq)가 서로소임을 증명하면 G가 바로 b와 r의 최대공약수.

    gcd(B, A-Bq) =1, 
        => gcd(b, r) = G

——————————————————————————

    gcd(B, A-Bq) = m이라고 하면, 적당한 서로소인 정수 k, l에 대하여 

    B = mk, A-Bq = ml

    A = ml +Bq = mk + ml = m(k+l)인데

    A와 B는 서로소이므로 m= 1.

        => gcd(B, A-Bq) = 1
        => gcd(B, r) = G

*/
