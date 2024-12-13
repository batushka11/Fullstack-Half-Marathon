const Model = require('../model.js');

class User extends Model {
    constructor(attributes = {}) {
        super(attributes);
        this.id = attributes.id;
        this.login = attributes.login;
        this.fullname = attributes.fullname;
        this.password = attributes.password;
        this.email = attributes.email;
    }

    static get tableName() {
        return 'users';
    }
}

module.exports = User;