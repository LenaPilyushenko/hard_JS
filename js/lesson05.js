"use strict";

let arr = ['222222', '8547', '4325', '18587', '51754', '2424', '999'];

for (let i = 0; i < 7; i++) {
  
    let srt = arr[i];
    
    if ( srt[0] === '2' || srt[0] === '4') {
        console.log(srt);
    }

}

for (let i = 2;  i <= 100; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j !== 0) {continue;}
    flag += 1;
  }
  if (!flag) {console.log(i, 'простое число, делители числа' , 1 , ' и ', i);}
}