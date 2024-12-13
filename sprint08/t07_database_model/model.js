const db = require('./db.js');

class Model {
    constructor(attributes = {}) {
        Object.assign(this, attributes);
    }

    static async find(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const [results] = await db.promise().query(query, [id]);

        return new this(results[0]);
    }

    async delete() {
        const query = `DELETE FROM ${this.constructor.tableName} WHERE id = ?`;
        const [results] = await db.promise().query(query, [this.id]);
        return true;
    }

    async save() {
        if (this.id) {
            const query = `UPDATE ${this.constructor.tableName} SET ? WHERE id = ?`;
            const [results] = await db.promise().query(query, [this, this.id]);

            return this;
        } else {
            const query = `INSERT INTO ${this.constructor.tableName} SET ?`;
            const [results] = await db.promise().query(query, this);
            
            this.id = results.insertId;
            return this;
        }
    }
}

module.exports = Model;

