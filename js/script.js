// тонкое тесто
const tPizzaThin = id("tPizzaThin");

// навигационный бар
const ulNavBar = className("navbar-nav mr-auto");

// список ингредиентов в навиционном баре
const ingredientListModal = className("list-group");

// итоговая цена(значение)
let finalPrice = 100;

// счетчик для персонального номера ингредиента
let ingredientId = 0;

// спан где находится текущая общая цена
const currentPrice = className("badge badge-secondary currentPrice");

let massIngredient = [];

// обработка нажатия на тонкое тесто
tPizzaThin.onclick = function () {

    // добавляем в навигационный бар элемент с выбором игредиента.
    let liTwoPart = createElement(
        "li",
        "nav-item",
        "<a href=\"#\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#tapeDough\">2.Выбираем начинку</a>\n",
        ulNavBar[0]
    );

    // добавляем в навигационный бар элемент с итоговой ценой.
    let finalPriceElement = undefined;
    if (massIngredient.length === 0) {
        finalPriceElement = createElement(
            "li",
            "nav-item",
            "<a href=\"#\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#checkoutModal\"><h5>Итог: " +
            " <span class=\"badge badge-secondary currentPrice\">" + finalPrice + "р." + "</span></h5>\n",
            ulNavBar[0]
        );
    }

    // делаем карточку с информацией по типу теста и возможностью сменить его.
    let infoCard = createElement(
        "div",
        "card w-100%",
        "<div class=\"card-body\">\n" +
        "            <h5 class=\"card-title\">Вы выбрали тонкое тесто для ващей Орен-пиццы 🍕</h5>\n" +
        "            <p class=\"card-text\">Теперь приступим к выбору начинки нашей пиццы.</p>\n" +
        "            <a href=\"#\" class=\"btn bg-warning\" id=\"btn-dough-change\"  data-toggle=\"modal\" +" +
        "            data-target=\"#confirmModal\">Сменить тесто</a>\n" +
        "        </div>\n",
        document.body
    );

    // деактивируем элемент с возможностью выбора теста, после его выбора.
    const navItemActive = id("nav-item-active");
    navItemActive.className = "nav-link disabled";


    // обработка события нажатия на кнопку удаления выбранного теста.
    const closeChangeDough = id("closeChangeDough");
    closeChangeDough.onclick = function () {
        removeElement(document.body, infoCard);
        removeElement(ulNavBar[0], liTwoPart);
        if (massIngredient.length === 0) {
            removeElement(ulNavBar[0], finalPriceElement);
        }
        navItemActive.className = "nav-link active";
    }
};

// обработка нажатия на ингредиент из списка
ingredientListModal[0].onclick = function (item) {

    // проверяем размер массива ингредиентов, для того, что бы если выполняется первое нажатие
    // мы генерировали область со списком выбранных ингредиентов
    if (massIngredient.length === 0) {

        // создаем объект с параментрами ингредиента
        let Ingredient = {};

        // получаем ингредиент по которому нажал пользователь
        let nameIngredient = item.target.innerHTML.substring(0, item.target.innerHTML.indexOf(" "));
        let priceIngredient = item.target.innerHTML.substring(
            item.target.innerHTML.indexOf("+"),
            item.target.innerHTML.indexOf("р.")
        ).substring(1);

        ingredientId = 0;

        // заполняем параметры объекта и помещаем его в массив ингредиентов
        Ingredient.id = ingredientId;
        Ingredient.name = nameIngredient;
        Ingredient.price = priceIngredient;
        massIngredient.push(Ingredient);

        console.log(Ingredient);
        console.log(massIngredient);

        // выставляем итоговую цену в панели навигации
        massIngredient.forEach(function (item) {
            finalPrice = parseInt(item.price) + 100
        });
        currentPrice[0].innerHTML = finalPrice + "р.";

        // создаем область с ингредиентами для пользователя
        createElement(
            "div",
            "card card-ingredient w-100%",
            "",
            document.body
        );

        createElement(
            "div",
            "card-header card-ingredient-header",
            "Список ваших ингридиентов:",
            className("card card-ingredient w-100%")[0]
        );

        createElement(
            "div",
            "card-body card-ingredient-body",
            "",
            className("card card-ingredient w-100%")[0]
        );

        createElement(
            "h6",
            "shadow-sm p-3 mb-5 bg-warning rounded card-item",
            "<h5>" + Ingredient.name + " <span class=\"badge badge-secondary\" >"
            + Ingredient.price + "р"
            + "</span>"
            + "<button type=\"button\"  class=\"close delete-ingredient\"  aria-label=\"Close\">\n" +
            "  <span id=\"delete-ingredient" + ingredientId + "\" " + "aria-hidden=\"true\">&times;</span>\n" +
            "</button></h5>",
            className("card-body card-ingredient-body")[0]
        )
    } else {

        // создаем объект с параметрами ингридиента
        let Ingredient = {};

        // получаем ингридиент по которому нажал пользователь
        let nameIngredient = item.target.innerHTML.substring(0, item.target.innerHTML.indexOf(" "));
        let priceIngredient = item.target.innerHTML.substring(
            item.target.innerHTML.indexOf("+"),
            item.target.innerHTML.indexOf("р.")
        ).substring(1);

        ingredientId++;

        // заполняем параметры объекта и помещаем его в массив ингридиентов
        Ingredient.id = ingredientId;
        Ingredient.name = nameIngredient;
        Ingredient.price = priceIngredient;
        massIngredient.push(Ingredient);

        console.log(Ingredient);
        console.log(massIngredient);

        // выставляем итоговую цену в панели навигации
        finalPrice = 100;
        massIngredient.forEach(function (item) {
            finalPrice += parseInt(item.price)
        });
        currentPrice[0].innerHTML = finalPrice + "р.";

        createElement(
            "h6",
            "shadow-sm p-3 mb-5 bg-warning rounded card-item",
            "<h5>" + Ingredient.name + " <span class=\"badge badge-secondary\" >"
            + Ingredient.price + "р"
            + "</span>"
            + "<button type=\"button\"  class=\"close delete-ingredient\"  aria-label=\"Close\">\n" +
            "  <span id=\"delete-ingredient" + ingredientId + "\" " + "aria-hidden=\"true\">&times;</span>\n" +
            "</button></h5>",
            className("card-body card-ingredient-body")[0]
        )
    }
};

// обработка нажатия на крестик (удаление) у ингредиента
document.onclick = function (item) {
    if (item.target.id.indexOf("delete-ingredient") === 0) {

        // удаляем сам елемент в html
        if (massIngredient.length > 1) {
            const deleteCurrentIngredientList = id(item.target.id);
            deleteCurrentIngredientList.parentNode.parentNode.parentNode.parentNode
                .removeChild(deleteCurrentIngredientList.parentNode.parentNode.parentNode);
        } else {
            const deleteCurrentIngredientList = id(item.target.id);
            deleteCurrentIngredientList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                .removeChild(deleteCurrentIngredientList.parentNode.parentNode.parentNode.parentNode.parentNode);
        }


        // получаем id блока который хотим удалить с помощью регулярного выражения и удаляем в массиве ингредиентов
        let reg = /[+]?\d+/;
        let idBlock = item.target.id.match(reg);
        massIngredient.forEach(function (itemMass, i) {
            if (parseInt(itemMass.id) === parseInt(idBlock[0])) {
                massIngredient.splice(i, 1)
            }
        });

        // выставляем итоговую цену в панели навигации
        finalPrice = 100;
        massIngredient.forEach(function (item) {
            finalPrice += parseInt(item.price)
        });
        currentPrice[0].innerHTML = finalPrice + "р.";

        console.log(massIngredient);
    }
};

// функция для удаления елемента в html.
function removeElement(from, element) {
    from.removeChild(element)
}

// функция для создания элемента в html и добавления в нужный.
function createElement(tagName, className, html, ship) {
    let element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = html;
    ship.appendChild(element);

    return element
}

// функция которая возвращает html элемент по id.
function id(id) {
    return document.getElementById(id)
}

// функция которая возвращает массив html элементов по className.
function className(name) {
    return document.getElementsByClassName(name)
}