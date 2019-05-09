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

var AHEAD_ANGLE = Math.PI / 6;
var MAX_HEIGHT = 4;

var SpotLight =
/*#__PURE__*/
function (_Component) {
  _inherits(SpotLight, _Component);

  function SpotLight() {
    _classCallCheck(this, SpotLight);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpotLight).apply(this, arguments));
  }

  _createClass(SpotLight, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this = this;

      var props = this.props;
      var diffs = [];
      Object.keys(props).forEach(function (key) {
        if (props[key] !== prevProps[key]) diffs.push(key);
      });
      diffs.forEach(function (key) {
        if (key === 'distance') return;
        _this.obj[key] = props[key];
      });
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var _this$props = this.props,
          color = _this$props.color,
          intensity = _this$props.intensity,
          lightDistance = _this$props.lightDistance,
          angle = _this$props.angle,
          penumbra = _this$props.penumbra,
          decay = _this$props.decay,
          distance = _this$props.distance;
      this.obj = new THREE.SpotLight(color, intensity, lightDistance, angle, penumbra, decay);
      this.obj.position.x = 0;
      this.obj.position.y = 0;
      this.obj.position.z = distance;
      this.raycaster = new THREE.Raycaster();
      this.origin = new THREE.Vector3();
      this.yAxis = new THREE.Vector3(0, 1, 0);
    }
  }, {
    key: "animate",
    value: function animate(_ref) {
      var camera = _ref.camera;
      // Raycast to camera.x, 0, camera.z
      // ray.at distance
      // rotate 30 degrees
      var y = camera.position.y;
      if (y > MAX_HEIGHT) y = MAX_HEIGHT;
      if (y < -MAX_HEIGHT) y = -MAX_HEIGHT;
      this.raycaster.set(this.origin, new THREE.Vector3(camera.position.x, y, camera.position.z).normalize());
      var castPos = new THREE.Vector3();
      this.raycaster.ray.at(this.props.distance, castPos);
      this.obj.position.copy(castPos); // Move light rotation ahead of camera by 30 degress

      this.obj.position.sub(this.origin);
      this.obj.position.applyAxisAngle(this.yAxis, AHEAD_ANGLE);
      this.obj.position.add(this.origin);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.obj && this.obj.parent && this.obj.parent.remove(this.obj);
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

  return SpotLight;
}(_react.Component);

exports["default"] = SpotLight;
SpotLight.propTypes = {
  id: _propTypes["default"].string.isRequired,
  intensity: _propTypes["default"].number,
  lightDistance: _propTypes["default"].number,
  angle: _propTypes["default"].number,
  penumbra: _propTypes["default"].number,
  decay: _propTypes["default"].number,
  color: _propTypes["default"].number,
  distance: _propTypes["default"].number
};
SpotLight.defaultProps = {
  intensity: 1,
  lightDistance: 0,
  angle: Math.PI / 6,
  penumbra: 0,
  decay: 1,
  color: 0x404040,
  distance: 45
};