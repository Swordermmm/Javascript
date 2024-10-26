let taxRate
let taxTransport

let powerOfCar = prompt("Какова мощность автомобиля?")

if (powerOfCar < 100) {
    taxRate = 12
} else if (powerOfCar >= 100 && powerOfCar < 125) {
    taxRate = 25
} else if (powerOfCar >= 125 && powerOfCar < 150) {
    taxRate = 35
} else if (powerOfCar >= 150 && powerOfCar < 175) {
    taxRate = 45
} else if (powerOfCar >= 175 && powerOfCar < 200) {
    taxRate = 50
} else if (powerOfCar >= 200 && powerOfCar < 225) {
    taxRate = 65
} else if (powerOfCar >= 225 && powerOfCar < 250) {
    taxRate = 75
} else {
    taxRate = 150
}

console.log("Сумма налога:", powerOfCar * taxRate)