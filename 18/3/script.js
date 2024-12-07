function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function progress(time, progressBarId) {

    const progressContainerEl = document.createElement("div")
    const progressBarEl = document.createElement("div")

    progressContainerEl.setAttribute("id", progressBarId)
    progressContainerEl.classList.add("container")
    progressBarEl.classList.add("progress-bar")

    progressContainerEl.append(progressBarEl)
    document.body.append(progressContainerEl)

    if (time < 2000) {time = 2000}
    const timer = time/250
    let width = 1;
    let id = setInterval(frame, timer)

    function frame() {
        if (width >= 500) {
            clearInterval(id);
    } else {
        width = width + 2; 
        progressBarEl.style.width = width + 'px'; 
    }}

    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

function getCats() {
    return new Promise((resolve) => {
        resolve(["./images/cat1.jpg", "./images/cat2.jpg", "./images/cat3.jpg"]);
    });
}

function getDogs() {
    return new Promise((resolve) => {
        resolve(["./images/dog1.jpg", "./images/dog2.jpg", "./images/dog3.jpg"]);
    });
}

function loadCats() {
    const catsResult = getCats()
    const catsContainer = document.createElement("div")
    catsContainer.style.display = "none"
    document.body.insertBefore(catsContainer, document.getElementById("cats"))
    catsResult.then(urls => {
        urls.forEach((url) => {
            const imgEl = document.createElement("img")
            imgEl.src = url
            catsContainer.append(imgEl)
        })
        catsContainer.style = "display: block"
    });
}

function loadDogs() {
    const dogsResult = getDogs()
    const dogsContainer = document.createElement("div")
    dogsContainer.style.display = "none"
    document.body.insertBefore(dogsContainer, document.getElementById("dogs"))
    dogsResult.then(urls => {
        urls.forEach((url) => {
            const imgEl = document.createElement("img")
            imgEl.src = url
            dogsContainer.append(imgEl)
        })
        dogsContainer.style = "display: block"
    });
}

async function loadImages() { 
    await progress(randomInteger(2000, 5000), "cats")
    await loadCats()
    await progress(randomInteger(2000, 5000), "dogs")
    await loadDogs()
}



window.onload = () => {
    loadImages()
}