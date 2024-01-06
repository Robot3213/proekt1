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


let lenth = 7;
let result = '';

for(let i = 1; i < lenth; i++) {

    for(let j = 0;  j < i; j++) {
        result += '*';
        
    }
    result += '\n';
    
}
console.log(result);

