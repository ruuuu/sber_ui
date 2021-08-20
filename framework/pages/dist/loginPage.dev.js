"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPage = void 0;

var _supertest = _interopRequireDefault(require("supertest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//используем библиотеку supertest
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

  this.getAllInn = function _callee2() {
    var data, rr, token, r, arrayInn, i;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              // входные данные 
              grant_type: "refresh_token",
              refresh_token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJhMjc0Y2M2OS01NmYxLTQzZjItYWE0MC02NWQ2ZDJjMzVkYjQiLCJhdWQiOlsidnN0LW9hdXRoMiIsInZzdC1pZGVudGl0eSIsInZzdC1iYi1ybiIsInZzdC1iYiIsIndlLWF1ZGl0IiwidHBmLWFwcCIsInZzdC1maWxlcyIsInZzdC1ub3RpZnkiXSwidXNlcl9uYW1lIjoic2JlcmJhbmsiLCJjb21wYW55SW5mbyI6eyJpZCI6IjBhZWRlZTkzLTFiNDgtNGFhZS05YjYwLTVhN2FhOTgxY2Y4OCIsIm5vZGVBbGlhcyI6InNiZXItbm9kZS0wIiwibm9kZXMiOlt7ImFsaWFzIjoic2Jlci1ub2RlLTAiLCJvd25lckFkZHJlc3MiOiIzTTN4R21KR214QnYyYVo0VUZtbjkzckh4VlhUSkRLU0FuaCJ9XSwicmVnaXN0cmF0aW9uTWV0aG9kIjoiTEVHQUxfRU5USVRZIiwidHlwZSI6IkJBTksiLCJuYW1lIjoi0J_QkNCeIFwi0KHQsdC10YDQsdCw0L3QulwiIiwic2hvcnROYW1lIjpudWxsLCJhZGRyZXNzIjpudWxsLCJwaG9uZSI6bnVsbCwiZW1haWwiOm51bGwsIm9rcG8iOm51bGwsIm9ncm4iOiIxMDI3NzAwMTMyMTk1IiwiaW5uIjoiNzcwNzA4Mzg5MyIsImtwcCI6Ijc3MzYwMTAwMSIsIm1ldGEiOnsiYmlrIjoiMDQ0NTI1MjI1IiwiYXBwcyI6W3siY29kZSI6InNiayIsIm5hbWUiOiI0MjIg0J_QnyDQoNCkIiwiYnVzaW5lc3NSb2xlcyI6WyJCQU5LIiwiUkVHVUxBVE9SIiwiT0JTRVJWRVIiXX0seyJjb2RlIjoic2xrIiwibmFtZSI6IjY5NiDQn9CfINCg0KQiLCJidXNpbmVzc1JvbGVzIjpbIkJBTksiLCJSRUdVTEFUT1IiLCJPQlNFUlZFUiJdfSx7ImNvZGUiOiJzdWJzaWR5IiwibmFtZSI6IjI3OSDQn9CfINCg0KQiLCJidXNpbmVzc1JvbGVzIjpbIkJBTksiLCJSRUdVTEFUT1IiLCJPQlNFUlZFUiJdfSx7ImNvZGUiOiJ0cGYiLCJuYW1lIjoiLS0tLS0tLS0tLSIsImJ1c2luZXNzUm9sZXMiOlsiVFBGX0JBTktfU1BFQ0lBTElTVCJdfV0sImRlcGxveW1lbnRUeXBlIjoiT05fUFJFTUlTRSJ9fSwic2NvcGUiOlsicmVhZCIsInZzdC1jbGllbnQiXSwiYXRpIjoiZDY5MTVkMjUtNWUxYi00NzhlLWEwNDAtOWY0OTc2MDIwYjZlIiwiZXhwIjozNzc2OTQ5NzQ3LCJwZXJzb25JbmZvIjp7InBlcnNvbklkIjoiMzdjZDczM2ItYWRjMS00NTAyLTk5NjYtZDRkNWYyNTg1YjhkIiwiYWNjb3VudElkIjoiYTI3NGNjNjktNTZmMS00M2YyLWFhNDAtNjVkNmQyYzM1ZGI0IiwiZmlyc3ROYW1lIjoi0JjQstCw0L0iLCJsYXN0TmFtZSI6ItCY0LLQsNC90L7QsiIsInBhdHJvbnltaWMiOm51bGwsImVtYWlsIjoidHN0QGdtYWlsLmNvbSIsInBob25lIjoiODk3Njc2NTY1IiwicGFydGljaXBhbnRBZGRyZXNzIjoiM00zeEdtSkdteEJ2MmFaNFVGbW45M3JIeFZYVEpES1NBbmgiLCJwYXJ0aWNpcGFudFB1YmxpY0tleSI6IlR2SHZGVDlFUHpENENHdVV2N29Ka2tyZm1lU0U1RzlhallBWnlybjlnQ3hLM05rSmlMN2Fod29IWDJUSjNoUUNYTnBWV1VRbXFhbUdFVDJXb1ZEaFp6ZyIsImNvbXBhbnlJZCI6IjBhZWRlZTkzLTFiNDgtNGFhZS05YjYwLTVhN2FhOTgxY2Y4OCIsImNvbXBhbnlOYW1lIjoi0J_QkNCeIFwi0KHQsdC10YDQsdCw0L3QulwiIiwiY29tcGFueVJlZ2lzdHJhdGlvbk1ldGhvZCI6IkxFR0FMX0VOVElUWSIsIm5vZGVBbGlhcyI6InNiZXItbm9kZS0wIiwibm9kZUFsaWFzZXMiOlsic2Jlci1ub2RlLTAiXSwiYnVzaW5lc3NSb2xlcyI6WyJCQU5LIiwiVFBGX0JBTktfU1BFQ0lBTElTVCJdLCJkaXNwbGF5TmFtZSI6ItCf0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIiAtINCa0YDQtdC00LjRgtC90LDRjyDQvtGA0LPQsNC90LjQt9Cw0YbQuNGPIiwibWV0YSI6e319LCJhdXRob3JpdGllcyI6WyJXRV9JREVOVElUWV9SRUFEIl0sImp0aSI6IjgyOWE4ZDdkLWQ3ZDItNDRiZC1iODk3LTE2ZDViNjdiZDIwZCIsImNsaWVudF9pZCI6ImRlbW8tY2xpZW50In0.VAinFOH2tgedoezRltmET59o7Ap4WEI617CYEceL-w2Put7bz3IkUspwx-T7Fq3NDF8dU4272RwkhYbFKF2kIpX3Yr6-Wp8YrPEBqPMZgSz1EhDGSQRNk0B2P1qqYCagNrzss_znfyeXX4KGFtJwzP1HlIOnDxez--MWvvE_gin1H7hM7nrz60xEpUu9AbAqLtOuwgQF2h5VxaBvUSgJ-QSpwLYDb4A6s1jADn3EAwVJJjOnuM0OV6opyGJ_lfbbqX_EVoRJZD_pPpH0FY0WY4jnZ7tH1VtSl-hi0GnXxVY7xj2VN-lhH3296EZDaRBwiVPQYmlysAXiMF5lJmfbWQ"
            };
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _supertest["default"])('https://sber.cprr-dev.weintegrator.com').post('/api/v0/vst-oauth2/oauth/token') // путь
            .set('Authorization', "Basic ZGVtby1jbGllbnQ6c2VjcmV0").send(data));

          case 3:
            rr = _context2.sent;
            //console.log('rr.body: ', rr.body);
            token = rr.body.access_token; //console.log('token = ', token);

            _context2.next = 7;
            return regeneratorRuntime.awrap((0, _supertest["default"])('https://sber.cprr-dev.weintegrator.com').get('/api/v0/tpf-bank/taxpayers') // метод гет   
            .query({
              page: 0,
              size: 20
            }) // передаем query парметры
            .set('Authorization', "Bearer ".concat(token)));

          case 7:
            r = _context2.sent;
            //console.log(r.status);
            //console.log('r: ', r);
            //console.log('array taxpayers: ', r.body.content);
            arrayInn = [];

            for (i = 0; i < r.body.content.length; i++) {
              arrayInn.push(r.body.content[i].taxpayerInn);
            } //console.log('arrayInn: ', arrayInn); // массив ИНН котые есть в системе
            //console.log('inn[0]: ', r.body.content[0].taxpayerInn);


            return _context2.abrupt("return", arrayInn);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.LoginPage = LoginPage;