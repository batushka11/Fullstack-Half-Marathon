class HardWorker {
    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get salary(){
        return this._salary;
    }

    set name(a){
        this._name = a;
    }

    set age(a){
        if(a >= 1 && a < 100){
            this._age = a;
        }
        return;
    }

    set salary(a){
        if(a >= 100 && a < 10000){
            this._salary = a;
        }
        return;
    }

    toObject(){
       return{ 
        name: this.name,
        age: this.age,
        salary: this.salary
        }
    }
}