interface Item {
    name: string;
    quantity: number;
}

class Bag {
    private bag: Item[] = []

    isEmpty() {
        return this.bag.length === 0;
    }

    numItems() {
        return this.bag.length
    }

    addItem(item: Item) {
        this.bag.push(item)
    }

    removeItem(item: Item) {
        const index = this.bag.indexOf(item)
        const itemX = this.bag[index]
        this.bag.splice(index, 1)
        return itemX
    }

    displayBag() {
        console.log("---- Bag Items ----")
        for (let i = 0; i < this.bag.length; i++) {
            console.log(` --> ${i} : name -${this.bag[i].name}, quantity - ${this.bag[i].quantity}`)
        }
    }

}

// create a bag object
const bag: Bag = new Bag()
const item: Item = {
    name: "Spoon",
    quantity: 8
}

const item2: Item = {
    name: "Plates",
    quantity: 8
}

const item3: Item = {
    name: "Car",
    quantity: 8
}

bag.addItem(item)
bag.addItem(item2)
bag.addItem(item3)
bag.displayBag()
bag.removeItem(item2)
bag.displayBag()
