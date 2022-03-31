// 1) с помощью prompt спрашиваем у пользователя, что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он введет допустимое значение
// 2) спрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 5. Спрашиваем пока пользователь не введет допустимое значение
// 3) спрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Спрашиваем пока пользователь не введет допустимое значение
// 4) С помощью alert или console.log выводим результат действия (+ - / *) со всеми операндами
// Н-р "1 + 2 + 3 = 6"
// Задание со звездочкой***
// Находим и учим методы array - includes() and some() и используем их для проверки введенного пользователем оператора - это позволит нам убрать тонну switch case или if else.


prompt('Enter operator:')

// function calculator() {
//     function askUser(message) {
//         return prompt(message);
//     }

//     const operator = askUser('Enter operator: + - * /');
//     console.log(operator);
//     const VALID_OPERATORS = ['+', '-', '*', '/'];

//     function isOperatorValid(operator) {
//        return VALID_OPERATORS.includes(operator);
//     }
    
//     const isOperatorValid = isOperatorValid();
//     console.log(isOperatorValid);
// }
// calculator();