class User {
    private userName: string;
    private token: string = ""
    readonly timeStamp: number = new Date().getTime()

    constructor(userName: string, token: string){
        this.userName = userName;
        this.token = token
    }

    logOut(): void {
        this.userName = ""
        this.token = ""
    }

    getUser() {
        return {
            userName: this.userName,
            token: this.token,
            createAt: this.timeStamp
        }
    }

    protected renewToken (newToken: string) {
        this.token = newToken;
    }
}

class Cashier extends User {
    balance: number = 0;
    float: number = 0;

    start(balance: number, float: number): void {
        this.balance = balance;
        this.float = float;
    }
}

class Inventory extends User {
    products: string[] = [];

    // overide constructor method and add new prop
    constructor(userName: string, token: string, products: string[]) {
        // call parent constructor method
        super(userName, token)
        // set new prop
        this.products = products
    }
}

class FloorWorker extends Inventory {
    floorStack: string[] = [];

    checkOut(id: number) {
        if (this.products.length >=0){
            this.floorStack.push(
                this.products[id]
            )
        }
    }
}

// init user
const basicUser = new User("user1", "12345678ttt")
console.log(basicUser)

// init cashier
const cashUser = new Cashier("user2", "1234567")
console.log(cashUser)
cashUser.start(10, 1.5)
console.log(cashUser)

// init invcentory
const iUser = new Inventory("user3", "123456875", ["orange", "mango", "playStation 2"])
console.log(iUser)

// floorWorker
const fUser = new FloorWorker("user4", "12345764875", ["orange", "mango", "playStation 2"])
fUser.checkOut(0)
console.log(fUser.products)
console.log(fUser.floorStack)
