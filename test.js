const conversor = require("./conversor");
const value = 15;
const base = 16;

console.log("Decimal: " + value + " Binary: " + conversor.toBinary(value));
console.log("Decimal: " + value + " Octal: " + conversor.toOctal(value));
console.log("Decimal: " + value + " Hexa: " + conversor.toHexadecimal(value));
console.log("Decimal: " + value + " - Base: " + base + " - Num Convertido: " + conversor.convert(value, base));
/* 
0
2
25
72
1
100 */
