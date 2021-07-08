// Формулировка задачи 1
// Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:

// выводит fizz вместо чисел, кратных 3;
// выводит buzz вместо чисел, кратных 5;
// выводит fizzbuzz вместо чисел, кратных и 3, и 5.

// Пример:
// fizzBuzz(5)

// Результат:
// // 1
// // 2
// // fizz
// // 4
// // buzz
const getValue = (number) => {
  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";

  if (number % 5 === 0) return "buzz";

  if (number % 3 === 0) return "fizz";

  return number;
};

const fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    // const value = getValue(i);
    console.log(getValue(i));
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log("fizzbuzz");
    // } else if (i % 5 === 0) {
    //   console.log("buzz");
    // } else if (i % 3 === 0) {
    //   console.log("fizz");
    // } else {
    //   console.log(i);
    // }
  }
};

fizzBuzz(15);
