function solution(left, right) {
    // Array.from({length: right - left + 1}, (_, i) => i + left)
    // .filter((n, i) => n % Array.from({length: n}, (n,i) => i + 1) )
    let result = 0;
    for ( let i = left; i <= right; i++ ) { // left ~ right 사이의 숫자
        let num = 0;
        for ( let j = 1; j <= i; j++ ) { // 약수의 갯수 구하기
            if ( i % j === 0 ) {
                num = num + 1;
            }
        }
        num % 2 === 0 ? result += i : result -= i
    }
    return result
}