'use ctrict';

function transformStr (data) {

    if (typeof data  === 'string') {
        let newStr = (data.trim());
        if (newStr.length > 30) {
            return (newStr.substr(0,30) + '...');
        } else {
            return newStr;
        }
    } else {
        alert('В качестве аргумента передана не строка');
    }

}

(transformStr(15));

console.log(transformStr('   часть текста скрывается и вместо них появляются три точки    '));