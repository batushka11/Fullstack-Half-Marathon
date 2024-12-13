class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
};

class Tower extends Building{
    hasElevator;
    arcCapacity;
    height;

    set hasElevator(a){
        this.hasElevator = a;
    }

    set arcCapacity(a){
        this.arcCapacity = a;
    }

    set height(a){
        this.height = a;
    }

    toString(){
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            this.hasElevator ? `Elevator: +`: `Elevator: -`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.height / this.floors}`,

        ].join('\n');
    }
}