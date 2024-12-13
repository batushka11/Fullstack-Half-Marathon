exports.getAnonymous = function(name, alias, affiliation){
    let obj = class{
        #name;
        #alias;
        #affiliation;

        constructor(name, alias, affiliation) {
            this.#name = name;
            this.#alias = alias;
            this.#affiliation = affiliation;
        }

        get name(){
            return this.#name;
        }
        get alias(){
            return this.#alias;
        }
        get affiliation(){
            return this.#affiliation;
        }
        set name(name){
            this.#name = name;
        }
        set alias(alias){
            rthis.#alias = alias;
        }
        set affiliation(affiliation){
            this.#affiliation = affiliation;
        }
    }

    return new obj(name, alias, affiliation);
}