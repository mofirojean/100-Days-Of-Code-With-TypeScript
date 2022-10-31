interface ErrorMessage {
    // can only be string | number| symbol
    [msg: number]: string;
    // you can add other propertie once they are of thesame type 
    apiId: number;
}

// message object of index type ErrorMessages
const errorMessages: ErrorMessage = {
    0 : "system error",
    1 : "overload",
    apiId: 12345
}

// console out object
console.log(errorMessages)
