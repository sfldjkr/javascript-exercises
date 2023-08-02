const sumAll = function(start, finish) {
    let sum = 0;
    if (start < 0 || finish < 0) {
        return 'ERROR';
    }
    if (typeof start == typeof finish) {
        if (start < finish) {
            for(let i = start; i < finish + 1; i++) {
                sum += i;
            };
        }
        else {

            for(let v = start; v > finish - 1; v--) {
                sum += v;
                console.log(v);
            };
            
        };
        return sum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
