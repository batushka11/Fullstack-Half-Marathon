exports.checkDivision = function(start = 1, end = 60){
    for(let i = start; i <= end; i++){
        let res = "-";
        if(i % 2 === 0){
            res = "is divisible by 2";
        }
        if(i % 3 === 0){
            if(res === "-"){
                res = "is divisible by 3";
            }
            else{
                res += ", is divisible by 3";
            }
        }
        if(i % 10 === 0){
            if(res === "-"){
                res = "is divisible by 10";
            }
            else{
                res += ", is divisible by 10";
            }
        }
        console.log(`The number ${i} ${res}`);
    }
}