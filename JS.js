function getMathResult(glav, pes) {
    if(typeof(pes) == 'string' || pes <= 0){
        return pes;
    }

    let res = '';

    for(let i = 1; i <= pes; i++) {
        if(i === pes){
            res += `${glav * i}`;
            // Тут без черточек в конце
        }else{
            res += `${glav * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    console.log(res)


}
getMathResult(10,7)