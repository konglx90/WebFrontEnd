// splice splice

// slice is pure
const a = [1, 2, 3, 4, 5];
a.slice(3); // [4, 5]
a.slice(3); // [4, 5]

// splice is not pure
a.splice(3); // [4, 5]
a.splice(3); // []

// -------------------------------

// concat push
const b = [];

// concat is pure
b.concat(1); // return [1] b is still []
b.concat(1); // return [1] b is still []

// push is not pure
b.push(1) // 1 b is [1]
b.push(1) // 2 b is [1, 1]

// ----------------------------------

// we need to learn how to use
// map reduce filter every some etc.
// function range() {}

const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
c.map(x => x * 2).filter(x => x > 6).reduce((x, y) => x + y);
c.every(x => x <= 10); // true
c.some(x => x > 10); // false
