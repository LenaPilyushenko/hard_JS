'use strict';

const bthColor = document.querySelector('.btn-color'),
      bodyBlock = document.querySelector('body'),
      text = document.querySelector('p');
      
bthColor.addEventListener('click' , function() {
    const rundNum = '#'+ Math.floor(Math.random()*16777215).toString(16);
    bodyBlock.style.background = rundNum;
    text.textContent = rundNum;
    this.style.background = '#fff';
    this.style.color = rundNum;
});

