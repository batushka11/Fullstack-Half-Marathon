function checkBrackets(str) {
    if (typeof str !== 'string' || !str.match(/[\(\)]/)) {
        return -1;
    }

    let counter_open_br = 0;
    let counter_close_br = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            counter_close_br++;
        } 
        else if (str[i] === ')') {
            if (counter_close_br === 0) {
                counter_open_br++;
            } 
            else {
                counter_close_br--;
            }
        }
    }
    return counter_open_br + counter_close_br;
}