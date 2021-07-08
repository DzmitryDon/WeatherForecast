// 1) Выводить в консоль четные числа из заданного диапозона раз в 30 секунд. Найти 3 решения
// 2) Напишите код, который при клике на любой div внутри root будет выводить в консоль его id.
// 3) сервер возвращает массив пользователей.  Нужно сделать их фильтрацию и сортировку.
// третюю задачу будем ещё со всеми делать во вторник. Поэтому пока без детализации, любые реализации любых идей.
// дополнительная задача - написать тесты для первой задачи. Тесты для ф-ций сортировки и фильтрации
let el = document.getElementById("root");
el.onclick = function (e) {
  console.log(e.target.id);
};

const getEvenNumbers1 = (start, end) => {
  let number = start;

  let timer = setInterval(function () {
    if (number % 2 === 0) {
      console.log(number);
    }

    if (number === end) {
      clearInterval(timer);
    }
    number++;
  }, 30000);
};
getEvenNumbers1(1, 10);

const getEvenNumbers2 = (start, end) => {
  let number = start;
  setTimeout(function run() {
    if (number % 2 === 0) {
      console.log(number);
    }

    if (number < end) {
      setTimeout(run, 30000);
    }
    number++;
  }, 30000);
};

getEvenNumbers2(11, 20);
