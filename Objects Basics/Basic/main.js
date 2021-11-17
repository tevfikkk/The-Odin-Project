let array = [1, 2, 3, 4, 5, 6];

const counter = ( arr ) => arr.length === 0 ? 0 : 1 + counter( arr.slice(1) );

console.log(counter(array))