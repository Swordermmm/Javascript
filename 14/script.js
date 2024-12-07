function handleFormSubmit(e) {
    e.preventDefault()

    const title = document.querySelector("#title").value
    const genre = document.querySelector("#genre").value
    const releaseYear = document.querySelector("#releaseYear").value
    const isWatched = document.querySelector("#isWatched").checked

    const film = {
        title,
        genre,
        releaseYear,
        isWatched
    }

    if (validateForm() == false) {
        alert("Не все поля заполнены")
        return false
    }

    addFilmToLocalStorage(film)
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem("films")) || []
    films.push(film)
    localStorage.setItem("films", JSON.stringify(films))

    renderTable()
}

function validateForm() {
    const inputEls = document.querySelectorAll(".text")
    flag = false
    inputEls.forEach(inputEl => {
        if (inputEl.value =="") {
        flag = true
        }
    })
    if (flag) {
        return false
    } else { return true}
}

function renderTable() {
    const films = JSON.parse(localStorage.getItem("films")) || []

    const filmTableBody = document.querySelector("#film-tbody")

    filmTableBody.innerHTML = ""

    films.forEach((film) => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td id="titleFilm">${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <form id="form-row">
                <button type="edit" onclick="editFilmFromLocalStorage('${film.title}')">Редактировать</button>
                <button type="delete" onclick="deleteFilmFromLocalStorage('${film.title}')">Удалить</button>
            </form>
        `
        filmTableBody.appendChild(row)
        
    })
}

function sortTable() {
    const films = JSON.parse(localStorage.getItem("films")) || []
    const filmTableBody = document.querySelector("#film-tbody")
    const sortEl = document.querySelector("#sort-select")
    const value = sortEl.value
    filmTableBody.innerHTML = ""

    if (value == "releaseYear") {
        sortedFilms = films.sort((a, b) => b.releaseYear - a.releaseYear)
    } else if (value == "genre") {
        sortedFilms = films.sort((a, b) => a.genre.localeCompare(b.genre))
    } else {
        sortedFilms = films.sort((a, b) => a.title.localeCompare(b.title))
    }

    sortedFilms.forEach((film) => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td id="titleFilm">${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <form id="form-row">
                <button type="edit" onclick="editFilmFromLocalStorage('${film.title}')">Редактировать</button>
                <button type="delete" onclick="deleteFilmFromLocalStorage('${film.title}')">Удалить</button>
            </form>
        `
        filmTableBody.appendChild(row)
        
    })
}


function deleteFilmFromLocalStorage(id) {
    const films = JSON.parse(localStorage.getItem("films"))
    const filmEls = document.querySelectorAll("#titleFilm")
    
    for (var i =0; i< filmEls.length; i++) {
        var title = filmEls[i].textContent;
        if (id == title) {
            filmEl = filmEls[i]
            break
        }
    }

    for (var i =0; i< films.length; i++) {
        var film = films[i];
        if (film.title == filmEl.textContent) {
            films.splice(i, 1);
        }
    }
    localStorage.setItem("films", JSON.stringify(films))
    renderTable()
}

function editFilmFromLocalStorage(id) {
    const films = JSON.parse(localStorage.getItem("films"))

    const filmEls = document.querySelectorAll("#titleFilm")
    for (var i =0; i< filmEls.length; i++) {
        var titleEl = filmEls[i].textContent;
        if (id == titleEl) {
            filmEl = filmEls[i]
            break
        }
    }

    for (var i =0; i< films.length; i++) {
        var film = films[i];
        if (film.title == filmEl.textContent) {
            break
        }
    }

    const title = document.querySelector("#title")
    const genre = document.querySelector("#genre")
    const releaseYear = document.querySelector("#releaseYear")
    const isWatched = document.querySelector("#isWatched")

    title.value = film.title
    genre.value = film.genre
    releaseYear.value = film.releaseYear
    isWatched.value = film.isWatched

    document.querySelector("div").style = "display:block"
    document.querySelector(".add").style = "display:none"

    const button = document.querySelector('#update')

    localStorage.setItem("films", JSON.stringify(films))
    renderTable()
}


function Cancel() {


    const title = document.querySelector("#title")
    const genre = document.querySelector("#genre")
    const releaseYear = document.querySelector("#releaseYear")
    const isWatched = document.querySelector("#isWatched")

    title.value  = ""
    genre.value  = ""
    releaseYear.value  = ""
    isWatched.value  = ""

    document.querySelector("div").style = "display:none"
    document.querySelector(".add").style= "display:block"

}

function updating(id) {
    const films = JSON.parse(localStorage.getItem("films"))
    console.log('WHYYY')

    const filmEls = document.querySelectorAll("#titleFilm")
    for (var i =0; i< filmEls.length; i++) {
        var titleEl = filmEls[i].textContent;
        if (id == titleEl) {
            filmEl = filmEls[i]
            break
        }
    }

    for (var i =0; i< films.length; i++) {
        var film = films[i];
        if (film.title == filmEl.textContent) {
            break
        }
    }

    film.title = document.querySelector("#title").value
    film.genre = document.querySelector("#genre").value
    film.releaseYear = document.querySelector("#releaseYear").value
    film.isWatched = document.querySelector("#isWatched").checked

    console.log(film.title, document.querySelector("#title").value)

    document.querySelector("div").style = "display:block"
    document.querySelector(".add").style = "display:none"

    localStorage.setItem("films", JSON.stringify(films))

    renderTable()
}

document.querySelector("#film-form").addEventListener("submit", handleFormSubmit)
renderTable()