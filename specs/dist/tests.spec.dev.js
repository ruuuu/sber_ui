"use strict";

var _index = require("../framework/pages/index");

var _chai = _interopRequireDefault(require("chai"));

var _browser = require("../lib/browser/browser");

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
it('Создание НП', function _callee3() {
  var email, password, inn, cellInn, cellInnText, cellStatus, cellStatusText, cellActivity, cellActivityText;
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
          inn = '2634806330'; // Рандомно выбирать

          _context3.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().sberLoginPage().login(page, email, password));

        case 9:
          _context3.next = 11;
          return regeneratorRuntime.awrap((0, _index.app)().createTaxpayerPage().createTaxpayer(page, inn));

        case 11:
          _context3.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 13:
          cellInn = _context3.sent;
          _context3.next = 16;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellInn));

        case 16:
          cellInnText = _context3.sent;
          expect(cellInnText).to.have.string(inn); // Статус:  

          _context3.next = 20;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'));

        case 20:
          cellStatus = _context3.sent;
          _context3.next = 23;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellStatus));

        case 23:
          cellStatusText = _context3.sent;
          expect(cellStatusText).to.have.string('Подтвержден'); // Активность:  

          _context3.next = 27;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(3)>div'));

        case 27:
          cellActivity = _context3.sent;
          _context3.next = 30;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, cellActivity));

        case 30:
          cellActivityText = _context3.sent;
          expect(cellActivityText).to.have.string('Запрос карты документов НП');

        case 32:
        case "end":
          return _context3.stop();
      }
    }
  });
});
it('Поиск по ИНН на вкладке НП', function _callee4() {
  var inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе

          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 3:
          email = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 6:
          password = _context4.sent;
          _context4.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().sberLoginPage().login(page, email, password));

        case 9:
          _context4.next = 11;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().searchTaxpayerByInnAtTaxpayers(page, inn));

        case 11:
          _context4.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'));

        case 13:
          innCell = _context4.sent;
          _context4.next = 16;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 16:
          innCellText = _context4.sent;
          expect(innCellText).to.have.string(inn);

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  });
});
it('Поиск по ИНН на вкладке Запросы', function _callee5() {
  var inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе

          _context5.next = 3;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 3:
          email = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 6:
          password = _context5.sent;
          _context5.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().sberLoginPage().login(page, email, password));

        case 9:
          _context5.next = 11;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().searchTaxpayerByInnAtRequests(page, inn));

        case 11:
          _context5.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 13:
          innCell = _context5.sent;
          _context5.next = 16;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 16:
          innCellText = _context5.sent;
          expect(innCellText).to.have.string(inn);

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  });
});
it('Фильтр по ИНН на вкладке НП', function _callee6() {
  var inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе

          _context6.next = 3;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 3:
          email = _context6.sent;
          _context6.next = 6;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 6:
          password = _context6.sent;
          _context6.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().sberLoginPage().login(page, email, password));

        case 9:
          _context6.next = 11;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterTaxpayerByInnAtTaxpayers(page, inn));

        case 11:
          _context6.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr>td:nth-child(1)>span'));

        case 13:
          innCell = _context6.sent;
          _context6.next = 16;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 16:
          innCellText = _context6.sent;
          expect(innCellText).to.have.string(inn);

        case 18:
        case "end":
          return _context6.stop();
      }
    }
  });
});
it.only('Фильтр по ИНН на вкладке Запросы', function _callee7() {
  var inn, email, password, innCell, innCellText;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          inn = '5004023618'; // брать рандомнм образоам из  массива инн, кгтрые есть в системе

          _context7.next = 3;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].email);

        case 3:
          email = _context7.sent;
          _context7.next = 6;
          return regeneratorRuntime.awrap((0, _index.app)().data()[0].password);

        case 6:
          password = _context7.sent;
          _context7.next = 9;
          return regeneratorRuntime.awrap((0, _index.app)().sberLoginPage().login(page, email, password));

        case 9:
          _context7.next = 11;
          return regeneratorRuntime.awrap((0, _index.app)().filterSearchPage().filterTaxpayerByInnAtRequests(page, inn));

        case 11:
          _context7.next = 13;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getLocator('table>tbody>tr:nth-child(2)>td:nth-child(4)>div'));

        case 13:
          innCell = _context7.sent;
          _context7.next = 16;
          return regeneratorRuntime.awrap((0, _index.app)().locatorPage().getElement(page, innCell));

        case 16:
          innCellText = _context7.sent;
          expect(innCellText).to.have.string(inn);

        case 18:
        case "end":
          return _context7.stop();
      }
    }
  });
});