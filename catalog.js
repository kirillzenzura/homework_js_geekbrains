let $catalog = document.querySelector("#catalog");
let $basket = document.querySelector("#basket");

function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
    basketArr.push(this)
}
function countBasketPrice() {
    let basketSum = +0;
    for (let itemNumber = 0; itemNumber < basketArr.length; itemNumber++) {
        basketSum = basketSum + basketArr[itemNumber].count * basketArr[itemNumber].price;
    }
    return basketSum;
}
function basketCount() {
    let basketCount = +0;
    for (let itemNumber = 0; itemNumber < basketArr.length; itemNumber++) {
        basketCount = basketCount + basketArr[itemNumber].count;
    }
    return basketCount;
}

function drawCatalog() {
    for (let i = 0; i < basketArr.length; i++) {
        $catalog.insertAdjacentHTML("beforeend",
            `<div class="catalog__row " >
            <div class="catalog__field" >${basketArr[i].name}</div>
            <div class="catalog__field">${basketArr[i].price} руб</div>
            <div class="catalog__field"><button id="buyButton" data-id="${[i]}" class="buy_button">Купить</button></div>
        </div>`

        )
    }
}
function drawBasket() {

    $basket.classList.remove("basket_hide")
    $basket.insertAdjacentHTML("beforeend", `<div id="closeBasket"><img src="exit.jpg" class="header__img"> Закрыть     </div>`)
    if (basketCount() == 0) {
        $basket.insertAdjacentHTML("beforeend",
            `<div class="basket__row" >
            <p>Корзина пуста</p>
            </div>`
        )
    } else {
        for (let i = 0; i < basketArr.length; i++) {
            if (basketArr[i].count > 0) {
                $basket.insertAdjacentHTML("beforeend",
                    `<div class="basketRow">
                    <div class="field">${basketArr[i].name}</div>
                    <div class="field">${basketArr[i].count} шт</div>
                    <div class="field">${basketArr[i].price} руб</div>
                    <div class="field"><button  class="delete_button" data-id="${[i]}"> - </button></div>
                    </div>`
                )
            }

        }
        $basket.insertAdjacentHTML("beforeend", `<p class ="basket_text">В корзине ${basketCount()} товаров на сумму ${countBasketPrice()}</p>`)


    }
    let $closeBasket = document.querySelector("#closeBasket");
    $closeBasket.addEventListener("click", function () { $basket.innerHTML = ""; $basket.classList.add("basket_hide"); });
    $basket.insertAdjacentHTML("beforeend",
        `<div class="basket__row" >
            <button  class="buy_button" data-id="next"> Далее </button>
            </div>`
    )
}
function drawAdress() {
    $basket.innerHTML = "";
    $basket.insertAdjacentHTML("beforeend",
        `<div id="closeBasket"><img src="exit.jpg" class="header__img"> Закрыть     </div>
        <div class="basketColumn">
                    <form>
                    <input placeholder = "Ваш город">
                    <input placeholder = "Улица">
                    <input placeholder = "Дом">
                    <input placeholder = "Квартира">
                    <input type="comment" placeholder = "Комментарий">
                    </form>
                    <div class="field"><button  class="buyButton" > Отправить </button></div>
                    </div>`
    )
    let $closeBasket = document.querySelector("#closeBasket");
    $closeBasket.addEventListener("click", function () { $basket.innerHTML = ""; $basket.classList.add("basket_hide"); });

}

let basketArr = [];
new Product("bottle", 150, 0);
new Product("glass", 50, 0);
new Product("spoon", 75, 0);
new Product("Pop-Corn", 500, 0);






drawCatalog();
console.log(basketArr)
let $showBasket = document.getElementById("basketIcon");
$showBasket.addEventListener("click", function () {
    $basket.innerHTML = "";
    drawBasket()
});
$catalog.addEventListener("click", function (event) {
    if (event.target.tagName == 'BUTTON') {
        let index = Number.parseInt(event.target.dataset.id);
        basketArr[index].count = basketArr[index].count + 1;
    }
})
$basket.addEventListener("click", function (event) {
    if (event.target.dataset.id == 'next') {

        drawAdress()
    }
})
