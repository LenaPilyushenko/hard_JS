'use ctrict';

const weekRu = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье',
    weekEn = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
    namePerson = 'Артем',
    arrWeek = new Map([
        ['ru', ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']],
        ['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']],
    ])
;

let lang = prompt('На каком языке вывести дни недели? ru-en');
console.log ('решение через if');
if (lang === 'ru') {
    console.log (weekRu);
} else {
    console.log(weekEn);
}
console.log ('решение через switch-case ');
switch (lang) {
    case 'ru' :
        console.log (weekRu);
        break;
    case 'en' :
        console.log(weekEn);
        break;
    default :
        console.log('не верно');
}
console.log ('через многомерный массив ');
console.log(arrWeek.get(lang)); 

namePerson !== 'Артем' ? namePerson !== 'Максим' ? 
console.log('Студент') : console.log ('Преподаватель') : console.log ('Директор');

