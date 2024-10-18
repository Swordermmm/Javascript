let index = 0

let currentYear = 2024

let user1 = prompt("Введите имя пользователя 1")
let year1 = prompt("Введите год рождения пользователя 1")
let age1 = currentYear - year1

let user2 = prompt("Введите имя пользователя 2")
let year2 = prompt("Введите год рождения пользователя 2")
let age2 = currentYear - year2

let user3 = prompt("Введите имя пользователя 3")
let year3 = prompt("Введите год рождения пользователя 3")
let age3 = currentYear - year3

console.log(++index, user1, age1)
console.log(++index, user2, age2)
console.log(++index, user3, age3)

console.log("Средний возраст пользователей:", (age1 + age2 + age3) / 3 )