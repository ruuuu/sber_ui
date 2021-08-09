const CreateTaxpayerPage = function() { 

  const createTaxpayerButton = ('html>body>div>div>div>div>div:nth-child(2)>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(5)>button'); // кнопка "Звпросить данные НП"    
  const innField = ('[data-field-name = "inn"]'); // поле ввода ИНН
  const checkButton = ('form>div>div:nth-child(2)>button'); //  кнопка  Найти(check)

  const prodolgitButton = ('text="Продолжить"'); // кнопка Продолжить, нашел по надписи на кнпоке
  
  const requests = ('html>body>div>div>div>div>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)'); // вкладка Запросы

  let alreadyExistInn = ('html>body>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(1)>div'); // красное сообщение что ИНН уже есть




  this.createTaxpayer = async function (page, inn){  
    
    await page.click(createTaxpayerButton); // оранжевая кнпока Запросить данные 

    await page.fill(innField, inn); // позже рандомным образом выбирать Инн

    await page.click(checkButton); // кнопка Найти

    await page.click(prodolgitButton); // кнпока Продолжить

    await page.click(requests); // переходим на  вкладку Запросы
    
  };

  


  

};

export { CreateTaxpayerPage };