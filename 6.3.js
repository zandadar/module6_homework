// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.

function getNumReturnFunc(num1) {
    return function getNumReturnSum(num2) {
      return num1 + num2;
    };
  }
  console.log (getNumReturnFunc(8)(65));