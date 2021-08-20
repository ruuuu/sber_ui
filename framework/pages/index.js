import { LoginPage } from './loginPage'; 
import { CreateTaxpayerPage } from './createTaxpayerPage'; 
import { DataGenerate } from './data';
import { LocatorPage } from './locatorPage'; 
import { FilterSearchPage  } from './filterSearchPage'; 

const urlSber = 'https://sber.cprr-dev.weintegrator.com/login';
const urlVtb = 'https://vtb.cprr-dev.weintegrator.com/login';
const urlFns = 'https://fns.cprr-dev.weintegrator.com/login';


const app = () => ({  
    loginPage: ()  => new LoginPage(), 
    createTaxpayerPage: () => new CreateTaxpayerPage(),
    locatorPage: () => new LocatorPage(),
    filterSearchPage: () => new FilterSearchPage(),
    data: () => new DataGenerate(),
});


export { app, urlSber, urlVtb, urlFns }; 