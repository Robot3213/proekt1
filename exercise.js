/*Задачи:

1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

Примеры:

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"*/

// Место для первой задачи

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || !Number.isInteger(length)){
        return "При вычесления вывелась ошибка, попробуйте еше раз!"
    }

    let volum = 0;
        arae = 0;

    volum = length*length*length;
    arae = 6 * length*length;

    return `Объем куба: ${volum}, площадь всей поверхности: ${arae}`
}
calculateVolumeAndArea(5);

// Место для второй задачи
function getCoupeNumber(vagon) {
    if (typeof(vagon) !== 'number' || vagon < 0|| !Number.isInteger(vagon)){
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }else if ( vagon === 0 && vagon > 36) {
        console.log("Таких мест в вагоне не существует");
    }

    console.log(Math.ceil(vagon / 4));
}
getCoupeNumber(5);

//1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
//Пример:
//getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
//getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
//getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
//getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)){
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = 0;
    switch (hoursStr) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`)
}
getTimeFromMinutes(395)

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0
// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' ||typeof(c) !== 'number' ||typeof(d) !== 'number') {
        console.log('0');
    }else{
        console.log(Math.max (a,b,c,d));
    }
}
findMaxNumber(1, 66, 11);




// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {
    name: john,
    surname: Smith, 
}
user.name = Pete;
delete(user.name)

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  let j = 0;
  for(let key in salaries){
    key += salaries[i];
  }
  console.log(key);


//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2

function multiplyNumeric(obj) {
    obj = 400,
    val = 250,
    huma = "gari"
}
// for(let key in obj){
//     if(typeof(obj[key] == "number")){
//         obj[key] * 2;
//     }else{
//         console.log('You are gay')
//     } 
//     console.log(obj[key])
// }

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  multiplyNumeric(obj);

  const a=[1,2,3];
  const b=[1,2,3];

  console.log(a===b);