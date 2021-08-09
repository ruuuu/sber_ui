"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTaxpayerPage = void 0;

var CreateTaxpayerPage = function CreateTaxpayerPage() {
  var createTaxpayerButton = 'html>body>div>div>div>div>div:nth-child(2)>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(5)>button'; // кнопка "Звпросить данные НП"    

  var innField = '[data-field-name = "inn"]'; // поле ввода ИНН

  var checkButton = 'form>div>div:nth-child(2)>button'; //  кнопка  Найти(check)

  var prodolgitButton = 'text="Продолжить"'; // кнопка Продолжить, нашел по надписи на кнпоке

  var requests = 'html>body>div>div>div>div>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)'; // вкладка Запросы

  var alreadyExistInn = 'html>body>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(1)>div'; // красное сообщение что ИНН уже есть

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
            return regeneratorRuntime.awrap(page.click(requests));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.CreateTaxpayerPage = CreateTaxpayerPage;