"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCreatedAtAndUpdatedAt1599146355302 = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var AddCreatedAtAndUpdatedAt1599146355302 = /*#__PURE__*/function () {
  function AddCreatedAtAndUpdatedAt1599146355302() {
    (0, _classCallCheck2["default"])(this, AddCreatedAtAndUpdatedAt1599146355302);
  }

  (0, _createClass2["default"])(AddCreatedAtAndUpdatedAt1599146355302, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.dropColumn('users', 'createdAt');

              case 2:
                _context.t0 = queryRunner;
                _context.t1 = new _typeorm.TableColumn({
                  name: 'createdAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                });
                _context.next = 6;
                return new _typeorm.TableColumn({
                  name: 'updatedAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                });

              case 6:
                _context.t2 = _context.sent;
                _context.t3 = [_context.t1, _context.t2];
                _context.next = 10;
                return _context.t0.addColumns.call(_context.t0, 'users', _context.t3);

              case 10:
                _context.next = 12;
                return queryRunner.addColumns('posts', [new _typeorm.TableColumn({
                  name: 'createdAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updatedAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);

              case 12:
                _context.next = 14;
                return queryRunner.addColumns('comments', [new _typeorm.TableColumn({
                  name: 'createdAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updatedAt',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function up(_x) {
        return _up.apply(this, arguments);
      }

      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return queryRunner.dropColumn('users', 'updatedAt');

              case 3:
                _context2.next = 5;
                return queryRunner.dropColumn('users', 'createdAt');

              case 5:
                _context2.next = 7;
                return queryRunner.dropColumn('posts', 'updatedAt');

              case 7:
                _context2.next = 9;
                return queryRunner.dropColumn('posts', 'createdAt');

              case 9:
                _context2.next = 11;
                return queryRunner.dropColumn('comments', 'updatedAt');

              case 11:
                _context2.next = 13;
                return queryRunner.dropColumn('comments', 'createdAt');

              case 13:
                _context2.next = 17;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 15]]);
      }));

      function down(_x2) {
        return _down.apply(this, arguments);
      }

      return down;
    }()
  }]);
  return AddCreatedAtAndUpdatedAt1599146355302;
}();

exports.AddCreatedAtAndUpdatedAt1599146355302 = AddCreatedAtAndUpdatedAt1599146355302;