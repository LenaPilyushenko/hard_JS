
let num = 266219;
let numMult = 1;
let numResidue;

let newNum = num;

while  (newNum > 0) {
    numResidue = newNum % 10;
    numMult = numMult * numResidue;
    newNum = (newNum - numResidue) / 10;
} 

console.log('произведение (умножение) цифр числа ' + num + ' = ', numMult);

numMult **= 3;

//console.log('в третьей степени ' + numMult);

var str = String(numMult);

//console.log('строка ' + str);

//console.log('тип ' + typeof str);

console.log(str.substr(0,2));