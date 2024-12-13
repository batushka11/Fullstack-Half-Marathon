const EatException = class extends Error{
    constructor(){
        super("No more junk food, dumpling");
    }
}

module.exports = EatException;