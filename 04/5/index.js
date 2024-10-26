const priceItem = 25000
const amountItem = 3
const discountItem = 20

function totalSum(price, amount, discount) {
    Sum = (price * amount) * (1 - discount / 100)
    return Sum
}

console.log(totalSum(priceItem, amountItem, discountItem))