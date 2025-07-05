function add(numbers) {
  if (numbers === "") return 0; //empty string
   
  // single input, two numbers, multiple numbers, new line, delimiter 
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const [_, delim, rest] = numbers.match(/^\/\/(.)\n(.*)$/);
    delimiter = new RegExp(delim);
    numbers = rest;
  }

  const parts = numbers.split(delimiter).map(Number);
  return parts.reduce((a, b) => a + b, 0);
}

module.exports = { add };