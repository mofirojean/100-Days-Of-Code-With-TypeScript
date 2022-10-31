// primetive types 
type Count = number
// object type
type Product = {
    name: string,
    count: Count, // reuse Count
    price: number,
    amount: number
}

// defining a product variable
const products: Product[] = [];

//add product to products array function
function createProduct(product: Product): void {
    products.push(product)
}


// using a for loop to create 5 products
for (let index = 0; index < 5; index++){
    let p: Product = {
        name: `product_${index}`,
        count: index,
        price: 100,
        amount: 15
    } // makes product
    createProduct(p)
}

console.log(products)
