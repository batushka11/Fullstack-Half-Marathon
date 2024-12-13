const Model = require('../model.js');

class Hero extends Model {
    constructor(attributes = {}) {
        super(attributes);
        this.id = attributes.id;
        this.name = attributes.name;
        this.description = attributes.description;
        this.class_role = attributes.class_role;
        this.race_id = attributes.race_id;
    }

    static get tableName() {
        return 'heroes';
    }
}

module.exports = Hero;
