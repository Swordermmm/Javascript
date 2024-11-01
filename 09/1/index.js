
const Cars = {
    BMW: {  
        name: 'BMW',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 400, 
    },
    Mercedes: {  
        name: 'Mercedes',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 400, 
    },
    Audi: {  
        name: 'Audi',
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 400, 
    }
}

function getCar(carName) {
    console.log(carName)
}

getCar(Cars.BMW)