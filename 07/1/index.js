let books = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи', 'Властелин колец', 'Дюна', 'Отцы и дети']

function renderList(arr) {
    listEl = document.querySelector('.ul')

    for (let i = 0; i < arr.length; i++) {
        const divEl = document.createElement('div')
        divEl.textContent = `${i+1}) ${arr[i]}`
        listEl.append(divEl)
    }
    document.body.append(listEl)
}

renderList(books)


function filter(arr, search) {
    let result = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == search) {
            result = i
            break
        }
    }
    return result
}

function search(arr) {
    const search = prompt("Укажите имя для поиска")
    const findIndex = filter(books, search)

    const listEl = document.getElementById('list')
    listEl.parentNode.removeChild(listEl)

    renderList(arr)

    if (findIndex > -1) {
        document.querySelector(`div:nth-child(${findIndex + 1})`).style.background = 'yellow'
    } else {
        alert('Книга не найдена!')
    }
}

function add(arr) {
    const item = prompt("Напишите имя для добавления")
    
    if (item == null) {
        alert('Название книги не введено!')
    } else {
        arr.push(item)
    }

    const listEl = document.getElementById('list')
    listEl.parentNode.removeChild(listEl)

    renderList(arr)
}