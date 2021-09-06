"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTaxpayerPage = void 0;

var CreateTaxpayerPage = function CreateTaxpayerPage() {
  var createTaxpayerButton = 'text="Создать карточку"'; // кнопка "Создать карточку"    

  var innField = '[data-field-name = "inn"]'; // поле ввода ИНН

  var checkButton = 'text="Найти"'; //  кнопка  Найти(check) form>div>div:nth-child(2)>button

  var prodolgitButton = 'text="Продолжить"'; // кнопка Продолжить

  var queryTab = 'text="Заявки на получение сведений"'; // вкладка  Запросы

  var innTab = 'text="Налогоплательщики"'; // вкладка Налогоплательщики

  this.createTaxpayer = function _callee(page, inn) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(page.click(createTaxpayerButton));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(page.fill(innField, inn));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(page.click(checkButton));

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap(page.click(prodolgitButton));

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap(page.click(queryTab));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  this.createTaxpayerAlreadyExist = function _callee2(page, inn) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(page.click(createTaxpayerButton));

          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap(page.fill(innField, inn));

          case 4:
            _context2.next = 6;
            return regeneratorRuntime.awrap(page.click(checkButton));

          case 6:
            _context2.next = 8;
            return regeneratorRuntime.awrap(page.click(prodolgitButton));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.CreateTaxpayerPage = CreateTaxpayerPage;