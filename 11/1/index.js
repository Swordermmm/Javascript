const nameEl = document.querySelector(".name-input")
const emailEl = document.querySelector(".email-input")
const ratingEl = document.querySelector(".rating-input")
const checkboxEls = document.querySelectorAll(".checkbox")
const commentEl = document.querySelector(".comments-input")

const formEl = document.querySelector(".form")

formEl.addEventListener("submit", function(e) {
    e.preventDefault()
    renderResults()
})


function renderResults() {
    resultEl = document.createElement("div")
    resulttextEl = document.createElement("h2")
    resulttextEl.textContent = "Результаты опроса"
    resultEl.append(resulttextEl)
    document.body.append(resultEl)
}