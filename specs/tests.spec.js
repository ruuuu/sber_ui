import { app, urlSber, urlVtb, urlFns } from '../framework/pages/index';
import chai from 'chai'; // для expect
import { goto, run, stop } from '../lib/browser/browser';
import { arrayInnYrLiso, arrayInnIP } from '../framework/pages/data';


const { expect } = chai;
let page;
let url = urlSber; // здесь меняем на нужный урл
let i = 0; //  (для сбера 0, 1 для втб)

beforeEach(async () => {
  await run();
  page = await goto(url + '/login'); //  указываем url стэнда 


afterEach(async () => {
  await stop();
});






it('Создание НП-10 значный', async () => {

    const email = await app().data()[i].email; 

    const password = await app().data()[i].password;

    await app().loginPage().login(page, email, password); 

    const masInn = arrayInnYrLiso(); // массив НОВЫХ 10-значных инн
    //console.log('masInn ', masInn);
    
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
      .string('Подтвержден');  

});




it('Создание НП-12 значный', async () => {  

    const email = await app().data()[i].email; 

    const password = await app().data()[i].password;
    
    const masInn = arrayInnIP(); //  массив НОВЫХ  12- значных ИНН

    let inn = masInn[Math.floor(Math.random() * masInn.length)]; 

    await app().loginPage().login(page, email, password); 
    
    await app().createTaxpayerPage().createTaxpayer(page, inn); // вызываем метод создания НП

    

    // ИНН:          
    const cellInn = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'); // ячейка где хранится ИНН(в гриде, на вкладке Зарпосы) 
    const cellInnText = await app().locatorPage().getElement(page, cellInn);
    expect(cellInnText)
      .to
      .have
      .string(inn); 


    // Активность:  
    const cellActivity = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'); // ячейка  Активность (в гриде, на вкладке Зарпосы)  
    const cellActivityText = await app().locatorPage().getElement(page, cellActivity);
    expect(cellActivityText)
      .to
      .have
      .string('Получение карты сведений о НП');   


    // Статус:  
    const cellStatus = await app().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'); //ячейка где хранится Статус (в гриде, на вкладке Зарпосы) 
    const cellStatusText = await app().locatorPage().getElement(page, cellStatus);
    expect(cellStatusText)
      .to
      .have
      .string('Подтвержден');   

});


it('Создание НП, который уже есть в системе', async () => { 

  const arrayInn = await app().loginPage().getAllInn(url);
  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; 
  //console.log('inn: ', inn);

  const email = await app().data()[i].email; 
  const password = await app().data()[i].password;

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

  const arrayInn = await app().loginPage().getAllInn(url);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[i].email; 
  const password = await app().data()[i].password;

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

  const arrayInn = await app().loginPage().getAllInn(url);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[i].email; 
  const password = await app().data()[i].password;

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

  const arrayInn = await app().loginPage().getAllInn(url);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[i].email; 
  const password = await app().data()[i].password;

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

  const arrayInn = await app().loginPage().getAllInn(url);

  const inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе
  console.log('inn: ', inn);

  const email = await app().data()[i].email; 
  const password = await app().data()[i].password;

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


it('Фильтр по Статус на вкладке Запросы', async () => { 

  const statuses = ['PENDING', 'ACCEPTED', 'DECLINED', 'ERROR'];
  let statusRequest = statuses[Math.floor(Math.random() * statuses.length)];
  console.log('statusRequest ', statusRequest);

  const arrayStatus = await app().filterSearchPage().filterByStatusAtRequests(url, statusRequest, i); // вызов метода фильтрации по cтатусу, пердаем стаутс

  
  for(let i = 0; i < arrayStatus.length; i++){
    expect(arrayStatus[i]).to.equal(statusRequest);
  }
  
  if(arrayStatus.length === 0){
    expect(arrayStatus.length).to.equal(0);
  }

});






<<<<<<< HEAD
// Создаем НП, жмем на него, открывается окно, идем в История запросов
=======
// Создаем НП, жме мна него, открывается окно, идем в История запрсов
>>>>>>> 5a3e06fe0c659f07ba747da816bfe6fe09472d03
