
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

function getNamesOfCars(array) {
    arrayOfCars = Object.entries(array)
    arrayOfCars.forEach((car) => console.log(car[1].name))
}

getNamesOfCars(Cars)