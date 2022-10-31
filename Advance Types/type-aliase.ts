// working with type aliase
type OnlyNumbers = number

class NumbersOnly {
    count: number = 0

    setNumber(someNumber: OnlyNumbers){
        this.count = someNumber
    }
}

const num = new NumbersOnly()
num.setNumber(15)


// creating a sample user login form
type UserLogin = {
    name: string,
    email: string,
    token: string,
    lastLogin: number
}

function goodCode(user: UserLogin): {} {
    return user
}
