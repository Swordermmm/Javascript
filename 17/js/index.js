// Получение элемента карточки
function getCardEl(text) {
    const cardEl = document.createElement("div")
    cardEl.classList.add("card")
    return cardEl
}

// Получение элемента заголовка
function getTiteEl(text) {
    const titleEl = document.createElement("h1")
    titleEl.textContent = text
    titleEl.classList.add("main-title")
    return titleEl
}

// Получение элемента описания
function getDescEl(text) {
    const descEl = document.createElement("p")
    descEl.textContent = text
    descEl.classList.add("desc")
    return descEl
}

// Получение элемента блока для центрирования
function getCenterWrapEl() {
    let buttonsWrapEl = document.createElement("div")
    buttonsWrapEl.classList.add("center-wrap")
    return buttonsWrapEl
}

// Получение элемента кнопки
function getButtonEl(text) {
    const buttonEl = document.createElement("button")
    buttonEl.textContent = text
    buttonEl.classList.add("btn")
    return buttonEl
}

// Получение элемента формы
function getFormEl() {
    const formEl = document.createElement("form")
    formEl.classList.add("form")
    return formEl
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input")
    inputEl.type = type
    inputEl.name = name
    inputEl.placeholder = placeholder
    inputEl.classList.add("text-field")
    return inputEl
}

// Получение элемента ссылки
function getLinkEl(text, href) {
    const linkEl = document.createElement("a")
    linkEl.textContent = text
    linkEl.href = href
    linkEl.classList.add("link")
    return linkEl
}

// Отрисовка карточки
// Назвать функцию navigate
function navigate(cardName) {
    const appEl = document.getElementById("app")
    appEl.innerHTML = ''

    switch (cardName) {
        case "login":
            createLoginCard(appEl)
            break
        case "reg":
            createRegCard(appEl)
            break
        default:
            createHomeCard(appEl)
    }
}

// Создание главной карточки
function createHomeCard(containerEl) {
    let cardEl = getCardEl()

    const titleEl = getTiteEl("Добро пожаловать на сайт")

    const descEl = getDescEl("Войдите в личный кабинет. Если Вы, еще не зарегистрированы, пройдите регистрацию!")

    const centerWrapEl = getCenterWrapEl()

    const loginButtonEl = getButtonEl("Войти")
    const regButtonEl = getButtonEl("Регистрация")

    loginButtonEl.addEventListener("click", function () {
        navigate("login")
    })
    regButtonEl.addEventListener("click", function () {
        navigate("reg")
    })

    centerWrapEl.append(loginButtonEl, regButtonEl)
    cardEl.append(titleEl, descEl, centerWrapEl)
    containerEl.append(cardEl)
}

// Создание карточки входа
function createLoginCard(containerEl) {
    let cardEl = getCardEl()

    const titleEl = getTiteEl("Вход в аккаунт")

    const formEl = getFormEl()

    let loginInputEl = getInputEl("text", "email", "E-mail")
    let passwordInputEl = getInputEl("password", "password", "Пароль")

    let loginButtonEl = getButtonEl("Войти")

    const centerWrapEl = getCenterWrapEl()
    const homeLinkEl = getLinkEl("На главную")
    const regLinkEl = getLinkEl("Регистрация")

    homeLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate()
    })

    regLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate("reg")
    })

    formEl.addEventListener("submit", function (event) {
        event.preventDefault()
        alert("Вход в аккаунт")
    })

    centerWrapEl.append(homeLinkEl, regLinkEl)
    formEl.append(loginInputEl, passwordInputEl, loginButtonEl)

    cardEl.append(titleEl, formEl, centerWrapEl)
    containerEl.append(cardEl)
}

// Создание карточки регистрации
function createRegCard(containerEl) {
    let cardEl = getCardEl()

    const titleEl = getTiteEl("Регистрация")

    const formEl = getFormEl()

    let loginInputEl = getInputEl("text", "email", "E-mail")
    let passwordInputEl = getInputEl("password", "password", "Пароль")
    let nameInputEl = getInputEl("text", "name", "Имя")
    let surnameInputEl = getInputEl("text", "surname", "Фамилия")

    let regButtonEl = getButtonEl("Зарегистрироваться")

    const centerWrapEl = getCenterWrapEl()
    const homeLinkEl = getLinkEl("На главную")
    const loginLinkEl = getLinkEl("Вход")

    homeLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate()
    })

    loginLinkEl.addEventListener("click", function (event) {
        event.preventDefault()
        navigate("login")
    })

    formEl.addEventListener("submit", function (event) {
        event.preventDefault()
        alert("Регистрация")
    })

    centerWrapEl.append(homeLinkEl, loginLinkEl)
    formEl.append(loginInputEl, passwordInputEl, nameInputEl, surnameInputEl, regButtonEl)

    cardEl.append(titleEl, formEl, centerWrapEl)
    containerEl.append(cardEl)
}

// Запуск приложения
document.addEventListener("DOMContentLoaded", function () {
    navigate()
})