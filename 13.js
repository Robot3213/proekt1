const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square * data.budget;

//     if(volume > data.budget){
//         console.log(`все нормально денег хватает, ${volume - shoppingMallData.budget} = вот столько у тебя осталось `)
//     }else{
//         console.log(`Пополните баланс вам не хватает ${shoppingMallData.budget-volume} тг`)
//     }
// }
// isBudgetEnough(shoppingMallData);


function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        console.log('Бюджета достаточно');
    } else {
        console.log('Бюджета недостаточно') ;
    }
}

isBudgetEnough(shoppingMallData);