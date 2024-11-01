function createCar(newParts) {
    unreadyCar = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    }

    const car = Object.assign(unreadyCar, newParts)
    return car
}

console.log(createCar({ name: 'Haval', hp: 198 }))