function solution(s) {
    // 띄어쓰기 기준으로 배열로 나눈다음
    // 배열의 요소를 변환하고
    // 변환 후 문자열로 출력
    return s.split(" ").map((word) => {
        let result = ""
        for(let i =0; i<word.length; i++) {
            result += i % 2 === 0
                ? word[i].toUpperCase()
                : word[i].toLowerCase();
        }
        return result;
    }).join(" ")
}