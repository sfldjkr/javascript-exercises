const palindromes = function () {
    let list = arguments[0];
    let nonspcaedList = [];
    for (item of list) {
        if (item === "." || item === " " || item === "," || item === "!") {
            continue;
        };
        // if (typeof +item === 'number') {
        nonspcaedList.push(item.toUpperCase());
        // }
        // else {
        //     nonspcaedList.push(item);
        // };
        
    };
    let reverseList = nonspcaedList.slice().reverse();

    let answer = true;


    for (let index = 0; index < reverseList.length; index++) {

        if (reverseList[index] !== nonspcaedList[index]) {
            return false;
        };

    };
    return answer;

};



module.exports = palindromes;
