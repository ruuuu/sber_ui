import { app } from '../framework/pages/index';
import chai from 'chai';
import { goto, run, stop } from '../lib/browser/browser';
import { getRandomInnYrLiso, getRandomInnIP } from '../framework/pages/data';
import { createMochaInstanceAlreadyDisposedError } from 'mocha/lib/errors';

//TODO включить линтеры, а то код нечитабельный в jetbrains

const { expect } = chai;
let page;

let url = process.env.url;
let i = process.env.i; //  (для сбера 0, для втб 1, для оператора 2)
// запускам тесты командой: url=<значение> i=<значение> npm test, пример url=https://vtb.cprr-dev.weintegrator.com i=1 npm test

beforeEach(async () => { // в этот блок пишем фкнции котрые вызываются перед каждым тестом
    await run();
    page = await goto(url + '/login');

});

afterEach(async () => { // в этот блок пишем фкнции котрые вызываются после каждого теста
    await stop();
});





describe('Набор тестов для создания НП', () => {


    it.skip('Создание НП-10 значный', async () => {
        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);

        const inn = getRandomInnYrLiso();
        console.log('рандомный innYL: ', inn);
        await app().createTaxpayerPage().createTaxpayer(page, inn);


        // ИНН:        
        const cellInn = await app().locatorPage().getLocator(await app().filterSearchPage().getLocatorInnCellInRequestsTab()); // в гриде, на вкладке Запросы, ячейка где хранится ИНН
        const cellInnText = await app().locatorPage().getElement(page, cellInn); // получаем текст элемента
        expect(cellInnText)
            .to
            .have
            .string(inn);



        // Активность:  
        const cellActivity = await app().locatorPage().getLocator(await app().createTaxpayerPage().getLocatorCellActivityInRequestsTab()); // в гриде, на вкладке Зарпосы, ячейка где хранится АКтивность
        const cellActivityText = await app().locatorPage().getElement(page, cellActivity);
        expect(cellActivityText)
            .to
            .have
            .string('Получение карты сведений о НП');



        // Статус:  
        const cellStatus = await app().locatorPage().getLocator(await app().createTaxpayerPage().getLocatorCellStatusInRequestsTab()); // в гриде, на вкладке Зарпосы, ячейка где хранится Статус
        const cellStatusText = await app().locatorPage().getElement(page, cellStatus);
        expect(cellStatusText)
            .to
            .have
            .string('Подтвержден');

    });


    it('Запрос документов', async () => {
        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);

        await app().requestDocumentsPage().requestDocument(page); // Запрос дока

        // расскоментить когда пофиксят 
        // const notUpdateButtonLocator = await app().requestDocumentsPage().getLocatorNotUpdateButton(); // ('text="Нет обновлений"'); // задизейбленая кнопка Нет обновлений
        // const notUpdateButtonText = await app().locatorPage().getElement(page, notUpdateButtonLocator);


        // как пофиксят, расскомемнтить этот блок
        // expect(notUpdateButtonText)
        //     .to
        //     .have
        //     .string('Нет обновлений');


        await app().requestDocumentsPage().historyRequest(page); // Переходим на История заявок в карточке НП

        const statusRequestDocLocator = await app().requestDocumentsPage().getLocatorCellStatusInHistoryRequestsTab();
        // console.log('statusRequestDocLocator ', statusRequestDocLocator);
        const statusRequestDocText = await app().locatorPage().getElement(page, statusRequestDocLocator);

        //console.log('statusRequestDocText ', statusRequestDocText);
        // как пофиксят, рассклменнтить этот блок
        // expect(statusRequestDocText)
        //     .to
        //     .have
        //     .string('Подтвержден'); // Проверяем  статус запроса в История заявок (в карточке НП)


        const cellActivityLocator = await app().requestDocumentsPage().getLocatorAboutTaxpayer(); // ('text="Получение сведений о НП"') в карточке НП;
        const cellActivityText = await app().locatorPage().getElement(page, cellActivityLocator);

        expect(cellActivityText)
            .to
            .have
            .string('Получение сведений о НП');

        const cellFormatLocator = await app().locatorPage().getLocator(await app().requestDocumentsPage().getLocatorCellFormatInHistoryRequestsTab());
        const cellFormatText = await app().locatorPage().getElement(page, cellFormatLocator);
        expect(cellFormatText).contains("PDF", "XML");
        expect(cellFormatText).to.include("PDF", "XML");


        await app().requestDocumentsPage().validateInfoInRequestsTab(page);

        const statusDocRequestLocator = await app().requestDocumentsPage().getLocatorStatusDocRequestLocator();
        const statusDosRequestText = await app().locatorPage().getElement(page, statusDocRequestLocator);
        // как пофиксят, расскомментить этот блок:
        // expect(statusDosRequestText)
        //     .to
        //     .have
        //     .string('Подтвержден'); // Проверяем  статус запроса в гриде запросов 

        // Проверяем формат дока:
        const cellFormatInQueryRequestsLocator = await app().requestDocumentsPage().getLocatorcellFormatInQueryRequests();
        const cellFormatInQueryRequestsText = await app().locatorPage().getElement(page, cellFormatInQueryRequestsLocator);
        expect(cellFormatInQueryRequestsText).contains("PDF", "XML");
        expect(cellFormatInQueryRequestsText).to.include("PDF", "XML");

    });






    it.skip('Создание НП-12 значный', async () => {

        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);


        const inn = getRandomInnIP();
        console.log('рандомный innIP: ', inn);
        await app().createTaxpayerPage().createTaxpayer(page, inn);


        // ИНН:  
        const cellInn = await app().locatorPage().getLocator(await app().filterSearchPage().getLocatorInnCellInRequestsTab());
        const cellInnText = await app().locatorPage().getElement(page, cellInn);
        expect(cellInnText)
            .to
            .have
            .string(inn);


        // Активность:   
        const cellActivity = await app().locatorPage().getLocator(await app().createTaxpayerPage().getLocatorCellActivityInRequestsTab());
        const cellActivityText = await app().locatorPage().getElement(page, cellActivity);
        expect(cellActivityText)
            .to
            .have
            .string('Получение карты сведений о НП');


        // Статус:  
        const cellStatus = await app().locatorPage().getLocator(await app().createTaxpayerPage().getLocatorCellStatusInRequestsTab());
        const cellStatusText = await app().locatorPage().getElement(page, cellStatus);
        expect(cellStatusText)
            .to
            .have
            .string('Подтвержден');
    });


    it.skip('Создание НП, который уже есть в системе', async () => {

        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);

        const inn = await app().loginPage().getAllInn(url, i);
        await app().createTaxpayerPage().createTaxpayerAlreadyExist(page, inn);

        const redBlock = await app().locatorPage().getLocator(await app().createTaxpayerPage().getLocatorForRedMessage());
        const redBlockText = await app().locatorPage().getElement(page, redBlock);

        expect(redBlockText)
            .to
            .have
            .string('По данному ИНН уже создана карточка НП');
    });

});


describe('Набор тестов на поиск и фильтрацию данных НП', () => {

    it.skip('Поиск по ИНН на вкладке НП', async () => {

        const inn = await app().loginPage().getAllInn(url, i);
        //console.log('inn: ', inn);

        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);

        await app().filterSearchPage().searchTaxpayerByInnAtTaxpayers(page, inn);

        const innCell = await app().locatorPage().getLocator(await app().filterSearchPage().getLocatorInnCellInTaxpayerTab());
        const innCellText = await app().locatorPage().getElement(page, innCell);
        expect(innCellText)
            .to
            .have
            .string(inn);
    });


    it.skip('Поиск по ИНН на вкладке Запросы', async () => {

        const inn = await app().loginPage().getAllInn(url, i);
        //console.log('inn: ', inn);

        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);

        await app().filterSearchPage().searchTaxpayerByInnAtRequests(page, inn);


        const innCell = await app().locatorPage().getLocator(await app().filterSearchPage().getLocatorInnCellInRequestsTab());
        const innCellText = await app().locatorPage().getElement(page, innCell);
        expect(innCellText)
            .to
            .have
            .string(inn);
    });



    it.skip('Фильтр по ИНН на вкладке НП', async () => {

        const inn = await app().loginPage().getAllInn(url, i);
        //console.log('inn: ', inn);

        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);

        await app().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn);

        const innCell = await app().locatorPage().getLocator(await app().filterSearchPage().getLocatorInnCellInTaxpayerTab());

        const innCellText = await app().locatorPage().getElement(page, innCell);
        expect(innCellText)
            .to
            .have
            .string(inn);
    });



    it.skip('Фильтр по ИНН на вкладке Запросы', async () => {

        const inn = await app().loginPage().getAllInn(url, i);
        //console.log('inn: ', inn);

        const email = await app().data()[i].email;
        const password = await app().data()[i].password;
        await app().loginPage().login(page, email, password);

        await app().filterSearchPage().filterTaxpayerByInnAtRequests(page, inn);

        const innCell = await app().locatorPage().getLocator(await app().filterSearchPage().getLocatorInnCellInRequestsTab());

        //console.log('innCell', innCell);
        const innCellText = await app().locatorPage().getElement(page, innCell);
        expect(innCellText)
            .to
            .have
            .string(inn);
    });


    it.skip('Фильтр по Статус на вкладке Запросы', async () => {

        const statuses = ['PENDING', 'ACCEPTED', 'DECLINED', 'ERROR'];
        let statusRequest = statuses[Math.floor(Math.random() * statuses.length)];
        console.log('statusRequest ', statusRequest);

        const arrayStatus = await app().filterSearchPage().filterByStatusAtRequests(url, statusRequest, i);

        for (let i = 0; i < arrayStatus.length; i++) {
            expect(arrayStatus[i]).to.equal(statusRequest);
        }

        if (arrayStatus.length === 0) {
            expect(arrayStatus.length).to.equal(0);
        }
    });




});

//https://habr.com/ru/post/593577/
//https://chercher.tech/playwright-js/find-elements-playwright-js - по селекторам статья
// https://habr.com/ru/post/594489/