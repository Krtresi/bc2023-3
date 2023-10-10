const fs = require('fs'); //підключаємо модуль fs
fs.readFile('data.json', 'utf8', (err, data)=>{
    if(err) {
        console.error('Помилка при читанні файлу:',err);
        return;
    }
    
    try{
        const exchangeRates = JSON.parse(data);

        // знаходимо максимальний курс 
    let maxRate = exchangeRates[0].rate;//встановлено максрейт на перший курс з масиву

    for (const currency of exchangeRates) {
        if (currency.rate > maxRate) {
            maxRate = currency.rate;
        }
    }
    const outputText = `максимальний курс: ${maxRate}`;

// запис у файл 
fs.writeFile ('output.txt', outputText, 'utf8', (err) =>{
    if(err){
        console.error('помилка при запису у файл', err);
        return;
    }
    console.log('максимальний курс успішно зображено у файлі');
});
    }catch (error){
        console.error('помилка при парсингу json:', error);
    }
     
});


