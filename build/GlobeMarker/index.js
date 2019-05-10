"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var THREE = _interopRequireWildcard(require("three"));

var _droid_sans_regularTypeface = _interopRequireDefault(require("three/examples/fonts/droid/droid_sans_regular.typeface.json"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PULSE_SCALE = 0.15;
var PULSE_RIPPLE_SCALE = 6;
var PULSE_DURATION = 2600;
var PULSE_COUNT = 3;
var PULSE_INTERVAL = 400;
var PULSE_OPACITY = 1;
var HEIGHT_SCALE = 4;
var LOCAL_ROTATION_AXIS = new THREE.Vector3(1, 0, 0);
var LOCAL_ROTATION_ANGLE = Math.PI / 2;
var LAYER_HEIGHT = 0.02;
var CAMERA_ANIMATION_DURATION = 1000;

var GlobeMarker =
/*#__PURE__*/
function (_Component) {
  _inherits(GlobeMarker, _Component);

  function GlobeMarker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GlobeMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GlobeMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.clickComplete = function () {
      _this.resetMarkerColor();
    };

    _this.onClick = function () {
      _this.highlightMarker();

      _this.cameraDistance = _this.origin.distanceTo(_this.camera.position);
      _this.cameraEndPosition = _this.getPosition(_this.cameraDistance);
      _this.cameraMoveLine = new THREE.Line3(_this.camera.position.clone(), _this.cameraEndPosition.clone());
      _this.moveCamera = true;
      _this.cameraMoved = 0;
      _this.cameraVerticalRaycaster = new THREE.Raycaster();

      var distanceToEnd = _this.cameraMoveLine.distance();

      var animationTime = CAMERA_ANIMATION_DURATION;
      if (distanceToEnd < 10) animationTime /= 2;
      if (distanceToEnd < 1) animationTime = 0;

      _this.props.onClick(animationTime, _this.clickComplete);
    };

    return _this;
  }

  _createClass(GlobeMarker, [{
    key: "getPositionFromLatLon",
    value: function getPositionFromLatLon(lat, lon) {
      var radius = this.globe.getRadius();
      var phi = (90 - lat) * (Math.PI / 180);
      var theta = (lon + 180) * (Math.PI / 180);
      var x = radius * Math.sin(phi) * Math.cos(theta) * -1;
      var z = radius * Math.sin(phi) * Math.sin(theta);
      var y = radius * Math.cos(phi);
      var pos = this.origin.clone();
      pos.set(x, y, z);
      return pos;
    }
  }, {
    key: "getFinalPosition",
    value: function getFinalPosition() {
      var _this$props = this.props,
          lat = _this$props.lat,
          lon = _this$props.lon;
      var pos = this.getPositionFromLatLon(lat, lon);
      this.positionRaycaster.set(this.origin, pos.normalize());
      var finalPosition = this.origin.clone();
      this.positionRaycaster.ray.at(this.globe.getRadius() + this.props.radius * HEIGHT_SCALE / 2 + this.props.zIndex * LAYER_HEIGHT, finalPosition);
      return finalPosition;
    }
  }, {
    key: "getPulseRingGeometry",
    value: function getPulseRingGeometry(radius) {
      return new THREE.RingGeometry(radius, radius + radius * PULSE_SCALE, 24, 1);
    }
  }, {
    key: "setupPulseRing",
    value: function setupPulseRing() {
      this.pulseRingGeometry = this.getPulseRingGeometry(this.props.radius);
      var pulseRingMaterial = new THREE.MeshBasicMaterial({
        color: this.markerColor,
        transparent: true
      });
      pulseRingMaterial.color.convertSRGBToLinear();
      pulseRingMaterial.opacity = PULSE_OPACITY;
      pulseRingMaterial.side = THREE.BackSide;
      this.pulseRing = new THREE.Mesh(this.pulseRingGeometry, pulseRingMaterial);
    }
  }, {
    key: "initialise",
    value: function initialise(_ref) {
      var _this2 = this;

      var sceneObjects = _ref.sceneObjects,
          camera = _ref.camera;
      this.camera = camera;
      this.pulse = false;
      this.pulseRings = [];
      this.globe = sceneObjects.filter(function (obj) {
        return obj.getId() === _this2.props.globe;
      }).shift();
      if (!this.globe) throw new Error("Globe ".concat(this.props.globe, " does not exist within the scene"));
      this.distance = this.globe.getRadius() + this.props.dropDistance + this.props.radius * HEIGHT_SCALE / 2;
      this.positionRaycaster = new THREE.Raycaster();
      this.origin = new THREE.Vector3();
      this.finalPosition = this.getFinalPosition();
      var pointGeometry = new THREE.ConeGeometry(this.props.radius, this.props.radius * HEIGHT_SCALE, 16, 1);
      var material = new THREE.MeshBasicMaterial({
        color: this.markerColor
      });
      this.obj = new THREE.Mesh(pointGeometry, material);
      var position = this.getPosition(this.distance);
      this.obj.position.copy(position);
      this.obj.lookAt(this.origin);
      this.obj.rotateOnAxis(LOCAL_ROTATION_AXIS, LOCAL_ROTATION_ANGLE);
      this.setupPulseRing();
    }
  }, {
    key: "resetMarkerColor",
    value: function resetMarkerColor() {
      this.highlighted = false;
      this.obj.material.color = this.markerColor;
      this.pulseRing.material.color = this.markerColor;
      this.fontMesh && (this.fontMesh.material.color = this.fontColor);
    }
  }, {
    key: "highlightMarker",
    value: function highlightMarker() {
      this.highlighted = true;
      this.obj.material.color = this.markerHighlightColor;
      this.pulseRing.material.color = this.markerHighlightColor;
      this.fontMesh && (this.fontMesh.material.color = this.fontHighlightColor);
    }
  }, {
    key: "getCameraMoveDistance",
    value: function getCameraMoveDistance(dt) {
      dt /= CAMERA_ANIMATION_DURATION / 1000 / 2;
      if (dt < 1) return 1 / 2 * dt * dt;
      dt--;
      return -1 / 2 * (dt * (dt - 2) - 1);
    }
  }, {
    key: "animateCamera",
    value: function animateCamera(t) {
      if (!this.moveCameraTime) this.moveCameraTime = t;
      var dt = (t - this.moveCameraTime) / 1000;
      this.cameraMoved = this.getCameraMoveDistance(dt);
      var newPos = this.origin.clone();
      this.cameraMoveLine.at(this.cameraMoved, newPos);
      this.cameraVerticalRaycaster.set(this.origin, newPos.clone().normalize());
      var finalPos = this.origin.clone();
      this.cameraVerticalRaycaster.ray.at(this.cameraDistance, finalPos);
      this.camera.position.set(finalPos.x, finalPos.y, finalPos.z);
      this.cameraMoveDistance = this.camera.position.distanceTo(this.cameraEndPosition);

      if (dt >= CAMERA_ANIMATION_DURATION / 1000) {
        this.moveCamera = false;
        this.moveCameraTime = null;
      }
    }
  }, {
    key: "setupClickListener",
    value: function setupClickListener() {
      if (this.clickListenerSetup) return;
      if (!this.props.onClick) return;
      var size = this.props.radius * PULSE_RIPPLE_SCALE;
      var clickableGeometry = new THREE.BoxGeometry(size, size, size);
      this.clickableMesh = new THREE.Mesh(clickableGeometry);
      this.clickableMesh.position.copy(this.obj.position);
      this.clickableMesh.lookAt(this.origin);
      this.clickableMesh.material.visible = false;
      this.obj.parent.add(this.clickableMesh);
      this.props.registerClickableObject(this.clickableMesh, this.onClick);
      this.clickListenerSetup = true;
    }
  }, {
    key: "setupText",
    value: function setupText() {
      var _this$props2 = this.props,
          locationName = _this$props2.locationName,
          eventCount = _this$props2.eventCount,
          lat = _this$props2.lat,
          lon = _this$props2.lon;
      var font = new THREE.Font(_droid_sans_regularTypeface["default"]);
      var fontGeometry = new THREE.TextGeometry(eventCount > 1 ? "".concat(locationName, " (").concat(eventCount, ")") : locationName, {
        font: font,
        size: 0.3,
        height: 0.04
      });
      var center = this.origin.clone();
      var material = new THREE.MeshBasicMaterial({
        color: this.fontColor
      });
      this.fontMesh = new THREE.Mesh(fontGeometry, material);
      this.fontMesh.geometry.computeBoundingBox();
      this.fontMesh.geometry.boundingBox.getCenter(center);
      this.fontMesh.geometry.center();
      this.fontMesh.position.copy(center);
      this.obj.parent.add(this.fontMesh);
      var fontLat = lat + 1;
      if (lat > 60) fontLat = lat - 1;
      var position = this.getPositionFromLatLon(fontLat, lon);
      var raycaster = new THREE.Raycaster(this.origin.clone(), position.clone().normalize());
      var pos = this.origin.clone();
      raycaster.ray.at(this.globe.getRadius() + this.props.radius * HEIGHT_SCALE, pos);
      this.fontMesh.position.copy(pos);
      this.fontMesh.lookAt(this.origin);
      this.fontAdded = true;
      this.fontMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI);
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
    key: "getPosition",
    value: function getPosition(distance) {
      var pos = this.origin.clone();
      this.positionRaycaster.ray.at(distance, pos);
      return pos;
    }
  }, {
    key: "createPulseRing",
    value: function () {
      var _createPulseRing = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(delay) {
        var pulseRing;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delay) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve();
                  }, delay);
                });

              case 3:
                if (this._isMounted) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                pulseRing = this.pulseRing.clone();
                this.obj.parent.add(pulseRing);
                pulseRing.position.copy(this.obj.position);
                pulseRing.lookAt(this.origin);
                pulseRing.parameters = {
                  startTime: null
                };
                this.pulseRings.push(pulseRing);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createPulseRing(_x) {
        return _createPulseRing.apply(this, arguments);
      }

      return createPulseRing;
    }()
  }, {
    key: "getNewPulseRadius",
    value: function getNewPulseRadius(dt, index) {
      var radius = this.props.radius;
      var duration = PULSE_DURATION / 1000;
      var ratio = -1 * ((dt = dt / duration - 1) * dt * dt * dt - 1);
      var maxRadius = radius * PULSE_RIPPLE_SCALE - index * (radius * PULSE_SCALE * 4);
      return (maxRadius - radius) * ratio + radius;
    }
  }, {
    key: "getNewPulseOpacity",
    value: function getNewPulseOpacity(dt) {
      var duration = PULSE_DURATION / 1000;
      var ratio = -1 * ((dt = dt / duration - 1) * dt * dt * dt - 1);
      if (ratio > 1) ratio = 1;
      return PULSE_OPACITY * (1 - ratio);
    }
  }, {
    key: "animatePulse",
    value: function animatePulse(t) {
      var _this3 = this;

      if (this.pulseRings.length < 1) return;
      this.pulseRings.forEach(function (pulseRing, index) {
        if (!pulseRing.parameters.startTime) pulseRing.parameters.startTime = t;
        var dt = t - pulseRing.parameters.startTime;

        var newRadius = _this3.getNewPulseRadius(dt / 1000, index);

        var newOpacity = _this3.getNewPulseOpacity(dt / 1000);

        var geometry = _this3.getPulseRingGeometry(newRadius);

        if (_this3.pulseRingGeometry !== pulseRing.geometry) pulseRing.geometry.dispose();
        pulseRing.geometry = geometry;
        pulseRing.material.opacity = newOpacity;

        if (dt >= PULSE_DURATION) {
          _this3.obj.parent.remove(pulseRing);

          _this3.pulseRings.splice(index, 1);
        }
      });
    }
  }, {
    key: "animateDrop",
    value: function animateDrop(t) {
      if (!this.dropStartTime) this.dropStartTime = t;
      this.distance -= 0.5 * 0.08 * Math.pow((t - this.dropStartTime) / 1000, 2);
      var newPosition = this.getPosition(this.distance);
      var tipPosition = this.getPosition(this.distance - (this.props.radius * HEIGHT_SCALE / 2 + this.props.zIndex * LAYER_HEIGHT));
      this.obj.position.copy(newPosition);

      if (this.globe.getObj().geometry.boundingSphere.containsPoint(tipPosition)) {
        this.distance = this.globe.getRadius();
        this.dropped = true;
        this.pulse = true;
        this.obj.position.copy(this.finalPosition);
        delete this.dropStartTime;
      }
    }
  }, {
    key: "animatePulseRings",
    value: function animatePulseRings(t) {
      if (this.pulseRings.length < 1 && this.pulse) {
        for (var i = 0; i < PULSE_COUNT; i++) {
          this.createPulseRing(i * PULSE_INTERVAL);
        }
      } else {
        this.animatePulse(t);
      }
    }
  }, {
    key: "animate",
    value: function animate(_ref2) {
      var t = _ref2.t;
      if (!this.fontAdded) this.setupText();
      if (!this.dropped) this.animateDrop(t);

      if (this.dropped) {
        this.setupClickListener();
        this.animatePulseRings(t);
      }

      if (this.moveCamera) this.animateCamera(t);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.markerColor = new THREE.Color(this.props.markerColor);
      this.markerHighlightColor = new THREE.Color(this.props.markerHighlightColor);
      this.fontColor = new THREE.Color(this.props.fontColor);
      this.fontHighlightColor = new THREE.Color(this.props.fontHighlightColor);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          markerColor = _this$props3.markerColor,
          markerHighlightColor = _this$props3.markerHighlightColor,
          fontColor = _this$props3.fontColor,
          fontHighlightColor = _this$props3.fontHighlightColor;

      if (prevProps.markerColor !== markerColor) {
        this.markerColor.set(markerColor);
        if (!this.highlighted) this.resetMarkerColor();
      }

      if (prevProps.markerHighlightColor !== markerHighlightColor) {
        this.markerHighlightColor.set(markerHighlightColor);
        if (this.highlighted) this.highlightMarker();
      }

      if (prevProps.fontColor !== fontColor) {
        this.fontColor.set(fontColor);
        if (!this.highlighted) this.resetMarkerColor();
      }

      if (prevProps.fontHighlightColor !== fontHighlightColor) {
        this.fontHighlightColor.set(fontHighlightColor);
        if (this.highlighted) this.highlightMarker();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this4 = this;

      this._isMounted = false;
      this.clickableMesh && this.clickableMesh.parent && this.clickableMesh.parent.remove(this.clickableMesh);
      this.fontMesh && this.fontMesh.parent && this.fontMesh.parent.remove(this.fontMesh);
      this.pulseRings.forEach(function (pulseRing) {
        _this4.obj.parent.remove(pulseRing);
      });
      this.obj && this.obj.parent && this.obj.parent.remove(this.obj);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return GlobeMarker;
}(_react.Component);

exports["default"] = GlobeMarker;
GlobeMarker.propTypes = {
  id: _propTypes["default"].string.isRequired,
  lat: _propTypes["default"].number.isRequired,
  lon: _propTypes["default"].number.isRequired,
  globe: _propTypes["default"].string.isRequired,
  radius: _propTypes["default"].number.isRequired,
  dropDistance: _propTypes["default"].number.isRequired,
  zIndex: _propTypes["default"].number.isRequired,
  onClick: _propTypes["default"].func,
  registerClickableObject: _propTypes["default"].func,
  locationName: _propTypes["default"].string.isRequired,
  eventCount: _propTypes["default"].number.isRequired,
  fontColor: _propTypes["default"].number,
  fontHighlightColor: _propTypes["default"].number,
  markerColor: _propTypes["default"].number,
  markerHighlightColor: _propTypes["default"].number
};
GlobeMarker.defaultProps = {
  fontColor: 0x000000,
  fontHighlightColor: 0x000000,
  markerColor: 0x000000,
  markerHighlightColor: 0x000000
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbG9iZU1hcmtlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJQVUxTRV9TQ0FMRSIsIlBVTFNFX1JJUFBMRV9TQ0FMRSIsIlBVTFNFX0RVUkFUSU9OIiwiUFVMU0VfQ09VTlQiLCJQVUxTRV9JTlRFUlZBTCIsIlBVTFNFX09QQUNJVFkiLCJIRUlHSFRfU0NBTEUiLCJMT0NBTF9ST1RBVElPTl9BWElTIiwiVEhSRUUiLCJWZWN0b3IzIiwiTE9DQUxfUk9UQVRJT05fQU5HTEUiLCJNYXRoIiwiUEkiLCJMQVlFUl9IRUlHSFQiLCJDQU1FUkFfQU5JTUFUSU9OX0RVUkFUSU9OIiwiR2xvYmVNYXJrZXIiLCJjbGlja0NvbXBsZXRlIiwicmVzZXRNYXJrZXJDb2xvciIsIm9uQ2xpY2siLCJoaWdobGlnaHRNYXJrZXIiLCJjYW1lcmFEaXN0YW5jZSIsIm9yaWdpbiIsImRpc3RhbmNlVG8iLCJjYW1lcmEiLCJwb3NpdGlvbiIsImNhbWVyYUVuZFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJjYW1lcmFNb3ZlTGluZSIsIkxpbmUzIiwiY2xvbmUiLCJtb3ZlQ2FtZXJhIiwiY2FtZXJhTW92ZWQiLCJjYW1lcmFWZXJ0aWNhbFJheWNhc3RlciIsIlJheWNhc3RlciIsImRpc3RhbmNlVG9FbmQiLCJkaXN0YW5jZSIsImFuaW1hdGlvblRpbWUiLCJwcm9wcyIsImxhdCIsImxvbiIsInJhZGl1cyIsImdsb2JlIiwiZ2V0UmFkaXVzIiwicGhpIiwidGhldGEiLCJ4Iiwic2luIiwiY29zIiwieiIsInkiLCJwb3MiLCJzZXQiLCJnZXRQb3NpdGlvbkZyb21MYXRMb24iLCJwb3NpdGlvblJheWNhc3RlciIsIm5vcm1hbGl6ZSIsImZpbmFsUG9zaXRpb24iLCJyYXkiLCJhdCIsInpJbmRleCIsIlJpbmdHZW9tZXRyeSIsInB1bHNlUmluZ0dlb21ldHJ5IiwiZ2V0UHVsc2VSaW5nR2VvbWV0cnkiLCJwdWxzZVJpbmdNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJtYXJrZXJDb2xvciIsInRyYW5zcGFyZW50IiwiY29udmVydFNSR0JUb0xpbmVhciIsIm9wYWNpdHkiLCJzaWRlIiwiQmFja1NpZGUiLCJwdWxzZVJpbmciLCJNZXNoIiwic2NlbmVPYmplY3RzIiwicHVsc2UiLCJwdWxzZVJpbmdzIiwiZmlsdGVyIiwib2JqIiwiZ2V0SWQiLCJzaGlmdCIsIkVycm9yIiwiZHJvcERpc3RhbmNlIiwiZ2V0RmluYWxQb3NpdGlvbiIsInBvaW50R2VvbWV0cnkiLCJDb25lR2VvbWV0cnkiLCJtYXRlcmlhbCIsImNvcHkiLCJsb29rQXQiLCJyb3RhdGVPbkF4aXMiLCJzZXR1cFB1bHNlUmluZyIsImhpZ2hsaWdodGVkIiwiZm9udE1lc2giLCJmb250Q29sb3IiLCJtYXJrZXJIaWdobGlnaHRDb2xvciIsImZvbnRIaWdobGlnaHRDb2xvciIsImR0IiwidCIsIm1vdmVDYW1lcmFUaW1lIiwiZ2V0Q2FtZXJhTW92ZURpc3RhbmNlIiwibmV3UG9zIiwiZmluYWxQb3MiLCJjYW1lcmFNb3ZlRGlzdGFuY2UiLCJjbGlja0xpc3RlbmVyU2V0dXAiLCJzaXplIiwiY2xpY2thYmxlR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsImNsaWNrYWJsZU1lc2giLCJ2aXNpYmxlIiwicGFyZW50IiwiYWRkIiwicmVnaXN0ZXJDbGlja2FibGVPYmplY3QiLCJsb2NhdGlvbk5hbWUiLCJldmVudENvdW50IiwiZm9udCIsIkZvbnQiLCJkcm9pZFNhbnMiLCJmb250R2VvbWV0cnkiLCJUZXh0R2VvbWV0cnkiLCJoZWlnaHQiLCJjZW50ZXIiLCJnZW9tZXRyeSIsImNvbXB1dGVCb3VuZGluZ0JveCIsImJvdW5kaW5nQm94IiwiZ2V0Q2VudGVyIiwiZm9udExhdCIsInJheWNhc3RlciIsImZvbnRBZGRlZCIsImlkIiwiZGVsYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwicGFyYW1ldGVycyIsInN0YXJ0VGltZSIsInB1c2giLCJpbmRleCIsImR1cmF0aW9uIiwicmF0aW8iLCJtYXhSYWRpdXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwibmV3UmFkaXVzIiwiZ2V0TmV3UHVsc2VSYWRpdXMiLCJuZXdPcGFjaXR5IiwiZ2V0TmV3UHVsc2VPcGFjaXR5IiwiZGlzcG9zZSIsInJlbW92ZSIsInNwbGljZSIsImRyb3BTdGFydFRpbWUiLCJwb3ciLCJuZXdQb3NpdGlvbiIsInRpcFBvc2l0aW9uIiwiZ2V0T2JqIiwiYm91bmRpbmdTcGhlcmUiLCJjb250YWluc1BvaW50IiwiZHJvcHBlZCIsImkiLCJjcmVhdGVQdWxzZVJpbmciLCJhbmltYXRlUHVsc2UiLCJzZXR1cFRleHQiLCJhbmltYXRlRHJvcCIsInNldHVwQ2xpY2tMaXN0ZW5lciIsImFuaW1hdGVQdWxzZVJpbmdzIiwiYW5pbWF0ZUNhbWVyYSIsIkNvbG9yIiwicHJldlByb3BzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxJQUFwQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLENBQTNCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLElBQXZCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLEdBQXZCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLENBQXJCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsSUFBSUMsS0FBSyxDQUFDQyxPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQTVCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXZDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLElBQXJCO0FB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MkQsc0JBQVVJLElBVGxCO0FBVWpCOUQsRUFBQUEsWUFBWSxFQUFFMEQsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBVmQ7QUFXakIzRCxFQUFBQSxVQUFVLEVBQUV5RCxzQkFBVUcsTUFBVixDQUFpQkQsVUFYWjtBQVlqQi9FLEVBQUFBLFNBQVMsRUFBRTZFLHNCQUFVRyxNQVpKO0FBYWpCOUUsRUFBQUEsa0JBQWtCLEVBQUUyRSxzQkFBVUcsTUFiYjtBQWNqQjNHLEVBQUFBLFdBQVcsRUFBRXdHLHNCQUFVRyxNQWROO0FBZWpCL0UsRUFBQUEsb0JBQW9CLEVBQUU0RSxzQkFBVUc7QUFmZixDO0FBREE3SixXLENBbUJaK0osWSxHQUFlO0FBQ3BCbEYsRUFBQUEsU0FBUyxFQUFFLFFBRFM7QUFFcEJFLEVBQUFBLGtCQUFrQixFQUFFLFFBRkE7QUFHcEI3QixFQUFBQSxXQUFXLEVBQUUsUUFITztBQUlwQjRCLEVBQUFBLG9CQUFvQixFQUFFO0FBSkYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgZHJvaWRTYW5zIGZyb20gJ3RocmVlL2V4YW1wbGVzL2ZvbnRzL2Ryb2lkL2Ryb2lkX3NhbnNfcmVndWxhci50eXBlZmFjZS5qc29uJ1xuXG5jb25zdCBQVUxTRV9TQ0FMRSA9IDAuMTVcbmNvbnN0IFBVTFNFX1JJUFBMRV9TQ0FMRSA9IDZcbmNvbnN0IFBVTFNFX0RVUkFUSU9OID0gMjYwMFxuY29uc3QgUFVMU0VfQ09VTlQgPSAzXG5jb25zdCBQVUxTRV9JTlRFUlZBTCA9IDQwMFxuY29uc3QgUFVMU0VfT1BBQ0lUWSA9IDFcblxuY29uc3QgSEVJR0hUX1NDQUxFID0gNFxuY29uc3QgTE9DQUxfUk9UQVRJT05fQVhJUyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApXG5jb25zdCBMT0NBTF9ST1RBVElPTl9BTkdMRSA9IE1hdGguUEkgLyAyXG5cbmNvbnN0IExBWUVSX0hFSUdIVCA9IDAuMDJcblxuY29uc3QgQ0FNRVJBX0FOSU1BVElPTl9EVVJBVElPTiA9IDEwMDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmVNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZ2xvYmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByYWRpdXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkcm9wRGlzdGFuY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZWdpc3RlckNsaWNrYWJsZU9iamVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZXZlbnRDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZvbnRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBmb250SGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWFya2VyQ29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXJcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9udENvbG9yOiAweDAwMDAwMCxcbiAgICBmb250SGlnaGxpZ2h0Q29sb3I6IDB4MDAwMDAwLFxuICAgIG1hcmtlckNvbG9yOiAweDAwMDAwMCxcbiAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogMHgwMDAwMDBcbiAgfVxuXG4gIGdldFBvc2l0aW9uRnJvbUxhdExvbiAobGF0LCBsb24pIHtcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLmdsb2JlLmdldFJhZGl1cygpXG4gICAgY29uc3QgcGhpID0gKDkwIC0gbGF0KSAqIChNYXRoLlBJIC8gMTgwKVxuICAgIGNvbnN0IHRoZXRhID0gKGxvbiArIDE4MCkgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSAqIC0xXG4gICAgY29uc3QgeiA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSlcbiAgICBjb25zdCB5ID0gcmFkaXVzICogTWF0aC5jb3MocGhpKVxuXG4gICAgY29uc3QgcG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIHBvcy5zZXQoeCwgeSwgeilcbiAgICByZXR1cm4gcG9zXG4gIH1cblxuICBnZXRGaW5hbFBvc2l0aW9uICgpIHtcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcG9zID0gdGhpcy5nZXRQb3NpdGlvbkZyb21MYXRMb24obGF0LCBsb24pXG5cbiAgICB0aGlzLnBvc2l0aW9uUmF5Y2FzdGVyLnNldCh0aGlzLm9yaWdpbiwgcG9zLm5vcm1hbGl6ZSgpKVxuICAgIGxldCBmaW5hbFBvc2l0aW9uID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb25SYXljYXN0ZXIucmF5LmF0KHRoaXMuZ2xvYmUuZ2V0UmFkaXVzKCkgKyB0aGlzLnByb3BzLnJhZGl1cyAqIEhFSUdIVF9TQ0FMRSAvIDIgKyAodGhpcy5wcm9wcy56SW5kZXggKiBMQVlFUl9IRUlHSFQpLCBmaW5hbFBvc2l0aW9uKVxuICAgIHJldHVybiBmaW5hbFBvc2l0aW9uXG4gIH1cblxuICBnZXRQdWxzZVJpbmdHZW9tZXRyeSAocmFkaXVzKSB7XG4gICAgcmV0dXJuIG5ldyBUSFJFRS5SaW5nR2VvbWV0cnkocmFkaXVzLCByYWRpdXMgKyAocmFkaXVzICogUFVMU0VfU0NBTEUpLCAyNCwgMSlcbiAgfVxuXG4gIHNldHVwUHVsc2VSaW5nICgpIHtcbiAgICB0aGlzLnB1bHNlUmluZ0dlb21ldHJ5ID0gdGhpcy5nZXRQdWxzZVJpbmdHZW9tZXRyeSh0aGlzLnByb3BzLnJhZGl1cylcbiAgICBjb25zdCBwdWxzZVJpbmdNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiB0aGlzLm1hcmtlckNvbG9yLCB0cmFuc3BhcmVudDogdHJ1ZSB9KVxuICAgIHB1bHNlUmluZ01hdGVyaWFsLmNvbG9yLmNvbnZlcnRTUkdCVG9MaW5lYXIoKVxuICAgIHB1bHNlUmluZ01hdGVyaWFsLm9wYWNpdHkgPSBQVUxTRV9PUEFDSVRZXG4gICAgcHVsc2VSaW5nTWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkJhY2tTaWRlXG4gICAgdGhpcy5wdWxzZVJpbmcgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnB1bHNlUmluZ0dlb21ldHJ5LCBwdWxzZVJpbmdNYXRlcmlhbClcbiAgfVxuXG4gIGluaXRpYWxpc2UgKHsgc2NlbmVPYmplY3RzLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG4gICAgdGhpcy5wdWxzZSA9IGZhbHNlXG4gICAgdGhpcy5wdWxzZVJpbmdzID0gW11cbiAgICB0aGlzLmdsb2JlID0gc2NlbmVPYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLmdldElkKCkgPT09IHRoaXMucHJvcHMuZ2xvYmUpLnNoaWZ0KClcbiAgICBpZiAoIXRoaXMuZ2xvYmUpIHRocm93IG5ldyBFcnJvcihgR2xvYmUgJHt0aGlzLnByb3BzLmdsb2JlfSBkb2VzIG5vdCBleGlzdCB3aXRoaW4gdGhlIHNjZW5lYClcblxuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmdsb2JlLmdldFJhZGl1cygpICsgdGhpcy5wcm9wcy5kcm9wRGlzdGFuY2UgKyAodGhpcy5wcm9wcy5yYWRpdXMgKiBIRUlHSFRfU0NBTEUgLyAyKVxuICAgIHRoaXMucG9zaXRpb25SYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKClcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBUSFJFRS5WZWN0b3IzKClcbiAgICB0aGlzLmZpbmFsUG9zaXRpb24gPSB0aGlzLmdldEZpbmFsUG9zaXRpb24oKVxuICAgIGNvbnN0IHBvaW50R2VvbWV0cnkgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KHRoaXMucHJvcHMucmFkaXVzLCB0aGlzLnByb3BzLnJhZGl1cyAqIEhFSUdIVF9TQ0FMRSwgMTYsIDEpXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogdGhpcy5tYXJrZXJDb2xvciB9KVxuICAgIHRoaXMub2JqID0gbmV3IFRIUkVFLk1lc2gocG9pbnRHZW9tZXRyeSwgbWF0ZXJpYWwpXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5kaXN0YW5jZSlcbiAgICB0aGlzLm9iai5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKVxuICAgIHRoaXMub2JqLmxvb2tBdCh0aGlzLm9yaWdpbilcbiAgICB0aGlzLm9iai5yb3RhdGVPbkF4aXMoTE9DQUxfUk9UQVRJT05fQVhJUywgTE9DQUxfUk9UQVRJT05fQU5HTEUpXG5cbiAgICB0aGlzLnNldHVwUHVsc2VSaW5nKClcbiAgfVxuXG4gIGNsaWNrQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgdGhpcy5yZXNldE1hcmtlckNvbG9yKClcbiAgfVxuXG4gIHJlc2V0TWFya2VyQ29sb3IgKCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWQgPSBmYWxzZVxuICAgIHRoaXMub2JqLm1hdGVyaWFsLmNvbG9yID0gdGhpcy5tYXJrZXJDb2xvclxuICAgIHRoaXMucHVsc2VSaW5nLm1hdGVyaWFsLmNvbG9yID0gdGhpcy5tYXJrZXJDb2xvclxuICAgIHRoaXMuZm9udE1lc2ggJiYgKHRoaXMuZm9udE1lc2gubWF0ZXJpYWwuY29sb3IgPSB0aGlzLmZvbnRDb2xvcilcbiAgfVxuXG4gIGhpZ2hsaWdodE1hcmtlciAoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRlZCA9IHRydWVcbiAgICB0aGlzLm9iai5tYXRlcmlhbC5jb2xvciA9IHRoaXMubWFya2VySGlnaGxpZ2h0Q29sb3JcbiAgICB0aGlzLnB1bHNlUmluZy5tYXRlcmlhbC5jb2xvciA9IHRoaXMubWFya2VySGlnaGxpZ2h0Q29sb3JcbiAgICB0aGlzLmZvbnRNZXNoICYmICh0aGlzLmZvbnRNZXNoLm1hdGVyaWFsLmNvbG9yID0gdGhpcy5mb250SGlnaGxpZ2h0Q29sb3IpXG4gIH1cblxuICBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuaGlnaGxpZ2h0TWFya2VyKClcbiAgICB0aGlzLmNhbWVyYURpc3RhbmNlID0gdGhpcy5vcmlnaW4uZGlzdGFuY2VUbyh0aGlzLmNhbWVyYS5wb3NpdGlvbilcbiAgICB0aGlzLmNhbWVyYUVuZFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmNhbWVyYURpc3RhbmNlKVxuICAgIHRoaXMuY2FtZXJhTW92ZUxpbmUgPSBuZXcgVEhSRUUuTGluZTModGhpcy5jYW1lcmEucG9zaXRpb24uY2xvbmUoKSwgdGhpcy5jYW1lcmFFbmRQb3NpdGlvbi5jbG9uZSgpKVxuICAgIHRoaXMubW92ZUNhbWVyYSA9IHRydWVcbiAgICB0aGlzLmNhbWVyYU1vdmVkID0gMFxuICAgIHRoaXMuY2FtZXJhVmVydGljYWxSYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKClcbiAgICBjb25zdCBkaXN0YW5jZVRvRW5kID0gdGhpcy5jYW1lcmFNb3ZlTGluZS5kaXN0YW5jZSgpXG4gICAgbGV0IGFuaW1hdGlvblRpbWUgPSBDQU1FUkFfQU5JTUFUSU9OX0RVUkFUSU9OXG4gICAgaWYgKGRpc3RhbmNlVG9FbmQgPCAxMCkgYW5pbWF0aW9uVGltZSAvPSAyXG4gICAgaWYgKGRpc3RhbmNlVG9FbmQgPCAxKSBhbmltYXRpb25UaW1lID0gMFxuICAgIHRoaXMucHJvcHMub25DbGljayhhbmltYXRpb25UaW1lLCB0aGlzLmNsaWNrQ29tcGxldGUpXG4gIH1cblxuICBnZXRDYW1lcmFNb3ZlRGlzdGFuY2UgKGR0KSB7XG4gICAgZHQgLz0gKENBTUVSQV9BTklNQVRJT05fRFVSQVRJT04gLyAxMDAwKSAvIDJcbiAgICBpZiAoZHQgPCAxKSByZXR1cm4gMSAvIDIgKiBkdCAqIGR0XG4gICAgZHQtLVxuICAgIHJldHVybiAtMSAvIDIgKiAoZHQgKiAoZHQgLSAyKSAtIDEpXG4gIH1cblxuICBhbmltYXRlQ2FtZXJhICh0KSB7XG4gICAgaWYgKCF0aGlzLm1vdmVDYW1lcmFUaW1lKSB0aGlzLm1vdmVDYW1lcmFUaW1lID0gdFxuXG4gICAgY29uc3QgZHQgPSAodCAtIHRoaXMubW92ZUNhbWVyYVRpbWUpIC8gMTAwMFxuICAgIHRoaXMuY2FtZXJhTW92ZWQgPSB0aGlzLmdldENhbWVyYU1vdmVEaXN0YW5jZShkdClcbiAgICBsZXQgbmV3UG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIHRoaXMuY2FtZXJhTW92ZUxpbmUuYXQodGhpcy5jYW1lcmFNb3ZlZCwgbmV3UG9zKVxuICAgIHRoaXMuY2FtZXJhVmVydGljYWxSYXljYXN0ZXIuc2V0KHRoaXMub3JpZ2luLCBuZXdQb3MuY2xvbmUoKS5ub3JtYWxpemUoKSlcbiAgICBsZXQgZmluYWxQb3MgPSB0aGlzLm9yaWdpbi5jbG9uZSgpXG4gICAgdGhpcy5jYW1lcmFWZXJ0aWNhbFJheWNhc3Rlci5yYXkuYXQodGhpcy5jYW1lcmFEaXN0YW5jZSwgZmluYWxQb3MpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KGZpbmFsUG9zLngsIGZpbmFsUG9zLnksIGZpbmFsUG9zLnopXG4gICAgdGhpcy5jYW1lcmFNb3ZlRGlzdGFuY2UgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKHRoaXMuY2FtZXJhRW5kUG9zaXRpb24pXG4gICAgaWYgKGR0ID49IENBTUVSQV9BTklNQVRJT05fRFVSQVRJT04gLyAxMDAwKSB7XG4gICAgICB0aGlzLm1vdmVDYW1lcmEgPSBmYWxzZVxuICAgICAgdGhpcy5tb3ZlQ2FtZXJhVGltZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBzZXR1cENsaWNrTGlzdGVuZXIgKCkge1xuICAgIGlmICh0aGlzLmNsaWNrTGlzdGVuZXJTZXR1cCkgcmV0dXJuXG4gICAgaWYgKCF0aGlzLnByb3BzLm9uQ2xpY2spIHJldHVyblxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnByb3BzLnJhZGl1cyAqIFBVTFNFX1JJUFBMRV9TQ0FMRVxuICAgIGNvbnN0IGNsaWNrYWJsZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHNpemUsIHNpemUsIHNpemUpXG4gICAgdGhpcy5jbGlja2FibGVNZXNoID0gbmV3IFRIUkVFLk1lc2goY2xpY2thYmxlR2VvbWV0cnkpXG4gICAgdGhpcy5jbGlja2FibGVNZXNoLnBvc2l0aW9uLmNvcHkodGhpcy5vYmoucG9zaXRpb24pXG4gICAgdGhpcy5jbGlja2FibGVNZXNoLmxvb2tBdCh0aGlzLm9yaWdpbilcbiAgICB0aGlzLmNsaWNrYWJsZU1lc2gubWF0ZXJpYWwudmlzaWJsZSA9IGZhbHNlXG4gICAgdGhpcy5vYmoucGFyZW50LmFkZCh0aGlzLmNsaWNrYWJsZU1lc2gpXG4gICAgdGhpcy5wcm9wcy5yZWdpc3RlckNsaWNrYWJsZU9iamVjdCh0aGlzLmNsaWNrYWJsZU1lc2gsIHRoaXMub25DbGljaylcbiAgICB0aGlzLmNsaWNrTGlzdGVuZXJTZXR1cCA9IHRydWVcbiAgfVxuXG4gIHNldHVwVGV4dCAoKSB7XG4gICAgY29uc3QgeyBsb2NhdGlvbk5hbWUsIGV2ZW50Q291bnQsIGxhdCwgbG9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZm9udCA9IG5ldyBUSFJFRS5Gb250KGRyb2lkU2FucylcbiAgICBjb25zdCBmb250R2VvbWV0cnkgPSBuZXcgVEhSRUUuVGV4dEdlb21ldHJ5KGV2ZW50Q291bnQgPiAxID8gYCR7bG9jYXRpb25OYW1lfSAoJHtldmVudENvdW50fSlgIDogbG9jYXRpb25OYW1lLCB7XG4gICAgICBmb250LFxuICAgICAgc2l6ZTogMC4zLFxuICAgICAgaGVpZ2h0OiAwLjA0XG4gICAgfSlcbiAgICBjb25zdCBjZW50ZXIgPSB0aGlzLm9yaWdpbi5jbG9uZSgpXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogdGhpcy5mb250Q29sb3IgfSlcbiAgICB0aGlzLmZvbnRNZXNoID0gbmV3IFRIUkVFLk1lc2goZm9udEdlb21ldHJ5LCBtYXRlcmlhbClcbiAgICB0aGlzLmZvbnRNZXNoLmdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpXG4gICAgdGhpcy5mb250TWVzaC5nZW9tZXRyeS5ib3VuZGluZ0JveC5nZXRDZW50ZXIoY2VudGVyKVxuICAgIHRoaXMuZm9udE1lc2guZ2VvbWV0cnkuY2VudGVyKClcbiAgICB0aGlzLmZvbnRNZXNoLnBvc2l0aW9uLmNvcHkoY2VudGVyKVxuICAgIHRoaXMub2JqLnBhcmVudC5hZGQodGhpcy5mb250TWVzaClcbiAgICBsZXQgZm9udExhdCA9IGxhdCArIDFcbiAgICBpZiAobGF0ID4gNjApIGZvbnRMYXQgPSBsYXQgLSAxXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uRnJvbUxhdExvbihmb250TGF0LCBsb24pXG4gICAgY29uc3QgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3Rlcih0aGlzLm9yaWdpbi5jbG9uZSgpLCBwb3NpdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpKVxuICAgIGxldCBwb3MgPSB0aGlzLm9yaWdpbi5jbG9uZSgpXG4gICAgcmF5Y2FzdGVyLnJheS5hdCh0aGlzLmdsb2JlLmdldFJhZGl1cygpICsgKHRoaXMucHJvcHMucmFkaXVzICogSEVJR0hUX1NDQUxFKSwgcG9zKVxuICAgIHRoaXMuZm9udE1lc2gucG9zaXRpb24uY29weShwb3MpXG4gICAgdGhpcy5mb250TWVzaC5sb29rQXQodGhpcy5vcmlnaW4pXG4gICAgdGhpcy5mb250QWRkZWQgPSB0cnVlXG4gICAgdGhpcy5mb250TWVzaC5yb3RhdGVPbkF4aXMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIE1hdGguUEkpXG4gIH1cblxuICBnZXRPYmogKCkge1xuICAgIHJldHVybiB0aGlzLm9ialxuICB9XG5cbiAgZ2V0SWQgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlkXG4gIH1cblxuICBnZXRQb3NpdGlvbiAoZGlzdGFuY2UpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb25SYXljYXN0ZXIucmF5LmF0KGRpc3RhbmNlLCBwb3MpXG4gICAgcmV0dXJuIHBvc1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUHVsc2VSaW5nIChkZWxheSkge1xuICAgIGlmIChkZWxheSkgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBkZWxheSkpXG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVyblxuICAgIGNvbnN0IHB1bHNlUmluZyA9IHRoaXMucHVsc2VSaW5nLmNsb25lKClcbiAgICB0aGlzLm9iai5wYXJlbnQuYWRkKHB1bHNlUmluZylcbiAgICBwdWxzZVJpbmcucG9zaXRpb24uY29weSh0aGlzLm9iai5wb3NpdGlvbilcbiAgICBwdWxzZVJpbmcubG9va0F0KHRoaXMub3JpZ2luKVxuICAgIHB1bHNlUmluZy5wYXJhbWV0ZXJzID0geyBzdGFydFRpbWU6IG51bGwgfVxuICAgIHRoaXMucHVsc2VSaW5ncy5wdXNoKHB1bHNlUmluZylcbiAgfVxuXG4gIGdldE5ld1B1bHNlUmFkaXVzIChkdCwgaW5kZXgpIHtcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGR1cmF0aW9uID0gUFVMU0VfRFVSQVRJT04gLyAxMDAwXG4gICAgbGV0IHJhdGlvID0gLTEgKiAoKGR0ID0gZHQgLyBkdXJhdGlvbiAtIDEpICogZHQgKiBkdCAqIGR0IC0gMSlcbiAgICBjb25zdCBtYXhSYWRpdXMgPSAocmFkaXVzICogUFVMU0VfUklQUExFX1NDQUxFKSAtIChpbmRleCAqIChyYWRpdXMgKiBQVUxTRV9TQ0FMRSAqIDQpKVxuICAgIHJldHVybiAoKG1heFJhZGl1cyAtIHJhZGl1cykgKiByYXRpbykgKyByYWRpdXNcbiAgfVxuXG4gIGdldE5ld1B1bHNlT3BhY2l0eSAoZHQpIHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IFBVTFNFX0RVUkFUSU9OIC8gMTAwMFxuICAgIGxldCByYXRpbyA9IC0xICogKChkdCA9IGR0IC8gZHVyYXRpb24gLSAxKSAqIGR0ICogZHQgKiBkdCAtIDEpXG4gICAgaWYgKHJhdGlvID4gMSkgcmF0aW8gPSAxXG4gICAgcmV0dXJuIFBVTFNFX09QQUNJVFkgKiAoMSAtIHJhdGlvKVxuICB9XG5cbiAgYW5pbWF0ZVB1bHNlICh0KSB7XG4gICAgaWYgKHRoaXMucHVsc2VSaW5ncy5sZW5ndGggPCAxKSByZXR1cm5cbiAgICB0aGlzLnB1bHNlUmluZ3MuZm9yRWFjaCgocHVsc2VSaW5nLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCFwdWxzZVJpbmcucGFyYW1ldGVycy5zdGFydFRpbWUpIHB1bHNlUmluZy5wYXJhbWV0ZXJzLnN0YXJ0VGltZSA9IHRcbiAgICAgIGNvbnN0IGR0ID0gdCAtIHB1bHNlUmluZy5wYXJhbWV0ZXJzLnN0YXJ0VGltZVxuICAgICAgY29uc3QgbmV3UmFkaXVzID0gdGhpcy5nZXROZXdQdWxzZVJhZGl1cyhkdCAvIDEwMDAsIGluZGV4KVxuICAgICAgY29uc3QgbmV3T3BhY2l0eSA9IHRoaXMuZ2V0TmV3UHVsc2VPcGFjaXR5KGR0IC8gMTAwMClcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5nZXRQdWxzZVJpbmdHZW9tZXRyeShuZXdSYWRpdXMpXG4gICAgICBpZiAodGhpcy5wdWxzZVJpbmdHZW9tZXRyeSAhPT0gcHVsc2VSaW5nLmdlb21ldHJ5KSBwdWxzZVJpbmcuZ2VvbWV0cnkuZGlzcG9zZSgpXG4gICAgICBwdWxzZVJpbmcuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgICAgcHVsc2VSaW5nLm1hdGVyaWFsLm9wYWNpdHkgPSBuZXdPcGFjaXR5XG4gICAgICBpZiAoZHQgPj0gUFVMU0VfRFVSQVRJT04pIHtcbiAgICAgICAgdGhpcy5vYmoucGFyZW50LnJlbW92ZShwdWxzZVJpbmcpXG4gICAgICAgIHRoaXMucHVsc2VSaW5ncy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFuaW1hdGVEcm9wICh0KSB7XG4gICAgaWYgKCF0aGlzLmRyb3BTdGFydFRpbWUpIHRoaXMuZHJvcFN0YXJ0VGltZSA9IHRcbiAgICB0aGlzLmRpc3RhbmNlIC09IDAuNSAqIDAuMDggKiBNYXRoLnBvdygodCAtIHRoaXMuZHJvcFN0YXJ0VGltZSkgLyAxMDAwLCAyKVxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmRpc3RhbmNlKVxuICAgIGNvbnN0IHRpcFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmRpc3RhbmNlIC0gKHRoaXMucHJvcHMucmFkaXVzICogSEVJR0hUX1NDQUxFIC8gMiArICh0aGlzLnByb3BzLnpJbmRleCAqIExBWUVSX0hFSUdIVCkpKVxuICAgIHRoaXMub2JqLnBvc2l0aW9uLmNvcHkobmV3UG9zaXRpb24pXG4gICAgaWYgKHRoaXMuZ2xvYmUuZ2V0T2JqKCkuZ2VvbWV0cnkuYm91bmRpbmdTcGhlcmUuY29udGFpbnNQb2ludCh0aXBQb3NpdGlvbikpIHtcbiAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmdsb2JlLmdldFJhZGl1cygpXG4gICAgICB0aGlzLmRyb3BwZWQgPSB0cnVlXG4gICAgICB0aGlzLnB1bHNlID0gdHJ1ZVxuICAgICAgdGhpcy5vYmoucG9zaXRpb24uY29weSh0aGlzLmZpbmFsUG9zaXRpb24pXG4gICAgICBkZWxldGUgdGhpcy5kcm9wU3RhcnRUaW1lXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZVB1bHNlUmluZ3MgKHQpIHtcbiAgICBpZiAodGhpcy5wdWxzZVJpbmdzLmxlbmd0aCA8IDEgJiYgdGhpcy5wdWxzZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQVUxTRV9DT1VOVDsgaSsrKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUHVsc2VSaW5nKGkgKiBQVUxTRV9JTlRFUlZBTClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbmltYXRlUHVsc2UodClcbiAgICB9XG4gIH1cblxuICBhbmltYXRlICh7IHQgfSkge1xuICAgIGlmICghdGhpcy5mb250QWRkZWQpIHRoaXMuc2V0dXBUZXh0KClcbiAgICBpZiAoIXRoaXMuZHJvcHBlZCkgdGhpcy5hbmltYXRlRHJvcCh0KVxuICAgIGlmICh0aGlzLmRyb3BwZWQpIHtcbiAgICAgIHRoaXMuc2V0dXBDbGlja0xpc3RlbmVyKClcbiAgICAgIHRoaXMuYW5pbWF0ZVB1bHNlUmluZ3ModClcbiAgICB9XG4gICAgaWYgKHRoaXMubW92ZUNhbWVyYSkgdGhpcy5hbmltYXRlQ2FtZXJhKHQpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxuICAgIHRoaXMubWFya2VyQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IodGhpcy5wcm9wcy5tYXJrZXJDb2xvcilcbiAgICB0aGlzLm1hcmtlckhpZ2hsaWdodENvbG9yID0gbmV3IFRIUkVFLkNvbG9yKHRoaXMucHJvcHMubWFya2VySGlnaGxpZ2h0Q29sb3IpXG4gICAgdGhpcy5mb250Q29sb3IgPSBuZXcgVEhSRUUuQ29sb3IodGhpcy5wcm9wcy5mb250Q29sb3IpXG4gICAgdGhpcy5mb250SGlnaGxpZ2h0Q29sb3IgPSBuZXcgVEhSRUUuQ29sb3IodGhpcy5wcm9wcy5mb250SGlnaGxpZ2h0Q29sb3IpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgbWFya2VyQ29sb3IsIG1hcmtlckhpZ2hsaWdodENvbG9yLCBmb250Q29sb3IsIGZvbnRIaWdobGlnaHRDb2xvciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChwcmV2UHJvcHMubWFya2VyQ29sb3IgIT09IG1hcmtlckNvbG9yKSB7XG4gICAgICB0aGlzLm1hcmtlckNvbG9yLnNldChtYXJrZXJDb2xvcilcbiAgICAgIGlmICghdGhpcy5oaWdobGlnaHRlZCkgdGhpcy5yZXNldE1hcmtlckNvbG9yKClcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5tYXJrZXJIaWdobGlnaHRDb2xvciAhPT0gbWFya2VySGlnaGxpZ2h0Q29sb3IpIHtcbiAgICAgIHRoaXMubWFya2VySGlnaGxpZ2h0Q29sb3Iuc2V0KG1hcmtlckhpZ2hsaWdodENvbG9yKVxuICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWQpIHRoaXMuaGlnaGxpZ2h0TWFya2VyKClcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5mb250Q29sb3IgIT09IGZvbnRDb2xvcikge1xuICAgICAgdGhpcy5mb250Q29sb3Iuc2V0KGZvbnRDb2xvcilcbiAgICAgIGlmICghdGhpcy5oaWdobGlnaHRlZCkgdGhpcy5yZXNldE1hcmtlckNvbG9yKClcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5mb250SGlnaGxpZ2h0Q29sb3IgIT09IGZvbnRIaWdobGlnaHRDb2xvcikge1xuICAgICAgdGhpcy5mb250SGlnaGxpZ2h0Q29sb3Iuc2V0KGZvbnRIaWdobGlnaHRDb2xvcilcbiAgICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkKSB0aGlzLmhpZ2hsaWdodE1hcmtlcigpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlXG4gICAgdGhpcy5jbGlja2FibGVNZXNoICYmIHRoaXMuY2xpY2thYmxlTWVzaC5wYXJlbnQgJiYgdGhpcy5jbGlja2FibGVNZXNoLnBhcmVudC5yZW1vdmUodGhpcy5jbGlja2FibGVNZXNoKVxuICAgIHRoaXMuZm9udE1lc2ggJiYgdGhpcy5mb250TWVzaC5wYXJlbnQgJiYgdGhpcy5mb250TWVzaC5wYXJlbnQucmVtb3ZlKHRoaXMuZm9udE1lc2gpXG4gICAgdGhpcy5wdWxzZVJpbmdzLmZvckVhY2goKHB1bHNlUmluZykgPT4ge1xuICAgICAgdGhpcy5vYmoucGFyZW50LnJlbW92ZShwdWxzZVJpbmcpXG4gICAgfSlcbiAgICB0aGlzLm9iaiAmJiB0aGlzLm9iai5wYXJlbnQgJiYgdGhpcy5vYmoucGFyZW50LnJlbW92ZSh0aGlzLm9iailcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIl19