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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TY2VuZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJDTElDS19USFJFU0hPTEQiLCJNSU5fRElTVEFOQ0UiLCJNQVhfRElTVEFOQ0UiLCJTY2VuZSIsInByb3BzIiwibW91c2VDbGlja0xpc3RlbmVyIiwiZSIsIl9pc01vdW50ZWQiLCJjbGlja0xpc3RlbmVyIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsIndpZHRoIiwidGFyZ2V0IiwiaGVpZ2h0IiwidG91Y2hTdGFydExpc3RlbmVyIiwidG91Y2hTdGFydFRpbWUiLCJEYXRlIiwibm93IiwidG91Y2hFbmRMaXN0ZW5lciIsImR0IiwidG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsIml0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJjbGllbnRZIiwiY29udHJvbHNFbmFibGVkIiwibW91c2UiLCJUSFJFRSIsIlZlY3RvcjIiLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJzZXRGcm9tQ2FtZXJhIiwiY2FtZXJhIiwiaW50ZXJzZWN0cyIsImludGVyc2VjdE9iamVjdHMiLCJzY2VuZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiaGFuZGxlciIsImdldENsaWNrSGFuZGxlckZvck9iaiIsIm9iamVjdCIsImFuaW1hdGUiLCJ1cGRhdGVDb250cm9sU3BlZWRzIiwiY29udHJvbHMiLCJ1cGRhdGUiLCJmcmFtZUlkIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2NlbmVSZWZzIiwiZm9yRWFjaCIsInJlZiIsInNjZW5lT2JqZWN0cyIsInQiLCJyZW5kZXJlciIsInJlbmRlciIsImFkZFJlZiIsImluaXRpYWxpc2VkIiwicmVmUXVldWUiLCJwdXNoIiwiZmlsdGVyIiwic2NlbmVSZWYiLCJpbml0aWFsaXNlIiwiYWRkIiwiZ2V0T2JqIiwicmVtb3ZlUmVmIiwiZGVzdHJveSIsInJlbW92ZSIsInJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0Iiwib2JqIiwiY2xpY2thYmxlT2JqZWN0cyIsInVucmVnaXN0ZXJDbGlja2FibGVPYmplY3QiLCJjIiwiY2FudmFzUmVmIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJXZWJHTFJlbmRlcmVyIiwiY2FudmFzIiwiYW50aWFsaWFzIiwicG93ZXJQcmVmZXJlbmNlIiwiYWxwaGEiLCJnYW1tYUZhY3RvciIsImdhbW1hT3V0UHV0IiwiT3JiaXRDb250cm9scyIsImRvbUVsZW1lbnQiLCJpbml0aWFsaXNlT3JiaXRzIiwiaW5pdGlhbGlzZUNhbWVyYSIsIm1hcCIsInNldHVwQ2xpY2tMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInV1aWQiLCJzaGlmdCIsInRlYXJEb3duQ2xpY2tMaXN0ZW5lcnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsImVuYWJsZWQiLCJzZXRTaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImVuYWJsZVBhbiIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwicm90YXRlU3BlZWQiLCJ6b29tU3BlZWQiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwibWF4UG9sYXJBbmdsZSIsIk1hdGgiLCJQSSIsIm1pblBvbGFyQW5nbGUiLCJwb3NpdGlvbiIsInoiLCJpbml0Wm9vbUxldmVsIiwiY29udHJvbHNDb25maWciLCJtaW5ab29tU3BlZWQiLCJtYXhab29tU3BlZWQiLCJtaW5Sb3RhdGVTcGVlZCIsIm1heFJvdGF0ZVNwZWVkIiwiZGlzdGFuY2UiLCJkaXN0YW5jZVRvIiwiVmVjdG9yMyIsIm11bHRpcGxpZXIiLCJDaGlsZHJlbiIsImNoaWxkIiwiZ2V0Q2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJFcnJvciIsIlBy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QUFBQSxRQUFRLEVBQUVnRyxzQkFBVUUsR0FOSDtBQU9qQjdHLEVBQUFBLGVBQWUsRUFBRTJHLHNCQUFVRyxJQVBWO0FBUWpCcEIsRUFBQUEsY0FBYyxFQUFFaUIsc0JBQVVJLEtBQVYsQ0FBZ0I7QUFDOUJwQixJQUFBQSxZQUFZLEVBQUVnQixzQkFBVUMsTUFETTtBQUU5QmhCLElBQUFBLFlBQVksRUFBRWUsc0JBQVVDLE1BRk07QUFHOUJmLElBQUFBLGNBQWMsRUFBRWMsc0JBQVVDLE1BSEk7QUFJOUJkLElBQUFBLGNBQWMsRUFBRWEsc0JBQVVDO0FBSkksR0FBaEI7QUFSQyxDO0FBREF2SSxLLENBaUJaMkksWSxHQUFlO0FBQ3BCdkIsRUFBQUEsYUFBYSxFQUFFLEdBREs7QUFFcEIxRyxFQUFBQSxLQUFLLEVBQUUsR0FGYTtBQUdwQkUsRUFBQUEsTUFBTSxFQUFFLEdBSFk7QUFJcEJlLEVBQUFBLGVBQWUsRUFBRSxJQUpHO0FBS3BCMEYsRUFBQUEsY0FBYyxFQUFFO0FBQ2RDLElBQUFBLFlBQVksRUFBRSxJQURBO0FBRWRDLElBQUFBLFlBQVksRUFBRSxHQUZBO0FBR2RDLElBQUFBLGNBQWMsRUFBRSxHQUhGO0FBSWRDLElBQUFBLGNBQWMsRUFBRTtBQUpGO0FBTEksQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgRnJhZ21lbnQsIENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IE9yYml0Q29udHJvbHMgZnJvbSAndGhyZWUtb3JiaXRjb250cm9scydcblxuY29uc3QgQ0xJQ0tfVEhSRVNIT0xEID0gMTMwXG5cbmNvbnN0IE1JTl9ESVNUQU5DRSA9IDM1XG5jb25zdCBNQVhfRElTVEFOQ0UgPSA5MFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5pdFpvb21MZXZlbDogKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA8IDAgfHwgcHJvcHNbcHJvcE5hbWVdID4gMSkgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCB2YWx1ZSAke3Byb3BzW3Byb3BOYW1lXX0gZm9yICR7cHJvcE5hbWV9IGZvciAke2NvbXBvbmVudE5hbWV9LiBWYWx1ZSBmb3IgJHtwcm9wTmFtZX0gZm9yIGNvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9IG11c3QgYmUgYSBmbG9hdGluZyBwb2ludCBiZXR3ZWVuIDAgYW5kIDEgaW5jbHVzaXZlYClcbiAgICB9LFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICBjb250cm9sc0VuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNvbnRyb2xzQ29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWluWm9vbVNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWF4Wm9vbVNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWluUm90YXRlU3BlZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXhSb3RhdGVTcGVlZDogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGluaXRab29tTGV2ZWw6IDAuOCxcbiAgICB3aWR0aDogNjAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSxcbiAgICBjb250cm9sc0NvbmZpZzoge1xuICAgICAgbWluWm9vbVNwZWVkOiAwLjAzLFxuICAgICAgbWF4Wm9vbVNwZWVkOiAwLjUsXG4gICAgICBtaW5Sb3RhdGVTcGVlZDogMC4yLFxuICAgICAgbWF4Um90YXRlU3BlZWQ6IDEuMFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY2FudmFzUmVmID0gY3JlYXRlUmVmKClcbiAgICB0aGlzLnNjZW5lUmVmcyA9IFtdXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlXG4gICAgdGhpcy5yZWZRdWV1ZSA9IFtdXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxuICAgIGNvbnN0IHsgY2FudmFzUmVmIH0gPSB0aGlzXG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXNSZWYuY3VycmVudC5jbGllbnRXaWR0aFxuICAgIGNvbnN0IGhlaWdodCA9IGNhbnZhc1JlZi5jdXJyZW50LmNsaWVudEhlaWdodFxuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBjYW52YXNSZWYuY3VycmVudCwgYW50aWFsaWFzOiB0cnVlLCBwb3dlclByZWZlcmVuY2U6ICdoaWdoLXBlcmZvcm1hbmNlJywgYWxwaGE6IHRydWUgfSlcbiAgICB0aGlzLnJlbmRlcmVyLmdhbW1hRmFjdG9yID0gMi4yXG4gICAgdGhpcy5yZW5kZXJlci5nYW1tYU91dFB1dCA9IHRydWVcbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICB0aGlzLmluaXRpYWxpc2VPcmJpdHMoKVxuICAgIHRoaXMuaW5pdGlhbGlzZUNhbWVyYSgpXG4gICAgdGhpcy5hbmltYXRlKClcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZVxuICAgIHRoaXMucmVmUXVldWUubWFwKHRoaXMuYWRkUmVmKVxuICAgIHRoaXMucmVmUXVldWUgPSBbXVxuICAgIHRoaXMuc2V0dXBDbGlja0xpc3RlbmVycygpXG4gIH1cblxuICBtb3VzZUNsaWNrTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIoeyB4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WSwgd2lkdGg6IGUudGFyZ2V0LndpZHRoLCBoZWlnaHQ6IGUudGFyZ2V0LmhlaWdodCB9KVxuICB9XG5cbiAgdG91Y2hTdGFydExpc3RlbmVyID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuXG4gICAgdGhpcy50b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgfVxuXG4gIHRvdWNoRW5kTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy50b3VjaFN0YXJ0VGltZSB8fCAhdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICBjb25zdCBkdCA9IERhdGUubm93KCkgLSB0aGlzLnRvdWNoU3RhcnRUaW1lXG4gICAgaWYgKGR0IDw9IENMSUNLX1RIUkVTSE9MRCkge1xuICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzLml0ZW0oMClcbiAgICAgIGlmICghdG91Y2gpIHJldHVyblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBib3VuZGluZ1JlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgdGhpcy5jbGlja0xpc3RlbmVyKHsgeDogdG91Y2guY2xpZW50WCAtIGJvdW5kaW5nUmVjdC54LCB5OiB0b3VjaC5jbGllbnRZIC0gYm91bmRpbmdSZWN0LnksIHdpZHRoOiBlLnRhcmdldC53aWR0aCwgaGVpZ2h0OiBlLnRhcmdldC5oZWlnaHQgfSlcbiAgICB9XG4gIH1cblxuICBzZXR1cENsaWNrTGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNsaWNrYWJsZU9iamVjdHMgPSBbXVxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubW91c2VDbGlja0xpc3RlbmVyKVxuXG4gICAgLy8gT3JiaXQgY29udHJvbHMgaXMgcHJldmVudGluZyB0b3VjaCBkZXZpY2VzIGZyb20gdXNpbmcgdGhlIGBjbGlja2AgZXZlbnRcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMudG91Y2hTdGFydExpc3RlbmVyKVxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmRMaXN0ZW5lcilcbiAgfVxuXG4gIHRlYXJEb3duQ2xpY2tMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubW91c2VDbGlja0xpc3RlbmVyKVxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaFN0YXJ0TGlzdGVuZXIpXG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaEVuZExpc3RlbmVyKVxuICB9XG5cbiAgZ2V0Q2xpY2tIYW5kbGVyRm9yT2JqIChvYmopIHtcbiAgICByZXR1cm4gKHRoaXMuY2xpY2thYmxlT2JqZWN0cy5maWx0ZXIoYyA9PiBjLm9iai51dWlkID09PSBvYmoudXVpZCkuc2hpZnQoKSB8fCB7fSkuaGFuZGxlclxuICB9XG5cbiAgY2xpY2tMaXN0ZW5lciA9ICh7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5jb250cm9sc0VuYWJsZWQpIHJldHVyblxuICAgIGNvbnN0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoeCwgeSlcbiAgICBtb3VzZS54ID0gKHggLyB3aWR0aCkgKiAyIC0gMVxuICAgIG1vdXNlLnkgPSAtKHkgLyBoZWlnaHQpICogMiArIDFcbiAgICBjb25zdCByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKClcbiAgICByYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShtb3VzZSwgdGhpcy5jYW1lcmEpXG4gICAgY29uc3QgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMuc2NlbmUuY2hpbGRyZW4sIHRydWUpXG4gICAgLy8gT25seSBpbnRlcmVzdGVkIGluIHRoZSBjbG9zZXN0IG9iamVjdCwgd2UgZG9uJ3Qgd2FudCB0byBjbGljayB0aHJvdWdoIG9iamVjdHNcbiAgICBpZiAoaW50ZXJzZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5nZXRDbGlja0hhbmRsZXJGb3JPYmooaW50ZXJzZWN0c1swXS5vYmplY3QpXG4gICAgICBoYW5kbGVyICYmIGhhbmRsZXIoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICAgIHRoaXMudGVhckRvd25DbGlja0xpc3RlbmVycygpXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZWQgPSB0aGlzLnByb3BzLmNvbnRyb2xzRW5hYmxlZFxuICAgIGlmICh0aGlzLnByb3BzLndpZHRoICE9PSBwcmV2UHJvcHMud2lkdGggfHwgdGhpcy5wcm9wcy5oZWlnaHQgIT09IHByZXZQcm9wcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnByb3BzLndpZHRoLCB0aGlzLnByb3BzLmhlaWdodClcbiAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHRoaXMucHJvcHMud2lkdGggLyB0aGlzLnByb3BzLmhlaWdodFxuICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZU9yYml0cyAoKSB7XG4gICAgdGhpcy5jb250cm9scy5lbmFibGVkID0gdGhpcy5wcm9wcy5jb250cm9sc0VuYWJsZWRcbiAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVBhbiA9IGZhbHNlXG4gICAgdGhpcy5jb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZVxuICAgIHRoaXMuY29udHJvbHMuZGFtcGluZ0ZhY3RvciA9IDEuNlxuICAgIHRoaXMuY29udHJvbHMucm90YXRlU3BlZWQgPSAxLjBcbiAgICB0aGlzLmNvbnRyb2xzLnpvb21TcGVlZCA9IDAuNVxuICAgIHRoaXMuY29udHJvbHMubWluRGlzdGFuY2UgPSBNSU5fRElTVEFOQ0VcbiAgICB0aGlzLmNvbnRyb2xzLm1heERpc3RhbmNlID0gTUFYX0RJU1RBTkNFXG4gICAgdGhpcy5jb250cm9scy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSSAtICgoTWF0aC5QSSAvIDE4MCkgKiA1KVxuICAgIHRoaXMuY29udHJvbHMubWluUG9sYXJBbmdsZSA9IChNYXRoLlBJIC8gMTgwKSAqIDVcbiAgfVxuXG4gIGluaXRpYWxpc2VDYW1lcmEgKCkge1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDBcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gTUlOX0RJU1RBTkNFICsgKChNQVhfRElTVEFOQ0UgLSBNSU5fRElTVEFOQ0UpICogdGhpcy5wcm9wcy5pbml0Wm9vbUxldmVsKVxuICB9XG5cbiAgdXBkYXRlQ29udHJvbFNwZWVkcyAoKSB7XG4gICAgY29uc3QgeyBtaW5ab29tU3BlZWQsIG1heFpvb21TcGVlZCwgbWluUm90YXRlU3BlZWQsIG1heFJvdGF0ZVNwZWVkIH0gPSB0aGlzLnByb3BzLmNvbnRyb2xzQ29uZmlnXG4gICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbi5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IzKCkpXG4gICAgY29uc3QgbXVsdGlwbGllciA9IChkaXN0YW5jZSAtIHRoaXMuY29udHJvbHMubWluRGlzdGFuY2UpIC8gKHRoaXMuY29udHJvbHMubWF4RGlzdGFuY2UgLSB0aGlzLmNvbnRyb2xzLm1pbkRpc3RhbmNlKVxuICAgIGNvbnN0IHpvb21TcGVlZCA9IG1pblpvb21TcGVlZCArIChtdWx0aXBsaWVyICogKG1heFpvb21TcGVlZCAtIG1pblpvb21TcGVlZCkpXG4gICAgY29uc3Qgcm90YXRlU3BlZWQgPSBtaW5Sb3RhdGVTcGVlZCArIChtdWx0aXBsaWVyICogKG1heFJvdGF0ZVNwZWVkIC0gbWluUm90YXRlU3BlZWQpKVxuICAgIHRoaXMuY29udHJvbHMuem9vbVNwZWVkID0gem9vbVNwZWVkXG4gICAgdGhpcy5jb250cm9scy5yb3RhdGVTcGVlZCA9IHJvdGF0ZVNwZWVkXG4gIH1cblxuICBhbmltYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2xTcGVlZHMoKVxuICAgIHRoaXMuY29udHJvbHMudXBkYXRlKClcbiAgICB0aGlzLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgICB0aGlzLnNjZW5lUmVmcy5mb3JFYWNoKHJlZiA9PiByZWYuYW5pbWF0ZSAmJiByZWYuYW5pbWF0ZSh7IHNjZW5lOiB0aGlzLnNjZW5lLCBzY2VuZU9iamVjdHM6IHRoaXMuc2NlbmVSZWZzLCBjYW1lcmE6IHRoaXMuY2FtZXJhLCB0OiBub3cgfSkpXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpXG4gIH1cblxuICBhZGRSZWYgPSAocmVmKSA9PiB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSByZXR1cm4gdGhpcy5yZWZRdWV1ZS5wdXNoKHJlZilcbiAgICBpZiAoIXJlZikgcmV0dXJuXG4gICAgaWYgKHRoaXMuc2NlbmVSZWZzLmZpbHRlcihzY2VuZVJlZiA9PiBzY2VuZVJlZiA9PT0gcmVmKS5sZW5ndGggPiAwKSByZXR1cm5cbiAgICB0aGlzLnNjZW5lUmVmcy5wdXNoKHJlZilcbiAgICByZWYuaW5pdGlhbGlzZSAmJiByZWYuaW5pdGlhbGlzZSh7IHNjZW5lT2JqZWN0czogdGhpcy5zY2VuZVJlZnMsIGNhbWVyYTogdGhpcy5jYW1lcmEsIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyIH0pXG4gICAgdGhpcy5zY2VuZS5hZGQocmVmLmdldE9iaigpKVxuICB9XG5cbiAgcmVtb3ZlUmVmID0gKHJlZikgPT4ge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkgcmV0dXJuXG4gICAgaWYgKCFyZWYpIHJldHVyblxuICAgIGlmICh0aGlzLnNjZW5lUmVmcy5maWx0ZXIoc2NlbmVSZWYgPT4gc2NlbmVSZWYgPT09IHJlZikubGVuZ3RoID4gMCkgcmV0dXJuXG4gICAgdGhpcy5zY2VuZVJlZnMgPSB0aGlzLnNjZW5lUmVmcy5maWx0ZXIoc2NlbmVSZWYgPT4gc2NlbmVSZWYgIT09IHJlZilcbiAgICByZWYuZGVzdHJveSAmJiByZWYuZGVzdHJveSh7IHNjZW5lT2JqZWN0czogdGhpcy5zY2VuZVJlZnMsIGNhbWVyYTogdGhpcy5jYW1lcmEgfSlcbiAgICB0aGlzLnNjZW5lLnJlbW92ZShyZWYuZ2V0T2JqKCkpXG4gIH1cblxuICByZWdpc3RlckNsaWNrYWJsZU9iamVjdCA9IChvYmosIGhhbmRsZXIpID0+IHtcbiAgICBpZiAoIXRoaXMuZ2V0Q2xpY2tIYW5kbGVyRm9yT2JqKG9iaikpIHtcbiAgICAgIHRoaXMuY2xpY2thYmxlT2JqZWN0cy5wdXNoKHsgb2JqLCBoYW5kbGVyIH0pXG4gICAgfVxuICB9XG5cbiAgdW5yZWdpc3RlckNsaWNrYWJsZU9iamVjdCA9IChvYmosIGhhbmRsZXIpID0+IHtcbiAgICB0aGlzLmNsaWNrYWJsZU9iamVjdHMgPSB0aGlzLmNsaWNrYWJsZU9iamVjdHMuZmlsdGVyKGMgPT4gIShjLm9iaiA9PT0gb2JqICYmIGMuaGFuZGxlciA9PT0gaGFuZGxlcikpXG4gIH1cblxuICBnZXRDaGlsZHJlbiAoKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gbnVsbFxuICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICByZWY6IHJlZiA9PiB0aGlzLmFkZFJlZihyZWYpLFxuICAgICAgICByZW1vdmVSZWY6IHJlZiA9PiB0aGlzLnJlbW92ZVJlZihyZWYpLFxuICAgICAgICByZWdpc3RlckNsaWNrYWJsZU9iamVjdDogdGhpcy5yZWdpc3RlckNsaWNrYWJsZU9iamVjdCxcbiAgICAgICAgdW5yZWdpc3RlckNsaWNrYWJsZU9iamVjdDogdGhpcy51bnJlZ2lzdGVyQ2xpY2thYmxlT2JqZWN0XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxjYW52YXMgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gcmVmPXt0aGlzLmNhbnZhc1JlZn0gLz5cbiAgICAgICAge3RoaXMuZ2V0Q2hpbGRyZW4oKX1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG59XG4iXX0=