"use strict";

var _index = require("../framework/pages/index");

var _chai = _interopRequireDefault(require("chai"));

var _browser = require("../lib/browser/browser");

var _data = require("../framework/pages/data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// для expect
var expect = _chai["default"].expect;
var page;
beforeEach(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _browser.run)());

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _browser["goto"])(_index.urlSber + '/login'));

        case 4:
          page = _context.sent;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
afterEach(function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _browser.stop)());

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
it('Создание НП-10 значный', function _callee3() {
  var email, password, masInn, inn, cellInn, cellInnText, cellActivity, cellActivityText, cellStatus, cellStatusText;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 2:
          email = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 5:
          password = _context3.sent;
          _context3.next = 8;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 8:
          masInn = (0, _data.arrayInnYrLiso)(); // массив УНИКАЛЬНЫХ рандомных  10 значных инн

          console.log('masInn ', masInn);
          inn = masInn[Math.floor(Math.random() * masInn.length)]; // рандомный инн 
          //console.log('рандомный inn: ', inn);

          _context3.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().createTaxpayerPage().createTaxpayer(page, inn));

        case 13:
          _context3.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 15:
          cellInn = _context3.sent;
          _context3.next = 18;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellInn));

        case 18:
          cellInnText = _context3.sent;
          expect(cellInnText).to.have.string(inn); // Активность:  

          _context3.next = 22;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'));

        case 22:
          cellActivity = _context3.sent;
          _context3.next = 25;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellActivity));

        case 25:
          cellActivityText = _context3.sent;
          expect(cellActivityText).to.have.string('Получение карты сведений о НП'); // Статус:  

          _context3.next = 29;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'));

        case 29:
          cellStatus = _context3.sent;
          _context3.next = 32;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellStatus));

        case 32:
          cellStatusText = _context3.sent;
          expect(cellStatusText).to.have.string('Обработка'); // Подтвержден

        case 34:
        case "end":
          return _context3.stop();
      }
    }
  });
});
it('Создание НП-12 значный', function _callee4() {
  var email, password, masInn, inn, cellInn, cellInnText, cellStatus, cellStatusText, cellActivity, cellActivityText;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 2:
          email = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 5:
          password = _context4.sent;
          masInn = (0, _data.arrayInnIP)(); // Рандомно выбирать потом из массива 12- значных УНИКАЛЬНЫХ

          inn = masInn[Math.floor(Math.random() * masInn.length)]; // рандомный инн 

          _context4.next = 10;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 10:
          _context4.next = 12;
          return regeneratorRuntime.awrap((0, _index.app)().createTaxpayerPage().createTaxpayer(page, inn));

        case 12:
          _context4.next = 14;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 14:
          cellInn = _context4.sent;
          _context4.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellInn));

        case 17:
          cellInnText = _context4.sent;
          expect(cellInnText).to.have.string(inn); // Статус:  

          _context4.next = 21;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'));

        case 21:
          cellStatus = _context4.sent;
          _context4.next = 24;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellStatus));

        case 24:
          cellStatusText = _context4.sent;
          expect(cellStatusText).to.have.string('Обработка'); //Подтвержден
          // Активность:  

          _context4.next = 28;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'));

        case 28:
          cellActivity = _context4.sent;
          _context4.next = 31;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellActivity));

        case 31:
          cellActivityText = _context4.sent;
          expect(cellActivityText).to.have.string('Получение карты сведений о НП');

        case 33:
        case "end":
          return _context4.stop();
      }
    }
  });
});
it('Создание НП, который уже есть в системе', function _callee5() {
  var arrayInn, inn, email, password, redBlock, redBlockText;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn(_index.urlSber));

        case 2:
          arrayInn = _context5.sent;
          inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; //console.log('inn: ', inn);

          _context5.next = 6;
          return regeneratorRuntime.awrap((0, _index.app)().data()[1].email);

        case 6:
          email = _context5.sent;
          _context5.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().data()[1].password);

        case 9:
          password = _context5.sent;
          _context5.next = 12;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 12:
          _context5.next = 14;
          return regeneratorRuntime.awrap((0, _index.app)().createTaxpayerPage().createTaxpayerAlreadyExist(page, inn));

        case 14:
          _context5.next = 16;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('text="По данному ИНН уже создана карточка НП"'));

        case 16:
          redBlock = _context5.sent;
          _context5.next = 19;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, redBlock));

        case 19:
          redBlockText = _context5.sent;
          expect(redBlockText).to.have.string('По данному ИНН уже создана карточка НП');

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  });
});
it('Поиск по ИНН на вкладке НП', function _callee6() {
  var arrayInn, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn(_index.urlSber));

        case 2:
          arrayInn = _context6.sent;
          inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context6.next = 7;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 7:
          email = _context6.sent;
          _context6.next = 10;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 10:
          password = _context6.sent;
          _context6.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 13:
          _context6.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().searchTaxpayerByInnAtTaxpayers(page, inn));

        case 15:
          _context6.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'));

        case 17:
          innCell = _context6.sent;
          _context6.next = 20;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 20:
          innCellText = _context6.sent;
          expect(innCellText).to.have.string(inn);

        case 22:
        case "end":
          return _context6.stop();
      }
    }
  });
});
it('Поиск по ИНН на вкладке Запросы', function _callee7() {
  var arrayInn, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn(_index.urlSber));

        case 2:
          arrayInn = _context7.sent;
          inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context7.next = 7;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 7:
          email = _context7.sent;
          _context7.next = 10;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 10:
          password = _context7.sent;
          _context7.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 13:
          _context7.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().searchTaxpayerByInnAtRequests(page, inn));

        case 15:
          _context7.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 17:
          innCell = _context7.sent;
          _context7.next = 20;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 20:
          innCellText = _context7.sent;
          expect(innCellText).to.have.string(inn);

        case 22:
        case "end":
          return _context7.stop();
      }
    }
  });
});
it('Фильтр по ИНН на вкладке НП', function _callee8() {
  var arrayInn, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn(_index.urlSber));

        case 2:
          arrayInn = _context8.sent;
          inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context8.next = 7;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 7:
          email = _context8.sent;
          _context8.next = 10;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 10:
          password = _context8.sent;
          _context8.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 13:
          _context8.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn));

        case 15:
          _context8.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'));

        case 17:
          innCell = _context8.sent;
          _context8.next = 20;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 20:
          innCellText = _context8.sent;
          expect(innCellText).to.have.string(inn);

        case 22:
        case "end":
          return _context8.stop();
      }
    }
  });
});
it('Фильтр по ИНН на вкладке Запросы', function _callee9() {
  var arrayInn, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn(_index.urlSber));

        case 2:
          arrayInn = _context9.sent;
          inn = arrayInn[Math.floor(Math.random() * arrayInn.length)]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context9.next = 7;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 7:
          email = _context9.sent;
          _context9.next = 10;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 10:
          password = _context9.sent;
          _context9.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 13:
          _context9.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterTaxpayerByInnAtRequests(page, inn));

        case 15:
          _context9.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 17:
          innCell = _context9.sent;
          // в гриде, на вкладке Запросы, ячейка где хранится ИНН 
          console.log('innCell', innCell);
          _context9.next = 21;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 21:
          innCellText = _context9.sent;
          expect(innCellText).to.have.string(inn);

        case 23:
        case "end":
          return _context9.stop();
      }
    }
  });
});
it('Фильтр по Статусу на вкладке Запросы', function _callee10() {
  var email, password;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 2:
          email = _context10.sent;
          _context10.next = 5;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 5:
          password = _context10.sent;
          _context10.next = 8;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 8:
          _context10.next = 10;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterByStatusAtRequests(page));

        case 10:
        case "end":
          return _context10.stop();
      }
    }
  });
}); // // table/tbody/tr[2]/td[2]/div/div
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