const palindromes = function (originalString) {
    return originalString.replace(/[^A-z]/g, "").toLowerCase() === Array.from(originalString.replace(/[^A-z]/g, "").toLowerCase()).reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
