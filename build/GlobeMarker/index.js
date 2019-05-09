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