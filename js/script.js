// тонкое тесто
const tPizzaThin = id("tPizzaThin");

// навигационный бар
const ulNavBar = className("navbar-nav mr-auto");

// список ингридиентов
const IngredientListModal = className("list-group");

let massIngredient = [];

// обработка нажатия на тонкое тесто
tPizzaThin.onclick = function () {

    // добавляем в навигационный бар элемент с выбором начинки.
    let liTwoPart = createElement(
        "li",
        "nav-item",
        "<a href=\"#\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#tapeDough\">2.Выбираем начинку</a>\n",
        ulNavBar[0]
    );


    // делаем карточку с информацией по типу теста и возможностью сменить его.
    let infoCard = createElement(
        "div",
        "card w-100%",
        "<div class=\"card-body\">\n" +
        "            <h5 class=\"card-title\">Вы выбрали тонкое тесто для ващей Орен-пиццы 🍕</h5>\n" +
        "            <p class=\"card-text\">Теперь приступим к выбору начинки нашей пиццы.</p>\n" +
        "            <a href=\"#\" class=\"btn bg-warning\" id=\"btn-dough-change\"  data-toggle=\"modal\" data-target=\"#confirmModal\">Сменить тесто</a>\n" +
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
        navItemActive.className = "nav-link active";
    }
};

// обработка нажатия на ингридиент из списка
IngredientListModal[0].onclick = function (item) {

    // проверяем размер массива ингридиентов, для того, что бы если выполняется первое нажатие
    // мы генерировали область со списком выбранных ингридиентов
    if (massIngredient.length === 0) {

        // создаем объект с параментрами ингридиента
        let Ingredient = {};

        // получаем ингридиент по которому нажал пользователь
        let nameIngredient = item.target.innerHTML.substring(0, item.target.innerHTML.indexOf(" "));
        let priceIngredient = item.target.innerHTML.substring(
            item.target.innerHTML.indexOf("+"),
            item.target.innerHTML.indexOf("р.")
        ).substring(1);

        // заполняем параметры объекта и помещаем его в массив ингридиентов
        Ingredient.name = nameIngredient;
        Ingredient.price = priceIngredient;
        console.log(Ingredient);
        massIngredient.push(Ingredient);

        // создаем область с ингридиентами для пользователя
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
            + "<button type=\"button\" class=\"close\" aria-label=\"Close\">\n" +
            "  <span aria-hidden=\"true\">&times;</span>\n" +
            "</button></h5>",
            className("card-body card-ingredient-body")[0]
        )
    } else {

        // создаем объект с параментрами ингридиента
        let Ingredient = {};

        // получаем ингридиент по которому нажал пользователь
        let nameIngredient = item.target.innerHTML.substring(0, item.target.innerHTML.indexOf(" "));
        let priceIngredient = item.target.innerHTML.substring(
            item.target.innerHTML.indexOf("+"),
            item.target.innerHTML.indexOf("р.")
        ).substring(1);

        // заполняем параметры объекта и помещаем его в массив ингридиентов
        Ingredient.name = nameIngredient;
        Ingredient.price = priceIngredient;
        console.log(Ingredient);
        massIngredient.push(Ingredient);

        createElement(
            "h6",
            "shadow-sm p-3 mb-5 bg-warning rounded card-item",
            "<h5>" + Ingredient.name + " <span class=\"badge badge-secondary\" >"
            + Ingredient.price + "р"
            + "</span>"
            + "<button type=\"button\" class=\"close\" aria-label=\"Close\">\n" +
            "  <span aria-hidden=\"true\">&times;</span>\n" +
            "</button></h5>",
            className("card-body card-ingredient-body")[0]
        )
    }
};

// функция для удаления елемента в html.
function removeElement(from, element) {
    from.removeChild(element)
}

// функция для удаления родителя указанного елемента в html
function removeParentElement(childElement) {

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