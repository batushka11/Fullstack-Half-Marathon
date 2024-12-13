function addWords(obj, wrds){
    obj.words += ' ' + wrds;
    let result = obj.words.split(/\s+/);
    let uniqueWords = [];
    for (let word of result) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    obj.words = uniqueWords.join(' ').trim();
}

function removeWords(obj, wrds){
    let wordsToRemove = wrds.split(/\s+/);
    let words = obj.words.split(/\s+/);
    let newWords = [];
    for (let word of words) {
        if (!wordsToRemove.includes(word)) {
            newWords.push(word);
        }
    }
    obj.words = newWords.join(' ').trim();
}

function changeWords(obj, oldWrds, newWrds){
    let oldWords = oldWrds.split(/\s+/);
    let newWords = obj.words.split(/\s+/);
    for (let i = 0; i < newWords.length; i++) {
        if (oldWords.includes(newWords[i])) {
            newWords[i] = newWrds;
        }
    }
    obj.words = newWords.join(' ').trim();
    let result = obj.words.split(/\s+/);
    let uniqueWords = [];
    for (let word of result) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    obj.words = uniqueWords.join(' ').trim();
}