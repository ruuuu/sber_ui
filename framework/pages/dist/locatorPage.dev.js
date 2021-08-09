"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocatorPage = void 0;

var LocatorPage = function LocatorPage() {
  this.getLocator = function _callee(locator) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", locator);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  this.getElement = function _callee2(page, locator) {
    var elemText;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(page.waitForSelector(locator).then(function () {
              return console.log('Загрузился элемент');
            }));

          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap(page.textContent(locator));

          case 4:
            elemText = _context2.sent;
            return _context2.abrupt("return", elemText);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.LocatorPage = LocatorPage;