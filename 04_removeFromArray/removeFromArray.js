const removeFromArray = function (arrayToRemoveFrom, ...valuesToRemove) {
    let result = [];
    for (const currentValue of arrayToRemoveFrom) {
        if (valuesToRemove.includes(currentValue)) {
            continue;
        } else {
            result.push(currentValue);
        }
    }
    console.log(result)
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
