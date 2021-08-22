const CreateTaxpayerPage = function() { 

  const createTaxpayerButton = ('text="Запросить данные НП"'); // кнопка "Звпросить данные НП"    
  const innField = ('[data-field-name = "inn"]'); // поле ввода ИНН
  const checkButton = ('text="Найти"'); //  кнопка  Найти(check) form>div>div:nth-child(2)>button
  const prodolgitButton = ('text="Продолжить"'); // кнопка Продолжить
  
  //const alreadyExistInnlocator = ('text="По данному ИНН уже создана карточка НП"'); // красное сообщение что ИНН уже есть
  
  


  this.createTaxpayer = async function (page, inn){  
    
    await page.click(createTaxpayerButton); // оранжевая кнпока Запросить данные 

    await page.fill(innField, inn); 

    await page.click(checkButton); // кнопка Найти

    await page.click(prodolgitButton); // кнпока Продолжить

    };
  


};

export { CreateTaxpayerPage };