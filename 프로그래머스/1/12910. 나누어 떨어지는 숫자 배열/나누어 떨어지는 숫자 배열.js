function solution(arr, divisor) {
    const answer = [];
    arr.map((num, idx) => {
        num % divisor === 0 ? answer.push(num) : null
    });
    return answer.length === 0 ? [-1] : answer.sort((a,b) => a - b)
}