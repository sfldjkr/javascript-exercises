const removeFromArray = function() {
    let argsCount = arguments.length;
    let list = arguments[0];
    let modifiedList = [];
        chorus: for (let v = 0; v < list.length; v++) {

                    for(let i = argsCount; i > 0; i--) {
                        if (list[v] === arguments[i]) {
                            continue chorus;
                        };
                    };
                modifiedList.push(list[v]);
                };
    return modifiedList;


};

// Do not edit below this line
module.exports = removeFromArray;
