function solution(d, budget) {
    let count = 0;
    const newd = d.sort((a,b) => a-b);
    for (let i = 0; i < d.length; i++) {
        if (budget - newd[i] >= 0) {
            budget -= newd[i];
            count += 1;
        }
    }
    return count;
}