//Урок 5\
//Задание 1
console.log("Задание 1");
function drawChess() {
    let workspace = document.createElement("div");
    workspace.classList.add("workspace");
    document.body.appendChild(workspace);
    let lettersArr = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];
    let numbersArr = ["", "1", "2", "3", "4", "5", "6", "7", "8"];

    for (let j = 1; j <= 10; j++) {

        if (j == 1 || j == 10) {
            let row = document.createElement("div");
            row.classList.add("row");
            workspace.appendChild(row);
            for (let i = 0; i < lettersArr.length; i++) {
                let field = document.createElement("div");
                field.classList.add("field");
                row.appendChild(field);
                field.append(lettersArr[i]);

            }
        } else if (j % 2 == 0) {

            let row = document.createElement("div");
            row.classList.add("row");
            workspace.appendChild(row);
            let rowIndex = document.createElement("div");
            rowIndex.classList.add("field");
            rowIndex.append(numbersArr[j - 1]);
            row.appendChild(rowIndex);
            for (let i = 0; i < 8; i++) {
                let field = document.createElement("div");
                field.classList.add("field");
                field.classList.add("field__play");
                if (i % 2 == !0) { field.classList.add("black") };
                row.appendChild(field);


            }
            let secondRowIndex = rowIndex.cloneNode(true);
            row.appendChild(secondRowIndex);
        } else {
            let row = document.createElement("div");
            row.classList.add("row");
            workspace.appendChild(row);
            let rowIndex = document.createElement("div");
            rowIndex.classList.add("field");
            rowIndex.append(numbersArr[j - 1]);
            row.appendChild(rowIndex);
            for (let i = 0; i < 8; i++) {
                let field = document.createElement("div");
                field.classList.add("field");
                field.classList.add("field__play");
                if (i % 2 == 0) { field.classList.add("black") };
                row.appendChild(field);


            }
            let secondRowIndex = rowIndex.cloneNode(true);
            row.appendChild(secondRowIndex);
        }
    }







}
drawChess();

console.log("Задание 2");
function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}
let product1 = new Product("bottle", 150, 7);
let product2 = new Product("glass", 50, 10);
let product3 = new Product("spoon", 75, 5);

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
basketShow();


//Урок 4
//Задание 1
/*
console.log("Задание 1")
let numbers_x = { units: 0, dozens: 0, hundreds: 0 }

function numberIntoObject() {
    let x = prompt("Введите число от 0 до 999");
    while (x < 0 || x > 999) {
        alert("Число находится не в рамках диапазона")
        x = prompt("Введите число от 0 до 999");
    }
    for (let i = 1; i < 10; i++) {
        if ((x - i) % 10 == 0) {
            numbers_x.units = i;
            x = x - i;
            break;
        }
    }
    for (let j = 10; j < 100; j += 10) {
        if ((x - j) % 100 == 0) {
            numbers_x.dozens = j / 10;
            numbers_x.hundreds = (x - j) / 100;
            break;

        }
    }
    alert(numbers_x.hundreds + " сотен, " + numbers_x.dozens + " десятков, " + numbers_x.units + " единиц");
    numbers_x = { units: 0, dozens: 0, hundreds: 0 };
}
numberIntoObject();

// Задание 2
console.log("Задание 2");
function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}
let product1 = new Product("bottle", 150, 7);
let product2 = new Product("glass", 50, 10);
let product3 = new Product("spoon", 75, 5);

let basket = [product1, product2, product3];

function countBasketPrice() {
    let basketSum = +0;
    for (let itemNumber = 0; itemNumber < basket.length; itemNumber++) {
        basketSum = basketSum + basket[itemNumber].count * basket[itemNumber].price;

    }
    return basketSum;
}
console.log(countBasketPrice());
*/


//Урок 3
//Задание 1
/*
console.log("Задание 1")
let count = 0;
simpleNumbers:
while (count < 100) {
    count++
    for (let y = 2; y < count; y++) {
        if (count % y == 0) {
            continue simpleNumbers;
        }

    }
    console.log(count);
}
//Задание 2-3
console.log("Задание 2-3")
let basket = [15, 54, 45, 29, 38, 69]

function countBasketPrice() {
    let basketSum = +0;
    for (let itemNumber = 0; itemNumber < basket.length; itemNumber++) {
        basketSum = basketSum + basket[itemNumber];

    }
    return basketSum;
}
console.log(countBasketPrice());
//Задание 4
console.log("Задание 4")
for (let k = 0; k < 10; console.log(k++)) { }

//Задание 5
console.log("Задание 5")
let current = ""
for (let row = 1; row <= 20; row++) {
    current = current + "x";
    console.log(current);
}
*/

//Урок 2
/*
    Задание 1


    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2 так как ++ стоит перед "a" то сначала JS прибавит 1, а затем уже выведет c = 2
    d = b++; alert(d);           // 1 здесь наоборот, сначала выполнится присваивание, а затем переменной B добавится 1.
    c = (2 + ++a); alert(c);      // 5 здесь а = 2, значит ++а = 3, а С будет равно 5
    d = (2 + b++); alert(d);      // 4 здесь b = 2, сначала выполнится операция с этим значением, а затем b увеличится на 1
    alert(a);                    // 3 так как мы выполнили в коде ++a дважды, то 1+1+1= 3
    alert(b);                    // 3 здесь то же самое , b++ выполнено 2 раза и равно 3
    //Задание 2
    var a = 2;
    var x = 1 + (a *= 2);
    alert(x); // x = 5 потому что "*" приоритетнее, чем "="


    Задание 3

    let b = 3;
    let a = 7;
    if (a > 0 && b > 0) {
        alert(a - b);
    }
    if (a < 0 && b < 0) {
        alert(a * b)
    }
    if ((a >= 0 && b < 0) || (a <= 0 && b > 0)) {
        alert(a + b);
    }
    a = parseInt(Math.random() * 15)
    alert("a = " + a)

    Задание 4
    switch (a) {
        case a = 1:
            alert("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 2:
            alert(" 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 3:
            alert("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 4:
            alert("4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 5:
            alert(" 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 6:
            alert("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 7:
            alert("7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 8:
            alert(" 8, 9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 9:
            alert("9, 10, 11, 12, 13, 14, 15");
            break;

        case a = 10:
            alert(" 10, 11, 12, 13, 14, 15");
            break;

        case a = 11:
            alert(" 11, 12, 13, 14, 15");
            break;

        case a = 12:
            alert("12, 13, 14, 15");
            break;

        case a = 13:
            alert(" 13, 14, 15");
            break;

        case a = 14:
            alert(" 14, 15");
            break;

        case a = 15:
            alert("15");
            break;
        default:

            alert("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
            break;

    }
    Задание 5
    function SUM(x, y) {
        c = x + y;
        alert(c);
        return (c);
    }
    function MINUS(x, y) {
        c = x - y;
        alert(c);
        return (c);
    }
    function DIV(x, y) {
        c = x / y;
        alert(c);
        return (c);
    }
    function MULTIPLY(x, y) {
        c = x - y;
        alert(c);
        return (c);
    }

    SUM(4, 2);
    MINUS(4, 2);

    Задание 6
    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case operation = "SUM":
                SUM(arg1, arg2);
                return c;
            case operation = "MINUS":
                MINUS(arg1, arg2);
                return c;
            case operation = "DIV":
                DIV(arg1, arg2);
                return c;
            case operation = "MULTIPLY":
                MULTIPLY(arg1, arg2);
                return c;
        }
    }

    mathOperation(8, 4, "DIV");

    //Задание 7
    alert(null == 0); //false  так как null это одтельный тип данных, null и undefined равны друг другу, но не чему бы то ни было еще. Данное  правило прописано в спецификации языка

    // Задание 8
    function power(val, pow) {

        if (pow == 0) {
            return 1;
        } else {
            return val * power(val, pow - 1);
        }


    }
    alert(power(2, 3));
*/

//Урок 1:
/*
// Задание 1
var TempC = prompt("Введите температуру по цельсию:");
var TempF = (9 / 5) * TempC + 32;
alert("Температура по Фаренгейту " + TempF);
// Задание 2
var admin;
var name = "Василий";
admin = name;
alert(admin);
// Задание 4*
alert("JS-выражение 1000 + '108' будет равно " + (1000 + '108'))
*/