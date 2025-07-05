function add(numbers) {
  if (numbers === "") return 0; //empty string
   
  // single input and two numbers and multiple numbers and new line
  const parts = numbers.split(/,|\n/).map(Number);
  return parts.reduce((a, b) => a + b, 0);
}

module.exports = { add };