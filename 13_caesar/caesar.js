const caesar = (string, shift) => string.split('').map((char) => caesarShift(char, shift, isCapital(char))).join('')
const caesarShift = (char, shift, isCapital) => isLetter(char) ? String.fromCharCode(mod(char, shift, isCapital)) : char

const isLetter = (char) => char.match(/[A-z]/)
const isCapital = (char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
const codeCorrection = (isCapital) => isCapital ? 65 : 97
const correctShift = (shift) => shift < 0 ? shift + 26 : shift
const mod = (char, shift, isCapital) => ((((char.charCodeAt(0) - codeCorrection(isCapital)) + correctShift(shift)) % 26) + codeCorrection(isCapital))

// Do not edit below this line
module.exports = caesar;
