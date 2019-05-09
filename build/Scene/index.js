"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var THREE = _interopRequireWildcard(require("three"));

var _threeOrbitcontrols = _interopRequireDefault(require("three-orbitcontrols"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CLICK_THRESHOLD = 130;
var MIN_DISTANCE = 35;
var MAX_DISTANCE = 90;

var Scene =
/*#__PURE__*/
function (_Component) {
  _inherits(Scene, _Component);

  function Scene(props) {
    var _this;

    _classCallCheck(this, Scene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this, props));

    _this.mouseClickListener = function (e) {
      if (!_this._isMounted) return;

      _this.clickListener({
        x: e.offsetX,
        y: e.offsetY,
        width: e.target.width,
        height: e.target.height
      });
    };

    _this.touchStartListener = function (e) {
      if (!_this._isMounted) return;
      _this.touchStartTime = Date.now();
    };

    _this.touchEndListener = function (e) {
      if (!_this.touchStartTime || !_this._isMounted) return;

      var dt = Date.now() - _this.touchStartTime;

      if (dt <= CLICK_THRESHOLD) {
        var touch = e.changedTouches.item(0);
        if (!touch) return;
        e.preventDefault();
        var boundingRect = e.target.getBoundingClientRect();

        _this.clickListener({
          x: touch.clientX - boundingRect.x,
          y: touch.clientY - boundingRect.y,
          width: e.target.width,
          height: e.target.height
        });
      }
    };

    _this.clickListener = function (_ref) {
      var x = _ref.x,
          y = _ref.y,
          width = _ref.width,
          height = _ref.height;
      if (!_this.props.controlsEnabled) return;
      var mouse = new THREE.Vector2(x, y);
      mouse.x = x / width * 2 - 1;
      mouse.y = -(y / height) * 2 + 1;
      var raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, _this.camera);
      var intersects = raycaster.intersectObjects(_this.scene.children, true); // Only interested in the closest object, we don't want to click through objects

      if (intersects.length > 0) {
        var handler = _this.getClickHandlerForObj(intersects[0].object);

        handler && handler();
      }
    };

    _this.animate = function () {
      var now = Date.now();

      _this.updateControlSpeeds();

      _this.controls.update();

      _this.frameId = window.requestAnimationFrame(_this.animate);

      _this.sceneRefs.forEach(function (ref) {
        return ref.animate && ref.animate({
          scene: _this.scene,
          sceneObjects: _this.sceneRefs,
          camera: _this.camera,
          t: now
        });
      });

      _this.renderer.render(_this.scene, _this.camera);
    };

    _this.addRef = function (ref) {
      if (!_this.initialised) return _this.refQueue.push(ref);
      if (!ref) return;
      if (_this.sceneRefs.filter(function (sceneRef) {
        return sceneRef === ref;
      }).length > 0) return;

      _this.sceneRefs.push(ref);

      ref.initialise && ref.initialise({
        sceneObjects: _this.sceneRefs,
        camera: _this.camera,
        renderer: _this.renderer
      });

      _this.scene.add(ref.getObj());
    };

    _this.removeRef = function (ref) {
      if (!_this.initialised) return;
      if (!ref) return;
      if (_this.sceneRefs.filter(function (sceneRef) {
        return sceneRef === ref;
      }).length > 0) return;
      _this.sceneRefs = _this.sceneRefs.filter(function (sceneRef) {
        return sceneRef !== ref;
      });
      ref.destroy && ref.destroy({
        sceneObjects: _this.sceneRefs,
        camera: _this.camera
      });

      _this.scene.remove(ref.getObj());
    };

    _this.registerClickableObject = function (obj, handler) {
      if (!_this.getClickHandlerForObj(obj)) {
        _this.clickableObjects.push({
          obj: obj,
          handler: handler
        });
      }
    };

    _this.unregisterClickableObject = function (obj, handler) {
      _this.clickableObjects = _this.clickableObjects.filter(function (c) {
        return !(c.obj === obj && c.handler === handler);
      });
    };

    _this.canvasRef = (0, _react.createRef)();
    _this.sceneRefs = [];
    _this.initialised = false;
    _this.refQueue = [];
    return _this;
  }

  _createClass(Scene, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var canvasRef = this.canvasRef;
      var width = canvasRef.current.clientWidth;
      var height = canvasRef.current.clientHeight;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        powerPreference: 'high-performance',
        alpha: true
      });
      this.renderer.gammaFactor = 2.2;
      this.renderer.gammaOutPut = true;
      this.controls = new _threeOrbitcontrols["default"](this.camera, this.renderer.domElement);
      this.initialiseOrbits();
      this.initialiseCamera();
      this.animate();
      this.initialised = true;
      this.refQueue.map(this.addRef);
      this.refQueue = [];
      this.setupClickListeners();
    }
  }, {
    key: "setupClickListeners",
    value: function setupClickListeners() {
      this.clickableObjects = [];
      this.renderer.domElement.addEventListener('click', this.mouseClickListener); // Orbit controls is preventing touch devices from using the `click` event

      this.renderer.domElement.addEventListener('touchstart', this.touchStartListener);
      this.renderer.domElement.addEventListener('touchend', this.touchEndListener);
    }
  }, {
    key: "tearDownClickListeners",
    value: function tearDownClickListeners() {
      this.renderer.domElement.removeEventListener('click', this.mouseClickListener);
      this.renderer.domElement.removeEventListener('touchstart', this.touchStartListener);
      this.renderer.domElement.removeEventListener('touchend', this.touchEndListener);
    }
  }, {
    key: "getClickHandlerForObj",
    value: function getClickHandlerForObj(obj) {
      return (this.clickableObjects.filter(function (c) {
        return c.obj.uuid === obj.uuid;
      }).shift() || {}).handler;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.tearDownClickListeners();
      cancelAnimationFrame(this.frameId);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.controls.enabled = this.props.controlsEnabled;

      if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
        this.renderer.setSize(this.props.width, this.props.height);
        this.camera.aspect = this.props.width / this.props.height;
        this.camera.updateProjectionMatrix();
      }
    }
  }, {
    key: "initialiseOrbits",
    value: function initialiseOrbits() {
      this.controls.enabled = this.props.controlsEnabled;
      this.controls.enablePan = false;
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 1.6;
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 0.5;
      this.controls.minDistance = MIN_DISTANCE;
      this.controls.maxDistance = MAX_DISTANCE;
      this.controls.maxPolarAngle = Math.PI - Math.PI / 180 * 5;
      this.controls.minPolarAngle = Math.PI / 180 * 5;
    }
  }, {
    key: "initialiseCamera",
    value: function initialiseCamera() {
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      this.camera.position.z = MIN_DISTANCE + (MAX_DISTANCE - MIN_DISTANCE) * this.props.initZoomLevel;
    }
  }, {
    key: "updateControlSpeeds",
    value: function updateControlSpeeds() {
      var _this$props$controlsC = this.props.controlsConfig,
          minZoomSpeed = _this$props$controlsC.minZoomSpeed,
          maxZoomSpeed = _this$props$controlsC.maxZoomSpeed,
          minRotateSpeed = _this$props$controlsC.minRotateSpeed,
          maxRotateSpeed = _this$props$controlsC.maxRotateSpeed;
      var distance = this.camera.position.distanceTo(new THREE.Vector3());
      var multiplier = (distance - this.controls.minDistance) / (this.controls.maxDistance - this.controls.minDistance);
      var zoomSpeed = minZoomSpeed + multiplier * (maxZoomSpeed - minZoomSpeed);
      var rotateSpeed = minRotateSpeed + multiplier * (maxRotateSpeed - minRotateSpeed);
      this.controls.zoomSpeed = zoomSpeed;
      this.controls.rotateSpeed = rotateSpeed;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var _this2 = this;

      return _react.Children.map(this.props.children, function (child) {
        if (!child) return null;
        return (0, _react.cloneElement)(child, {
          ref: function ref(_ref2) {
            return _this2.addRef(_ref2);
          },
          removeRef: function removeRef(ref) {
            return _this2.removeRef(ref);
          },
          registerClickableObject: _this2.registerClickableObject,
          unregisterClickableObject: _this2.unregisterClickableObject
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("canvas", {
        width: width,
        height: height,
        ref: this.canvasRef
      }), this.getChildren());
    }
  }]);

  return Scene;
}(_react.Component);

exports["default"] = Scene;
Scene.propTypes = {
  initZoomLevel: function initZoomLevel(props, propName, componentName) {
    if (props[propName] < 0 || props[propName] > 1) return new Error("Invalid value ".concat(props[propName], " for ").concat(propName, " for ").concat(componentName, ". Value for ").concat(propName, " for component ").concat(componentName, " must be a floating point between 0 and 1 inclusive"));
  },
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  children: _propTypes["default"].any,
  controlsEnabled: _propTypes["default"].bool,
  controlsConfig: _propTypes["default"].shape({
    minZoomSpeed: _propTypes["default"].number,
    maxZoomSpeed: _propTypes["default"].number,
    minRotateSpeed: _propTypes["default"].number,
    maxRotateSpeed: _propTypes["default"].number
  })
};
Scene.defaultProps = {
  initZoomLevel: 0.8,
  width: 600,
  height: 600,
  controlsEnabled: true,
  controlsConfig: {
    minZoomSpeed: 0.03,
    maxZoomSpeed: 0.5,
    minRotateSpeed: 0.2,
    maxRotateSpeed: 1.0
  }
};