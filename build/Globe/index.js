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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbG9iZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJHbG9iZSIsInRleHR1cmVMb2FkZWQiLCJ0ZXh0dXJlc1RvTG9hZCIsInByb3BzIiwib25UZXh0dXJlZCIsImluaXRSb3RhdGlvblBvaW50cyIsImxlbmd0aCIsInN0YXJ0SW5pdFJvdGF0aW9uIiwiY2FtZXJhIiwiYnVtcFBhdGgiLCJnZW9tZXRyeSIsIlRIUkVFIiwiU3BoZXJlR2VvbWV0cnkiLCJyYWRpdXMiLCJtYXRlcmlhbCIsImdldE1hdGVyaWFsIiwiaW1hZ2VQYXRoIiwib2JqIiwiTWVzaCIsIm9yaWdpbiIsIlZlY3RvcjMiLCJjYW1lcmFEaXN0YW5jZSIsIkxpbmUzIiwicG9zaXRpb24iLCJkaXN0YW5jZSIsImNvcHkiLCJnZXRQb3NpdGlvbkZyb21MYXRMb24iLCJsYXQiLCJsb24iLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJjbG9uZSIsIm5vcm1hbGl6ZSIsImluaXRQb3MiLCJyYXkiLCJhdCIsIm5leHRQb3NpdGlvbkluZGV4IiwiY2FtZXJhVmVydGljYWxSYXljYXN0ZXIiLCJ0ZXh0dXJlTG9hZGVkQ2FsbGJhY2siLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInRleHR1cmUiLCJsb2FkIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJtYXAiLCJ0cmFuc3BhcmVudCIsInJvdWdobmVzcyIsImJ1bXBUZXh0dXJlTG9hZGVyIiwiYnVtcFRleHR1cmUiLCJidW1wTWFwIiwiYnVtcFNjYWxlIiwib25Sb3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJtb3ZlQ2FtZXJhIiwicHJldlByb3BzIiwibmV3SW1hZ2VQYXRoIiwibmV3QnVtcFBhdGgiLCJuZWVkc1VwZGF0ZSIsInBoaSIsIk1hdGgiLCJQSSIsInRoZXRhIiwieCIsInNpbiIsImNvcyIsInoiLCJ5IiwicG9zIiwic2V0IiwibGF0MSIsImxvbjEiLCJsYXQyIiwibG9uMiIsIlIiLCJkTGF0IiwiZGVnMnJhZCIsImRMb24iLCJhIiwiYyIsImF0YW4yIiwic3FydCIsImQiLCJkZWciLCJpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbiIsImdldERpc3RhbmNlRnJvbUxhdExvbkluS20iLCJkdCIsImNhbWVyYUFuaW1hdGlvblRpbWUiLCJ0IiwibW92ZUNhbWVyYVRpbWUiLCJjYW1lcmFGaW5hbFBvc2l0aW9uIiwiZ2V0Q2FtZXJhQW5pbWF0aW9uVGltZSIsImZpbmFsUG9zIiwiY2FtZXJhTW92ZUxpbmUiLCJtb3ZlRGlzdGFuY2UiLCJnZXRDYW1lcmFNb3ZlRGlzdGFuY2UiLCJuZXdQb3MiLCJvblJvdGF0ZUVuZCIsInNjZW5lIiwicGFyZW50IiwicmVtb3ZlIiwiYWRkIiwiYW5pbWF0ZUNhbWVyYSIsImlkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJhcnJheU9mIiwic2hhcGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBK0RuQkMsYSxHQUFnQixZQUFNO0FBQ3BCLFlBQUtDLGNBQUw7O0FBQ0EsVUFBSSxNQUFLQSxjQUFMLEdBQXNCLENBQXRCLElBQTJCLE1BQUtDLEtBQUwsQ0FBV0MsVUFBMUMsRUFBc0Q7QUFDcEQsY0FBS0QsS0FBTCxDQUFXQyxVQUFYOztBQUNBLFlBQUksTUFBS0QsS0FBTCxDQUFXRSxrQkFBWCxDQUE4QkMsTUFBOUIsR0FBdUMsQ0FBM0MsRUFBOEMsTUFBS0MsaUJBQUw7QUFDL0M7QUFDRixLOzs7Ozs7O3FDQS9DdUI7QUFBQSxVQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDdEIsV0FBS04sY0FBTCxHQUFzQixDQUF0QjtBQUNBLFVBQUksS0FBS0MsS0FBTCxDQUFXTSxRQUFmLEVBQXlCLEtBQUtQLGNBQUw7QUFDekIs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QUFFc0csc0JBQVVLLE9BQVYsQ0FBa0JMLHNCQUFVTSxLQUFWLENBQWdCO0FBQ3BEdEYsSUFBQUEsR0FBRyxFQUFFZ0Ysc0JBQVVHLE1BQVYsQ0FBaUJELFVBRDhCO0FBRXBEakYsSUFBQUEsR0FBRyxFQUFFK0Usc0JBQVVHLE1BQVYsQ0FBaUJEO0FBRjhCLEdBQWhCLENBQWxCO0FBVEgsQztBQURBN0csSyxDQWdCWmtILFksR0FBZTtBQUNwQjtBQUNBN0IsRUFBQUEsNkJBQTZCLEVBQUUsR0FGWDtBQUdwQmhGLEVBQUFBLGtCQUFrQixFQUFFO0FBSEEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpbWFnZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBidW1wUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJhZGl1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9uVGV4dHVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm90YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm90YXRlRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGluaXRSb3RhdGlvblBvaW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSkpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC8vIFBlciAxMDAwa20gXG4gICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb246IDIwMCxcbiAgICBpbml0Um90YXRpb25Qb2ludHM6IFtdXG4gIH1cblxuICBpbml0aWFsaXNlICh7IGNhbWVyYSB9KSB7XG4gICAgdGhpcy50ZXh0dXJlc1RvTG9hZCA9IDFcbiAgICBpZiAodGhpcy5wcm9wcy5idW1wUGF0aCkgdGhpcy50ZXh0dXJlc1RvTG9hZCsrXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkodGhpcy5wcm9wcy5yYWRpdXMsIDY0LCA2NClcbiAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMuZ2V0TWF0ZXJpYWwodGhpcy5wcm9wcy5pbWFnZVBhdGgsIHRoaXMucHJvcHMuYnVtcFBhdGgsIHRoaXMudGV4dHVyZUxvYWRlZClcbiAgICB0aGlzLm9iaiA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbClcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBUSFJFRS5WZWN0b3IzKClcbiAgICBpZiAodGhpcy5wcm9wcy5pbml0Um90YXRpb25Qb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jYW1lcmFEaXN0YW5jZSA9IG5ldyBUSFJFRS5MaW5lMyh0aGlzLm9yaWdpbiwgY2FtZXJhLnBvc2l0aW9uKS5kaXN0YW5jZSgpXG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weSh0aGlzLmdldFBvc2l0aW9uRnJvbUxhdExvbih0aGlzLnByb3BzLmluaXRSb3RhdGlvblBvaW50c1swXS5sYXQsIHRoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzWzBdLmxvbikpXG4gICAgICBjb25zdCByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKHRoaXMub3JpZ2luLCBjYW1lcmEucG9zaXRpb24uY2xvbmUoKS5ub3JtYWxpemUoKSlcbiAgICAgIGxldCBpbml0UG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgICAgcmF5Y2FzdGVyLnJheS5hdCh0aGlzLmNhbWVyYURpc3RhbmNlLCBpbml0UG9zKVxuICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdFBvcylcbiAgICAgIHRoaXMubmV4dFBvc2l0aW9uSW5kZXggPSAxXG4gICAgICB0aGlzLmNhbWVyYVZlcnRpY2FsUmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpXG4gICAgfVxuICB9XG5cbiAgZ2V0TWF0ZXJpYWwgKGltYWdlUGF0aCwgYnVtcFBhdGgsIHRleHR1cmVMb2FkZWRDYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKClcbiAgICBjb25zdCB0ZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKGltYWdlUGF0aCwgdGV4dHVyZUxvYWRlZENhbGxiYWNrKVxuXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBtYXA6IHRleHR1cmUsIHRyYW5zcGFyZW50OiB0cnVlIH0pXG4gICAgbWF0ZXJpYWwucm91Z2huZXNzID0gMVxuICAgIGlmIChidW1wUGF0aCkge1xuICAgICAgY29uc3QgYnVtcFRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG4gICAgICBjb25zdCBidW1wVGV4dHVyZSA9IGJ1bXBUZXh0dXJlTG9hZGVyLmxvYWQoYnVtcFBhdGgsIHRleHR1cmVMb2FkZWRDYWxsYmFjaylcbiAgICAgIG1hdGVyaWFsLmJ1bXBNYXAgPSBidW1wVGV4dHVyZVxuICAgICAgbWF0ZXJpYWwuYnVtcFNjYWxlID0gMC44XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGVyaWFsXG4gIH1cblxuICBhc3luYyBzdGFydEluaXRSb3RhdGlvbiAoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJvdGF0ZSgpXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpXG4gICAgdGhpcy5tb3ZlQ2FtZXJhID0gdHJ1ZVxuICB9XG5cbiAgdGV4dHVyZUxvYWRlZCA9ICgpID0+IHtcbiAgICB0aGlzLnRleHR1cmVzVG9Mb2FkLS1cbiAgICBpZiAodGhpcy50ZXh0dXJlc1RvTG9hZCA8IDEgJiYgdGhpcy5wcm9wcy5vblRleHR1cmVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVGV4dHVyZWQoKVxuICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzLmxlbmd0aCA+IDEpIHRoaXMuc3RhcnRJbml0Um90YXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBpbWFnZVBhdGgsIGJ1bXBQYXRoIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IG5ld0ltYWdlUGF0aCwgbmV3QnVtcFBhdGhcbiAgICBpZiAoaW1hZ2VQYXRoICE9PSBwcmV2UHJvcHMuaW1hZ2VQYXRoKSBuZXdJbWFnZVBhdGggPSBpbWFnZVBhdGhcbiAgICBpZiAoYnVtcFBhdGggIT09IHByZXZQcm9wcy5idW1wUGF0aCkgbmV3QnVtcFBhdGggPSBidW1wUGF0aFxuICAgIGlmIChuZXdJbWFnZVBhdGggfHwgbmV3QnVtcFBhdGgpIHtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5nZXRNYXRlcmlhbChuZXdJbWFnZVBhdGgsIG5ld0J1bXBQYXRoKVxuICAgICAgdGhpcy5vYmoubWF0ZXJpYWwgPSBtYXRlcmlhbFxuICAgICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb25Gcm9tTGF0TG9uIChsYXQsIGxvbikge1xuICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMucHJvcHMucmFkaXVzXG4gICAgY29uc3QgcGhpID0gKDkwIC0gbGF0KSAqIChNYXRoLlBJIC8gMTgwKVxuICAgIGNvbnN0IHRoZXRhID0gKGxvbiArIDE4MCkgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSAqIC0xXG4gICAgY29uc3QgeiA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSlcbiAgICBjb25zdCB5ID0gcmFkaXVzICogTWF0aC5jb3MocGhpKVxuXG4gICAgY29uc3QgcG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgIHBvcy5zZXQoeCwgeSwgeilcbiAgICByZXR1cm4gcG9zXG4gIH1cblxuICBnZXREaXN0YW5jZUZyb21MYXRMb25JbkttIChsYXQxLCBsb24xLCBsYXQyLCBsb24yKSB7XG4gICAgdmFyIFIgPSA2MzcxIC8vIFJhZGl1cyBvZiB0aGUgZWFydGggaW4ga21cbiAgICB2YXIgZExhdCA9IHRoaXMuZGVnMnJhZChsYXQyLWxhdDEpICAvLyBkZWcycmFkIGJlbG93XG4gICAgdmFyIGRMb24gPSB0aGlzLmRlZzJyYWQobG9uMi1sb24xKVxuICAgIHZhciBhID0gTWF0aC5zaW4oZExhdCAvIDIpICogTWF0aC5zaW4oZExhdCAvIDIpICsgTWF0aC5jb3ModGhpcy5kZWcycmFkKGxhdDEpKSAqIE1hdGguY29zKHRoaXMuZGVnMnJhZChsYXQyKSkgKiBNYXRoLnNpbihkTG9uIC8gMikgKiBNYXRoLnNpbihkTG9uIC8gMilcblxuICAgIHZhciBjID0gMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMSAtIGEpKVxuICAgIHZhciBkID0gUiAqIGMgLy8gRGlzdGFuY2UgaW4ga21cbiAgICByZXR1cm4gZFxuICB9XG5cbiAgZGVnMnJhZCAoZGVnKSB7XG4gICAgcmV0dXJuIGRlZyAqIChNYXRoLlBJLzE4MClcbiAgfVxuXG4gIGdldENhbWVyYUFuaW1hdGlvblRpbWUgKCkge1xuICAgIGNvbnN0IHsgaW5pdFJvdGF0aW9uUG9pbnRzLCBpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZUZyb21MYXRMb25JbkttKFxuICAgICAgaW5pdFJvdGF0aW9uUG9pbnRzW3RoaXMubmV4dFBvc2l0aW9uSW5kZXggLSAxXS5sYXQsXG4gICAgICBpbml0Um90YXRpb25Qb2ludHNbdGhpcy5uZXh0UG9zaXRpb25JbmRleCAtIDFdLmxvbixcbiAgICAgIGluaXRSb3RhdGlvblBvaW50c1t0aGlzLm5leHRQb3NpdGlvbkluZGV4XS5sYXQsXG4gICAgICBpbml0Um90YXRpb25Qb2ludHNbdGhpcy5uZXh0UG9zaXRpb25JbmRleF0ubG9uXG4gICAgKVxuXG4gICAgcmV0dXJuIChkaXN0YW5jZSAvIDEwMDApICogaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb25cbiAgfVxuXG4gIGdldENhbWVyYU1vdmVEaXN0YW5jZSAoZHQpIHtcbiAgICBkdCAvPSAodGhpcy5jYW1lcmFBbmltYXRpb25UaW1lIC8gMTAwMCkgLyAyXG4gICAgaWYgKGR0IDwgMSkgcmV0dXJuIDEgLyAyICogZHQgKiBkdFxuICAgIGR0LS1cbiAgICByZXR1cm4gLTEgLyAyICogKGR0ICogKGR0IC0gMikgLSAxKVxuICB9XG5cbiAgYW5pbWF0ZUNhbWVyYSAoY2FtZXJhLCB0KSB7XG4gICAgaWYgKCF0aGlzLm1vdmVDYW1lcmEpIHJldHVyblxuICAgIGlmICghdGhpcy5tb3ZlQ2FtZXJhVGltZSkgdGhpcy5tb3ZlQ2FtZXJhVGltZSA9IHRcbiAgICBpZiAoIXRoaXMuY2FtZXJhRmluYWxQb3NpdGlvbikge1xuICAgICAgdGhpcy5jYW1lcmFBbmltYXRpb25UaW1lID0gdGhpcy5nZXRDYW1lcmFBbmltYXRpb25UaW1lKClcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb25Gcm9tTGF0TG9uKHRoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzW3RoaXMubmV4dFBvc2l0aW9uSW5kZXhdLmxhdCwgdGhpcy5wcm9wcy5pbml0Um90YXRpb25Qb2ludHNbdGhpcy5uZXh0UG9zaXRpb25JbmRleF0ubG9uKVxuICAgICAgY29uc3QgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3Rlcih0aGlzLm9yaWdpbiwgcG9zLm5vcm1hbGl6ZSgpKVxuICAgICAgbGV0IGZpbmFsUG9zID0gdGhpcy5vcmlnaW4uY2xvbmUoKVxuICAgICAgcmF5Y2FzdGVyLnJheS5hdCh0aGlzLmNhbWVyYURpc3RhbmNlLCBmaW5hbFBvcylcbiAgICAgIHRoaXMuY2FtZXJhRmluYWxQb3NpdGlvbiA9IGZpbmFsUG9zXG4gICAgICB0aGlzLmNhbWVyYU1vdmVMaW5lID0gbmV3IFRIUkVFLkxpbmUzKGNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCB0aGlzLmNhbWVyYUZpbmFsUG9zaXRpb24uY2xvbmUoKSlcbiAgICB9XG5cbiAgICBjb25zdCBkdCA9ICh0IC0gdGhpcy5tb3ZlQ2FtZXJhVGltZSkgLyAxMDAwXG4gICAgY29uc3QgbW92ZURpc3RhbmNlID0gdGhpcy5nZXRDYW1lcmFNb3ZlRGlzdGFuY2UoZHQpXG4gICAgbGV0IG5ld1BvcyA9IHRoaXMub3JpZ2luLmNsb25lKClcbiAgICB0aGlzLmNhbWVyYU1vdmVMaW5lLmF0KG1vdmVEaXN0YW5jZSwgbmV3UG9zKVxuICAgIHRoaXMuY2FtZXJhVmVydGljYWxSYXljYXN0ZXIuc2V0KHRoaXMub3JpZ2luLCBuZXdQb3MuY2xvbmUoKS5ub3JtYWxpemUoKSlcbiAgICBsZXQgZmluYWxQb3MgPSB0aGlzLm9yaWdpbi5jbG9uZSgpXG4gICAgdGhpcy5jYW1lcmFWZXJ0aWNhbFJheWNhc3Rlci5yYXkuYXQodGhpcy5jYW1lcmFEaXN0YW5jZSwgZmluYWxQb3MpXG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldChmaW5hbFBvcy54LCBmaW5hbFBvcy55LCBmaW5hbFBvcy56KVxuICAgIGlmIChkdCA+PSB0aGlzLmNhbWVyYUFuaW1hdGlvblRpbWUgLyAxMDAwKSB7XG4gICAgICB0aGlzLmNhbWVyYUZpbmFsUG9zaXRpb24gPSBudWxsXG4gICAgICB0aGlzLmNhbWVyYU1vdmVMaW5lID0gbnVsbFxuICAgICAgdGhpcy5tb3ZlQ2FtZXJhVGltZSA9IG51bGxcbiAgICAgIHRoaXMubmV4dFBvc2l0aW9uSW5kZXgrK1xuICAgICAgdGhpcy5jYW1lcmFBbmltYXRpb25UaW1lID0gbnVsbFxuICAgICAgaWYgKCF0aGlzLnByb3BzLmluaXRSb3RhdGlvblBvaW50c1t0aGlzLm5leHRQb3NpdGlvbkluZGV4XSkge1xuICAgICAgICB0aGlzLm1vdmVDYW1lcmEgPSBmYWxzZVxuICAgICAgICB0aGlzLnByb3BzLm9uUm90YXRlRW5kKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbmltYXRlICh7IHNjZW5lLCBjYW1lcmEsIHQgfSkge1xuICAgIGlmICh0aGlzLnRleHR1cmVzVG9Mb2FkID4gMCAmJiB0aGlzLm9iai5wYXJlbnQpIHRoaXMub2JqLnBhcmVudC5yZW1vdmUodGhpcy5vYmopXG4gICAgaWYgKHRoaXMudGV4dHVyZXNUb0xvYWQgPCAxICYmICF0aGlzLm9iai5wYXJlbnQpIHNjZW5lLmFkZCh0aGlzLm9iailcbiAgICB0aGlzLmFuaW1hdGVDYW1lcmEoY2FtZXJhLCB0KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMub2JqLnBhcmVudCAmJiB0aGlzLm9iai5wYXJlbnQucmVtb3ZlKHRoaXMub2JqKVxuICB9XG5cbiAgZ2V0T2JqICgpIHtcbiAgICByZXR1cm4gdGhpcy5vYmpcbiAgfVxuXG4gIGdldElkICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pZFxuICB9XG5cbiAgZ2V0UmFkaXVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yYWRpdXNcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIl19