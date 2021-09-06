"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayInnIP = exports.arrayInnYrLiso = exports.dataGenerate = void 0;

var dataGenerate = function dataGenerate() {
  var data = [{
    email: 'sberbank',
    password: 'sberbank'
  }, {
    email: 'vtb',
    password: 'vtb'
  }, {
    email: 'regulator',
    password: 'regulator'
  }];
  return data;
};

exports.dataGenerate = dataGenerate;

var arrayInnYrLiso = function arrayInnYrLiso() {
  var arrayYrLisoInn = ['1659121320', '1661031994']; // массив ИНН для  юр лиц(10-значные)

  return arrayYrLisoInn;
};

exports.arrayInnYrLiso = arrayInnYrLiso;

var arrayInnIP = function arrayInnIP() {
  var arrayIpInn = ['100101078951', '600100736489', '100106366738']; // массив ИНН для  ИП(12-ти значные)

  return arrayIpInn;
};

exports.arrayInnIP = arrayInnIP;