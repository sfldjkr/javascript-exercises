// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
const fibonacci = function() {
    let num = arguments[0];
    if (num < 0) {
        return "OOPS";
    };
    num = Number(num);
    let sum = 0;
    let numberOne = 0;
    let numberTwo = 0;
    let pastNum = 0;
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            sum = 1;
            numberOne = 0;
            numberTwo = 1;
        }
        else {
            sum = numberOne + numberTwo;
            numberOne = numberTwo;
            numberTwo = sum;
        }
    };
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;



// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)

// fibonacci(6); // returns 8