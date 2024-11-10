arrOfPrices = [100, 500, 250, 300, 750]

const buttonAscendingEl = document.querySelector(".button-ascending")
const buttonLoweringEl = document.querySelector(".button-lowering")
const listEl = document.querySelector('.list')

function renderList(arr) {
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li')
        liEl.textContent = `${arr[i]}`
        listEl.append(liEl)
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


renderList(arrOfPrices)

function ascending(arrOfPrices) {
    arrOfPrices.sort((a, b) => a - b);
}

function lowering(arrOfPrices) {
    arrOfPrices.sort((a, b) => b - a);
}


buttonAscendingEl.addEventListener('click', function() {
    ascending(arrOfPrices)
    removeAllChildNodes(listEl)
    renderList(arrOfPrices)
})

buttonLoweringEl.addEventListener('click', function() {
    lowering(arrOfPrices)
    removeAllChildNodes(listEl)
    renderList(arrOfPrices)
})

