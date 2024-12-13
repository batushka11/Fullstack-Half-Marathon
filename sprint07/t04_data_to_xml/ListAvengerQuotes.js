const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const { AvengerQuote } = require('./AvengerQuote');

class ListAvengerQuotes {
    constructor(data) {
        this.data = data.map(value => new AvengerQuote(value));
    }

    toXML(filename) {
        const pathFile = path.resolve() + '/' + filename;
        if (fs.existsSync(pathFile))
            return fs.readFileSync(pathFile, 'utf-8');

        const builder = new xml2js.Builder();
        const toXML = builder.buildObject(this.data);
        fs.writeFileSync(pathFile, toXML);
        return toXML;
    }

    fromXML(filename) {
        const pathFile = path.resolve() + '/' + filename;
        let res = '';

        xml2js.parseString(fs.readFileSync(pathFile, 'utf-8'), (err, result) => {
            if (err)
                return err;
            res = result;
        });

        return JSON.stringify(res);
    }
}

module.exports = { ListAvengerQuotes };