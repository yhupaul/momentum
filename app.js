// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dan", 21);
// sayHello("lynn", 25);

// function plus(a, b) {
//   console.log(a + b);
// }

// function divide(firstNumber, secondNumber) {
//   console.log(firstNumber / secondNumber);
// }

// plus(60, 8);
// divide(120, 2);

const player = {
  name: "dan",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you")
  },
};

player.sayHello("lynn");
player.sayHello("nico");