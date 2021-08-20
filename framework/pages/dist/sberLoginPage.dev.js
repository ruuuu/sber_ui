"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginPage = void 0;

var loginPage = function loginPage() {
  var loginField = '[data-field-name="login"]';
  var passwordField = '[data-field-name="password"]';
  var loginButton = 'button'; // кнопка Войти

  var linkTpf = 'a[href="/tpf"]'; // жмем на плашку Кред досье

  this.login = function _callee(page, name, password) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(page.fill(loginField, name));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(page.fill(passwordField, password));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(page.click(loginButton));

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap(page.click(linkTpf));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.loginPage = loginPage;