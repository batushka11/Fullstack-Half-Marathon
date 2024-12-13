const fs = require('fs');

class File {
    constructor(filename) {
        this.dir = 'temp';
        this.filename = filename.endsWith('.txt') ? filename : filename + '.txt';
        this.filePath = `${this.dir}/${this.filename}`;
    }

    create() {
        fs.accessSync(this.dir, fs.constants.R_OK);
        fs.writeFileSync(this.filePath, '');
    }

    write(content) {
        fs.accessSync(this.filePath, fs.constants.R_OK);
        this.create();

        fs.appendFileSync(this.filePath, content);
    }

    read() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return data ? data : 'File is Empty';
    }

    delete() {
        fs.accessSync(this.filePath, fs.constants.R_OK);
        fs.rmSync(this.filePath);
    }
}

module.exports = {File};