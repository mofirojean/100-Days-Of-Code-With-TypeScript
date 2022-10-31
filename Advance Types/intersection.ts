// product type
type ProductI = {
    name: string,
    price: number,
    description: string
}

// order type 
type Order = {
    orderId: string,
    amount: number,
    discount?: number
}

// Alias of Cart intersect Product and Order
type Cart = ProductI & Order

// cart of type Cart
const cart: Cart = {
    name: "book",
    price: 1000,
    description: "iroko clean white paper",
    orderId: "123",
    amount: 10
}
