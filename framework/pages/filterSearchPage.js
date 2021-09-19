import supertest from 'supertest'; // используем библиотеку supertest
import { app } from './index.js'; 

const FilterSearchPage = function() { 

  const poiskButton = ('div>div>div>div:nth-child(1)>div>div:nth-child(4)>div>div'); // кнпока Лупа
  const searchInnField = ('[placeholder="Введите ИНН"]'); // поле поиска по ИНН
  const requests = ('text="Заявки на получение сведений"'); // вкладка Запросы
  
  const filterButtonForInnAtTaxpayers = ('table>thead>tr>th:nth-child(1)>div>div>div:nth-child(2)>div:nth-child(2)>div'); // треугольничек для фильтра по инн на вкладке НП
  const innFiled = ('[placeholder = "Найти..."]'); 
  const applyButton = ('text="Применить"'); // кнопка Применить

  const filterButtonForInnAtRequests = ('table>thead>tr>th:nth-child(4)>div>div>div:nth-child(2)>div:nth-child(2)');// треугольничек для фильра по инн на вкладке Запросы

  


  this.searchTaxpayerByInnAtTaxpayers = async function (page, inn){   // поиск по ИНН на вкладке НП
    
    await page.click(poiskButton); // жмем на кнопку Лупы

    await page.fill(searchInnField, inn); 

  };



  this.filterTaxpayerByInnAtTaxpayers = async function (page, inn){  // фильтр по Инн на вкладке НП
    
    await page.click(filterButtonForInnAtTaxpayers); // на треугольничек жмем

    await page.fill(innFiled, '');  // очищвем поле
    await page.fill(innFiled, inn); 

    await page.click(applyButton);  // жмем Применить
    
  };



  this.searchTaxpayerByInnAtRequests = async function (page, inn){   // поиск по ИНН на вкладке Запросы

    await page.click(requests); // переходим на  вкладку Запросы
    
    await page.click(poiskButton); // жме мна кнопку Лупы

    await page.fill(searchInnField, inn); // вбиваем Инн в поле поиска
    
  };


  
  this.filterTaxpayerByInnAtRequests = async function (page, inn){  // фильтр по Инн на вкладке Запросы

    await page.click(requests); // переходим на  вкладку Запросы

    await page.click(filterButtonForInnAtRequests); // на треугольничек жмем

    await page.fill(innFiled, inn); 

    await page.click(applyButton);  // жмем Применить
    
  };




  this.filterByStatusAtRequests = async function (url, statusRequest){  // фильтр по Статусу на вкладке Запросы, пока не получилось

     const data = { // входные данные 
      grant_type: "password",
      password: String(app().data()[0].password), 
      username: String(app().data()[0].email) 
    };

    const rr = await supertest(url) // 'https://sber.cprr-dev.weintegrator.com'
      .post('/api/v0/vst-oauth2/oauth/token') 
      .set('Authorization', `Basic ZGVtby1jbGllbnQ6c2VjcmV0`) 
      .send(data);

    const token = rr.body.access_token;  
    //console.log('token = ', token);


    const r = await supertest(url) // 'https://sber.cprr-dev.weintegrator.com'
        .get('/api/v0/tpf-bank/taxpayers/requests') 
        .query({ page: 0, size: 20, status: statusRequest }) // передаем query парметры
        .set('Authorization', `Bearer ${token}`); 
    
    //console.log('r.body ', r.body);    

    let arrayStatus = [];
    for(let i = 0; i < r.body.content.length; i++){
      arrayStatus.push(r.body.content[i].status); // заполняем массив
    }

    console.log('arrayStatus ', arrayStatus);

    return arrayStatus;
  };


};


export { FilterSearchPage };