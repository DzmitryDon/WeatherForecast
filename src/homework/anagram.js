// Формулировка задачи 2
// Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения). Важны только символы, пробелы или знаки препинания не учитываются. Пример:

// Примеры:
// anagram('finder', 'Friend') --> true
// anagram('hello', 'bye') --> false

// Анаграмма
// Слова являются анаграммами другого слова, если имеют одинаковые буквы в одинаковом количестве, но в разном порядке.

const sortStrLetters = (str) => {
  str = str.toLowerCase().split("").sort().join("");
  return str;
};

const anagram = (firstStr, secondStr) => {
  if (sortStrLetters(firstStr) === sortStrLetters(secondStr)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

anagram("finder", "Friend");
anagram("mrak", "mark");
anagram("miko", "lopi");
anagram("hello", "bye");
anagram("rokoko", "koko");
