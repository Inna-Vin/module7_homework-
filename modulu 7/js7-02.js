// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
let sum = 0;
function calculations (power, name, voltage) {
this.power = power;
this.name = name;
  this.voltage = voltage;
  this.info = function () {
    console.log (`Я - ${this.name}, на ${this.voltage} вольт`)
  }
}
calculations.prototype.powerSum = function (power) {
  if (this.power === 'on') {
    sum += this.voltage;
  } else {
    sum
  }
}

let lampa = new calculations ('on', 'lampa', 100)
let computer = new calculations ('off', 'computer', 500)
let teapot = new calculations ('on', 'teapot', 150)

// lampa.info()
// computer.info()
// teapot.info ()

lampa.powerSum()
computer.powerSum()
teapot.powerSum()

console.log(`Суммарная мощность - ${sum}`)
