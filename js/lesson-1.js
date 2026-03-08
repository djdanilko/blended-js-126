// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt("fed"));

// if (number === 10) {
//   alert("complete");
// } else {
//   alert("not completed");
// }

// alert(number === 10 ? "yes" : "no");

// -------------------------------------------------------------------------------- 2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);
// const min = Number(prompt("wf"));

// if (min >= 45 && min < 60) {
//   alert(`${min} 4 in 4`);
// } else if (min >= 30 && min < 45) {
//   alert(`${min} 3 in 4`);
// } else if (min >= 15 && min < 30) {
//   alert(`${min} 2 in 4`);
// } else if (min >= 0 && min < 15) {
//   alert(`${min} 1 in 4`);
// } else {
//   alert("ERROR");
// }

// ------------------------------------------------------------------3

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt("number?"));

// let result = "";

// switch (num) {
//   case 1:
//     result = "winter";
//     break;
//   case 2:
//     result = "spring";
//     break;
//   case 3:
//     result = "summer";
//     break;
//   case 4:
//     result = "autumn";
//     break;

//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// alert(result);
// console.log(result);

// ---------------------------------------------------------------------4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const minutes = Number(prompt("кількість хвилин"));

// function minInHours(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const remainingMinutes = minutes % 60;

//   const formattedHours = String(hours).padStart(2, "0");
//   const formattedMinutes = String(remainingMinutes).padStart(2, "0");

//   return `${formattedHours}:${formattedMinutes}`;
// }

// console.log(minInHours(minutes));

// ----------------------------------------------------------------------5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("логін");
// const lowLogin = login.toLowerCase();
// console.log(login);
// alert(`${login}, Hi!`);

// if (lowLogin === "admin") {
//   const password = prompt("password");
//   if (password === "admin") {
//     alert("Hello, Admin");
//   } else {
//     alert("Incorect password!!!");
//   }
// } else {
//   alert(`I dont know you, ${login}`);
// }

// ------------------------------------------------------------------------6

// let num = 0;

// const maxNum = 20;

// while (num <= maxNum) {
//   console.log(num);
//   num += 1;
// }

// ----------------------------------------------------------------------------7

// Напишите функцию getNumbers( min , max ), принимающую 2 параметра -
// минимальное и максимальное число соответственно.
// Напишите цикл внутри функции, который выводит в консоль
// все числа от max до min по убыванию.
// Кроме того, подсчитайте сумму всех четных чисел в этом цикле
// и верните ее из функции.

// function getNumbers(min, max) {
//   let num = [];
//   for (let i = max; i >= min; i--) {
//     num.push(i);
//   }

//   let sum = 0;

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       sum += num[i];
//     }
//   }

//   return num;

//   return [num, sum];

//   return {
//     num: num,
//     sum: sum,
//   };
// }

// console.log(getNumbers(10, 15));

// ----------------------------------------------------------------------8

// Напишите функцию min(a, b), которая принимает 2 числа и возвращает меньшее из них.
// Нужно добавить проверку, что функция получает именно числа, в противном случае
// возвращать из функции строку – 'Not a number!' .

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else if (b < a) {
//     return b;
//   } else if (a === b) {
//     return `${a} = ${b}`;
//   } else {
//     return "Not a number!";
//   }
// }

// console.log(min(25, 64));
// console.log(min(145, 64));
// console.log(min(64, 64));
// console.log(min(false, 64));
// console.log(min("false", 64));
// console.log(min("5", 64));

// ------------------------------------------------------9

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("You are under 18. Do you have permission?");
//   }
// }

// console.log(isAdult(25));
// console.log(isAdult(18));
// console.log(isAdult(6));
// console.log(isAdult(false));

// const age = prompt("Your age");

// if (age >= 18) {
//   alert(true);
// } else {
//   confirm("You are under 18. Do you have permission?");
//   alert(false);
// }

// -----------------------------------------------------10

// console.log(fizzBuzz(65));
// console.log(fizzBuzz(9));
// console.log(fizzBuzz(16));
// console.log(fizzBuzz(45));
// console.log(fizzBuzz(100));
// console.log(fizzBuzz(true));

// function fizzBuzz(num) {
//   for (let i = 1; i < num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     }
//   }
//   return;
// }
