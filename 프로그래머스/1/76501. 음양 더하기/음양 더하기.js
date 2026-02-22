function solution(absolutes, signs) {
    let lists = [];
    const list = absolutes.map((item, idx) => {
        if (signs[idx]) {
            lists.push(item)
        } else {
            lists.push(-item)
        }
    });
    return lists.reduce((acc, cur) => acc + cur);
}