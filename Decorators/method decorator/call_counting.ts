
// call counting class
@CountClass("person")
class Person {
    public firstName: string
    public lastName: string
    public birthday: Date
    private _title: string = ""

    constructor(firstName: string, lastName: string, birthday: Date) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = birthday
    }

    @CountMethod("person-title")
    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    @CountMethod("person-full-name")
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    @CountMethod("person-age")
    getAge() {
        const date = new Date()
        return date.getFullYear() - this.birthday.getFullYear()
    }   

}

const count = {}

type Constructable = {new (...args: any[]): {}}


function CountClass(counterName: string) {
    return function <T extends Constructable> (constructor: T) {
        const wrappedConstructor: any = function(...args: any[]) {
            const result = new constructor(...args)
            if (count[counterName]) {
                count[counterName] += 1
            } else {
                count[counterName] = 1
            }
            return result
        }
        wrappedConstructor.prototype = constructor.prototype;
        return wrappedConstructor;       
    }
}

function CountMethod(counterName: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        // method decoration code
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                // counter management code here
                return original.apply(this, args);
            }
        }
        // get property accessor decoration code
        if (descriptor.get) {
            const original = descriptor.get;
            descriptor.get = function () {
                // counter management code here
                return original.apply(this, []);
            }
        }
        // set property accessor decoration code
        if (descriptor.set) {
            const original = descriptor.set;
            descriptor.set = function (value: any) {
                // counter management code here
                return original.apply(this, [value]);
            }
        }
    }
}


// testing class
const first = new Person("Brendan", "Eich", new Date(1961,6,4));
const second = new Person("Anders", "Hejlsberg ", new Date(1960,11,2));
const third = new Person("Alan", "Turing", new Date(1912,5,23));

const fname = first.getFullName();
const sname = second.getFullName();
const tname = third.getFullName();

const fage = first.getAge();
const sage = second.getAge();
const tage = third.getAge();

if (!first.title) {
    first.title = "Mr."
}
if (!second.title) {
    second.title = "Mr."
}
if (!third.title) {
    third.title = "Mr."
}

