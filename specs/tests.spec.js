import { app, urlSber, urlVtb, urlFns } from '../framework/pages/index';
import chai from 'chai'; // для expect
import { goto, run, stop } from '../lib/browser/browser';
import { random } from 'faker';


const { expect } = chai;
let page;

beforeEach(async () => {
  await run();
  page = await goto(urlSber); 
});

afterEach(async () => {
  await stop();
});






it.only('Создание НП-10 значный', async () => {

    const email = await app().data()[0].email; 

    const password = await app().data()[0].password;

    let inn = '5074018058'; // Рандомно выбирать потом из массива 10- значных

    await app().loginPage().login(page, email, password); 

    
    await app().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn); // вызов метода фильтрации

    const innCell = await app().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'); // в гриде НП, ячейка где хранится ИНН 
    const innCellText = await app().locatorPage().getElement(page, innCell); // значение инн в ячейке


    const masInn = ['2465102947', '3444197900', '2466126411', '1102069910', '2636208110']; 
    while(innCellText === inn){ // если такой инн уже есть в системе
        
        const index = Math.floor(Math.random() * masInn.length);
        console.log('index: ', index);
        inn = masInn[index]; 
        console.log('inn: ', inn); 
        await app().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn); // вызов метода фильтрации
        const innCell = await app().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'); // в гриде НП, ячейка где хранится ИНН 
        const innCellText = await app().locatorPage().getElement(page, innCell); // значение инн в ячейке

    }

    // const resetFilter = ('text="Очистить фильтры"');
    // await page.click(resetFilter);
  
    await app().createTaxpayerPage().createTaxpayer(page, inn); // вызываем метод создания НП


    // ИНН:                    
    const cellInn = await app().locatorPage().getLocator('table>tbody>tr:nth-child(1)>td:nth-child(1)>span'); // в гриде, на вкладке НП, ячейка где хранится ИНН
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


// добавить тест для создания ИП (12 значный ИНН):
it('Создание НП-12 значный', async () => {

    const email = await app().data()[0].email; 

    const password = await app().data()[0].password;

    const inn = ''; // Рандомно выбирать потом из массива 12- значных

    await app().loginPage().login(page, email, password); 
    
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

  const arrayInn = await app().loginPage().getAllInn();

  const index = Math.floor(Math.random() * arrayInn.length);

  console.log('index: ', index);

  const inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().loginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().searchTaxpayerByInnAtTaxpayers(page, inn); // вызов метода поиска рандомного инн из системы
  
  const innCell = await app().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'); // в гриде, на вкладке НП, ячейка где хранится ИНН 
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
    .to
    .have
    .string(inn);

});


it('Поиск по ИНН на вкладке Запросы', async () => {

  const arrayInn = await app().loginPage().getAllInn();

  const index = Math.floor(Math.random() * arrayInn.length);

  console.log('index: ', index);

  const inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().loginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().searchTaxpayerByInnAtRequests(page, inn); // вызов метода поиска по рандомноу инн из системы
  
  
  const innCell = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // в гриде, на вкладке Запросы, ячейка где хранится ИНН 
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
    .to
    .have
    .string(inn);

});



it('Фильтр по ИНН на вкладке НП', async () => {

  const arrayInn = await app().loginPage().getAllInn();

  const index = Math.floor(Math.random() * arrayInn.length);

  console.log('index: ', index);

  const inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().loginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn); // вызов метода фильтрации
  
  
  const innCell = await app().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'); // в гриде, на вкладке НП, ячейка где хранится ИНН 
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
    .to
    .have
    .string(inn);

});



it('Фильтр по ИНН на вкладке Запросы', async () => {

  const arrayInn = await app().loginPage().getAllInn();

  const index = Math.floor(Math.random() * arrayInn.length);

  console.log('index: ', index);

  const inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().loginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().filterTaxpayerByInnAtRequests(page, inn); // вызов метода поиска
  
  const innCell = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // в гриде, на вкладке Запросы, ячейка где хранится ИНН 
  console.log('innCell', innCell);
  const innCellText = await app().locatorPage().getElement(page, innCell);
  expect(innCellText)
    .to
    .have
    .string(inn);

});




