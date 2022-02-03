const CreateTaxpayerPage = function () {

    const createTaxpayerButton = ('text="Создать карточку"'); // кнопка "Создать карточку"    
    const innField = ('[data-field-name = "inn"]'); // поле ввода ИНН
    const checkButton = ('text="Найти"'); // синяя кнопка  Найти(check) 
    const prodolgitButton = ('text="Продолжить"'); // оранжевая кнопка Продолжить
    const queryTab = ('text="Заявки на получение сведений"'); // вкладка  Запросы
    const innTab = ('text="Налогоплательщики"'); // вкладка Налогоплательщики
    const closeButton = ('#modal-close-icon'); // крестик чтобы закрыть карточку НП



    this.createTaxpayer = async function (page, inn) {

        await page.click(createTaxpayerButton);

        await page.fill(innField, inn);

        await page.click(checkButton);

        await page.click(prodolgitButton);
        await page.waitForTimeout(1000); // 1 сек ждем 

        await page.click(closeButton);
        // await page.$eval("#modal-close-icon", e => e.click());
        await page.click(queryTab);

    };




    this.createTaxpayerAlreadyExist = async function (page, inn) { // Создаем НП, котрый уже есть в системе

        await page.click(createTaxpayerButton);

        await page.fill(innField, inn);

        await page.click(checkButton);

        await page.click(prodolgitButton);

        await page.click(prodolgitButton);

    };

    this.getLocatorCellActivityInRequestsTab = async function () {
        const activityLocator = ('table>tbody>tr:nth-child(2)>td:nth-child(3)>div');
        return activityLocator;
    }

    this.getLocatorCellStatusInRequestsTab = async function () { // локатор для статуса
        const statusLocator = ('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div');
        return statusLocator;
    }

    this.getLocatorForRedMessage = async function () {
        const redMessageLocator = ('text="По данному ИНН уже создана карточка НП"');
        return redMessageLocator;
    }


};

export { CreateTaxpayerPage }