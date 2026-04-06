// _________________________________TASK 1___________________________
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((num) => num ** 2);

// console.log(squares);

// _________________________________TASK 2___________________________

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const value = data.flatMap((element) => element.values);

// console.log(value);

// _________________________________TASK 3___________________________

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// if (people.find((element) => element.age < 20)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// _________________________________TASK 4___________________________

// const numbers = [2, 4, 6, 8, 10];

// if (numbers.every((num) => num % 2 === 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// _______________________________TASK 5___________________________

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find((number) => number % 2 !== 0));

// _______________________________TASK 6___________________________

// const numbersArray = [4, 2, 5, 1, 3, 63, 7, 8, 9, 10];
// console.log(numbersArray.toSorted((a, b) => a - b));

// _______________________________TASK 7___________________________

// const stringArray = ["banana", "orange", "apple", "pear", "Grape", "Kiwi"];
// console.log(stringArray.map((s) => s.toLowerCase()).toSorted());

// _______________________________TASK 8___________________________

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const sortedUsers = users.toSorted((a, b) => a.age - b.age);

// console.log(sortedUsers);

// _______________________________TASK 9___________________________

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// console.log(user.filter((u) => u.age > 20));

// _______________________________TASK 10___________________________

// const numbers = [1, 2, 3, 4, 5, 65, 7, 8, 9, 10];
// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);

// ______________________________TASK 11___________________________

// class Calculator {
//   constructor(value) {
//     this.result = value;
//   }
//   number(value) {
//     this.result = value;
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }
//   add(value) {
//     this.result += value;
//     return this;
//   }
//   subtract(value) {
//     this.result -= value;
//     return this;
//   }
//   divide(value) {
//     if (value !== 0) {
//       this.result /= value;
//       return this;
//     } else {
//       alert("Cannot divide by zero");
//       return this;
//     }
//   }
//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
// }

// const calc = new Calculator();
// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// const calc2 = new Calculator();

// const result2 = calc2.number(25).subtract(5).getResult();

// console.log(result2);

// ______________________________TASK 12___________________________

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get Login() {
//     return this.#login;
//   }
//   get Email() {
//     return this.#email;
//   }
//   set Login(newLogin) {
//     this.#login = newLogin;
//   }
//   set Email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("john_doe", "john@example.com");
// client.Login = "john_doe_update";
// client.Email = "john.updated@example.com";
// console.log(client.Login); // Виведе: john_doe
// console.log(client.Email); // Виведе: john@example.com

// ______________________________TASK 13___________________________

class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getDetails() {
    return this;
  }
}

const person = new Person("John", 30, "male", "john@example.com");
console.log(person.getDetails());

class Employee extends Person {
  constructor(salary, department) {
    super();
    this.salary = salary;
    this.department = department;
  }
  getEmployeeDetails() {
    const salDep = { salary: this.salary, department: this.department };
    return salDep;
  }
}

const employee = new Employee(50000, "IT");
console.log(employee.getEmployeeDetails());
