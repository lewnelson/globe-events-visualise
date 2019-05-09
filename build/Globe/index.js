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

var Globe =
/*#__PURE__*/
function (_Component) {
  _inherits(Globe, _Component);

  function Globe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Globe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Globe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.textureLoaded = function () {
      _this.texturesToLoad--;

      if (_this.texturesToLoad < 1 && _this.props.onTextured) {
        _this.props.onTextured();

        if (_this.props.initRotationPoints.length > 1) _this.startInitRotation();
      }
    };

    return _this;
  }

  _createClass(Globe, [{
    key: "initialise",
    value: function initialise(_ref) {
      var camera = _ref.camera;
      this.texturesToLoad = 1;
      if (this.props.bumpPath) this.texturesToLoad++;
      var geometry = new THREE.SphereGeometry(this.props.radius, 64, 64);
      var material = this.getMaterial(this.props.imagePath, this.props.bumpPath, this.textureLoaded);
      this.obj = new THREE.Mesh(geometry, material);
      this.origin = new THREE.Vector3();

      if (this.props.initRotationPoints.length > 0) {
        this.cameraDistance = new THREE.Line3(this.origin, camera.position).distance();
        camera.position.copy(this.getPositionFromLatLon(this.props.initRotationPoints[0].lat, this.props.initRotationPoints[0].lon));
        var raycaster = new THREE.Raycaster(this.origin, camera.position.clone().normalize());
        var initPos = this.origin.clone();
        raycaster.ray.at(this.cameraDistance, initPos);
        camera.position.copy(initPos);
        this.nextPositionIndex = 1;
        this.cameraVerticalRaycaster = new THREE.Raycaster();
      }
    }
  }, {
    key: "getMaterial",
    value: function getMaterial(imagePath, bumpPath) {
      var textureLoadedCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var textureLoader = new THREE.TextureLoader();
      var texture = textureLoader.load(imagePath, textureLoadedCallback);
      var material = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true
      });
      material.roughness = 1;

      if (bumpPath) {
        var bumpTextureLoader = new THREE.TextureLoader();
        var bumpTexture = bumpTextureLoader.load(bumpPath, textureLoadedCallback);
        material.bumpMap = bumpTexture;
        material.bumpScale = 0.8;
      }

      return material;
    }
  }, {
    key: "startInitRotation",
    value: function () {
      var _startInitRotation = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.props.onRotate();
                _context.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 3000);
                });

              case 3:
                this.moveCamera = true;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function startInitRotation() {
        return _startInitRotation.apply(this, arguments);
      }

      return startInitRotation;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          imagePath = _this$props.imagePath,
          bumpPath = _this$props.bumpPath;
      var newImagePath, newBumpPath;
      if (imagePath !== prevProps.imagePath) newImagePath = imagePath;
      if (bumpPath !== prevProps.bumpPath) newBumpPath = bumpPath;

      if (newImagePath || newBumpPath) {
        var material = this.getMaterial(newImagePath, newBumpPath);
        this.obj.material = material;
        material.needsUpdate = true;
      }
    }
  }, {
    key: "getPositionFromLatLon",
    value: function getPositionFromLatLon(lat, lon) {
      var radius = this.props.radius;
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
    key: "getDistanceFromLatLonInKm",
    value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km

      var dLat = this.deg2rad(lat2 - lat1); // deg2rad below

      var dLon = this.deg2rad(lon2 - lon1);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km

      return d;
    }
  }, {
    key: "deg2rad",
    value: function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
  }, {
    key: "getCameraAnimationTime",
    value: function getCameraAnimationTime() {
      var _this$props2 = this.props,
          initRotationPoints = _this$props2.initRotationPoints,
          initRotationAnimationDuration = _this$props2.initRotationAnimationDuration;
      var distance = this.getDistanceFromLatLonInKm(initRotationPoints[this.nextPositionIndex - 1].lat, initRotationPoints[this.nextPositionIndex - 1].lon, initRotationPoints[this.nextPositionIndex].lat, initRotationPoints[this.nextPositionIndex].lon);
      return distance / 1000 * initRotationAnimationDuration;
    }
  }, {
    key: "getCameraMoveDistance",
    value: function getCameraMoveDistance(dt) {
      dt /= this.cameraAnimationTime / 1000 / 2;
      if (dt < 1) return 1 / 2 * dt * dt;
      dt--;
      return -1 / 2 * (dt * (dt - 2) - 1);
    }
  }, {
    key: "animateCamera",
    value: function animateCamera(camera, t) {
      if (!this.moveCamera) return;
      if (!this.moveCameraTime) this.moveCameraTime = t;

      if (!this.cameraFinalPosition) {
        this.cameraAnimationTime = this.getCameraAnimationTime();
        var pos = this.getPositionFromLatLon(this.props.initRotationPoints[this.nextPositionIndex].lat, this.props.initRotationPoints[this.nextPositionIndex].lon);
        var raycaster = new THREE.Raycaster(this.origin, pos.normalize());

        var _finalPos = this.origin.clone();

        raycaster.ray.at(this.cameraDistance, _finalPos);
        this.cameraFinalPosition = _finalPos;
        this.cameraMoveLine = new THREE.Line3(camera.position.clone(), this.cameraFinalPosition.clone());
      }

      var dt = (t - this.moveCameraTime) / 1000;
      var moveDistance = this.getCameraMoveDistance(dt);
      var newPos = this.origin.clone();
      this.cameraMoveLine.at(moveDistance, newPos);
      this.cameraVerticalRaycaster.set(this.origin, newPos.clone().normalize());
      var finalPos = this.origin.clone();
      this.cameraVerticalRaycaster.ray.at(this.cameraDistance, finalPos);
      camera.position.set(finalPos.x, finalPos.y, finalPos.z);

      if (dt >= this.cameraAnimationTime / 1000) {
        this.cameraFinalPosition = null;
        this.cameraMoveLine = null;
        this.moveCameraTime = null;
        this.nextPositionIndex++;
        this.cameraAnimationTime = null;

        if (!this.props.initRotationPoints[this.nextPositionIndex]) {
          this.moveCamera = false;
          this.props.onRotateEnd();
        }
      }
    }
  }, {
    key: "animate",
    value: function animate(_ref2) {
      var scene = _ref2.scene,
          camera = _ref2.camera,
          t = _ref2.t;
      if (this.texturesToLoad > 0 && this.obj.parent) this.obj.parent.remove(this.obj);
      if (this.texturesToLoad < 1 && !this.obj.parent) scene.add(this.obj);
      this.animateCamera(camera, t);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.obj.parent && this.obj.parent.remove(this.obj);
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
    key: "getRadius",
    value: function getRadius() {
      return this.props.radius;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Globe;
}(_react.Component);

exports["default"] = Globe;
Globe.propTypes = {
  imagePath: _propTypes["default"].string.isRequired,
  bumpPath: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  radius: _propTypes["default"].number.isRequired,
  onTextured: _propTypes["default"].func,
  onRotate: _propTypes["default"].func.isRequired,
  onRotateEnd: _propTypes["default"].func.isRequired,
  initRotationAnimationDuration: _propTypes["default"].number,
  initRotationPoints: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    lat: _propTypes["default"].number.isRequired,
    lon: _propTypes["default"].number.isRequired
  }))
};
Globe.defaultProps = {
  // Per 1000km 
  initRotationAnimationDuration: 200,
  initRotationPoints: []
};