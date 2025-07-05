function add(numbers) {
  if (numbers === "") return 0; //empty string
   
  // single input and two numbers
  const nums = numbers.split(",").map(Number);
  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };