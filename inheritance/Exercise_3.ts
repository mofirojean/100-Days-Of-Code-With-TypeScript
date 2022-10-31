class Vehicle {
    private name: string;
    wheels: number = 4
    bodyType: string;

    constructor(name: string, wheels: number, bodyType: string) {
        this.name = name
        this.wheels = wheels
        this.bodyType = bodyType
    }

    protected getName(): string {
        return this.name
    }

    carInfo() {
        return {
            name: this.name,
            wheels: this.wheels,
            bodyType: this.bodyType
        }
    }
}

class Car extends Vehicle {
    rideHeight: number
    constructor(name: string, wheels: number, bodyType: string, rideHeight: number){
        super(name, wheels, bodyType)
        this.rideHeight = rideHeight
    }

    _carInfo() {
        return {
            ...super.carInfo,
            rideHeight: this.rideHeight
        }
    }
}

class Truck extends Vehicle {
    offRoad: boolean;
    constructor(name: string, wheels: number, bodyType: string, offRoad: boolean){
        super(name, wheels, bodyType)
        this.offRoad = offRoad
    }

    _carInfo() {
        return {
            ...super.carInfo,
            offRoad: this.offRoad
        }
    }
    
}

class Suv extends Truck {
    roofRack: boolean;
    thirdRow: boolean;
    constructor(name: string, wheels: number, bodyType: string, roofRack: boolean, offRoad: boolean, thirdRow: boolean){
        super(name, wheels, bodyType, offRoad)
        this.thirdRow = thirdRow
        this.roofRack = roofRack
    }

    info() {
       return { ...super._carInfo,
        roofRack: this.roofRack,
        thirdRow: this.thirdRow
       }
    }
}

const car = new Car("blueBird", 4, "sedan", 14)
const truck = new Truck("blueBird", 4, "sedan", true)
const suv = new Suv("xtrial", 4, "box", true, true, true)

console.log(car)
console.log(truck)
console.log(suv)