// _________________________________TASK 1___________________________

// const styles = ["jazz", "blues"];

// styles.push("rock-n-roll");

// styles[1] = "classic";

// function logItems(array) {
//   let elementNumber = 0;
//   for (const element of array) {
//     elementNumber += 1;
//     console.log(`${elementNumber} - ${element}`);
//   }
// }

// console.log(logItems(styles));

// _________________________________TASK 2___________________________

// function checkLogin(array) {
//   const login = prompt("Your login:");

//   const usersLogin = array.includes(login);

//   if (usersLogin === true) {
//     alert(`Welcome, ${login}!`);
//   } else {
//     alert("User not found!");
//   }
// }

// console.log(checkLogin(["Peter", "John", "Igor", "Sasha"]));

// _________________________________TASK 3___________________________

// function caclculateAverage() {
//   let total = 0;

//   for (const arg of arguments) {
//     if (arg === Number(arg)) {
//       total += arg;
//     }
//     // else {
//     //   total += 0;
//     // }
//   }
//   return total / arguments.length;
// }

// console.log(caclculateAverage(12, 453, 76, 4));

// console.log(caclculateAverage(12, 453, 76, 4, "peter", true));

// _________________________________TASK 4___________________________

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNumber(array) {
//   let sum = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     sum.push(array[i] + array[i + 1]);
//   }
//   return sum;
// }

// console.log(sumNumber(someArr));

// _________________________________TASK 5___________________________

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sory, it is not an array!";
//   }
//   const minNumber = Math.min(...numbers);
//   return minNumber;
// }

// console.log(findSmallestNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));
// console.log(findSmallestNumber(2, 5, 35, 56, 12, 24, 7, 80, 3));

// _________________________________TASK 6___________________________

// function findLongestWord(string) {
//   const array = string.split(" ");
//   const arrayLeng = [];
//   for (const element of array) {
//     arrayLeng.push(element.length);
//   }
//   const maxNumber = Math.max(...arrayLeng);
//   const maxIndex = arrayLeng.indexOf(maxNumber);
//   return array[maxIndex];
// }

// console.log(findLongestWord("London is the capital of Great Britain")); //  'capital'
// console.log(findLongestWord("erahg oqrt75 927659g 038"));

// _________________________________TASK 7___________________________

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";

// user.hobby = "skydiving";

// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(key, user[key]);
// }

// _________________________________TASK 8___________________________

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const money = Object.values(salaries);

// let sum = 0;

// for (const mon of money) {
//   sum += mon;
// }

// console.log(sum);

// _________________________________TASK 9___________________________

// const calculator = {
//   read(a, b) {
//     return arguments;
//   },
//   sum() {},

//   mult() {},
// };
// console.log(calculator.read(1, 2));
// calculator.ra = a;
// calculator.rb = b;

// console.log(calculator);

// _________________________________TASK 10___________________________

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;

//   for (let element of fruits) {
//     if (fruitName === element.name) {
//       totalPrice += element.price * element.quantity;
//     }
//   }
//   if (totalPrice === 0) {
//     return `Product ${fruitName} not found!`;
//   }
//   return totalPrice;
// }

// console.log(calcTotalPrice(fruits, "Яблуко")); // 315

// console.log(calcTotalPrice(fruits, "Банан"));

// console.log(calcTotalPrice(fruits, "Манго"));
