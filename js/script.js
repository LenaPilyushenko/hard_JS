'use strict';

const week = ['Понедельние','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const toDay = new Date().getDay() - 1;

for (let i = 0; i < week.length; i++) {
  if (i === toDay) {
    if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
      document.write(`<p><b><i>${week[i]}</i></b></p>`);
    } else {
      document.write(`<p><b>${week[i]}</b></p>`);
    }
  } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    document.write(`<p><b>${week[i]}</b></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}
console.log(week);

// я нашла метод .bold() - но он опять-таки ввыводит
// в консоль значение в тегаз <b></b>  а не жирным, 
// поэтому вывела на страницу. не знаю, насколько правильно,
// в зд вообще написано на экран, а в каком виде не поняла, как сделала так и поняла..