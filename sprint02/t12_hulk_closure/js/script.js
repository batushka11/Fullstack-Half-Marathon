
function concat(string1, string2){
    if(typeof string1 === 'string' && typeof string2 === 'string'){
        return string1 + ' ' + string2;
    }
    else if(typeof string1 === 'string' && string2 === undefined){
        let count = 0;
        return function func_counter(){
            func_counter.count = ++count;
            let str = prompt("Enter a word for a second string");
            return string1 + ' ' + str;
        }
    }
}