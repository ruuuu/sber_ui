import { app, urlSber, urlVtb, urlFns } from '../framework/pages/index';
import chai from 'chai'; // для expect
import { goto, run, stop } from '../lib/browser/browser';
import { arrayInnYrLiso, arrayInnIP } from '../framework/pages/data';


const { expect } = chai;
let page;

beforeEach(async () => {
  await run();
  page = await goto(urlSber + '/login'); 
});

afterEach(async () => {
  await stop();
});






it('Создание НП-10 значный', async () => {

    const email = await app().data()[0].email; 

    const password = await app().data()[0].password;

    await app().loginPage().login(page, email, password); 

    const masInn = arrayInnYrLiso(); // массив УНИКАЛЬНЫХ рандомных  10 значных инн
    console.log('masInn ', masInn);
    
    let inn = masInn[Math.floor(Math.random() * masInn.length)]; // рандомный инн 
    //console.log('рандомный inn: ', inn);

    await app().createTaxpayerPage().createTaxpayer(page, inn); // вызываем метод создания НП


    // ИНН:                    
    const cellInn = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // в гриде, на вкладке Запросы, ячейка где хранится ИНН
    const cellInnText = await app().locatorPage().getElement(page, cellInn);
    expect(cellInnText)
      .to
      .have
      .string(inn); 


    // Активность:  
    const cellActivity = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'); // в гриде, на вкладке Зарпосы, ячейка где хранится АКтивность 
    const cellActivityText = await app().locatorPage().getElement(page, cellActivity);
    expect(cellActivityText)
      .to
      .have
      .string('Получение карты сведений о НП');   



    // Статус:  
    const cellStatus = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'); // в гриде, на вкладке Зарпосы, ячейка где хранится Статус   
    const cellStatusText = await app().locatorPage().getElement(page, cellStatus);
    expect(cellStatusText)
      .to
      .have
      .string('Обработка');  // Подтвержден

});




it('Создание НП-12 значный', async () => { // 

    const email = await app().data()[0].email; 

    const password = await app().data()[0].password;
    
    const masInn = arrayInnIP(); // Рандомно выбирать потом из массива 12- значных УНИКАЛЬНЫХ

    let inn = masInn[Math.floor(Math.random() * masInn.length)]; // рандомный инн 

    await app().loginPage().login(page, email, password); 
    
    await app().createTaxpayerPage().createTaxpayer(page, inn); // вызываем метод создания НП

    

    // ИНН:
    const cellInn = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // ячейка где хранится ИНН(в гриде, на вкладке Зарпосы) 
    const cellInnText = await app().locatorPage().getElement(page, cellInn);
    expect(cellInnText)
      .to
      .have
      .string(inn); 


    // Статус:  
    const cellStatus = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'); //ячейка где хранится Статус (в гриде, на вкладке Зарпосы)  
    const cellStatusText = await app().locatorPage().getElement(page, cellStatus);
    expect(cellStatusText)
      .to
      .have
      .string('Обработка');  //Подтвержден


    // Активность:  
    const cellActivity = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'); // ячейка  Активность (в гриде, на вкладке Зарпосы)  
    const cellActivityText = await app().locatorPage().getElement(page, cellActivity);
    expect(cellActivityText)
      .to
      .have
      .string('Получение карты сведений о НП');   

});


it('Создание НП, который уже есть в системе', async () => { 

  const arrayInn = await app().loginPage().getAllInn(urlSber);
  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; 
  //console.log('inn: ', inn);

  const email = await app().data()[1].email; 
  const password = await app().data()[1].password;

  await app().loginPage().login(page, email, password); 
  
  await app().createTaxpayerPage().createTaxpayerAlreadyExist(page, inn); // вызываем метод создания НП

  const redBlock = await app().locatorPage().getLocator('text="По данному ИНН уже создана карточка НП"'); // красное сообщение 
  const redBlockText = await app().locatorPage().getElement(page, redBlock);
  
  expect(redBlockText)
      .to
      .have
      .string('По данному ИНН уже создана карточка НП'); 

});



it('Поиск по ИНН на вкладке НП', async () => {

  const arrayInn = await app().loginPage().getAllInn(urlSber);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
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

  const arrayInn = await app().loginPage().getAllInn(urlSber);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
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

  const arrayInn = await app().loginPage().getAllInn(urlSber);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
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

  const arrayInn = await app().loginPage().getAllInn(urlSber);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
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


it('Фильтр по Статусу на вкладке Запросы', async () => { // ПОКА НЕ ПОЛУЧАЕТСЯ


  const email = await app().data()[0].email; 
  const password = await app().data()[0].password;

  await app().loginPage().login(page, email, password); // вызов метода login

  await app().filterSearchPage().filterByStatusAtRequests(page); // вызов метода фильтрации пос татусу, пердаем стаутс
  
  
  // const statusCell = await app().locatorPage().getLocator('table/tbody/tr[2]/td[2]/div/div'); // в гриде, на вкладке Запросы, ячейка где хранится Статус
  // console.log('statusCell ', statusCell);
  // const statusCellText = await app().locatorPage().getElement(page, statusCell);
  // expect(statusCellText)
  //   .to
  //   .have
  //   .string(randStatus);

});




// // table/tbody/tr[2]/td[2]/div/div
// // table/tbody/tr[3]/td[2]/div/div
// // table/tbody/tr[4]/td[2]/div/div
// // 
// let masStatuses = [];

// for(let i=0; i< 10; i++){
//   expect((table/tbody/tr[i]/td[2]/div/div).textContent)
//     .to
//     .have
//     .string('Подтвержден');

// }

// // masStatuse = ['Потдвержден', 'Обработка', 'Подтвержедн'];

// for(let i=0; i< 10; i++){
//   if(masStatuse[i] === 'Подтвержден'){

//   }


// }


// Создаем НП, жме мна него, открывается окно, идем в История запрсов