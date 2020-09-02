"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var p, posts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            p = new _Post.Post();
            p.title = 'first post';
            p.content = '第一篇文章';
            _context.next = 5;
            return connection.manager.save(p);

          case 5:
            _context.next = 7;
            return connection.manager.find(_Post.Post);

          case 7:
            posts = _context.sent;
            console.log(posts);
            connection.close();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});