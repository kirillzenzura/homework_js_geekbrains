function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}
let product1 = new Product("bottle", 150, 0);
let product2 = new Product("glass", 50, 0);
let product3 = new Product("spoon", 75, 0);

let bottle = document.getElementById("buyButtonBottle");
let glass = document.getElementById("buyButtonSpoon");
let spoon = document.getElementById("buyButtonGlass");
bottle.addEventListener("click", function () { ++product1.count });
glass.addEventListener("click", function () { ++product2.count });
spoon.addEventListener("click", function () { ++product3.count });

let basketArr = [product1, product2, product3];
let basketData = [];
function countBasketPrice() {
    let basketSum = +0;
    let basketCount = +0
    for (let itemNumber = 0; itemNumber < basketArr.length; itemNumber++) {
        basketSum = basketSum + basketArr[itemNumber].count * basketArr[itemNumber].price;
        basketCount = basketCount + basketArr[itemNumber].count;
    }
    basketData = [basketCount, basketSum];
    return basketData;
}
function basketShow() {
    let basket = document.createElement("div");
    basket.classList.add("basket");
    document.body.appendChild(basket);
    for (let i = 0; i < basketArr.length; i++) {
        if (basketArr.length == 0) {
            let textRow = document.createElement("div");
            textRow.append("Корзина пуста");
        } else {
            let row = document.createElement("div");
            row.classList.add("basketRow");
            basket.appendChild(row);
            let name = document.createElement("div");
            name.append(basketArr[i].name);
            let price = document.createElement("div");
            price.append(basketArr[i].price + " руб");
            let count = document.createElement("div");
            count.append(basketArr[i].count + " шт.");
            row.appendChild(name);
            row.appendChild(price);
            row.appendChild(count);

        }
    }
    let textBasket = document.createElement("div");
    textBasket.classList.add("basketRow");
    countBasketPrice();
    let userText = ("В корзине " + basketData[0] + " товаров, на сумму " + basketData[1] + " рублей.")
    textBasket.append(userText);
    basket.appendChild(textBasket);
}
const showBasket = document.getElementById("basketIcon");
showBasket.addEventListener("click", basketShow)
