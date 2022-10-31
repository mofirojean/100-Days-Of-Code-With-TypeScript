// create a union type
type Age = number | string

// function to make use of the union type
function myAge(age: Age): Age {
    if (typeof age === "number") {
        return `My age is ${age} and this is a number`
    } else if (typeof age === "string") {
        return `My age is ${age} and this is a string`
    } else {
        return `Incorrect type!! "${typeof(age)}"`
    }
}

// testing the method
console.log(myAge(45))
console.log(myAge("45"))
