import { LoginPage } from './loginPage'; 
import { CreateTaxpayerPage } from './createTaxpayerPage'; 
import { dataGenerate } from './data';
import { LocatorPage } from './locatorPage'; 
import { FilterSearchPage  } from './filterSearchPage'; 

const urlSber = 'https://sber.cprr-preprod.weintegrator.com';  // dev
const urlVtb = 'https://vtb.cprr-preprod.weintegrator.com'; // dev
const urlFns = 'https://fns.cprr-dev.weintegrator.com';


const app = () => ({  
    loginPage: ()  => new LoginPage(), 
    createTaxpayerPage: () => new CreateTaxpayerPage(),
    locatorPage: () => new LocatorPage(),
    filterSearchPage: () => new FilterSearchPage(),
    data: () => new dataGenerate(),
});


export { app, urlSber, urlVtb, urlFns }; 