"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataGenerate = void 0;

var DataGenerate = function DataGenerate() {
  //
  var data = [// массив объектов
  {
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

exports.DataGenerate = DataGenerate;

var ArrayInnYrLiso = function ArrayInnYrLiso() {
  var arrayYrLisoInn = []; // массив ИНН для  юр лиц, брать отсюда https://rmsp-pp.nalog.ru/search.html?m=Support#t=1628447669165&sk=UL 

  return arrayYrLisoInn;
};

var ArrayInnIp = function ArrayInnIp() {
  //
  var arrayIpInn = []; // массив ИНН для  ИП

  return arrayIpInn;
};