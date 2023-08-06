const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
  let list = arguments[0];
  if (list.length === 0) return 0;
  if (list.length === 1) return list[0];
  let total = 0;
  list.forEach(item => total += item);
  return total;

};

const multiply = function() {
  let list = arguments[0];
  let total = 1;
  list.forEach(item => total *= item);
  return total;
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	let num = arguments[0];
  // suppose the number is 5
  if (num === 0) return 1;
  let total = 1;
  for (let i = 1; i < num + 1; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
