"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPage = void 0;

var _supertest = _interopRequireDefault(require("supertest"));

var _index = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// используем библиотеку supertest
var LoginPage = function LoginPage() {
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

  this.getAllInn = function _callee2(url) {
    var dataToGetInn, rr, token, r, arrayInn, i;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // выдает массив ИНН, котрые есть в системе
            dataToGetInn = {
              // входные данные 
              grant_type: "password",
              password: String((0, _index.app)().data()[0].password),
              username: String((0, _index.app)().data()[0].email)
            };
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _supertest["default"])(url) // 'https://sber.cprr-dev.weintegrator.com'
            .post('/api/v0/vst-oauth2/oauth/token').set('Authorization', "Basic ZGVtby1jbGllbnQ6c2VjcmV0").send(dataToGetInn));

          case 3:
            rr = _context2.sent;
            token = rr.body.access_token;
            console.log('token = ', token);
            _context2.next = 8;
            return regeneratorRuntime.awrap((0, _supertest["default"])(url) // 'https://sber.cprr-dev.weintegrator.com'
            .get('/api/v0/tpf-bank/taxpayers').query({
              page: 0,
              size: 20
            }) // передаем query парметры
            .set('Authorization', "Bearer ".concat(token)));

          case 8:
            r = _context2.sent;
            //console.log('r.body ', r.body);    
            console.log('array taxpayers: ', r.body.content);
            arrayInn = [];

            for (i = 0; i < r.body.content.length; i++) {
              arrayInn.push(r.body.content[i].taxpayerInn); // заполняем массив
            } //console.log('arrayInn: ', arrayInn); // массив ИНН котые есть в системе
            //console.log('inn[0]: ', r.body.content[0].taxpayerInn);


            return _context2.abrupt("return", arrayInn);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.LoginPage = LoginPage;