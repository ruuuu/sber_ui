"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterSearchPage = void 0;

var _supertest = _interopRequireDefault(require("supertest"));

var _index = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// используем библиотеку supertest
var FilterSearchPage = function FilterSearchPage() {
  var poiskButton = 'div>div>div>div:nth-child(1)>div>div:nth-child(4)>div>div'; // кнпока Лупа

  var searchInnField = '[placeholder="Введите ИНН"]'; // поле поиска по ИНН

  var requests = 'text="Заявки на получение сведений"'; // вкладка Запросы

  var filterButtonForInnAtTaxpayers = 'table>thead>tr>th:nth-child(1)>div>div>div:nth-child(2)>div:nth-child(2)>div'; // треугольничек для фильтра по инн на вкладке НП

  var innFiled = '[placeholder = "Найти..."]';
  var applyButton = 'text="Применить"'; // кнопка Применить

  var filterButtonForInnAtRequests = 'table>thead>tr>th:nth-child(4)>div>div>div:nth-child(2)>div:nth-child(2)'; // треугольничек для фильра по инн на вкладке Запросы

  this.searchTaxpayerByInnAtTaxpayers = function _callee(page, inn) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(page.click(poiskButton));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(page.fill(searchInnField, inn));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  this.filterTaxpayerByInnAtTaxpayers = function _callee2(page, inn) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(page.click(filterButtonForInnAtTaxpayers));

          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap(page.fill(innFiled, ''));

          case 4:
            _context2.next = 6;
            return regeneratorRuntime.awrap(page.fill(innFiled, inn));

          case 6:
            _context2.next = 8;
            return regeneratorRuntime.awrap(page.click(applyButton));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  this.searchTaxpayerByInnAtRequests = function _callee3(page, inn) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(page.click(requests));

          case 2:
            _context3.next = 4;
            return regeneratorRuntime.awrap(page.click(poiskButton));

          case 4:
            _context3.next = 6;
            return regeneratorRuntime.awrap(page.fill(searchInnField, inn));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  this.filterTaxpayerByInnAtRequests = function _callee4(page, inn) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(page.click(requests));

          case 2:
            _context4.next = 4;
            return regeneratorRuntime.awrap(page.click(filterButtonForInnAtRequests));

          case 4:
            _context4.next = 6;
            return regeneratorRuntime.awrap(page.fill(innFiled, inn));

          case 6:
            _context4.next = 8;
            return regeneratorRuntime.awrap(page.click(applyButton));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    });
  };

  this.filterByStatusAtRequests = function _callee5(url, statusRequest) {
    var data, rr, token, r, arrayStatus, i;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // фильтр по Статусу на вкладке Запросы, пока не получилось
            data = {
              // входные данные 
              grant_type: "password",
              password: String((0, _index.app)().data()[1].password),
              username: String((0, _index.app)().data()[1].email)
            };
            _context5.next = 3;
            return regeneratorRuntime.awrap((0, _supertest["default"])(url) // 'https://sber.cprr-dev.weintegrator.com'
            .post('/api/v0/vst-oauth2/oauth/token').set('Authorization', "Basic ZGVtby1jbGllbnQ6c2VjcmV0").send(data));

          case 3:
            rr = _context5.sent;
            token = rr.body.access_token; //console.log('token = ', token);

            _context5.next = 7;
            return regeneratorRuntime.awrap((0, _supertest["default"])(url) // 'https://sber.cprr-dev.weintegrator.com'
            .get('/api/v0/tpf-bank/taxpayers/requests').query({
              page: 0,
              size: 20,
              status: statusRequest
            }) // передаем query парметры
            .set('Authorization', "Bearer ".concat(token)));

          case 7:
            r = _context5.sent;
            //console.log('r.body ', r.body);    
            arrayStatus = [];

            for (i = 0; i < r.body.content.length; i++) {
              arrayStatus.push(r.body.content[i].status); // заполняем массив
            }

            console.log('arrayStatus ', arrayStatus);
            return _context5.abrupt("return", arrayStatus);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.FilterSearchPage = FilterSearchPage;