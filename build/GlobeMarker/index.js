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
      return new THREE.RingBufferGeometry(radius, radius + radius * PULSE_SCALE, 24, 1);
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
      var pointGeometry = new THREE.ConeBufferGeometry(this.props.radius, this.props.radius * HEIGHT_SCALE, 16, 1);
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
      var clickableGeometry = new THREE.BoxBufferGeometry(size, size, size);
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
      var fontGeometry = new THREE.TextBufferGeometry(eventCount > 1 ? "".concat(locationName, " (").concat(eventCount, ")") : locationName, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbG9iZU1hcmtlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJQVUxTRV9TQ0FMRSIsIlBVTFNFX1JJUFBMRV9TQ0FMRSIsIlBVTFNFX0RVUkFUSU9OIiwiUFVMU0VfQ09VTlQiLCJQVUxTRV9JTlRFUlZBTCIsIlBVTFNFX09QQUNJVFkiLCJIRUlHSFRfU0NBTEUiLCJMT0NBTF9ST1RBVElPTl9BWElTIiwiVEhSRUUiLCJWZWN0b3IzIiwiTE9DQUxfUk9UQVRJT05fQU5HTEUiLCJNYXRoIiwiUEkiLCJMQVlFUl9IRUlHSFQiLCJDQU1FUkFfQU5JTUFUSU9OX0RVUkFUSU9OIiwiR2xvYmVNYXJrZXIiLCJjbGlja0NvbXBsZXRlIiwicmVzZXRNYXJrZXJDb2xvciIsIm9uQ2xpY2siLCJoaWdobGlnaHRNYXJrZXIiLCJjYW1lcmFEaXN0YW5jZSIsIm9yaWdpbiIsImRpc3RhbmNlVG8iLCJjYW1lcmEiLCJwb3NpdGlvbiIsImNhbWVyYUVuZFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJjYW1lcmFNb3ZlTGluZSIsIkxpbmUzIiwiY2xvbmUiLCJtb3ZlQ2FtZXJhIiwiY2FtZXJhTW92ZWQiLCJjYW1lcmFWZXJ0aWNhbFJheWNhc3RlciIsIlJheWNhc3RlciIsImRpc3RhbmNlVG9FbmQiLCJkaXN0YW5jZSIsImFuaW1hdGlvblRpbWUiLCJwcm9wcyIsImxhdCIsImxvbiIsInJhZGl1cyIsImdsb2JlIiwiZ2V0UmFkaXVzIiwicGhpIiwidGhldGEiLCJ4Iiwic2luIiwiY29zIiwieiIsInkiLCJwb3MiLCJzZXQiLCJnZXRQb3NpdGlvbkZyb21MYXRMb24iLCJwb3NpdGlvblJheWNhc3RlciIsIm5vcm1hbGl6ZSIsImZpbmFsUG9zaXRpb24iLCJyYXkiLCJhdCIsInpJbmRleCIsIlJpbmdCdWZmZXJHZW9tZXRyeSIsInB1bHNlUmluZ0dlb21ldHJ5IiwiZ2V0UHVsc2VSaW5nR2VvbWV0cnkiLCJwdWxzZVJpbmdNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJtYXJrZXJDb2xvciIsInRyYW5zcGFyZW50IiwiY29udmVydFNSR0JUb0xpbmVhciIsIm9wYWNpdHkiLCJzaWRlIiwiQmFja1NpZGUiLCJwdWxzZVJpbmciLCJNZXNoIiwic2NlbmVPYmplY3RzIiwicHVsc2UiLCJwdWxzZVJpbmdzIiwiZmlsdGVyIiwib2JqIiwiZ2V0SWQiLCJzaGlmdCIsIkVycm9yIiwiZHJvcERpc3RhbmNlIiwiZ2V0RmluYWxQb3NpdGlvbiIsInBvaW50R2VvbWV0cnkiLCJDb25lQnVmZmVyR2VvbWV0cnkiLCJtYXRlcmlhbCIsImNvcHkiLCJsb29rQXQiLCJyb3RhdGVPbkF4aXMiLCJzZXR1cFB1bHNlUmluZyIsImhpZ2hsaWdodGVkIiwiZm9udE1lc2giLCJmb250Q29sb3IiLCJtYXJrZXJIaWdobGlnaHRDb2xvciIsImZvbnRIaWdobGlnaHRDb2xvciIsImR0IiwidCIsIm1vdmVDYW1lcmFUaW1lIiwiZ2V0Q2FtZXJhTW92ZURpc3RhbmNlIiwibmV3UG9zIiwiZmluYWxQb3MiLCJjYW1lcmFNb3ZlRGlzdGFuY2UiLCJjbGlja0xpc3RlbmVyU2V0dXAiLCJzaXplIiwiY2xpY2thYmxlR2VvbWV0cnkiLCJCb3hCdWZmZXJHZW9tZXRyeSIsImNsaWNrYWJsZU1lc2giLCJ2aXNpYmxlIiwicGFyZW50IiwiYWRkIiwicmVnaXN0ZXJDbGlja2FibGVPYmplY3QiLCJsb2NhdGlvbk5hbWUiLCJldmVudENvdW50IiwiZm9udCIsIkZvbnQiLCJkcm9pZFNhbnMiLCJmb250R2VvbWV0cnkiLCJUZXh0QnVmZmVyR2VvbWV0cnkiLCJoZWlnaHQiLCJjZW50ZXIiLCJnZW9tZXRyeSIsImNvbXB1dGVCb3VuZGluZ0JveCIsImJvdW5kaW5nQm94IiwiZ2V0Q2VudGVyIiwiZm9udExhdCIsInJheWNhc3RlciIsImZvbnRBZGRlZCIsImlkIiwiZGVsYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwicGFyYW1ldGVycyIsInN0YXJ0VGltZSIsInB1c2giLCJpbmRleCIsImR1cmF0aW9uIiwicmF0aW8iLCJtYXhSYWRpdXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwibmV3UmFkaXVzIiwiZ2V0TmV3UHVsc2VSYWRpdXMiLCJuZXdPcGFjaXR5IiwiZ2V0TmV3UHVsc2VPcGFjaXR5IiwiZGlzcG9zZSIsInJlbW92ZSIsInNwbGljZSIsImRyb3BTdGFydFRpbWUiLCJwb3ciLCJuZXdQb3NpdGlvbiIsInRpcFBvc2l0aW9uIiwiZ2V0T2JqIiwiYm91bmRpbmdTcGhlcmUiLCJjb250YWluc1BvaW50IiwiZHJvcHBlZCIsImkiLCJjcmVhdGVQdWxzZVJpbmciLCJhbmltYXRlUHVsc2UiLCJzZXR1cFRleHQiLCJhbmltYXRlRHJvcCIsInNldHVwQ2xpY2tMaXN0ZW5lciIsImFuaW1hdGVQdWxzZVJpbmdzIiwiYW5pbWF0ZUNhbWVyYSIsIkNvbG9yIiwicHJldlByb3BzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxJQUFwQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLENBQTNCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLElBQXZCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLEdBQXZCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLENBQXJCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsSUFBSUMsS0FBSyxDQUFDQyxPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQTVCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXZDO0FBRUEs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UkY7QUFTakIvRCxFQUFBQSx1QkFBdUIsRUFBRTJELHNCQUFVSSxJQVRsQjtBQVVqQjlELEVBQUFBLFlBQVksRUFBRTBELHNCQUFVQyxNQUFWLENBQWlCQyxVQVZkO0FBV2pCM0QsRUFBQUEsVUFBVSxFQUFFeUQsc0JBQVVHLE1BQVYsQ0FBaUJELFVBWFo7QUFZakIvRSxFQUFBQSxTQUFTLEVBQUU2RSxzQkFBVUcsTUFaSjtBQWFqQjlFLEVBQUFBLGtCQUFrQixFQUFFMkUsc0JBQVVHLE1BYmI7QUFjakIzRyxFQUFBQSxXQUFXLEVBQUV3RyxzQkFBVUcsTUFkTjtBQWVqQi9FLEVBQUFBLG9CQUFvQixFQUFFNEUsc0JBQVVHO0FBZmYsQztBQURBN0osVyxDQW1CWitKLFksR0FBZTtBQUNwQmxGLEVBQUFBLFNBQVMsRUFBRSxRQURTO0FBRXBCRSxFQUFBQSxrQkFBa0IsRUFBRSxRQUZBO0FBR3BCN0IsRUFBQUEsV0FBVyxFQUFFLFFBSE87QUFJcEI0QixFQUFBQSxvQkFBb0IsRUFBRTtBQUpGLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IGRyb2lkU2FucyBmcm9tICd0aHJlZS9leGFtcGxlcy9mb250cy9kcm9pZC9kcm9pZF9zYW5zX3JlZ3VsYXIudHlwZWZhY2UuanNvbidcblxuY29uc3QgUFVMU0VfU0NBTEUgPSAwLjE1XG5jb25zdCBQVUxTRV9SSVBQTEVfU0NBTEUgPSA2XG5jb25zdCBQVUxTRV9EVVJBVElPTiA9IDI2MDBcbmNvbnN0IFBVTFNFX0NPVU5UID0gM1xuY29uc3QgUFVMU0VfSU5URVJWQUwgPSA0MDBcbmNvbnN0IFBVTFNFX09QQUNJVFkgPSAxXG5cbmNvbnN0IEhFSUdIVF9TQ0FMRSA9IDRcbmNvbnN0IExPQ0FMX1JPVEFUSU9OX0FYSVMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKVxuY29uc3QgTE9DQUxfUk9UQVRJT05fQU5HTEUgPSBNYXRoLlBJIC8gMlxuXG5jb25zdCBMQVlFUl9IRUlHSFQgPSAwLjAyXG5cbmNvbnN0IENBTUVSQV9BTklNQVRJT05fRFVSQVRJT04gPSAxMDAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JlTWFya2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGdsb2JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmFkaXVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZHJvcERpc3RhbmNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVnaXN0ZXJDbGlja2FibGVPYmplY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGV2ZW50Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBmb250Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZm9udEhpZ2hsaWdodENvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1hcmtlckNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1hcmtlckhpZ2hsaWdodENvbG9yOiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZvbnRDb2xvcjogMHgwMDAwMDAsXG4gICAgZm9udEhpZ2hsaWdodENvbG9yOiAweDAwMDAwMCxcbiAgICBtYXJrZXJDb2xvcjogMHgwMDAwMDAsXG4gICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IDB4MDAwMDAwXG4gIH1cblxuICBnZXRQb3NpdGlvbkZyb21MYXRMb24gKGxhdCwgbG9uKSB7XG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5nbG9iZS5nZXRSYWRpdXMoKVxuICAgIGNvbnN0IHBoaSA9ICg5MCAtIGxhdCkgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCB0aGV0YSA9IChsb24gKyAxODApICogKE1hdGguUEkgLyAxODApXG4gICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSkgKiAtMVxuICAgIGNvbnN0IHogPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpXG4gICAgY29uc3QgeSA9IHJhZGl1cyAqIE1hdGguY29zKHBoaSlcblxuICAgIGNvbnN0IHBvcyA9IHRoaXMub3JpZ2luLmNsb25lKClcbiAgICBwb3Muc2V0KHgsIHksIHopXG4gICAgcmV0dXJuIHBvc1xuICB9XG5cbiAgZ2V0RmluYWxQb3NpdGlvbiAoKSB7XG4gICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb25Gcm9tTGF0TG9uKGxhdCwgbG9uKVxuXG4gICAgdGhpcy5wb3NpdGlvblJheWNhc3Rlci5zZXQodGhpcy5vcmlnaW4sIHBvcy5ub3JtYWxpemUoKSlcbiAgICBsZXQgZmluYWxQb3NpdGlvbiA9IHRoaXMub3JpZ2luLmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uUmF5Y2FzdGVyLnJheS5hdCh0aGlzLmdsb2JlLmdldFJhZGl1cygpICsgdGhpcy5wcm9wcy5yYWRpdXMgKiBIRUlHSFRfU0NBTEUgLyAyICsgKHRoaXMucHJvcHMuekluZGV4ICogTEFZRVJfSEVJR0hUKSwgZmluYWxQb3NpdGlvbilcbiAgICByZXR1cm4gZmluYWxQb3NpdGlvblxuICB9XG5cbiAgZ2V0UHVsc2VSaW5nR2VvbWV0cnkgKHJhZGl1cykge1xuICAgIHJldHVybiBuZXcgVEhSRUUuUmluZ0J1ZmZlckdlb21ldHJ5KHJhZGl1cywgcmFkaXVzICsgKHJhZGl1cyAqIFBVTFNFX1NDQUxFKSwgMjQsIDEpXG4gIH1cblxuICBzZXR1cFB1bHNlUmluZyAoKSB7XG4gICAgdGhpcy5wdWxzZVJpbmdHZW9tZXRyeSA9IHRoaXMuZ2V0UHVsc2VSaW5nR2VvbWV0cnkodGhpcy5wcm9wcy5yYWRpdXMpXG4gICAgY29uc3QgcHVsc2VSaW5nTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogdGhpcy5tYXJrZXJDb2xvciwgdHJhbnNwYXJlbnQ6IHRydWUgfSlcbiAgICBwdWxzZVJpbmdNYXRlcmlhbC5jb2xvci5jb252ZXJ0U1JHQlRvTGluZWFyKClcbiAgICBwdWxzZVJpbmdNYXRlcmlhbC5vcGFjaXR5ID0gUFVMU0VfT1BBQ0lUWVxuICAgIHB1bHNlUmluZ01hdGVyaWFsLnNpZGUgPSBUSFJFRS5CYWNrU2lkZVxuICAgIHRoaXMucHVsc2VSaW5nID0gbmV3IFRIUkVFLk1lc2godGhpcy5wdWxzZVJpbmdHZW9tZXRyeSwgcHVsc2VSaW5nTWF0ZXJpYWwpXG4gIH1cblxuICBpbml0aWFsaXNlICh7IHNjZW5lT2JqZWN0cywgY2FtZXJhIH0pIHtcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxuICAgIHRoaXMucHVsc2UgPSBmYWxzZVxuICAgIHRoaXMucHVsc2VSaW5ncyA9IFtdXG4gICAgdGhpcy5nbG9iZSA9IHNjZW5lT2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5nZXRJZCgpID09PSB0aGlzLnByb3BzLmdsb2JlKS5zaGlmdCgpXG4gICAgaWYgKCF0aGlzLmdsb2JlKSB0aHJvdyBuZXcgRXJyb3IoYEdsb2JlICR7dGhpcy5wcm9wcy5nbG9iZX0gZG9lcyBub3QgZXhpc3Qgd2l0aGluIHRoZSBzY2VuZWApXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5nbG9iZS5nZXRSYWRpdXMoKSArIHRoaXMucHJvcHMuZHJvcERpc3RhbmNlICsgKHRoaXMucHJvcHMucmFkaXVzICogSEVJR0hUX1NDQUxFIC8gMilcbiAgICB0aGlzLnBvc2l0aW9uUmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpXG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpXG4gICAgdGhpcy5maW5hbFBvc2l0aW9uID0gdGhpcy5nZXRGaW5hbFBvc2l0aW9uKClcbiAgICBjb25zdCBwb2ludEdlb21ldHJ5ID0gbmV3IFRIUkVFLkNvbmVCdWZmZXJHZW9tZXRyeSh0aGlzLnByb3BzLnJhZGl1cywgdGhpcy5wcm9wcy5yYWRpdXMgKiBIRUlHSFRfU0NBTEUsIDE2LCAxKVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IHRoaXMubWFya2VyQ29sb3IgfSlcbiAgICB0aGlzLm9iaiA9IG5ldyBUSFJFRS5NZXNoKHBvaW50R2VvbWV0cnksIG1hdGVyaWFsKVxuXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuZGlzdGFuY2UpXG4gICAgdGhpcy5vYmoucG9zaXRpb24uY29weShwb3NpdGlvbilcbiAgICB0aGlzLm9iai5sb29rQXQodGhpcy5vcmlnaW4pXG4gICAgdGhpcy5vYmoucm90YXRlT25BeGlzKExPQ0FMX1JPVEFUSU9OX0FYSVMsIExPQ0FMX1JPVEFUSU9OX0FOR0xFKVxuXG4gICAgdGhpcy5zZXR1cFB1bHNlUmluZygpXG4gIH1cblxuICBjbGlja0NvbXBsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMucmVzZXRNYXJrZXJDb2xvcigpXG4gIH1cblxuICByZXNldE1hcmtlckNvbG9yICgpIHtcbiAgICB0aGlzLmhpZ2hsaWdodGVkID0gZmFsc2VcbiAgICB0aGlzLm9iai5tYXRlcmlhbC5jb2xvciA9IHRoaXMubWFya2VyQ29sb3JcbiAgICB0aGlzLnB1bHNlUmluZy5tYXRlcmlhbC5jb2xvciA9IHRoaXMubWFya2VyQ29sb3JcbiAgICB0aGlzLmZvbnRNZXNoICYmICh0aGlzLmZvbnRNZXNoLm1hdGVyaWFsLmNvbG9yID0gdGhpcy5mb250Q29sb3IpXG4gIH1cblxuICBoaWdobGlnaHRNYXJrZXIgKCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWQgPSB0cnVlXG4gICAgdGhpcy5vYmoubWF0ZXJpYWwuY29sb3IgPSB0aGlzLm1hcmtlckhpZ2hsaWdodENvbG9yXG4gICAgdGhpcy5wdWxzZVJpbmcubWF0ZXJpYWwuY29sb3IgPSB0aGlzLm1hcmtlckhpZ2hsaWdodENvbG9yXG4gICAgdGhpcy5mb250TWVzaCAmJiAodGhpcy5mb250TWVzaC5tYXRlcmlhbC5jb2xvciA9IHRoaXMuZm9udEhpZ2hsaWdodENvbG9yKVxuICB9XG5cbiAgb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmhpZ2hsaWdodE1hcmtlcigpXG4gICAgdGhpcy5jYW1lcmFEaXN0YW5jZSA9IHRoaXMub3JpZ2luLmRpc3RhbmNlVG8odGhpcy5jYW1lcmEucG9zaXRpb24pXG4gICAgdGhpcy5jYW1lcmFFbmRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5jYW1lcmFEaXN0YW5jZSlcbiAgICB0aGlzLmNhbWVyYU1vdmVMaW5lID0gbmV3IFRIUkVFLkxpbmUzKHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCksIHRoaXMuY2FtZXJhRW5kUG9zaXRpb24uY2xvbmUoKSlcbiAgICB0aGlzLm1vdmVDYW1lcmEgPSB0cnVlXG4gICAgdGhpcy5jYW1lcmFNb3ZlZCA9IDBcbiAgICB0aGlzLmNhbWVyYVZlcnRpY2FsUmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpXG4gICAgY29uc3QgZGlzdGFuY2VUb0VuZCA9IHRoaXMuY2FtZXJhTW92ZUxpbmUuZGlzdGFuY2UoKVxuICAgIGxldCBhbmltYXRpb25UaW1lID0gQ0FNRVJBX0FOSU1BVElPTl9EVVJBVElPTlxuICAgIGlmIChkaXN0YW5jZVRvRW5kIDwgMTApIGFuaW1hdGlvblRpbWUgLz0gMlxuICAgIGlmIChkaXN0YW5jZVRvRW5kIDwgMSkgYW5pbWF0aW9uVGltZSA9IDBcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soYW5pbWF0aW9uVGltZSwgdGhpcy5jbGlja0NvbXBsZXRlKVxuICB9XG5cbiAgZ2V0Q2FtZXJhTW92ZURpc3RhbmNlIChkdCkge1xuICAgIGR0IC89IChDQU1FUkFfQU5JTUFUSU9OX0RVUkFUSU9OIC8gMTAwMCkgLyAyXG4gICAgaWYgKGR0IDwgMSkgcmV0dXJuIDEgLyAyICogZHQgKiBkdFxuICAgIGR0LS1cbiAgICByZXR1cm4gLTEgLyAyICogKGR0ICogKGR0IC0gMikgLSAxKVxuICB9XG5cbiAgYW5pbWF0ZUNhbWVyYSAodCkge1xuICAgIGlmICghdGhpcy5tb3ZlQ2FtZXJhVGltZSkgdGhpcy5tb3ZlQ2FtZXJhVGltZSA9IHRcblxuICAgIGNvbnN0IGR0ID0gKHQgLSB0aGlzLm1vdmVDYW1lcmFUaW1lKSAvIDEwMDBcbiAgICB0aGlzLmNhbWVyYU1vdmVkID0gdGhpcy5nZXRDYW1lcmFNb3ZlRGlzdGFuY2UoZHQpXG4gICAgbGV0IG5ld1BvcyA9IHRoaXMub3JpZ2luLmNsb25lKClcbiAgICB0aGlzLmNhbWVyYU1vdmVMaW5lLmF0KHRoaXMuY2FtZXJhTW92ZWQsIG5ld1BvcylcbiAgICB0aGlzLmNhbWVyYVZlcnRpY2FsUmF5Y2FzdGVyLnNldCh0aGlzLm9yaWdpbiwgbmV3UG9zLmNsb25lKCkubm9ybWFsaXplKCkpXG4gICAgbGV0IGZpbmFsUG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIHRoaXMuY2FtZXJhVmVydGljYWxSYXljYXN0ZXIucmF5LmF0KHRoaXMuY2FtZXJhRGlzdGFuY2UsIGZpbmFsUG9zKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChmaW5hbFBvcy54LCBmaW5hbFBvcy55LCBmaW5hbFBvcy56KVxuICAgIHRoaXMuY2FtZXJhTW92ZURpc3RhbmNlID0gdGhpcy5jYW1lcmEucG9zaXRpb24uZGlzdGFuY2VUbyh0aGlzLmNhbWVyYUVuZFBvc2l0aW9uKVxuICAgIGlmIChkdCA+PSBDQU1FUkFfQU5JTUFUSU9OX0RVUkFUSU9OIC8gMTAwMCkge1xuICAgICAgdGhpcy5tb3ZlQ2FtZXJhID0gZmFsc2VcbiAgICAgIHRoaXMubW92ZUNhbWVyYVRpbWUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgc2V0dXBDbGlja0xpc3RlbmVyICgpIHtcbiAgICBpZiAodGhpcy5jbGlja0xpc3RlbmVyU2V0dXApIHJldHVyblxuICAgIGlmICghdGhpcy5wcm9wcy5vbkNsaWNrKSByZXR1cm5cbiAgICBjb25zdCBzaXplID0gdGhpcy5wcm9wcy5yYWRpdXMgKiBQVUxTRV9SSVBQTEVfU0NBTEVcbiAgICBjb25zdCBjbGlja2FibGVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeShzaXplLCBzaXplLCBzaXplKVxuICAgIHRoaXMuY2xpY2thYmxlTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGNsaWNrYWJsZUdlb21ldHJ5KVxuICAgIHRoaXMuY2xpY2thYmxlTWVzaC5wb3NpdGlvbi5jb3B5KHRoaXMub2JqLnBvc2l0aW9uKVxuICAgIHRoaXMuY2xpY2thYmxlTWVzaC5sb29rQXQodGhpcy5vcmlnaW4pXG4gICAgdGhpcy5jbGlja2FibGVNZXNoLm1hdGVyaWFsLnZpc2libGUgPSBmYWxzZVxuICAgIHRoaXMub2JqLnBhcmVudC5hZGQodGhpcy5jbGlja2FibGVNZXNoKVxuICAgIHRoaXMucHJvcHMucmVnaXN0ZXJDbGlja2FibGVPYmplY3QodGhpcy5jbGlja2FibGVNZXNoLCB0aGlzLm9uQ2xpY2spXG4gICAgdGhpcy5jbGlja0xpc3RlbmVyU2V0dXAgPSB0cnVlXG4gIH1cblxuICBzZXR1cFRleHQgKCkge1xuICAgIGNvbnN0IHsgbG9jYXRpb25OYW1lLCBldmVudENvdW50LCBsYXQsIGxvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGZvbnQgPSBuZXcgVEhSRUUuRm9udChkcm9pZFNhbnMpXG4gICAgY29uc3QgZm9udEdlb21ldHJ5ID0gbmV3IFRIUkVFLlRleHRCdWZmZXJHZW9tZXRyeShldmVudENvdW50ID4gMSA/IGAke2xvY2F0aW9uTmFtZX0gKCR7ZXZlbnRDb3VudH0pYCA6IGxvY2F0aW9uTmFtZSwge1xuICAgICAgZm9udCxcbiAgICAgIHNpemU6IDAuMyxcbiAgICAgIGhlaWdodDogMC4wNFxuICAgIH0pXG4gICAgY29uc3QgY2VudGVyID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IHRoaXMuZm9udENvbG9yIH0pXG4gICAgdGhpcy5mb250TWVzaCA9IG5ldyBUSFJFRS5NZXNoKGZvbnRHZW9tZXRyeSwgbWF0ZXJpYWwpXG4gICAgdGhpcy5mb250TWVzaC5nZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKVxuICAgIHRoaXMuZm9udE1lc2guZ2VvbWV0cnkuYm91bmRpbmdCb3guZ2V0Q2VudGVyKGNlbnRlcilcbiAgICB0aGlzLmZvbnRNZXNoLmdlb21ldHJ5LmNlbnRlcigpXG4gICAgdGhpcy5mb250TWVzaC5wb3NpdGlvbi5jb3B5KGNlbnRlcilcbiAgICB0aGlzLm9iai5wYXJlbnQuYWRkKHRoaXMuZm9udE1lc2gpXG4gICAgbGV0IGZvbnRMYXQgPSBsYXQgKyAxXG4gICAgaWYgKGxhdCA+IDYwKSBmb250TGF0ID0gbGF0IC0gMVxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkZyb21MYXRMb24oZm9udExhdCwgbG9uKVxuICAgIGNvbnN0IHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIodGhpcy5vcmlnaW4uY2xvbmUoKSwgcG9zaXRpb24uY2xvbmUoKS5ub3JtYWxpemUoKSlcbiAgICBsZXQgcG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIHJheWNhc3Rlci5yYXkuYXQodGhpcy5nbG9iZS5nZXRSYWRpdXMoKSArICh0aGlzLnByb3BzLnJhZGl1cyAqIEhFSUdIVF9TQ0FMRSksIHBvcylcbiAgICB0aGlzLmZvbnRNZXNoLnBvc2l0aW9uLmNvcHkocG9zKVxuICAgIHRoaXMuZm9udE1lc2gubG9va0F0KHRoaXMub3JpZ2luKVxuICAgIHRoaXMuZm9udEFkZGVkID0gdHJ1ZVxuICAgIHRoaXMuZm9udE1lc2gucm90YXRlT25BeGlzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBNYXRoLlBJKVxuICB9XG5cbiAgZ2V0T2JqICgpIHtcbiAgICByZXR1cm4gdGhpcy5vYmpcbiAgfVxuXG4gIGdldElkICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pZFxuICB9XG5cbiAgZ2V0UG9zaXRpb24gKGRpc3RhbmNlKSB7XG4gICAgbGV0IHBvcyA9IHRoaXMub3JpZ2luLmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uUmF5Y2FzdGVyLnJheS5hdChkaXN0YW5jZSwgcG9zKVxuICAgIHJldHVybiBwb3NcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVB1bHNlUmluZyAoZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkpIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgZGVsYXkpKVxuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICBjb25zdCBwdWxzZVJpbmcgPSB0aGlzLnB1bHNlUmluZy5jbG9uZSgpXG4gICAgdGhpcy5vYmoucGFyZW50LmFkZChwdWxzZVJpbmcpXG4gICAgcHVsc2VSaW5nLnBvc2l0aW9uLmNvcHkodGhpcy5vYmoucG9zaXRpb24pXG4gICAgcHVsc2VSaW5nLmxvb2tBdCh0aGlzLm9yaWdpbilcbiAgICBwdWxzZVJpbmcucGFyYW1ldGVycyA9IHsgc3RhcnRUaW1lOiBudWxsIH1cbiAgICB0aGlzLnB1bHNlUmluZ3MucHVzaChwdWxzZVJpbmcpXG4gIH1cblxuICBnZXROZXdQdWxzZVJhZGl1cyAoZHQsIGluZGV4KSB7XG4gICAgY29uc3QgeyByYWRpdXMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBkdXJhdGlvbiA9IFBVTFNFX0RVUkFUSU9OIC8gMTAwMFxuICAgIGxldCByYXRpbyA9IC0xICogKChkdCA9IGR0IC8gZHVyYXRpb24gLSAxKSAqIGR0ICogZHQgKiBkdCAtIDEpXG4gICAgY29uc3QgbWF4UmFkaXVzID0gKHJhZGl1cyAqIFBVTFNFX1JJUFBMRV9TQ0FMRSkgLSAoaW5kZXggKiAocmFkaXVzICogUFVMU0VfU0NBTEUgKiA0KSlcbiAgICByZXR1cm4gKChtYXhSYWRpdXMgLSByYWRpdXMpICogcmF0aW8pICsgcmFkaXVzXG4gIH1cblxuICBnZXROZXdQdWxzZU9wYWNpdHkgKGR0KSB7XG4gICAgY29uc3QgZHVyYXRpb24gPSBQVUxTRV9EVVJBVElPTiAvIDEwMDBcbiAgICBsZXQgcmF0aW8gPSAtMSAqICgoZHQgPSBkdCAvIGR1cmF0aW9uIC0gMSkgKiBkdCAqIGR0ICogZHQgLSAxKVxuICAgIGlmIChyYXRpbyA+IDEpIHJhdGlvID0gMVxuICAgIHJldHVybiBQVUxTRV9PUEFDSVRZICogKDEgLSByYXRpbylcbiAgfVxuXG4gIGFuaW1hdGVQdWxzZSAodCkge1xuICAgIGlmICh0aGlzLnB1bHNlUmluZ3MubGVuZ3RoIDwgMSkgcmV0dXJuXG4gICAgdGhpcy5wdWxzZVJpbmdzLmZvckVhY2goKHB1bHNlUmluZywgaW5kZXgpID0+IHtcbiAgICAgIGlmICghcHVsc2VSaW5nLnBhcmFtZXRlcnMuc3RhcnRUaW1lKSBwdWxzZVJpbmcucGFyYW1ldGVycy5zdGFydFRpbWUgPSB0XG4gICAgICBjb25zdCBkdCA9IHQgLSBwdWxzZVJpbmcucGFyYW1ldGVycy5zdGFydFRpbWVcbiAgICAgIGNvbnN0IG5ld1JhZGl1cyA9IHRoaXMuZ2V0TmV3UHVsc2VSYWRpdXMoZHQgLyAxMDAwLCBpbmRleClcbiAgICAgIGNvbnN0IG5ld09wYWNpdHkgPSB0aGlzLmdldE5ld1B1bHNlT3BhY2l0eShkdCAvIDEwMDApXG4gICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuZ2V0UHVsc2VSaW5nR2VvbWV0cnkobmV3UmFkaXVzKVxuICAgICAgaWYgKHRoaXMucHVsc2VSaW5nR2VvbWV0cnkgIT09IHB1bHNlUmluZy5nZW9tZXRyeSkgcHVsc2VSaW5nLmdlb21ldHJ5LmRpc3Bvc2UoKVxuICAgICAgcHVsc2VSaW5nLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICAgIHB1bHNlUmluZy5tYXRlcmlhbC5vcGFjaXR5ID0gbmV3T3BhY2l0eVxuICAgICAgaWYgKGR0ID49IFBVTFNFX0RVUkFUSU9OKSB7XG4gICAgICAgIHRoaXMub2JqLnBhcmVudC5yZW1vdmUocHVsc2VSaW5nKVxuICAgICAgICB0aGlzLnB1bHNlUmluZ3Muc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlRHJvcCAodCkge1xuICAgIGlmICghdGhpcy5kcm9wU3RhcnRUaW1lKSB0aGlzLmRyb3BTdGFydFRpbWUgPSB0XG4gICAgdGhpcy5kaXN0YW5jZSAtPSAwLjUgKiAwLjA4ICogTWF0aC5wb3coKHQgLSB0aGlzLmRyb3BTdGFydFRpbWUpIC8gMTAwMCwgMilcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5kaXN0YW5jZSlcbiAgICBjb25zdCB0aXBQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5kaXN0YW5jZSAtICh0aGlzLnByb3BzLnJhZGl1cyAqIEhFSUdIVF9TQ0FMRSAvIDIgKyAodGhpcy5wcm9wcy56SW5kZXggKiBMQVlFUl9IRUlHSFQpKSlcbiAgICB0aGlzLm9iai5wb3NpdGlvbi5jb3B5KG5ld1Bvc2l0aW9uKVxuICAgIGlmICh0aGlzLmdsb2JlLmdldE9iaigpLmdlb21ldHJ5LmJvdW5kaW5nU3BoZXJlLmNvbnRhaW5zUG9pbnQodGlwUG9zaXRpb24pKSB7XG4gICAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5nbG9iZS5nZXRSYWRpdXMoKVxuICAgICAgdGhpcy5kcm9wcGVkID0gdHJ1ZVxuICAgICAgdGhpcy5wdWxzZSA9IHRydWVcbiAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmNvcHkodGhpcy5maW5hbFBvc2l0aW9uKVxuICAgICAgZGVsZXRlIHRoaXMuZHJvcFN0YXJ0VGltZVxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVQdWxzZVJpbmdzICh0KSB7XG4gICAgaWYgKHRoaXMucHVsc2VSaW5ncy5sZW5ndGggPCAxICYmIHRoaXMucHVsc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUFVMU0VfQ09VTlQ7IGkrKykge1xuICAgICAgICB0aGlzLmNyZWF0ZVB1bHNlUmluZyhpICogUFVMU0VfSU5URVJWQUwpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5pbWF0ZVB1bHNlKHQpXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZSAoeyB0IH0pIHtcbiAgICBpZiAoIXRoaXMuZm9udEFkZGVkKSB0aGlzLnNldHVwVGV4dCgpXG4gICAgaWYgKCF0aGlzLmRyb3BwZWQpIHRoaXMuYW5pbWF0ZURyb3AodClcbiAgICBpZiAodGhpcy5kcm9wcGVkKSB7XG4gICAgICB0aGlzLnNldHVwQ2xpY2tMaXN0ZW5lcigpXG4gICAgICB0aGlzLmFuaW1hdGVQdWxzZVJpbmdzKHQpXG4gICAgfVxuICAgIGlmICh0aGlzLm1vdmVDYW1lcmEpIHRoaXMuYW5pbWF0ZUNhbWVyYSh0KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWVcbiAgICB0aGlzLm1hcmtlckNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKHRoaXMucHJvcHMubWFya2VyQ29sb3IpXG4gICAgdGhpcy5tYXJrZXJIaWdobGlnaHRDb2xvciA9IG5ldyBUSFJFRS5Db2xvcih0aGlzLnByb3BzLm1hcmtlckhpZ2hsaWdodENvbG9yKVxuICAgIHRoaXMuZm9udENvbG9yID0gbmV3IFRIUkVFLkNvbG9yKHRoaXMucHJvcHMuZm9udENvbG9yKVxuICAgIHRoaXMuZm9udEhpZ2hsaWdodENvbG9yID0gbmV3IFRIUkVFLkNvbG9yKHRoaXMucHJvcHMuZm9udEhpZ2hsaWdodENvbG9yKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IG1hcmtlckNvbG9yLCBtYXJrZXJIaWdobGlnaHRDb2xvciwgZm9udENvbG9yLCBmb250SGlnaGxpZ2h0Q29sb3IgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAocHJldlByb3BzLm1hcmtlckNvbG9yICE9PSBtYXJrZXJDb2xvcikge1xuICAgICAgdGhpcy5tYXJrZXJDb2xvci5zZXQobWFya2VyQ29sb3IpXG4gICAgICBpZiAoIXRoaXMuaGlnaGxpZ2h0ZWQpIHRoaXMucmVzZXRNYXJrZXJDb2xvcigpXG4gICAgfVxuICAgIGlmIChwcmV2UHJvcHMubWFya2VySGlnaGxpZ2h0Q29sb3IgIT09IG1hcmtlckhpZ2hsaWdodENvbG9yKSB7XG4gICAgICB0aGlzLm1hcmtlckhpZ2hsaWdodENvbG9yLnNldChtYXJrZXJIaWdobGlnaHRDb2xvcilcbiAgICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkKSB0aGlzLmhpZ2hsaWdodE1hcmtlcigpXG4gICAgfVxuICAgIGlmIChwcmV2UHJvcHMuZm9udENvbG9yICE9PSBmb250Q29sb3IpIHtcbiAgICAgIHRoaXMuZm9udENvbG9yLnNldChmb250Q29sb3IpXG4gICAgICBpZiAoIXRoaXMuaGlnaGxpZ2h0ZWQpIHRoaXMucmVzZXRNYXJrZXJDb2xvcigpXG4gICAgfVxuICAgIGlmIChwcmV2UHJvcHMuZm9udEhpZ2hsaWdodENvbG9yICE9PSBmb250SGlnaGxpZ2h0Q29sb3IpIHtcbiAgICAgIHRoaXMuZm9udEhpZ2hsaWdodENvbG9yLnNldChmb250SGlnaGxpZ2h0Q29sb3IpXG4gICAgICBpZiAodGhpcy5oaWdobGlnaHRlZCkgdGhpcy5oaWdobGlnaHRNYXJrZXIoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICAgIHRoaXMuY2xpY2thYmxlTWVzaCAmJiB0aGlzLmNsaWNrYWJsZU1lc2gucGFyZW50ICYmIHRoaXMuY2xpY2thYmxlTWVzaC5wYXJlbnQucmVtb3ZlKHRoaXMuY2xpY2thYmxlTWVzaClcbiAgICB0aGlzLmZvbnRNZXNoICYmIHRoaXMuZm9udE1lc2gucGFyZW50ICYmIHRoaXMuZm9udE1lc2gucGFyZW50LnJlbW92ZSh0aGlzLmZvbnRNZXNoKVxuICAgIHRoaXMucHVsc2VSaW5ncy5mb3JFYWNoKChwdWxzZVJpbmcpID0+IHtcbiAgICAgIHRoaXMub2JqLnBhcmVudC5yZW1vdmUocHVsc2VSaW5nKVxuICAgIH0pXG4gICAgdGhpcy5vYmogJiYgdGhpcy5vYmoucGFyZW50ICYmIHRoaXMub2JqLnBhcmVudC5yZW1vdmUodGhpcy5vYmopXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiJdfQ==