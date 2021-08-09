"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["goto"] = _goto;
exports.run = run;
exports.stop = stop;

var _playwright = _interopRequireDefault(require("playwright"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var browser;
var context;
var page;

var _require = require('playwright'),
    chromium = _require.chromium,
    webkit = _require.webkit,
    firefox = _require.firefox;

var browserName = process.env.BROWSER; //|| 'webkit';

function _goto(url) {
  return regeneratorRuntime.async(function _goto$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(page["goto"](url));

        case 2:
          return _context.abrupt("return", page);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function run() {
  return regeneratorRuntime.async(function run$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_playwright["default"].chromium.launch({
            headless: false,
            //true скрываем  бразуер
            slowMo: 2000
          }));

        case 2:
          browser = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(browser.newContext());

        case 5:
          context = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(context.newPage());

        case 8:
          page = _context2.sent;

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function stop() {
  return regeneratorRuntime.async(function stop$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(page.screenshot({
            path: 'exampleFailed.jpg'
          }));

        case 2:
          _context3.next = 4;
          return regeneratorRuntime.awrap(page.close());

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(browser.close());

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}