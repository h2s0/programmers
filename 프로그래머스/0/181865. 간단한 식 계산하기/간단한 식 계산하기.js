function solution(binomial) {
    const calc = binomial.split(" ")[1];
    const a = binomial.split(` ${calc} `)[0]*1;
    const b = binomial.split(` ${calc} `)[1]*1;
    if (calc === "+") {
        return a + b;
    };
    if (calc === "-") {
        return a - b;
    };
    if (calc === "*") {
        return a * b;
    };
}