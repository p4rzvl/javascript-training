const input = [-10, 20, 50, -5];

const output = input
.filter(i => i > 0)
.map(i => i * 2);

console.log(output);
