const fs = require('fs');

class FileList {
    constructor() {
        this.dir = 'temp';
        this.list = this.getListDefault();
    }

    getListOnHTML() {
        if (!this.list.length > 0) {
            return '';
        }
        const list = this.list.map(file => `<li data-file="${file}" class="btn-file">${file}</li>`);
        return `<ul>${list.join('')}</ul>`;
    }

    getListDefault() {
        fs.accessSync(this.dir, fs.constants.R_OK);
        const data = fs.readdirSync(this.dir, { encoding: 'utf-8', withFileTypes: true });
        return data.map(file => file.name);
    }

    isNotEmpty(){
        return this.list.length > 0;
    }
}

module.exports = {FileList};