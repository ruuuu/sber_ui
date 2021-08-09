import { app, urlSber, urlVtb, urlFns } from '../framework/pages/index';
import chai from 'chai'; // для expect
import { goto, run, stop } from '../lib/browser/browser';


const { expect } = chai;
let page;

beforeEach(async () => {
  await run();
  page = await goto(urlSber); 
});

afterEach(async () => {
  await stop();
});





it('Создание НП', async () => {

    const email = await app().data()[0].email; 

    const password = await app().data()[0].password;

    const inn = '2634806330'; // Рандомно выбирать

    await app().sberLoginPage().login(page, email, password); // вызов метода login
    
    await app().createTaxpayerPage().createTaxpayer(page, inn); // вызываем метод создания НП

    // ИНН:
    const cellInn = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // в гриде, на вкладке Зарпосы, ячейка где хранится ИНН
    const cellInnText = await app().locatorPage().getElement(page, cellInn);
    expect(cellInnText)
      .to
      .have
      .string(inn); 


    // Статус:  
    const cellStatus = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'); // в гриде, на вкладке Зарпосы, ячейка где хранится Статус   
    const cellStatusText = await app().locatorPage().getElement(page, cellStatus);
    expect(cellStatusText)
      .to
      .have
      .string('Подтвержден'); 


    // Активность:  
    const cellActivity = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'); // в гриде, на вкладке Зарпосы, ячейка где хранится АКтивность 
    const cellActivityText = await app().locatorPage().getElement(page, cellActivity);
    expect(cellActivityText)
      .to
      .have
      .string('Запрос карты документов НП');   


});



it('Поиск по ИНН на вкладке НП', async () => {

  let inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе
  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().sberLoginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().searchTaxpayerByInnAtTaxpayers(page, inn); // вызов метода поиска
  

  const innCell = await app().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'); // в гриде, на вкладке НП, ячейка где хранится ИНН 
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
      .to
      .have
      .string(inn);

});


it('Поиск по ИНН на вкладке Запросы', async () => {

  let inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе
  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().sberLoginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().searchTaxpayerByInnAtRequests(page, inn); // вызов метода поиска
  
  
  const innCell = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // в гриде, на вкладке Запросы, ячейка где хранится ИНН 
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
      .to
      .have
      .string(inn);

});



it('Фильтр по ИНН на вкладке НП', async () => {

  let inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе
  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().sberLoginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn); // вызов метода поиска
  
  
  const innCell = await app().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'); // в гриде, на вкладке НП, ячейка где хранится ИНН 
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
      .to
      .have
      .string(inn);

});



it.only('Фильтр по ИНН на вкладке Запросы', async () => {

  let inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе
  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().sberLoginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().filterTaxpayerByInnAtRequests(page, inn); // вызов метода поиска
  
  
  const innCell = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // в гриде, на вкладке Запросы, ячейка где хранится ИНН 
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
      .to
      .have
      .string(inn);

});




