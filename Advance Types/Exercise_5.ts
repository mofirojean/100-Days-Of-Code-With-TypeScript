interface ErrorMessageI {
    // can only be string | number| symbol
    [msg: number]: string;
    // you can add other propertie once they are of thesame type 
    apiId: number;
}

// create an error code object
const errorMessageCode: ErrorMessageI = {
    400: "bad request",
    401: "unathorized",
    403: "forbidden",
    apiId: 123445
}

// create an error code array
const errorCodes: number[] = [
    400, 401, 403
]

errorCodes.forEach(
    (code: number) => {
        console.log(
            errorMessageCode[code]
        )
    }
)
