// creating a class generic
class Box<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value
    }

    public get value(): T {
        return this._value;
    }
    
    // here the U generic type can be used only 
    // inside the map method declaration
    map<U>(mapper: (value: T) => U): U {
        return mapper(this.value)
    }
}
