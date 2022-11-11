import { fetchJson } from "./identity";

(async () => {
    interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const {data} = await fetchJson<Todo>('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data.title)
})();

// generics have Scope
function map<T, U>(fn: (item: T) => U) {
    return (items: T[]) => {
        return items.map(fn)
    }
}

const multiplier = map((x: number) => x * 2)
const multiplied = multiplier([1, 2, 3])
console.log(multiplied)

// generic constrains
function getLength<T extends any[] | string> (x: T): number {
    return x.length;
}

// driver method
getLength([1,2,3])
getLength("Hello World")
getLength(123)


// creating a toDate function
function toDate<T extends Date | number>(value: T) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}

