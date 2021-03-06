"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

var _User = require("./entity/User");

var _Comment = require("./entity/Comment");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, u1, p1, c1;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = connection.manager;
            u1 = new _User.User();
            u1.username = 'user1';
            u1.passwordDigest = 'xcvxcvxcv';
            _context.next = 6;
            return manager.save(u1);

          case 6:
            console.log(u1.id);
            p1 = new _Post.Post();
            p1.title = 'fisrt fost';
            p1.content = 'xcvxvxcvxvxvxvxcvx';
            p1.author = u1;
            _context.next = 13;
            return manager.save(p1);

          case 13:
            c1 = new _Comment.Comment();
            c1.user = u1;
            c1.post = p1;
            c1.content = 'awasome 1';
            _context.next = 19;
            return manager.save(c1);

          case 19:
            connection.close();

          case 20:
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