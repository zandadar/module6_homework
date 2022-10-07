// Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
// определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. 
// Обратите внимание на числа 0 и 1.

function checkNum(number) {
    let typeNum;
    if (number > 1000) {
      console.log ("Данные неверны");
    } else if (number === 0) {
      console.log ("Введенное число равно нулю");
    } else if (number === 1) {
      console.log ("Введенное число равно единице");
    } else {for (let i=2; i < number; i++) {
      if (number % i ===0) {
        typeNum=1; i=number;
      } else if (number % i !==0) {
        typeNum=0;
      }
    }
    if (typeNum === 0) {
      console.log ("Введенное число простое");
    } else console.log ("Введенное число составное");
    }
  };
  
  checkNum(3);