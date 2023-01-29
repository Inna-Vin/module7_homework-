//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.

let sum = 0;

class Сalculations {
  constructor (power, voltage) {
    this.power = power;
    this.voltage = voltage;
  }

  powerSum (power) {
  if (this.power === 'on') {
    sum += this.voltage;
  } else {
    sum
  }
}
}

class ElectricalAppliances extends Сalculations {
  constructor (name, voltage, type, power) {
    super(power, voltage)
    this.name = name;
    this.voltage = voltage;
    this.type = type;
  }
  getInfo () {
    if (this.power === 'on') {
      console.log (`Устройство ${this.name} подключено в сеть`)
    } else {
      console.log  (`Устройство ${this.name} не подключено в сеть`)
    }
  }
}

let lampa = new ElectricalAppliances ('lampa', 100, 'electrical appliances', 'on')
lampa.powerSum()
lampa.getInfo()

let computer = new ElectricalAppliances ('computer', 500, 'electrical appliances', 'on')
computer.powerSum()
computer.getInfo()

let teapot = new ElectricalAppliances ('teapot', 150, 'electrical appliances', 'off')
teapot.powerSum()
teapot.getInfo()

console.log(`Суммарная мощность - ${sum}`)
