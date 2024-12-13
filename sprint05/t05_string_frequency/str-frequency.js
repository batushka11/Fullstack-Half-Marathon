const StrFrequency = class {
    constructor(str) {
        this.str = str;
    }

    letterFrequencies() {
        let freq = {};
        for (let i = 0; i < this.str.length; i++) {
            let char = this.str[i].toUpperCase();
            if (/[a-zA-Z]/.test(char)) {
                if (!freq[char]) {
                    freq[char] = 0;
                }
                freq[char]++;
            }
        }
        return freq;
    }

    wordFrequencies() {
        const words = this.str.toUpperCase().split(/\s+/);
        const freq = {};
        if (!this.str) {
            let arr = {};
            arr[''] = 1;
            return arr;
          }
        words.forEach(word => {
            const cleanWord = word.replace(/[^a-zA-Z]/g, '');
            if (cleanWord) {
                if (!freq[cleanWord]) {
                    freq[cleanWord] = 0;
                }
                freq[cleanWord]++;
            }
        });
        return freq;
    }

    reverseString() {
        return this.str.split('').reverse().join('');
    }
}

module.exports = StrFrequency;