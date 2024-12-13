const validator = {
    get(target, prop){
        console.log(`Trying to access the property '${prop}' ...`);
        if(prop in target){
            return target[prop];
        }
        return false;
    },

    set(obj, prop, value) {
        if (prop === "age") {
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not an integer");
            }
            if (value > 200 || value < 0) {
                throw new RangeError("The age is invalid");
            }
        }
        console.log(`Setting value ${value} to '${prop}'`);
        obj[prop] = value;
        return true;
    }
}