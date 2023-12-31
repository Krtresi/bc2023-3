const fs = require('fs'); // підключаємо модуль fs

// Читання файлу
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка при читанні файлу:', err);
    return;
  }

  try {
    // Парсимо JSON дані
    const exchangeRates = JSON.parse(data);

    // Знаходимо максимальний курс
    let maxRate = exchangeRates[0].rate; // Встановимо maxRate на перший курс з масиву

    for (const currency of exchangeRates) {
      if (currency.rate > maxRate) {
        maxRate = currency.rate;
      }
    }

    const outputText = `Максимальний курс: ${maxRate}`;

    // Запис у файл output.txt
    fs.writeFile('output.txt', outputText, 'utf8', (err) => {
      if (err) {
        console.error('Помилка при запису у файл:', err);
        return;
      }
      console.log('Максимальний курс успішно збережено у файлі output.txt');
      
      // Виведемо максимальний курс в консоль
      console.log(outputText);
    });
  } catch (error) {
    console.error('Помилка при парсингу JSON:', error);
  }
});