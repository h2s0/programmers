function solution(s) {
    const isLength = s.length === 4 || s.length === 6;
    const isAllNumber = [...s].every((i) => i >= '0' && i <= '9');
    return isLength && isAllNumber
}