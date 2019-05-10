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
      this.controls.enableZoom = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TY2VuZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJDTElDS19USFJFU0hPTEQiLCJNSU5fRElTVEFOQ0UiLCJNQVhfRElTVEFOQ0UiLCJTY2VuZSIsInByb3BzIiwibW91c2VDbGlja0xpc3RlbmVyIiwiZSIsIl9pc01vdW50ZWQiLCJjbGlja0xpc3RlbmVyIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsIndpZHRoIiwidGFyZ2V0IiwiaGVpZ2h0IiwidG91Y2hTdGFydExpc3RlbmVyIiwidG91Y2hTdGFydFRpbWUiLCJEYXRlIiwibm93IiwidG91Y2hFbmRMaXN0ZW5lciIsImR0IiwidG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsIml0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJjbGllbnRZIiwiY29udHJvbHNFbmFibGVkIiwibW91c2UiLCJUSFJFRSIsIlZlY3RvcjIiLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJzZXRGcm9tQ2FtZXJhIiwiY2FtZXJhIiwiaW50ZXJzZWN0cyIsImludGVyc2VjdE9iamVjdHMiLCJzY2VuZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiaGFuZGxlciIsImdldENsaWNrSGFuZGxlckZvck9iaiIsIm9iamVjdCIsImFuaW1hdGUiLCJ1cGRhdGVDb250cm9sU3BlZWRzIiwiY29udHJvbHMiLCJ1cGRhdGUiLCJmcmFtZUlkIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2NlbmVSZWZzIiwiZm9yRWFjaCIsInJlZiIsInNjZW5lT2JqZWN0cyIsInQiLCJyZW5kZXJlciIsInJlbmRlciIsImFkZFJlZiIsImluaXRpYWxpc2VkIiwicmVmUXVldWUiLCJwdXNoIiwiZmlsdGVyIiwic2NlbmVSZWYiLCJpbml0aWFsaXNlIiwiYWRkIiwiZ2V0T2JqIiwicmVtb3ZlUmVmIiwiZGVzdHJveSIsInJlbW92ZSIsInJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0Iiwib2JqIiwiY2xpY2thYmxlT2JqZWN0cyIsInVucmVnaXN0ZXJDbGlja2FibGVPYmplY3QiLCJjIiwiY2FudmFzUmVmIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiY2FudmFzIiwiYW50aWFsaWFzIiwicG93ZXJQcmVmZXJlbmNlIiwiYWxwaGEiLCJnYW1tYUZhY3RvciIsImdhbW1hT3V0UHV0IiwiT3JiaXRDb250cm9scyIsImRvbUVsZW1lbnQiLCJpbml0aWFsaXNlT3JiaXRzIiwiaW5pdGlhbGlzZUNhbWVyYSIsIm1hcCIsInNldHVwQ2xpY2tMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInV1aWQiLCJzaGlmdCIsInRlYXJEb3duQ2xpY2tMaXN0ZW5lcnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsImVuYWJsZWQiLCJzZXRTaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImVuYWJsZVBhbiIsImVuYWJsZVpvb20iLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsInJvdGF0ZVNwZWVkIiwiem9vbVNwZWVkIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIm1heFBvbGFyQW5nbGUiLCJNYXRoIiwiUEkiLCJtaW5Qb2xhckFuZ2xlIiwicG9zaXRpb24iLCJ6IiwiaW5pdFpvb21MZXZlbCIsImNvbnRyb2xzQ29uZmlnIiwibWluWm9vbVNwZWVkIiwibWF4Wm9vbVNwZWVkIiwibWluUm90YXRlU3BlZWQiLCJtYXhSb3RhdGVTcGVlZCIsImRpc3RhbmNlIiwiZGlzdGFuY2VUbyIsIlZlY3RvcjMiLCJtdWx0aXBsaWVyIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImdldENoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJhbnkiLCJib29sIiwic2hhcGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLEdBQXhCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLEVBQXJCOztJQUVxQkMsSzs7Ozs7QUE4Qm5CLGlCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLCtFQUFNQSxLQUFOOztBQURrQixVQTZCcEJDLGtCQTdCb0IsR0E2QkMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFCLFVBQUksQ0FBQyxNQUFLQyxVQUFWLEVBQXNCOztBQUN0QixZQUFLQyxhQUFMLENBQW1CO0FBQUVDLFFBQUFBLENBQUMsRUFBRUgsQ0FBQyxDQUFDSSxPQUFQO0FBQWdCQyxRQUFBQSxDQUFDLEVBQUVMLENBQUMsQ0FBQ00sT0FBckI7QUFBOEJDLFFBQUFBLEtBQUssRUFBRVAsQ0FBQyxDQUFDUSxNQUFGLENBQVNELEtBQTlDO0FBQXFERSxRQUFBQSxNQUFNLEVBQUVULENBQUMsQ0FBQ1EsTUFBRixDQUFTQztBQUF0RSxPQUFuQjtBQUNELEtBaENtQjs7QUFBQSxVQWtDcEJDLGtCQWxDb0IsR0FrQ0MsVUFBQ1YsQ0FBRCxFQUFPO0FBQzFCLFVBQUksQ0FBQyxNQUFLQyxVQUFWLEVBQXNCO0FBQ3RCLFlBQUtVLGNBQUwsR0FBc0JDLElBQUksQ0FBQ0MsR0FBTCxFQUF0QjtBQUNELEtBckNtQjs7QUFBQSxVQXVDcEJDLGdCQXZDb0IsR0F1Q0QsVUFBQ2QsQ0FBRCxFQUFPO0FBQ3hCLFVBQUksQ0FBQyxNQUFLVyxjQUFOLElBQXdCLENBQUMsTUFBS1YsVUFBbEMsRUFBOEM7O0FBQzlDLFVBQU1jLEVBQUUsR0FBR0gsSUFBSSxDQUFDQyxHQUFMLEtBQWEsTUFBS0YsY0FBN0I7O0FBQ0EsVUFBSUksRUFBRSxJQUFJ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QyxNQUpBO0FBS2pCNUgsRUFBQUEsTUFBTSxFQUFFMkgsc0JBQVVDLE1BTEQ7QUFNakJsRyxFQUFBQSxRQUFRLEVBQUVpRyxzQkFBVUUsR0FOSDtBQU9qQjlHLEVBQUFBLGVBQWUsRUFBRTRHLHNCQUFVRyxJQVBWO0FBUWpCcEIsRUFBQUEsY0FBYyxFQUFFaUIsc0JBQVVJLEtBQVYsQ0FBZ0I7QUFDOUJwQixJQUFBQSxZQUFZLEVBQUVnQixzQkFBVUMsTUFETTtBQUU5QmhCLElBQUFBLFlBQVksRUFBRWUsc0JBQVVDLE1BRk07QUFHOUJmLElBQUFBLGNBQWMsRUFBRWMsc0JBQVVDLE1BSEk7QUFJOUJkLElBQUFBLGNBQWMsRUFBRWEsc0JBQVVDO0FBSkksR0FBaEI7QUFSQyxDO0FBREF4SSxLLENBaUJaNEksWSxHQUFlO0FBQ3BCdkIsRUFBQUEsYUFBYSxFQUFFLEdBREs7QUFFcEIzRyxFQUFBQSxLQUFLLEVBQUUsR0FGYTtBQUdwQkUsRUFBQUEsTUFBTSxFQUFFLEdBSFk7QUFJcEJlLEVBQUFBLGVBQWUsRUFBRSxJQUpHO0FBS3BCMkYsRUFBQUEsY0FBYyxFQUFFO0FBQ2RDLElBQUFBLFlBQVksRUFBRSxJQURBO0FBRWRDLElBQUFBLFlBQVksRUFBRSxHQUZBO0FBR2RDLElBQUFBLGNBQWMsRUFBRSxHQUhGO0FBSWRDLElBQUFBLGNBQWMsRUFBRTtBQUpGO0FBTEksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgRnJhZ21lbnQsIENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IE9yYml0Q29udHJvbHMgZnJvbSAndGhyZWUtb3JiaXRjb250cm9scydcblxuY29uc3QgQ0xJQ0tfVEhSRVNIT0xEID0gMTMwXG5cbmNvbnN0IE1JTl9ESVNUQU5DRSA9IDM1XG5jb25zdCBNQVhfRElTVEFOQ0UgPSA5MFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5pdFpvb21MZXZlbDogKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA8IDAgfHwgcHJvcHNbcHJvcE5hbWVdID4gMSkgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCB2YWx1ZSAke3Byb3BzW3Byb3BOYW1lXX0gZm9yICR7cHJvcE5hbWV9IGZvciAke2NvbXBvbmVudE5hbWV9LiBWYWx1ZSBmb3IgJHtwcm9wTmFtZX0gZm9yIGNvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9IG11c3QgYmUgYSBmbG9hdGluZyBwb2ludCBiZXR3ZWVuIDAgYW5kIDEgaW5jbHVzaXZlYClcbiAgICB9LFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICBjb250cm9sc0VuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNvbnRyb2xzQ29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWluWm9vbVNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWF4Wm9vbVNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWluUm90YXRlU3BlZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXhSb3RhdGVTcGVlZDogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGluaXRab29tTGV2ZWw6IDAuOCxcbiAgICB3aWR0aDogNjAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSxcbiAgICBjb250cm9sc0NvbmZpZzoge1xuICAgICAgbWluWm9vbVNwZWVkOiAwLjAzLFxuICAgICAgbWF4Wm9vbVNwZWVkOiAwLjUsXG4gICAgICBtaW5Sb3RhdGVTcGVlZDogMC4yLFxuICAgICAgbWF4Um90YXRlU3BlZWQ6IDEuMFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY2FudmFzUmVmID0gY3JlYXRlUmVmKClcbiAgICB0aGlzLnNjZW5lUmVmcyA9IFtdXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZRdWV1ZSA9IFtdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxuICAgIGNvbnN0IHsgY2FudmFzUmVmIH0gPSB0aGlzXG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXNSZWYuY3VycmVudC5jbGllbnRXaWR0aFxuICAgIGNvbnN0IGhlaWdodCA9IGNhbnZhc1JlZi5jdXJyZW50LmNsaWVudEhlaWdodFxuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXNSZWYuY3VycmVudCwgYW50aWFsaWFzOiB0cnVlLCBwb3dlclByZWZlcmVuY2U6ICdoaWdoLXBlcmZvcm1hbmNlJywgYWxwaGE6IHRydWUgfSlcbiAgICB0aGlzLnJlbmRlcmVyLmdhbW1hRmFjdG9yID0gMi4yXG4gICAgdGhpcy5yZW5kZXJlci5nYW1tYU91dFB1dCA9IHRydWVcbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICB0aGlzLmluaXRpYWxpc2VPcmJpdHMoKVxuICAgIHRoaXMuaW5pdGlhbGlzZUNhbWVyYSgpXG4gICAgdGhpcy5hbmltYXRlKClcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZVxuICAgIHRoaXMucmVmUXVldWUubWFwKHRoaXMuYWRkUmVmKVxuICAgIHRoaXMucmVmUXVldWUgPSBbXVxuICAgIHRoaXMuc2V0dXBDbGlja0xpc3RlbmVycygpXG4gIH1cblxuICBtb3VzZUNsaWNrTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIoeyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSwgd2lkdGg6IGUudGFyZ2V0LndpZHRoLCBoZWlnaHQ6IGUudGFyZ2V0LmhlaWdodCB9KVxuICB9XG5cbiAgdG91Y2hTdGFydExpc3RlbmVyID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuXG4gICAgdGhpcy50b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgfVxuXG4gIHRvdWNoRW5kTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy50b3VjaFN0YXJ0VGltZSB8fCAhdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICBjb25zdCBkdCA9IERhdGUubm93KCkgLSB0aGlzLnRvdWNoU3RhcnRUaW1lXG4gICAgaWYgKGR0IDw9IENMSUNLX1RIUkVTSE9MRCkge1xuICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzLml0ZW0oMClcbiAgICAgIGlmICghdG91Y2gpIHJldHVyblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBib3VuZGluZ1JlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgdGhpcy5jbGlja0xpc3RlbmVyKHsgeDogdG91Y2guY2xpZW50WCAtIGJvdW5kaW5nUmVjdC54LCB5OiB0b3VjaC5jbGllbnRZIC0gYm91bmRpbmdSZWN0LnksIHdpZHRoOiBlLnRhcmdldC53aWR0aCwgaGVpZ2h0OiBlLnRhcmdldC5oZWlnaHQgfSlcbiAgICB9XG4gIH1cblxuICBzZXR1cENsaWNrTGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNsaWNrYWJsZU9iamVjdHMgPSBbXVxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubW91c2VDbGlja0xpc3RlbmVyKVxuXG4gICAgLy8gT3JiaXQgY29udHJvbHMgaXMgcHJldmVudGluZyB0b3VjaCBkZXZpY2VzIGZyb20gdXNpbmcgdGhlIGBjbGlja2AgZXZlbnRcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hTdGFydExpc3RlbmVyKVxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmRMaXN0ZW5lcilcbiAgfVxuXG4gIHRlYXJEb3duQ2xpY2tMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubW91c2VDbGlja0xpc3RlbmVyKVxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaFN0YXJ0TGlzdGVuZXIpXG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaEVuZExpc3RlbmVyKVxuICB9XG5cbiAgZ2V0Q2xpY2tIYW5kbGVyRm9yT2JqIChvYmopIHtcbiAgICByZXR1cm4gKHRoaXMuY2xpY2thYmxlT2JqZWN0cy5maWx0ZXIoYyA9PiBjLm9iai51dWlkID09PSBvYmoudXVpZCkuc2hpZnQoKSB8fCB7fSkuaGFuZGxlclxuICB9XG5cbiAgY2xpY2tMaXN0ZW5lciA9ICh7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5jb250cm9sc0VuYWJsZWQpIHJldHVyblxuICAgIGNvbnN0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoeCwgeSlcbiAgICBtb3VzZS54ID0gKHggLyB3aWR0aCkgKiAyIC0gMVxuICAgIG1vdXNlLnkgPSAtKHkgLyBoZWlnaHQpICogMiArIDFcbiAgICBjb25zdCByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKClcbiAgICByYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShtb3VzZSwgdGhpcy5jYW1lcmEpXG4gICAgY29uc3QgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMuc2NlbmUuY2hpbGRyZW4sIHRydWUpXG4gICAgLy8gT25seSBpbnRlcmVzdGVkIGluIHRoZSBjbG9zZXN0IG9iamVjdCwgd2UgZG9uJ3Qgd2FudCB0byBjbGljayB0aHJvdWdoIG9iamVjdHNcbiAgICBpZiAoaW50ZXJzZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5nZXRDbGlja0hhbmRsZXJGb3JPYmooaW50ZXJzZWN0c1swXS5vYmplY3QpXG4gICAgICBoYW5kbGVyICYmIGhhbmRsZXIoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICAgIHRoaXMudGVhckRvd25DbGlja0xpc3RlbmVycygpXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZWQgPSB0aGlzLnByb3BzLmNvbnRyb2xzRW5hYmxlZFxuICAgIGlmICh0aGlzLnByb3BzLndpZHRoICE9PSBwcmV2UHJvcHMud2lkdGggfHwgdGhpcy5wcm9wcy5oZWlnaHQgIT09IHByZXZQcm9wcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnByb3BzLndpZHRoLCB0aGlzLnByb3BzLmhlaWdodClcbiAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHRoaXMucHJvcHMud2lkdGggLyB0aGlzLnByb3BzLmhlaWdodFxuICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZU9yYml0cyAoKSB7XG4gICAgdGhpcy5jb250cm9scy5lbmFibGVkID0gdGhpcy5wcm9wcy5jb250cm9sc0VuYWJsZWRcbiAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVBhbiA9IGZhbHNlXG4gICAgdGhpcy5jb250cm9scy5lbmFibGVab29tID0gZmFsc2VcbiAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZURhbXBpbmcgPSB0cnVlXG4gICAgdGhpcy5jb250cm9scy5kYW1waW5nRmFjdG9yID0gMS42XG4gICAgdGhpcy5jb250cm9scy5yb3RhdGVTcGVlZCA9IDEuMFxuICAgIHRoaXMuY29udHJvbHMuem9vbVNwZWVkID0gMC41XG4gICAgdGhpcy5jb250cm9scy5taW5EaXN0YW5jZSA9IE1JTl9ESVNUQU5DRVxuICAgIHRoaXMuY29udHJvbHMubWF4RGlzdGFuY2UgPSBNQVhfRElTVEFOQ0VcbiAgICB0aGlzLmNvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJIC0gKChNYXRoLlBJIC8gMTgwKSAqIDUpXG4gICAgdGhpcy5jb250cm9scy5taW5Qb2xhckFuZ2xlID0gKE1hdGguUEkgLyAxODApICogNVxuICB9XG5cbiAgaW5pdGlhbGlzZUNhbWVyYSAoKSB7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDBcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMFxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSBNSU5fRElTVEFOQ0UgKyAoKE1BWF9ESVNUQU5DRSAtIE1JTl9ESVNUQU5DRSkgKiB0aGlzLnByb3BzLmluaXRab29tTGV2ZWwpXG4gIH1cblxuICB1cGRhdGVDb250cm9sU3BlZWRzICgpIHtcbiAgICBjb25zdCB7IG1pblpvb21TcGVlZCwgbWF4Wm9vbVNwZWVkLCBtaW5Sb3RhdGVTcGVlZCwgbWF4Um90YXRlU3BlZWQgfSA9IHRoaXMucHJvcHMuY29udHJvbHNDb25maWdcbiAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjMoKSlcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gKGRpc3RhbmNlIC0gdGhpcy5jb250cm9scy5taW5EaXN0YW5jZSkgLyAodGhpcy5jb250cm9scy5tYXhEaXN0YW5jZSAtIHRoaXMuY29udHJvbHMubWluRGlzdGFuY2UpXG4gICAgY29uc3Qgem9vbVNwZWVkID0gbWluWm9vbVNwZWVkICsgKG11bHRpcGxpZXIgKiAobWF4Wm9vbVNwZWVkIC0gbWluWm9vbVNwZWVkKSlcbiAgICBjb25zdCByb3RhdGVTcGVlZCA9IG1pblJvdGF0ZVNwZWVkICsgKG11bHRpcGxpZXIgKiAobWF4Um90YXRlU3BlZWQgLSBtaW5Sb3RhdGVTcGVlZCkpXG4gICAgdGhpcy5jb250cm9scy56b29tU3BlZWQgPSB6b29tU3BlZWRcbiAgICB0aGlzLmNvbnRyb2xzLnJvdGF0ZVNwZWVkID0gcm90YXRlU3BlZWRcbiAgfVxuXG4gIGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIHRoaXMudXBkYXRlQ29udHJvbFNwZWVkcygpXG4gICAgdGhpcy5jb250cm9scy51cGRhdGUoKVxuICAgIHRoaXMuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgIHRoaXMuc2NlbmVSZWZzLmZvckVhY2gocmVmID0+IHJlZi5hbmltYXRlICYmIHJlZi5hbmltYXRlKHsgc2NlbmU6IHRoaXMuc2NlbmUsIHNjZW5lT2JqZWN0czogdGhpcy5zY2VuZVJlZnMsIGNhbWVyYTogdGhpcy5jYW1lcmEsIHQ6IG5vdyB9KSlcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSlcbiAgfVxuXG4gIGFkZFJlZiA9IChyZWYpID0+IHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHJldHVybiB0aGlzLnJlZlF1ZXVlLnB1c2gocmVmKVxuICAgIGlmICghcmVmKSByZXR1cm5cbiAgICBpZiAodGhpcy5zY2VuZVJlZnMuZmlsdGVyKHNjZW5lUmVmID0+IHNjZW5lUmVmID09PSByZWYpLmxlbmd0aCA+IDApIHJldHVyblxuICAgIHRoaXMuc2NlbmVSZWZzLnB1c2gocmVmKVxuICAgIHJlZi5pbml0aWFsaXNlICYmIHJlZi5pbml0aWFsaXNlKHsgc2NlbmVPYmplY3RzOiB0aGlzLnNjZW5lUmVmcywgY2FtZXJhOiB0aGlzLmNhbWVyYSwgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIgfSlcbiAgICB0aGlzLnNjZW5lLmFkZChyZWYuZ2V0T2JqKCkpXG4gIH1cblxuICByZW1vdmVSZWYgPSAocmVmKSA9PiB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSByZXR1cm5cbiAgICBpZiAoIXJlZikgcmV0dXJuXG4gICAgaWYgKHRoaXMuc2NlbmVSZWZzLmZpbHRlcihzY2VuZVJlZiA9PiBzY2VuZVJlZiA9PT0gcmVmKS5sZW5ndGggPiAwKSByZXR1cm5cbiAgICB0aGlzLnNjZW5lUmVmcyA9IHRoaXMuc2NlbmVSZWZzLmZpbHRlcihzY2VuZVJlZiA9PiBzY2VuZVJlZiAhPT0gcmVmKVxuICAgIHJlZi5kZXN0cm95ICYmIHJlZi5kZXN0cm95KHsgc2NlbmVPYmplY3RzOiB0aGlzLnNjZW5lUmVmcywgY2FtZXJhOiB0aGlzLmNhbWVyYSB9KVxuICAgIHRoaXMuc2NlbmUucmVtb3ZlKHJlZi5nZXRPYmooKSlcbiAgfVxuXG4gIHJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0ID0gKG9iaiwgaGFuZGxlcikgPT4ge1xuICAgIGlmICghdGhpcy5nZXRDbGlja0hhbmRsZXJGb3JPYmoob2JqKSkge1xuICAgICAgdGhpcy5jbGlja2FibGVPYmplY3RzLnB1c2goeyBvYmosIGhhbmRsZXIgfSlcbiAgICB9XG4gIH1cblxuICB1bnJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0ID0gKG9iaiwgaGFuZGxlcikgPT4ge1xuICAgIHRoaXMuY2xpY2thYmxlT2JqZWN0cyA9IHRoaXMuY2xpY2thYmxlT2JqZWN0cy5maWx0ZXIoYyA9PiAhKGMub2JqID09PSBvYmogJiYgYy5oYW5kbGVyID09PSBoYW5kbGVyKSlcbiAgfVxuXG4gIGdldENoaWxkcmVuICgpIHtcbiAgICByZXR1cm4gQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghY2hpbGQpIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHJlZjogcmVmID0+IHRoaXMuYWRkUmVmKHJlZiksXG4gICAgICAgIHJlbW92ZVJlZjogcmVmID0+IHRoaXMucmVtb3ZlUmVmKHJlZiksXG4gICAgICAgIHJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0OiB0aGlzLnJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0LFxuICAgICAgICB1bnJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0OiB0aGlzLnVucmVnaXN0ZXJDbGlja2FibGVPYmplY3RcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGNhbnZhcyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSByZWY9e3RoaXMuY2FudmFzUmVmfSAvPlxuICAgICAgICB7dGhpcy5nZXRDaGlsZHJlbigpfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cbiJdfQ==