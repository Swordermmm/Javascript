let heights = [164, 157, 160, 143, 170]

function renderList(arr) {
    listEl = document.createElement('ul')
    listEl.setAttribute('id', 'list')

    for (let i = 0; i < arr.length; i++) {
        const divEl = document.createElement('div')
        divEl.textContent = `${i+1}) ${arr[i]}`
        listEl.append(divEl)
    }

    document.body.append(listEl)
}

renderList(heights)


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
    const search = prompt("Укажите минимальный рост для фильтрации")
    const filteredList = filter(heights, search)

    const listEl = document.getElementById('list')
    listEl.parentNode.removeChild(listEl)

    if (filteredList.length > 0) {
        renderList(filteredList)
    } else {
        alert('Не указан минимальный рост!')
        renderList(arr)
    }
}

function add(arr) {
    const item = prompt("Введите рост для добавления")
    
    if (item == null) {
        alert('Рост не введен!')
    } else {
        arr.push(item)
    }

    const listEl = document.getElementById('list')
    listEl.parentNode.removeChild(listEl)

    renderList(arr)
}