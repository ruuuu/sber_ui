const CreateTaxpayerPage = function() { 

  const createTaxpayerButton = ('text="Создать карточку"'); // кнопка "Создать карточку"    
  const innField = ('[data-field-name = "inn"]'); // поле ввода ИНН
  const checkButton = ('text="Найти"'); //  кнопка  Найти(check) form>div>div:nth-child(2)>button
  const prodolgitButton = ('text="Продолжить"'); // кнопка Продолжить
  const queryTab = ('text="Заявки на получение сведений"'); // вкладка  Запросы
  const innTab = ('text="Налогоплательщики"'); // вкладка Налогоплательщики
  


  this.createTaxpayer = async function (page, inn){  
    
    await page.click(createTaxpayerButton); // оранжевая кнпока Запросить данные 

    await page.fill(innField, inn); 

    await page.click(checkButton); // кнопка Найти

    await page.click(prodolgitButton); // кнпока Продолжить

    await page.click(queryTab); // вкладка Заявки на получение сведений(раньше была Запросы)

    //await page.waitForTimeout(25000); // 25 секунд

    // await page.click(innTab);
    // await page.click(queryTab); 

    };


  this.createTaxpayerAlreadyExist = async function (page, inn){   // Создаем НП, котрый уже есть в системе
    
    await page.click(createTaxpayerButton); // оранжевая кнпока Запросить данные 

    await page.fill(innField, inn); 

    await page.click(checkButton); // кнопка Найти

    await page.click(prodolgitButton); // кнпока Продолжить

    };  
  


};

export { CreateTaxpayerPage };