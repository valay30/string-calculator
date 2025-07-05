const { add } = require('./calculator');

//for empty string
test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

//for single input
test('returns number for single input', () => {
  expect(add("4")).toBe(4);
});

//for two numbers
test('returns sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});

//for sum of multiple numbers
test('returns sum of multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});