let goods = ['Арбуз','Книга','Кофе','Макароны','Молоко','Сахар','Яблони']

function renderList(arr) {
    listEl = document.createElement('ul')
    listEl.setAttribute('id', 'list')
    arr.sort()

    for (let i = 0; i < arr.length; i++) {
        const divEl = document.createElement('div')
        divEl.textContent = `${i+1}) ${arr[i]}`
        listEl.append(divEl)
    }

    document.body.append(listEl)
}

renderList(goods)


function filter(arr, search) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= search) {
            result.push(arr[i])
        }
    }
    return result
}

function search(arr) {
    const filteredList = filter(heights, search)

    const listEl = document.getElementById('list')
    listEl.parentNode.removeChild(listEl)

    if (filteredList.length > 0) {
        renderList(filteredList)
    }
}

function add(arr) {
    const item = prompt("Введите название товара для добавления")
    
    if (item == null) {
        alert('Название товара не введено!')
    } else {
        arr.push(item)
    }

    const listEl = document.getElementById('list')
    listEl.parentNode.removeChild(listEl)

    renderList(arr)
}