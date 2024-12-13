String.prototype.removeDuplicates = function(){
    let result = str.split(/\s+/);
    let uniqueWords = [];
    for (let word of result) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    str = uniqueWords.join(' ').trim();
    return str;
}