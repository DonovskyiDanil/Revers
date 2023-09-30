function reverseWordsOrder(inputString) {
    // Строка на слова и сохраняю в массив
    const wordsArray = inputString.split(' ');
  
    // Переворачиваю массив слов
    const reversedWordsArray = wordsArray.reverse();
  
    // Объединяю слова обратно в строку
    const reversedString = reversedWordsArray.join(' ');
  
    // результат в консоль
    console.log(reversedString);
  }
  
  // Пример использования функции
  const inputString = "Я изучаю JavaScript";
  reverseWordsOrder(inputString); //"JavaScript изучаю Я"
  