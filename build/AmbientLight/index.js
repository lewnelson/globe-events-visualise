"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var THREE = _interopRequireWildcard(require("three"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AmbientLight =
/*#__PURE__*/
function (_Component) {
  _inherits(AmbientLight, _Component);

  function AmbientLight() {
    _classCallCheck(this, AmbientLight);

    return _possibleConstructorReturn(this, _getPrototypeOf(AmbientLight).apply(this, arguments));
  }

  _createClass(AmbientLight, [{
    key: "initialise",
    value: function initialise() {
      this.obj = new THREE.AmbientLight(this.props.color, this.props.intensity);
      this.obj.position.x = this.props.position.x;
      this.obj.position.y = this.props.position.y;
      this.obj.position.z = this.props.position.z;
    }
  }, {
    key: "getObj",
    value: function getObj() {
      return this.obj;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.props.id;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return AmbientLight;
}(_react.Component);

exports["default"] = AmbientLight;
AmbientLight.propTypes = {
  id: _propTypes["default"].string.isRequired,
  intensity: _propTypes["default"].number,
  color: _propTypes["default"].number,
  position: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired,
    z: _propTypes["default"].number.isRequired
  })
};
AmbientLight.defaultProps = {
  intensity: 1,
  color: 0x404040,
  position: {
    x: 0,
    y: 0,
    z: 0
  }
};