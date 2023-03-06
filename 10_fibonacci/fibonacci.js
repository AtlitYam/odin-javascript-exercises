const fibonacci = function (cycles) {
    if (cycles < 0) {
        return "OOPS"
    }
    let OlderAmount = 0;
    let OldAmount = 1;
    let currentAmount = 1;
    for (let i = 1; i < cycles; i++) {
        currentAmount = OlderAmount + OldAmount;
        OlderAmount = OldAmount
        OldAmount = currentAmount
    }
    return currentAmount
};

// Do not edit below this line
module.exports = fibonacci;
