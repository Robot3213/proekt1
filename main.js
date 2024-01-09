// console.log( NaN || 2 || undefined );


// console.log( NaN && 2 && undefined );


// console.log( 1 && 2 && 3 );


// console.log( !1 && 2 || !3 );


// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log( 5 === 5 || 3 < 1 || 5);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }else{
//     console.log('ты гей')
// }


// let lenth = 7;
// let result = '';

// for(let i = 1; i < lenth; i++) {

//     for(let j = 0;  j < i; j++) {
//         result += '*';
        
//     }
//     result += '\n';
    
// }
// console.log(result);


// for(let i = 2; i <= 10; i++){
//     if(i % 2 == 0)
//     console.log(i)
// }
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2; 
// while (i <= 16){
//     if (i % 2 ==1){
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for(let i = 0; i<10; i++){
//         arrayOfNumbers[i] = 5 + i;
//         console.log(i+ '=' + arrayOfNumbers[i])
//     }
    
    
//     // Не трогаем
//     return arrayOfNumbers;

//     // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for(let i = 5; i < 11; i++){
//         console.log(i)
//     }
    
// }

// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//         console.log(i)
//     }
    
// }
    


// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for(let i = 2; i <= 10; i++){
//         if(i % 2 == 0)
//         console.log(i)
//     }

    
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 2; 
//     while (i <= 16){
//         if (i % 2 == 1){
//             console.log(i);
//         }
//         i++;
//     }
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }


// function firstTasqqk() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i = 0; i < arr.length; i++){
//         result[i] = arr[i];
//     }
//     console.log(result)
//     console.log(arr)
//     // Не трогаем
//     return result;
//}


// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++){
//         if(typeof(data[i]) === 'number'){
//             data[i] = data[i]*2;
//         }else if (typeof(data[i] )=== 'string'){
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data)
    
//     // Не трогаем
//     return data;
// }
// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }

// function thirdTaskqq() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }




//     *
//    ***
//   *****
//  *******
// *********
//***********

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result)