const { add } = require('./calculator');

//for empty string
test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

//for single input
test('returns number for single input', () => {
  expect(add("4")).toBe(4);
});
