// Формулировка задачи 3
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных, содержащихся в этой строке. Гласными являются «a», «e», «i», «o», «u».

// Примеры:
// findVowels('hello') // --> 2
// findVowels('why') // --> 0

const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str = str.toLowerCase();
  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  console.log(count);
  return count;
};

findVowels("cucaracha");
findVowels("chopper");
findVowels("interactive");
findVowels("ABRACADABRA");
findVowels("hello");
findVowels("why");
