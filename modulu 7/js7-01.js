//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

let obj = {a: 'red', 
           b: 'hot', 
           c: 'chilli', 
           d: 'peppers'
          }
function getKeysAndProps (obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)){
      console.log('ключ: ' +key, 'значение: ' +obj[key])
    }
    }
  }

getKeysAndProps (obj)

//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.
function getProp (obj, str) {
  if(str in obj)
     return true
 else
     return false
 }
 console.log (getProp ({name: 'Ivan', age: 26, city: 'Moscow'}, 'city'))


//Написать функцию, которая создает пустой объект, но без прототипа.
function emptyObj() {
    let obj = Object.create(null) // создает объект с прототипом, имя которого указано в скобках
    return Object.create(null)
  }
  console.log (emptyObj())
