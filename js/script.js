'use strict';

//  'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  

const firstPart = document.createElement('p'),
  secondPart = document.createElement('p');

const nowDate = function () {

const today = new Date(),
      currentYear = today.getFullYear(),
      currentMonth = today.toLocaleString('ru', {month: 'long'}).slice(0,-1) + 'я',
      currentDayWeek = today.toLocaleString('ru', {weekday: 'long'}),
      currentDay =  today.getDate(),
      currentHour = today.getHours(),
      currentMinute = today.getMinutes(),
      currentSecond = today.getSeconds()
;

const signatureHour = function(currentHour) {
    if (currentHour === 1 || currentHour === 21 || currentHour === 0) { return 'час';}
    if (currentHour >= 2 && currentHour <= 4 || currentHour >=22 && currentHour <= 23) { return 'часa';}
    if (currentHour >= 5 && currentHour <= 20) { return 'часов';}
};


let message = ('Сегодня ' + currentDayWeek + ", " + currentDay +
 " " + currentMonth + " " +  currentYear +' года, ' + currentHour +
  ' ' + signatureHour(currentHour) + ' ' + currentMinute + ' минут ' + currentSecond + " секунды");
  firstPart.textContent = (message);


const date = new Date(),
newDate = {
      currentDateYear: today.getFullYear(),
      currentDateMonth: today.getMonth(),
      currentDateDayWeek: today.getDay(),
      currentDateDay: today.getDate(),
      currentDateHour: today.getHours(),
      currentDateMinute: today.getMinutes(),
      currentDateSecond: today.getSeconds()
};

//'04.02.2020 - 21:05:33' 

for (let key in newDate) {
  let value;
  if ( (newDate[key]) < 10) {
     newDate[key] = '0' + newDate[key];
  }
}

  secondPart.textContent = (newDate.currentDateDay + '.' +
  newDate.currentDateMonth  + '.' + newDate.currentDateYear +
   ' - ' + newDate.currentDateHour + ':' + newDate.currentDateMinute + ':' +  newDate.currentDateSecond);
};

setInterval(function() {
  nowDate();
}, 1000);

document.body.appendChild(firstPart);
document.body.appendChild(secondPart);