"use strict";

var _index = require("../framework/pages/index");

var _chai = _interopRequireDefault(require("chai"));

var _browser = require("../lib/browser/browser");

var _faker = require("faker");

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
          return regeneratorRuntime.awrap((0, _browser["goto"])(_index.urlSber));

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
  var email, password, masInn, index, inn, cellInn, cellInnText, cellActivity, cellActivityText, cellStatus, cellStatusText;
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
          masInn = ['4252009714']; // массив УНИКАЛЬНЫХ рандомных инн

          index = Math.floor(Math.random() * masInn.length); // 

          console.log('index: ', index);
          inn = masInn[index]; // рандомный инн 

          console.log('рандомный inn: ', inn);
          _context3.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().createTaxpayerPage().createTaxpayer(page, inn));

        case 15:
          _context3.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(1)>td:nth-child(1)>span'));

        case 17:
          cellInn = _context3.sent;
          _context3.next = 20;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellInn));

        case 20:
          cellInnText = _context3.sent;
          expect(cellInnText).to.have.string(inn);
          _context3.next = 24;
          return regeneratorRuntime.awrap(page.click('text="Запросы"'));

        case 24:
          _context3.next = 26;
          return regeneratorRuntime.awrap(page.waitForTimeout(12000));

        case 26:
          _context3.next = 28;
          return regeneratorRuntime.awrap(page.click('text="Налогоплательщики"'));

        case 28:
          _context3.next = 30;
          return regeneratorRuntime.awrap(page.click('text="Запросы"'));

        case 30:
          _context3.next = 32;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'));

        case 32:
          cellActivity = _context3.sent;
          _context3.next = 35;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellActivity));

        case 35:
          cellActivityText = _context3.sent;
          expect(cellActivityText).to.have.string('Запрос карты документов НП'); // Статус:  

          _context3.next = 39;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'));

        case 39:
          cellStatus = _context3.sent;
          _context3.next = 42;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellStatus));

        case 42:
          cellStatusText = _context3.sent;
          expect(cellStatusText).to.have.string('Подтвержден');

        case 44:
        case "end":
          return _context3.stop();
      }
    }
  });
});
it('Создание НП-10 значный котырй уже есть в системе', function _callee4() {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }
  });
});
it('Создание НП-12 значный котырй уже есть в системе', function _callee5() {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
        case "end":
          return _context5.stop();
      }
    }
  });
});
it.only('Создание НП-12 значный для сбера', function _callee6() {
  var email, password, inn, cellInn, cellInnText, cellStatus, cellStatusText, cellActivity, cellActivityText;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 2:
          email = _context6.sent;
          _context6.next = 5;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 5:
          password = _context6.sent;
          inn = '010400067870'; // Рандомно выбирать потом из массива 12- значных УНИКАЛЬНЫХ

          _context6.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 9:
          _context6.next = 11;
          return regeneratorRuntime.awrap((0, _index.app)().createTaxpayerPage().createTaxpayer(page, inn));

        case 11:
          _context6.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 13:
          cellInn = _context6.sent;
          _context6.next = 16;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellInn));

        case 16:
          cellInnText = _context6.sent;
          expect(cellInnText).to.have.string(inn); // Статус:  

          _context6.next = 20;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'));

        case 20:
          cellStatus = _context6.sent;
          _context6.next = 23;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellStatus));

        case 23:
          cellStatusText = _context6.sent;
          expect(cellStatusText).to.have.string('Подтвержден'); // Активность:  

          _context6.next = 27;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'));

        case 27:
          cellActivity = _context6.sent;
          _context6.next = 30;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellActivity));

        case 30:
          cellActivityText = _context6.sent;
          expect(cellActivityText).to.have.string('Запрос карты документов НП');

        case 32:
        case "end":
          return _context6.stop();
      }
    }
  });
});
it('Поиск по ИНН на вкладке НП', function _callee7() {
  var arrayInn, index, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn());

        case 2:
          arrayInn = _context7.sent;
          index = Math.floor(Math.random() * arrayInn.length);
          console.log('index: ', index);
          inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context7.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 9:
          email = _context7.sent;
          _context7.next = 12;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 12:
          password = _context7.sent;
          _context7.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 15:
          _context7.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().searchTaxpayerByInnAtTaxpayers(page, inn));

        case 17:
          _context7.next = 19;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'));

        case 19:
          innCell = _context7.sent;
          _context7.next = 22;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 22:
          innCellText = _context7.sent;
          expect(innCellText).to.have.string(inn);

        case 24:
        case "end":
          return _context7.stop();
      }
    }
  });
});
it('Поиск по ИНН на вкладке Запросы', function _callee8() {
  var arrayInn, index, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn());

        case 2:
          arrayInn = _context8.sent;
          index = Math.floor(Math.random() * arrayInn.length);
          console.log('index: ', index);
          inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context8.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 9:
          email = _context8.sent;
          _context8.next = 12;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 12:
          password = _context8.sent;
          _context8.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 15:
          _context8.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().searchTaxpayerByInnAtRequests(page, inn));

        case 17:
          _context8.next = 19;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 19:
          innCell = _context8.sent;
          _context8.next = 22;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 22:
          innCellText = _context8.sent;
          expect(innCellText).to.have.string(inn);

        case 24:
        case "end":
          return _context8.stop();
      }
    }
  });
});
it('Фильтр по ИНН на вкладке НП', function _callee9() {
  var arrayInn, index, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn());

        case 2:
          arrayInn = _context9.sent;
          index = Math.floor(Math.random() * arrayInn.length);
          console.log('index: ', index);
          inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context9.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 9:
          email = _context9.sent;
          _context9.next = 12;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 12:
          password = _context9.sent;
          _context9.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 15:
          _context9.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn));

        case 17:
          _context9.next = 19;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'));

        case 19:
          innCell = _context9.sent;
          _context9.next = 22;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 22:
          innCellText = _context9.sent;
          expect(innCellText).to.have.string(inn);

        case 24:
        case "end":
          return _context9.stop();
      }
    }
  });
});
it('Фильтр по ИНН на вкладке Запросы', function _callee10() {
  var arrayInn, index, inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().getAllInn());

        case 2:
          arrayInn = _context10.sent;
          index = Math.floor(Math.random() * arrayInn.length);
          console.log('index: ', index);
          inn = arrayInn[index]; // рандомнм образом из  массива инн, которые есть в системе

          console.log('inn: ', inn);
          _context10.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 9:
          email = _context10.sent;
          _context10.next = 12;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 12:
          password = _context10.sent;
          _context10.next = 15;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 15:
          _context10.next = 17;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterTaxpayerByInnAtRequests(page, inn));

        case 17:
          _context10.next = 19;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 19:
          innCell = _context10.sent;
          // в гриде, на вкладке Запросы, ячейка где хранится ИНН 
          console.log('innCell', innCell);
          _context10.next = 23;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 23:
          innCellText = _context10.sent;
          expect(innCellText).to.have.string(inn);

        case 25:
        case "end":
          return _context10.stop();
      }
    }
  });
});
it('Фильтр по Статусу на вкладке Запросы', function _callee11() {
  var email, password;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 2:
          email = _context11.sent;
          _context11.next = 5;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 5:
          password = _context11.sent;
          _context11.next = 8;
          return regeneratorRuntime.awrap((0, _index.app)().loginPage().login(page, email, password));

        case 8:
          _context11.next = 10;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterByStatusAtRequests(page));

        case 10:
        case "end":
          return _context11.stop();
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