"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterSearchPage = void 0;

var FilterSearchPage = function FilterSearchPage() {
  var poiskButton = 'div>div>div>div:nth-child(1)>div>div:nth-child(4)>div>div'; // кнпока Лупа

  var searchInnField = '[placeholder="Введите ИНН"]'; // поле поиска по ИНН

  var requests = 'text="Заявки на получение сведений"'; // вкладка Запросы

  var filterButtonForInnAtTaxpayers = 'table>thead>tr>th:nth-child(1)>div>div>div:nth-child(2)>div:nth-child(2)>div'; // треугольничек для фильтра по инн на вкладке НП

  var innFiled = '[placeholder = "Найти..."]';
  var applyButton = 'text="Применить"'; // кнопка Применить

  var filterButtonForInnAtRequests = 'table>thead>tr>th:nth-child(4)>div>div>div:nth-child(2)>div:nth-child(2)'; // треугольничек для фильра по инн на вкладке Запросы

  var filterButtonForStatusAtRequests = 'table>thead>tr>th:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(2)'; //  треугольничек для фильтра по статусу на вкладке Запросы

  var statusCheckbox = 'html>body>div:nth-child(2)>div>div>div:nth-child(2)>div:nth-child(1)>label>div:nth-child(2)'; //input[type="checkbox"]
  // /html/body/div[2]/div/div/div[2]/div[1]/label/div[2]
  // /html/body/div[2]/div/div/div[2]/div[2]/label/div[2]
  // /html/body/div[2]/div/div/div[2]/div[1]/label/div[1]
  // /html/body/div[2]/div/div/div[2]/div[1]/label/div[2]

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

  this.filterByStatusAtRequests = function _callee5(page) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(page.click(requests));

          case 2:
            _context5.next = 4;
            return regeneratorRuntime.awrap(page.click(filterButtonForStatusAtRequests));

          case 4:
            _context5.next = 6;
            return regeneratorRuntime.awrap(page.click(statusCheckbox));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.FilterSearchPage = FilterSearchPage;