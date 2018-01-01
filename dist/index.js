'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sayHello = undefined;

var _readlineSync = require('readline-sync');

var _readlineSync2 = _interopRequireDefault(_readlineSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sayHello = exports.sayHello = function sayHello() {
	console.log('Welcome to the Brain Games!');
	var userName = _readlineSync2.default.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzYXlIZWxsbyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTmFtZSIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUM3QkMsU0FBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0EsS0FBSUMsV0FBVyx1QkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBZjtBQUNBSCxTQUFRQyxHQUFSLGFBQXNCQyxRQUF0QjtBQUNBLENBSk0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgY29uc3Qgc2F5SGVsbG8gPSAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcblx0bGV0IHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG5cdGNvbnNvbGUubG9nKGBIZWxsbywgJHt1c2VyTmFtZX0hYCk7XG59XG5cbiJdfQ==