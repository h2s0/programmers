function solution(sizes) {
    const sortedSizes = sizes.map((size) => [Math.max(...size), Math.min(...size)])
    const widths = sortedSizes.map(size => size[0]);
    const height = sortedSizes.map(size => size[1]);
    return Math.max(...widths) * Math.max(...height)
}