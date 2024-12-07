function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let elem = document.getElementById("progress-bar");
console.log(elem)

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function progress(time) {
    await delay(500);
    if (time < 2000) {
        time = 2000
    }
    const timer = time/250
    let width = 1;
    let id = setInterval(frame, timer);

    function frame() {
        if (width >= 500) {
            clearInterval(id);
    } else {
        width = width + 2; 
        elem.style.width = width + 'px'; 
    }}
}




window.onload = () => {
    progress(randomInteger(2000, 10000))
}



