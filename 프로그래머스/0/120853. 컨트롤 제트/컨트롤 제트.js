function solution(s) {
    const arr = s.split(" ");
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] === "Z") {
            arr.splice(i-1,2)
            i -=2
        }
    }
    return arr.map(str => Number(str)).reduce((acc, cur) => acc + cur, 0)
}