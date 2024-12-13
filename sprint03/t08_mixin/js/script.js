let houseMixin ={
    wordReplace(oldWord,newWord){
        this.description = this.description.replaceAll(oldWord,newWord);
    },

    wordDelete(word){
        this.description = this.description.replaceAll(word,"");
    },

    wordInsertAfter(after, word) {
        let result = this.description.split(/\s+/);
        for (let i = 0; i < result.length; i++) {
            if (result[i] === after) {
                result.splice(i + 1, 0, word);
            }
        }
        this.description = result.join(" ").trim();
    },

    wordEncrypt(){
        const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
        this.description = this.description.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + 13]);
    },

    wordDecrypt(){
        this.wordEncrypt();
    }

}