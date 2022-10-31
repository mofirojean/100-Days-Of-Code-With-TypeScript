interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    writable?: boolean;
    value?: any;
    get?(): any;
    set?(v: any): void
}

class TeacherTwo {
    constructor(public name: string){}

    private _title: string = "";

    @LogMethod("Title property")
    public get title() {return this._title}

    public set title(value: string){this._title = value}

    @LogMethod("Teach method")
    public teach() {
        console.log(`${this.name} is teaching`)
    }

}

// method wrapping decorator factory function
function LogMethod(message: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor){
        if (descriptor.value) {
            const original = descriptor.value
            descriptor.value = function (...args: any[]){
                logger.info(`${message}: Method ${propertyName} invoked`)
                // we are parsing the original arguments to the method
                return original.apply(this, args);
            }
        }
        if (descriptor.set) {
            const original = descriptor.set
            descriptor.set = function (value: any) {
                logger.info(`${message}: Setter for ${propertyName} invoked`)
                // setters accessor take a single parameter, i.e the value to be set
                return original.apply(this, [value])
            }
        }
        if (descriptor.get) {
            const original = descriptor.get
            descriptor.get = function () {
                logger.info(`${message}: Getter for ${propertyName} invoked`)
                // getters accessors do not take paraeters
                return original.apply(this, [])
            }
        }
    }
}

const logger = {
    info: (message: string) => {
        console.log(`[INFO]: ${message}`);
    },
};

const teacher = new TeacherTwo("John Smith")
teacher.teach()
teacher.title = "Mr."
console.log(`${teacher.title} ${teacher.name}`)
