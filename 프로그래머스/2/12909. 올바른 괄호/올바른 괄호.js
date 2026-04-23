function solution(s){
    // false 인 경우 : 첫 문자가 ) 일 때, (와 )의 개수가 안맞을 때, 
    // if (s.startsWith(")") || s.endsWith("(")) {
    //     return false;
    // } else if ([...s].filter(st => st === "(").length === [...s].filter(st => st === ")").length) {
    //     return true;
    // } else {
    //     return false;
    // }
    let stack = 0;
    for ( let i = 0; i < s.length; i++ ) {
        if (s[i] === "(") {
            stack+=1
        } else {
            stack-=1
            if (stack < 0) return false;
        }
    }
    return stack === 0;
    
}