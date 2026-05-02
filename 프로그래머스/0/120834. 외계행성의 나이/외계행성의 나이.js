function solution(age) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return String(age).split("").map(x => alphabet[x]).join("");
}