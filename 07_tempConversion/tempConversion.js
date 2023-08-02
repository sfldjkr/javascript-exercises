const convertToCelsius = function(n) {
  let answer = (n - 32) / 1.8 ;
  if (!(n == 0)) {
    answer = answer.toFixed(1);
  }
  return Number(answer);
};

const convertToFahrenheit = function(n) {
  let answer = (n * 1.8) + 32;
  if (!(n == 0)) {
    answer = answer.toFixed(1);
  }
  console.log(answer)
  return Number(answer);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
