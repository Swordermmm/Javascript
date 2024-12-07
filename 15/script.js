function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  if (validateForm() == false) {
    alert("Не все поля заполнены")
    return false
  }

  addFilm(film);
}

function validateForm() {
  const inputEls = document.querySelectorAll(".add-input")
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

async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  // films.push(film);
  // localStorage.setItem("films", JSON.stringify(films));

  // console.log(film);
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "alyosha1leo@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function deleteFilm(id) {
  const response = await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "alyosha1leo@gmail.com",
    },
  })
  renderTable();
}

async function deleteAllFilms() {
  const response = await fetch(`https://sb-film.skillbox.cc/films`, {
    method: "DELETE",
    headers: {
      email: "alyosha1leo@gmail.com",
    },
  })
  renderTable();
}

async function filterFilms() {
  const nameFilter = document.querySelector("#nameFilter").value
  const genreFilter = document.querySelector("#genreFilter").value
  const releaseYearFilter = document.querySelector("#releaseYearFilter").value
  const isWatchedFilter = document.querySelector("#isWatchedFilter").value


  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "alyosha1leo@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  filteredFilms = films

  if (nameFilter != "") {
    filteredFilms = filteredFilms.filter(film => film.title === nameFilter )
  }

  if (genreFilter != "") {
    filteredFilms = filteredFilms.filter(film => film.genre === genreFilter )
  }

  if (releaseYearFilter != "") {
    filteredFilms = filteredFilms.filter(film => film.releaseYear === releaseYearFilter )
  }

  if (isWatchedFilter != "all") {
    filteredFilms = filteredFilms.filter(film => film.isWatched === Boolean(isWatchedFilter) )
  }

  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  filteredFilms.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <button type="button" onclick="deleteFilm(${film.id})">Удалить</button>
    `;
    filmTableBody.appendChild(row);
  });
}

async function renderTable() {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "alyosha1leo@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <button type="button" onclick="deleteFilm(${film.id})">Удалить</button>
    `;
    filmTableBody.appendChild(row);
  });
}

filterEls = document.querySelectorAll(".filter")
filterEls.forEach(filterEl => {
  filterEl.addEventListener("input", filterFilms)
})


document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

// Display films on load
renderTable()