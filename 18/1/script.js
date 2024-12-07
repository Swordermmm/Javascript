function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


window.onload = () => {
    const dogsDivEl = document.querySelector(".dog")
    const catsDivEl = document.querySelector(".cat")

    const catsPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(["./images/cat1.jpg", "./images/cat2.jpg", "./images/cat3.jpg"]);
        }, randomInteger(2000, 5000));
    });
    
    const dogsPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(["./images/dog1.jpg", "./images/dog2.jpg", "./images/dog3.jpg"]);
        }, randomInteger(2000, 5000));
    });

    catsPromise.then(urls => {
        urls.forEach((url) => {
            const imgEl = document.createElement("img")
            imgEl.src = url
            catsDivEl.append(imgEl)
        })
        catsDivEl.style = "display: block"
    });

    dogsPromise.then(urls => {
        urls.forEach((url) => {
            const imgEl = document.createElement("img")
            imgEl.src = url
            dogsDivEl.append(imgEl)
        })
        dogsDivEl.style = "display: block"
    });
}