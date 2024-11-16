const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
}

const formEl = document.querySelector(".form")
const cookie = getCookie()
console.log(cookie)

if (cookie["promocode"] == promocodeObj["promocode"]) {
    const inputEl = document.querySelector(".promo-input")
    const activatedTextEl = document.querySelector(".activated-text");
    inputEl.style.color = "green"
    activatedTextEl.textContent = `Промокод применён. ${promocodeObj["gift"]}`
    inputEl.value = "PROM50"
}

formEl.addEventListener("submit", function(e) {
    e.preventDefault
    const inputEl = document.querySelector(".promo-input")
    const activatedTextEl = document.querySelector(".activated-text");
    if (inputEl.value == promocodeObj["promocode"] && cookie["promocode"] != promocodeObj["promocode"]) {
        console.log("Yes")
        inputEl.style.color = "green"
        activatedTextEl.textContent = `Промокод применён. ${promocodeObj["gift"]}`
        document.cookie = "promocode=PROM50"
    } else {
        inputEl.style.color = ""
        activatedTextEl.textContent = ""
    }
})


function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=')
      acc[name] = value
      return acc
    }, {})
   }