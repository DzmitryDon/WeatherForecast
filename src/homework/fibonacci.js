// Формулировка задачи 4
// Напишите функцию, которая возвращает n-ую запись в последовательности, где n — это число, которое вы передаёте в качестве аргумента функции.

// Последовательность Фибоначчи
// это порядок чисел, где каждое последующее число является суммой двух предыдущих. Например, первые десять чисел последовательности выглядят так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// Пример:
// fibonacci(3) // --> 2

export const fib = (n) => {
  const arr = [];

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    arr.push(arr[i]);
  }

  return arr[n];
};

// const test = (n, Answer) => {
//   let textTest;
//   if (fib(n) === Answer) {
//     textTest = `TEST   ${n}  TRUE`;
//   } else {
//     textTest = `TEST  ${n}  FALSE`;
//   }
//   console.log(textTest);
// };

// function testFib() {
//   test(3, 2);
//   test(9, 34);
//   test(4, 2);
//   test(5, 7);
// }

// testFib();
