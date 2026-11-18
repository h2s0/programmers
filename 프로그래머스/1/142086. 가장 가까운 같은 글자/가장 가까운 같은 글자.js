function solution(s) {
    const alphaList = [];
    const answer = [];
    for (let i=0; i<s.length; i++) {
        if (alphaList.includes(s[i])) {
            const previous = s.lastIndexOf(s[i], i-1)
            answer.push(i-previous)
        } else {
            alphaList.push(s[i])
            answer.push(-1)
        }
    }
    return answer;
}