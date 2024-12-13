function checkDivision(beginRange = 1, endRange = 100){
    for(let i = beginRange; i <= endRange; i++){
        let message = null;
        if(i % 2 === 0){
            message = "even";
        }
        if(i % 3 === 0){
            if(message === null){
                message = "a multiple of 3";
            }
            else{
                message += ", a multiple of 3";
            }
        }
        if(i % 10 === 0){
            if(message === null){
                message = "a multiple of 10";
            }
            else{
                message += ", a multiple of 10";
            }
        }
        if(message === null){
            console.log(`${i} -`)
        }
        else{
            console.log(`${i} is ${message}`);
        }
    }
}

let beginRange = +prompt("Write a start of interval","1");
let endRange = +prompt("Write the end of interval","100");
checkDivision(beginRange,endRange);