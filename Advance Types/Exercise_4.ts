type ProductId = {
    name: string,
    price: number,
    amount: number
} 

type Post = {
    header: string,
    method: string,
    product: ProductId
}

type Put = {
    header: string,
    method: string,
    product: ProductId,
    productId: number
}

type SomeRequest = Post | Put
const product_list: ProductId[] = []

// handler function
function ProcessRequest(request: SomeRequest) {
    if ("productId" in request) {
        product_list.forEach((p: ProductId, i: number) => {
            product_list[request.productId] = {
                ...request.product
            };
        });
    } else {
        product_list.push(request.product)
    }
}

// sample products
const apple: ProductId = {
    name: "apple",
    price: 12345,
    amount: 10
}

const mango: ProductId = {
    name: "mango",
    price: 37513,
    amount: 15
}

const postAppleRequest: Post = {
    header: "zzzzz",
    method: 'new',
    product: apple,
};
const putMangoRequest: Put = {
    header: "ggggg",
    method: 'update',
    product: mango,
    productId: 2
};

ProcessRequest(postAppleRequest)
ProcessRequest(putMangoRequest)

console.log(product_list)