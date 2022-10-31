// create a motor type
type Motor = {
    color: string,
    doors: number,
    wheels: number,
    fourWheelDrive: boolean
}

// create a Truch type
type TruckI = {
    doubleCab: boolean,
    winch: boolean
}

// pickuptruck type by intersection of motor and truck
type PickUpTruck = Motor & TruckI;

const truckBuilder: PickUpTruck = {
    color: "red",
    doors: 4,
    doubleCab: true,
    wheels: 4,
    fourWheelDrive: true,
    winch: true
}

// create a truck builder function
function TruckBuilder(truckbuilder: PickUpTruck): PickUpTruck {
    return truckbuilder
}

console.log(TruckBuilder(truckBuilder))
