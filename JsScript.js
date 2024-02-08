// let user = {
//     name: "Biko",
//     age: 51,
//     color: "red",
//     face: "animals",
// }

// let clone = {
//     karl: 100,
//     biko: 500,
//     gari: 88
// }

// let Users = Object.assign({}, user, clone);

// for(let key in user){
//     Users[key] = user[key];
// }



// Users.name = "Artur";
// console.log(Users);



// let age = prompt("How old are you?", 18);

// let welcom = (age < 18) ? alert("Hi") : alert("Hello");
// welcom();

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
    sum() {
    return this.a + this.b;
  },
    mul() {
    return this.a * this.b;
  },
    min() {
    return this.a - this.b;
  },
  read(){
    this.a = +prompt("a?", 0)
    this.b = +prompt("b?", 0)
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.min() );



const arr = [1, 2, 3, 2, 4];
for(let i=0; i<arr.length; i++) {
  for(let j = 0; j < arr.length; j++) {
    if(arr[i] === arr[j+1]){
      console.log(arr[i])
    }else{
      break
    }
  }
}
