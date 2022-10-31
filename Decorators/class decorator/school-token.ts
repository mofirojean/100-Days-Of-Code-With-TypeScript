@WrapConstructor("decorator")
export class Teacher {
    constructor (public id: number, public name: string) {
        console.log("Constructing a teacher class inheritance")
    }

    // teacher specific code
}

@Token(false)
class Student {
    constructor(public id: number, public name: string) {}
    // student specific code
}

export type Constructable = { new(...args: any[]): {} }

// constructor wrapping decorator function
// this ethod breaks the prototype chain
function WrapConstructor(message: string) {
    return function <T extends Constructable> (constructor: T) {
        const wrappedConstructor: any = function (...args: any[]) {
            console.log(`Decorating ${message}`)
            const result = new constructor(...args)
            console.log(`Decorated ${message}`)
            return result
        }
        wrappedConstructor.prototype = constructor.prototype
        return wrappedConstructor
    }
}

// create the type of our constructor expression decorator function
function Token(hasToken: boolean){
    return function <T extends Constructable>(constructor: T) {
        return class extends constructor {
            token: boolean = hasToken;
        }
    }
}


// testing code
const student = new Student(101, "John Bender")
const teacher = new Teacher(1, "John Smith");
