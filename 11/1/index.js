const nameEl = document.querySelector(".name-input")
const emailEl = document.querySelector(".email-input")
const ratingEl = document.querySelector(".rating-input")
const checkboxEls = document.querySelectorAll(".checkboxInterest")
const commentEl = document.querySelector(".comments-input")

const formEl = document.querySelector(".form")

formEl.addEventListener("submit", function(e) {
    e.preventDefault()
    if (document.querySelector(".result") != null) {
        document.querySelector(".result").parentNode.removeChild(document.querySelector(".result"))
    }
    renderResults()
})


function renderResults() {
    resultEl = document.createElement("div")
    resultEl.classList.add("result")
    resultTextEl = document.createElement("h2")
    resultTextEl.textContent = "Результаты опроса"
    resultEl.append(resultTextEl)
    
    nameResultEl = document.createElement("div")
    nameResultEl.textContent = `Имя пользователя: ${nameEl.value}`
    resultEl.append(nameResultEl)

    emailResultEl = document.createElement("div")
    emailResultEl.textContent = `Email: ${emailEl.value}`
    resultEl.append(emailResultEl)

    sexResultEl = document.createElement("div")
    sexResultEl.textContent = `Email: ${document.querySelector('input[name="sex"]:checked').value}`
    resultEl.append(sexResultEl)

    ratingResultEl = document.createElement("div")
    emailResultEl.textContent = `Email: ${ratingEl.value}`
    resultEl.append(ratingResultEl)

    checkboxResultEl = document.createElement("div")
    checkboxResultEl.textContent = `Интересы пользователя: `
    f = 0
    for (var i=0; checkboxEls[i]; ++i) {
        if (checkboxEls[i].checked) {
            if (f == 1) { 
                checkboxResultEl.textContent += ", ";
            }
            checkboxResultEl.textContent += checkboxEls[i].value;
            f = 1
        }
    }
    resultEl.append(checkboxResultEl)

    commentResultEl = document.createElement("div")
    commentResultEl.textContent = `Дополнительные комментарии: ${commentEl.value}`
    resultEl.append(commentResultEl)

    document.body.append(resultEl)
}