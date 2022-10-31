// cell phone simulation

class Phone {
    powerButton: boolean;
    mic: boolean;
    speaker: boolean;
    serialNumber: string;
    powerOn: boolean = false;
    restart: boolean = false;

    constructor (powerButton: boolean, mic: boolean, speaker: boolean, serialNumber: string) {
        this.powerButton = powerButton
        this.mic = mic
        this.speaker = speaker
        this.serialNumber = serialNumber
    }

    togglePower(): void {
        this.powerOn ? this.powerOn = false : this.powerOn = true; 
    }

    reboot(): void {
        this.restart = true
    }
}

class Smart extends Phone {
    touchScreen: boolean = true;
    fourG: boolean = true

    constructor(serial: string) {
        super(true, true, true, serial)
    }

    playVideo(filename: string): boolean {
        return true;
    }
}

class Standard extends Phone {
    dialPad: boolean = true;
    threeG: boolean = true;

    constructor(serial: string){
        super(true, true, true, serial)
    }

    NumberToLetter(number: number): string {
        const letter = ["a", "b", "c", "d"]
        return letter[number]
    }
}


// creating instance
const smartPhone = new Smart("1234577985")
const standardPhone = new Standard("12345")

console.log(smartPhone.playVideo("vidOne"))
console.log(standardPhone.NumberToLetter(3))

console.log(smartPhone)
console.log(standardPhone)