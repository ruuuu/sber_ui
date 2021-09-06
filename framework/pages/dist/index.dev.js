"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlFns = exports.urlVtb = exports.urlSber = exports.app = void 0;

var _loginPage = require("./loginPage");

var _createTaxpayerPage = require("./createTaxpayerPage");

var _data = require("./data");

var _locatorPage = require("./locatorPage");

var _filterSearchPage = require("./filterSearchPage");

var urlSber = 'https://sber.cprr-dev.weintegrator.com';
exports.urlSber = urlSber;
var urlVtb = 'https://vtb.cprr-dev.weintegrator.com';
exports.urlVtb = urlVtb;
var urlFns = 'https://fns.cprr-dev.weintegrator.com';
exports.urlFns = urlFns;

var app = function app() {
  return {
    loginPage: function loginPage() {
      return new _loginPage.LoginPage();
    },
    createTaxpayerPage: function createTaxpayerPage() {
      return new _createTaxpayerPage.CreateTaxpayerPage();
    },
    locatorPage: function locatorPage() {
      return new _locatorPage.LocatorPage();
    },
    filterSearchPage: function filterSearchPage() {
      return new _filterSearchPage.FilterSearchPage();
    },
    data: function data() {
      return new _data.dataGenerate();
    }
  };
};

exports.app = app;