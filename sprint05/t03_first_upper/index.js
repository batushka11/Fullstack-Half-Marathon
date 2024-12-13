exports.firstUpper = function(string){
    if(string === null){
        return "";
    }
    let result = string;
    result = string.trim().charAt(0).toUpperCase() + string.trim().slice(1).toLowerCase();
    
    return result;
}