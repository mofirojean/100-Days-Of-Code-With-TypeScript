// create car object
// working with type aliase
type CarInfo = {
    manufacturer: string,
    model: string,
    year: string
}

class CarClass {
    manufacturer: string
    model: string
    year: string
    odemeterReading: number = 75

    constructor(car: CarInfo) {
        this.manufacturer = car.manufacturer
        this.model = car.model
        this.year = car.year
    }

    getDescriptiveName() {
        return `${this.manufacturer} ${this.model} ${this.year}`
    }

    readOdometer() {
        return `This Car has ${this.odemeterReading} on it.`
    }

    updateOdometer(mileage: number) {
        if (mileage >= this.odemeterReading) {
            this.odemeterReading = mileage
        } else {
            console.log(`You can't roll back the odometer reading`)
        }
    }

    incrementOdometerReading(miles: number) {
        this.odemeterReading += miles
    }

    fillGasTank() {
        return `Filling gas tank.....\ngas tank Filled.`
    }

}

// inheritance
class ElectricCar extends CarClass {
    batterySize: Battery = new Battery()
    constructor(car: CarInfo){
        super(car)
    }

    // overriding methods
    fillGasTank(): string {
        return "Car does not have a gas tank"
    }
}


class Battery {
    batterySize: number = 75

    describeBattery() {
        return `This car has a ${this.batterySize}-KWH battery life.`
    }
}

// testing the car processd
const sampleCar1: CarInfo = {
    manufacturer: "Audi",
    model: "A4",
    year: "2019"
}
const sampleCar2: CarInfo = {
    manufacturer: "BMW",
    model: "S",
    year: "2022"
}

// car 1
const my_car = new CarClass(sampleCar1)
console.log(my_car.getDescriptiveName())
console.log(my_car.readOdometer())
console.log(my_car.fillGasTank())
my_car.updateOdometer(65)


// car 2
const my_car_2 = new CarClass(sampleCar2)
console.log(my_car_2.getDescriptiveName())
console.log(my_car_2.readOdometer())
console.log(my_car_2.fillGasTank())
my_car_2.updateOdometer(100)
console.log(my_car_2.odemeterReading)

// working with an electric car
const sampleCar3: CarInfo = {
    manufacturer: "Tesla",
    model: "S",
    year: "2022"
}
const electric_car = new ElectricCar(sampleCar3)
console.log(electric_car.getDescriptiveName())
console.log(electric_car.fillGasTank())
console.log(electric_car.batterySize.describeBattery())

