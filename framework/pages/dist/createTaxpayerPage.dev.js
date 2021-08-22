"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTaxpayerPage = void 0;

var CreateTaxpayerPage = function CreateTaxpayerPage() {
  var createTaxpayerButton = 'text="Запросить данные НП"'; // кнопка "Звпросить данные НП"    

  var innField = '[data-field-name = "inn"]'; // поле ввода ИНН

  var checkButton = 'text="Найти"'; //  кнопка  Найти(check) form>div>div:nth-child(2)>button

  var prodolgitButton = 'text="Продолжить"'; // кнопка Продолжить
  //const alreadyExistInnlocator = ('text="По данному ИНН уже создана карточка НП"'); // красное сообщение что ИНН уже есть

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
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.CreateTaxpayerPage = CreateTaxpayerPage;