import { Constructable } from "./school-token" 

@LogClass("Teacher decorator")
class TeacherOne {
    constructor(public id: number, public name: string) {
        console.log("Constructing a teacher")
    }
}

// create a logger
const logger = {
    info: (message: string) => {
        console.log(`[INFO]: ${message}`)
    }
}

// create constructor wrapping decorator factory (returns a decorator function)
function LogClass(message: string) {
    return function <T extends Constructable>(constructor: T) {
        const loggingConstructor: any = function(...args: any[]) {
            logger.info(message)
            return new constructor(...args)
        }
        loggingConstructor.prototype = constructor.prototype
        return loggingConstructor
    }
}


const teacher = new TeacherOne(1234, "master")
for (let i = 0; i < 10; i++) {
    const teacher = new TeacherOne(i+1, "Loune Johnson")
}