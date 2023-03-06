const sumAll = function (valueOne, valueTwo) {
    if ((typeof valueOne === 'number' && valueOne >= 0) && (typeof valueTwo === 'number' && valueTwo >= 0)) {
        let sortedValues = []
        sortedValues.push(valueOne)
        sortedValues.push(valueTwo)
        sortedValues.sort()
        let result = 0
        for (let i = sortedValues[0]; i <= sortedValues[1]; i++) {
            result += i;
        }
        return result
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
