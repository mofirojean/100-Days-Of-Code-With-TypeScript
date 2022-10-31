import {PropertyDescriptor } from "./instance_func";

class TeacherCase {
    private _title: string = ""
    constructor (public name: string){}

    @Enumerable(true)
    public get title() {
        return this._title
    }

    public set title(value: string){
        this._title = value
    }

    @Enumerable(true)
    public teach() {
        console.log(`${this.name} is teaching`)
    }
    
}

const teacher = new TeacherCase("Jognn Smith")
for (const key in teacher){
    console.log(key)
}

function Enumerable(value: boolean) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}
