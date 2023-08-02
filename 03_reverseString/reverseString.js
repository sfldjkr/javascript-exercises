const reverseString = function(string) {
    if (!string) return string;
    // else if string is not empty
    let stringLen = string.length - 1;
    let returnString = "";
    for(let i = stringLen; i > 0; i--) {
        if (!string[i]) {
            returnString += ' ';
            continue;
        }
        returnString += `${string[i]}`;
    }
    returnString += `${string[0]}`;
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
