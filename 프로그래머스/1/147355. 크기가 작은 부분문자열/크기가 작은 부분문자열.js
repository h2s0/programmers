function solution(t, p) {
    let list = [];
    for (let i = 0; i<=t.length -p.length; i++) {
        list.push(t.slice(i,i+p.length))
    }
    return list.map(Number).filter((n,i) => n<=p).length;
}