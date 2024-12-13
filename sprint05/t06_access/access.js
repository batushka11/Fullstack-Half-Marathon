const Access = class{
    mark_LXXXV;

    set mark_LXXXV(str){
        this.mark_LXXXV = str;
    }

    get mark_LXXXV(){
        if(this.mark_LXXXV === undefined){
            return 'undefined';
        }
        else if(this.mark_LXXXV === null){
            return 'null';
        }
        else{
            return this.mark_LXXXV;
        }
    }
}

module.exports = Access;