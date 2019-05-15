//
const tPizzaThin = id("tPizzaThin");
const tPizzaThinLush = id("tPizzaThinLush");

//
const ulNavBar = className("navbar-nav mr-auto");

//
tPizzaThin.onclick = function () {

    //
    let liTwoPart = document.createElement("li");
    liTwoPart.className = "nav-item";
    liTwoPart.innerHTML = "<a href=\"#\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal\">2.Выбираем начинку</a>\n";

    ulNavBar[0].appendChild(liTwoPart);

    //
    let infoCard = document.createElement("div");
    infoCard.className = "card w-100%";
    infoCard.innerHTML = "<div class=\"card w-100%\">\n" +
        "        <div class=\"card-body\">\n" +
        "            <h5 class=\"card-title\">Вы выбрали тонкое тесто</h5>\n" +
        "            <p class=\"card-text\">Теперь приступим к выбору начинки нашей пиццы.</p>\n" +
        "            <a href=\"#\" class=\"btn btn-danger\" id=\"btn-dough-change\"  data-toggle=\"modal\" data-target=\"#confirmModal\">Сменить тесто</a>\n" +
        "        </div>\n" +
        "    </div>";

    document.body.appendChild(infoCard);

    // кнопка удаления выбранного теста
    const closeChangeDough = id("closeChangeDough");
    closeChangeDough.onclick = function () {
        document.body.removeChild(infoCard);
        ulNavBar[0].removeChild(liTwoPart);
    }
};

//
tPizzaThinLush.onclick = function () {

    let liTwoPart = document.createElement("li");
    liTwoPart.className = "nav-item";
    liTwoPart.innerHTML = "<a href=\"#\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal\">2.Выбираем начинку</a>\n";

    ulNavBar[0].appendChild(liTwoPart);
};

// функция которая возвращает html элемент по id
function id(id) {
    return document.getElementById(id)
}

// функция которая возвращает массив html элементов по className
function className(name) {
    return document.getElementsByClassName(name)
}