function add(numbers) {
  if (numbers === "") return 0; //empty string
   
  // single input, two numbers, multiple numbers, new line, delimiter, negative number 
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const [_, delim, rest] = numbers.match(/^\/\/(.)\n(.*)$/);
    delimiter = new RegExp(delim);
    numbers = rest;
  }

  const nums = numbers.split(delimiter).map(Number);
  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };