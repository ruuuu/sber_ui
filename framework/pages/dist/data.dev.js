"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayInnIP = exports.arrayInnYrLiso = exports.dataGenerate = void 0;

var dataGenerate = function dataGenerate() {
  var data = [{
    email: 'sberadmin',
    password: 'sberadmin'
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
  var arrayYrLisoInn = ['2808021189', '5009033419', '4401135041', '3232005484', '0277105194']; // массив ИНН для создания Юр лиц(10-значные) 

  return arrayYrLisoInn;
};

exports.arrayInnYrLiso = arrayInnYrLiso;

var arrayInnIP = function arrayInnIP() {
  var arrayIpInn = ['100401920872', '100401920872', '100200815807', '100106366738']; // массив ИНН для создания ИП(12-ти значные) 

  return arrayIpInn;
};

exports.arrayInnIP = arrayInnIP;