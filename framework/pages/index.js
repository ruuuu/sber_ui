import { LoginPage } from './loginPage';
import { CreateTaxpayerPage } from './createTaxpayerPage';
import { dataGenerate } from './data';
import { LocatorPage } from './locatorPage';
import { FilterSearchPage } from './filterSearchPage';



const app = () => ({
    loginPage: () => new LoginPage(),
    createTaxpayerPage: () => new CreateTaxpayerPage(),
    locatorPage: () => new LocatorPage(),
    filterSearchPage: () => new FilterSearchPage(),
    data: () => new dataGenerate(),
});


export { app };