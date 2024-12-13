const houseBlueprint = {
    address: "",
    date: new Date(),
    description: "",
    owner: "",
    size: 0,
    _averageBuildSpeed: 0.5,
    getDaysToBuild(){
        return this.size / this._averageBuildSpeed;
    }
}

function HouseBuilder(adr,dscr,own,sz,cnt){
    const house = Object.create(houseBlueprint);
    house.address = adr;
    house.description = dscr;
    house.owner = own;
    house.size = sz;
    house.roomCount = cnt;
    return house;
}