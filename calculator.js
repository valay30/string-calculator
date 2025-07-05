function add(numbers) {
  if (numbers === "") return 0; //empty string
  return parseInt(numbers); // single input
}

module.exports = { add };