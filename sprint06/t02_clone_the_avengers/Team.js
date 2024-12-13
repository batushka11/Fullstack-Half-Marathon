const Team = class{
    constructor(id, avengers){
        this.id = id;
        this.avengers = [...avengers];
    }

    battle(damage) {
        this.avengers.forEach((avenger) => {
            avenger.hp -= damage.damage;
        });

        this.avengers = this.avengers.filter(avenger => avenger.hp > 0);
    }
    calculateLosses(clonedTeam) {
        const cnt = clonedTeam.avengers.length - this.avengers.length;
        if(cnt === 0){
            console.log("We haven't lost anyone in this battle!");
        }
        else{
            console.log(`In this battle we lost ${cnt} Avengers.`);
        }
    }

    clone(){
        return new Team(this.id, this.avengers);
    }
}

module.exports.Team = Team;