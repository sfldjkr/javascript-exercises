const repeatString = function(string,n) {
    let returnString = '';
    if (!n | !string) {
        return '';
    }

    else if (n < 0) {
        return 'ERROR';
    }

    for(let i = n; i > 0; i--) {
        returnString += `${string}`;
    };
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
