function* generator(i) {
    let previous = 1;
    while(true){
        let num = +prompt(`Previous result: ${previous}. Enter a new number: `);
        if(Number.isNaN((num))){
            console.error("Invalid number!")
        }
        else{
            previous += num;
        }
        if(previous > 10000){
            previous = 1;
        }
        yield previous;
    }
}