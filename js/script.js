
let num = 266219;
let newNum = String(num).split('');
let mult = newNum.reduce(function(previousValue, item) { 
    return previousValue * item;
}, 1);
console.log('произведение элементов числа  =  ' + mult); 
console.log(String(mult **= 3).substr(0,2));
