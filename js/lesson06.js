'use strict';

function randomInt(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

const isNumber = function(userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
};
  
const randomNumber = randomInt(1,100);
const test = 50;

function play(attempts) {
    let x = attempts;
    const playOver = function () {
      alert('Игра окончена, всего доброго');
      return;
    };
 
    if (attempts < 1) {
      confirm ('Попытки закончились, хотите сыграть еще?') ?  play(attempts) : playOver(); 
    } 
    
    let userNumber = prompt('Угадай число от 1 до 100?');
    if (+userNumber === test) {
        alert('Поздравляю, Вы угадали!!!');
        return;
    }  if (userNumber === null) { 
        alert('Игра окончена');
        return;
    } if (!isNumber(userNumber)) {
        alert('Введи число!');
        play();
    } if (userNumber < test) {
        alert('Загаданное число больше');
        x--;
        play(x);
    } else {
        alert('Загаданное число меньше');
        x--;
        play(x);
    }    
} 
   
play(3);