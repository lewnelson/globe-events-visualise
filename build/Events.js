"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _Scene = _interopRequireDefault(require("./Scene"));

var _Globe = _interopRequireDefault(require("./Globe"));

var _GlobeMarker = _interopRequireDefault(require("./GlobeMarker"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _SpotLight = _interopRequireDefault(require("./SpotLight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  width: ", "px;\n  height: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var height = _ref2.height;
  return height;
});

var Events =
/*#__PURE__*/
function (_Component) {
  _inherits(Events, _Component);

  function Events(props) {
    var _this;

    _classCallCheck(this, Events);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Events).call(this, props));
    _this.globeReady =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });

            case 2:
              _this._isMounted && _this.setState({
                globeReady: true
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.globeOnRotate = function () {
      _this.setState({
        controlsEnabled: false
      });
    };

    _this.globeOnRotateEnd = function () {
      _this.setState({
        controlsEnabled: true
      });
    };

    _this.onDialogClose = function () {
      _this.dialogDone && _this.dialogDone();
      _this.dialogDone = null;

      _this.setState({
        controlsEnabled: true,
        showDialog: false,
        activeEvents: null
      });
    };

    _this.state = {
      globeReady: false,
      controlsEnabled: !(props.initRotationPoints.length > 1),
      showDialog: false,
      activeEvents: null
    };
    return _this;
  }

  _createClass(Events, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "globeMarkerClicked",
    value: function () {
      var _globeMarkerClicked = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(events, animationTime, done) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  controlsEnabled: false
                });
                _context2.next = 3;
                return new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve();
                  }, animationTime);
                });

              case 3:
                if (this._isMounted) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                if (done) this.dialogDone = done;
                this.setState({
                  showDialog: true,
                  activeEvents: events
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function globeMarkerClicked(_x, _x2, _x3) {
        return _globeMarkerClicked.apply(this, arguments);
      }

      return globeMarkerClicked;
    }()
  }, {
    key: "getDialogWidth",
    value: function getDialogWidth() {
      var width = this.props.width / 3;
      if (width < 320) width = 320;
      if (width > 400) width = 400;
      return width;
    }
  }, {
    key: "getDialogHeight",
    value: function getDialogHeight() {
      var height = this.props.height / 2;
      if (height < 300) height = 300;
      if (height > 600) height = 600;
      return height;
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var theme = _objectSpread({}, Events.defaultProps.theme, this.props.theme);

      if (theme.loadingComponent) {
        var LoadingComponent = theme.loadingComponent;
        return _react["default"].createElement(_Loader["default"], {
          color: theme.loadingComponentColor
        }, _react["default"].createElement(LoadingComponent, null));
      } else {
        return _react["default"].createElement(_Loader["default"], {
          color: theme.loadingComponentColor
        });
      }
    }
  }, {
    key: "renderDialog",
    value: function renderDialog() {
      var _this$state = this.state,
          showDialog = _this$state.showDialog,
          activeEvents = _this$state.activeEvents;
      if (!showDialog || !activeEvents) return null;

      var _ref4 = this.props.theme || {},
          dialog = _ref4.dialog;

      var defaultDialog = Events.defaultProps.theme.dialog;
      return _react["default"].createElement(_Dialog["default"], {
        events: activeEvents,
        closeDialog: this.onDialogClose,
        width: this.getDialogWidth(),
        height: this.getDialogHeight(),
        theme: _objectSpread({}, defaultDialog, dialog)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var lighting = _objectSpread({}, Events.defaultProps.lighting, this.props.lighting);

      var theme = _objectSpread({}, Events.defaultProps.theme, this.props.theme);

      var dialog = _objectSpread({}, Events.defaultProps.theme.dialog, (this.props.theme || {}).dialog);

      return _react["default"].createElement(Container, {
        width: this.props.width,
        height: this.props.height
      }, _react["default"].createElement(_Scene["default"], {
        width: this.props.width,
        height: this.props.height,
        controlsEnabled: this.state.controlsEnabled,
        initZoomLevel: this.props.initZoomLevel
      }, _react["default"].createElement(_SpotLight["default"], {
        id: "main_light",
        intensity: lighting.intensity,
        color: lighting.color,
        angle: lighting.angle,
        distance: 1000
      }), _react["default"].createElement(_Globe["default"], {
        id: "globe",
        imagePath: this.props.globeTextureURL,
        bumpPath: this.props.globeBumpTextureURL,
        radius: 30,
        onTextured: this.globeReady,
        onRotate: this.globeOnRotate,
        onRotateEnd: this.globeOnRotateEnd,
        initRotationAnimationDuration: this.props.initRotationAnimationDuration,
        initRotationPoints: this.props.initRotationPoints
      }), this.state.globeReady && this.props.events.map(function (events, index) {
        return _react["default"].createElement(_GlobeMarker["default"], {
          key: events[0].id,
          id: events[0].id,
          eventCount: events.length,
          globe: "globe",
          lat: events[0].lat,
          lon: events[0].lon,
          locationName: events[0].location,
          radius: 0.3,
          dropDistance: _this2.props.markerDropDistance,
          zIndex: index,
          onClick: function onClick(animationTime, done) {
            return _this2.globeMarkerClicked(events, animationTime, done);
          },
          markerColor: theme.markerColor,
          markerHighlightColor: theme.markerHighlightColor,
          fontColor: theme.markerFontColor,
          fontHighlightColor: theme.markerFontHighlightColor
        });
      })), !this.state.globeReady && this.renderLoader(), _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
        transitionName: dialog.transitionName,
        transitionEnterTimeout: dialog.transitionEnterTimeout,
        transitionLeaveTimeout: dialog.transitionLeaveTimeout
      }, this.renderDialog()));
    }
  }]);

  return Events;
}(_react.Component);

Events.propTypes = {
  // Array of events to display on the globe
  events: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].shape({
    // Unique event id
    id: _propTypes["default"].string.isRequired,
    // Latitude
    lat: _propTypes["default"].number.isRequired,
    // Longitude
    lon: _propTypes["default"].number.isRequired,
    // Name (title) of the event
    name: _propTypes["default"].string.isRequired,
    // Location appears on the globe
    location: _propTypes["default"].string.isRequired,
    // Appears in the dialog if defined, otherwise location is used
    address: _propTypes["default"].string,
    // Date of the event
    date: _propTypes["default"].string.isRequired,
    // Local time of the event
    localTime: _propTypes["default"].string.isRequired,
    // URL to the event
    url: _propTypes["default"].string.isRequired
  }).isRequired)).isRequired,
  // Width in pixels
  width: _propTypes["default"].number.isRequired,
  // Height in pixels
  height: _propTypes["default"].number.isRequired,
  // URL for the globes main texture
  globeTextureURL: _propTypes["default"].string,
  // URL for a bump map if applicable
  globeBumpTextureURL: _propTypes["default"].string,
  // Floating point between 0 and 1 inclusive
  initZoomLevel: _propTypes["default"].number,
  // How quickly will the globe rotate per 1000km on the init animation
  initRotationAnimationDuration: _propTypes["default"].number,
  // Points to rotate around when the globe loads
  initRotationPoints: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    lat: _propTypes["default"].number.isRequired,
    lon: _propTypes["default"].number.isRequired
  })),
  // Adjust the lighting for the scene
  lighting: _propTypes["default"].shape({
    color: _propTypes["default"].number,
    intensity: _propTypes["default"].number,
    angle: _propTypes["default"].number
  }),
  // Distance that the markers will drop from space
  markerDropDistance: _propTypes["default"].number,
  // Colors etc.
  theme: _propTypes["default"].shape({
    markerColor: _propTypes["default"].number,
    markerHighlightColor: _propTypes["default"].number,
    markerFontColor: _propTypes["default"].number,
    markerFontHighlightColor: _propTypes["default"].number,
    loadingComponent: _propTypes["default"].node,
    loadingComponentColor: _propTypes["default"].string,
    dialog: _propTypes["default"].shape({
      titleFontFamily: _propTypes["default"].string,
      titleFontColor: _propTypes["default"].string,
      titleFontWeight: _propTypes["default"].string,
      headerBackground: _propTypes["default"].string,
      bodyBackground: _propTypes["default"].string,
      containerBackground: _propTypes["default"].string,
      shadowColor: _propTypes["default"].string,
      linkColor: _propTypes["default"].string,
      buttonColor: _propTypes["default"].string,
      bodyFontFamily: _propTypes["default"].string,
      bodyFontColor: _propTypes["default"].string,
      transitionName: _propTypes["default"].number,
      transitionEnterTimeout: _propTypes["default"].number,
      transitionLeaveTimeout: _propTypes["default"].number,
      // JSX or a string for the character to appear
      backButton: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
      // JSX or a string for the ionicon icon to appear https://ionicons.com/ prepend ios- or md-
      closeButton: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
    })
  })
};
Events.defaultProps = {
  lighting: {
    color: 0x404040,
    intensity: 8,
    angle: Math.PI / 6
  },
  markerDropDistance: 1,
  initRotationPoints: [],
  globeTextureURL: 'https://lewnelson.github.io/react-globe-events-visualiser/assets/images/textures/realistic-globe/globe.jpg',
  globeBumpTextureURL: 'https://lewnelson.github.io/react-globe-events-visualiser/assets/images/textures/realistic-globe/globe.jpg',
  theme: {
    markerColor: 0x709cf0,
    markerHighlightColor: 0x1fc1c3,
    markerFontColor: 0x709cf0,
    markerFontHighlightColor: 0x1fc1c3,
    loadingComponent: null,
    loadingComponentColor: '#0000ff',
    dialog: {
      transitionName: 'dialog',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500,
      titleFontFamily: 'sans-serif',
      titleFontColor: '#000',
      titleFontWeight: '600',
      headerBackground: '#ddd',
      bodyBackground: '#eee',
      containerBackground: '#eee',
      shadowColor: '#000',
      linkColor: '#0000ff',
      buttonColor: '#000',
      bodyFontFamily: 'sans-serif',
      bodyFontColor: '#000',
      backButton: 'md-arrow-back',
      closeButton: 'md-close-circle-outline'
    }
  }
};
var _default = Events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwic2V0U3RhdGUiLCJnbG9iZU9uUm90YXRlIiwiY29udHJvbHNFbmFibGVkIiwiZ2xvYmVPblJvdGF0ZUVuZCIsIm9uRGlhbG9nQ2xvc2UiLCJkaWFsb2dEb25lIiwic2hvd0RpYWxvZyIsImFjdGl2ZUV2ZW50cyIsInN0YXRlIiwiaW5pdFJvdGF0aW9uUG9pbnRzIiwibGVuZ3RoIiwiZXZlbnRzIiwiYW5pbWF0aW9uVGltZSIsImRvbmUiLCJ0aGVtZSIsImRlZmF1bHRQcm9wcyIsImxvYWRpbmdDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwibG9hZGluZ0NvbXBvbmVudENvbG9yIiwiZGlhbG9nIiwiZGVmYXVsdERpYWxvZyIsImdldERpYWxvZ1dpZHRoIiwiZ2V0RGlhbG9nSGVpZ2h0IiwibGlnaHRpbmciLCJpbml0Wm9vbUxldmVsIiwiaW50ZW5zaXR5IiwiY29sb3IiLCJhbmdsZSIsImdsb2JlVGV4dHVyZVVSTCIsImdsb2JlQnVtcFRleHR1cmVVUkwiLCJpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbiIsIm1hcCIsImluZGV4IiwiaWQiLCJsYXQiLCJsb24iLCJsb2NhdGlvbiIsIm1hcmtlckRyb3BEaXN0YW5jZSIsImdsb2JlTWFya2VyQ2xpY2tlZCIsIm1hcmtlckNvbG9yIiwibWFya2VySGlnaGxpZ2h0Q29sb3IiLCJtYXJrZXJGb250Q29sb3IiLCJtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3IiLCJyZW5kZXJMb2FkZXIiLCJ0cmFuc2l0aW9uTmFtZSIsInRyYW5zaXRpb25FbnRlclRpbWVvdXQiLCJ0cmFuc2l0aW9uTGVhdmVUaW1lb3V0IiwicmVuZGVyRGlhbG9nIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIm5hbWUiLCJhZGRyZXNzIiwiZGF0ZSIsImxvY2FsVGltZSIsInVybCIsIm5vZGUiLCJ0aXRsZUZvbnRGYW1pbHkiLCJ0aXRsZUZvbnRDb2xvciIsInRpdGxlRm9udFdlaWdodCIsImhlYWRlckJhY2tncm91bmQiLCJib2R5QmFja2dyb3VuZCIsImNvbnRhaW5lckJhY2tncm91bmQiLCJzaGFkb3dDb2xvciIsImxpbmtDb2xvciIsImJ1dHRvbkNvbG9yIiwiYm9keUZvbnRGYW1pbHkiLCJib2R5Rm9udENvbG9yIiwiYmFja0J1dHRvbiIsIm9uZU9mVHlwZSIsImNsb3NlQnV0dG9uIiwiTWF0aCIsIlBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixvQkFHSjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQUhJLEVBSUg7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFnQkEsTUFBaEI7QUFBQSxDQUpHLENBQWY7O0lBT01DLE07Ozs7O0FBNkhKLGtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGdGQUFNQSxLQUFOO0FBRGtCLFVBa0JwQkMsVUFsQm9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBa0JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNMLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsdUJBQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBZDtBQUFBLGVBQW5CLENBREs7O0FBQUE7QUFFWCxvQkFB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dXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSdcbmltcG9ydCBHbG9iZSBmcm9tICcuL0dsb2JlJ1xuaW1wb3J0IEdsb2JlTWFya2VyIGZyb20gJy4vR2xvYmVNYXJrZXInXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcbmltcG9ydCBTcG90TGlnaHQgZnJvbSAnLi9TcG90TGlnaHQnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRofXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbmBcblxuY2xhc3MgRXZlbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBBcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB0aGUgZ2xvYmVcbiAgICBldmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgLy8gVW5pcXVlIGV2ZW50IGlkXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExhdGl0dWRlXG4gICAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb25naXR1ZGVcbiAgICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIE5hbWUgKHRpdGxlKSBvZiB0aGUgZXZlbnRcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb2NhdGlvbiBhcHBlYXJzIG9uIHRoZSBnbG9iZVxuICAgICAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBBcHBlYXJzIGluIHRoZSBkaWFsb2cgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGxvY2F0aW9uIGlzIHVzZWRcbiAgICAgICAgYWRkcmVzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLy8gRGF0ZSBvZiB0aGUgZXZlbnRcbiAgICAgICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb2NhbCB0aW1lIG9mIHRoZSBldmVudFxuICAgICAgICBsb2NhbFRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gVVJMIHRvIHRoZSBldmVudFxuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICkpLmlzUmVxdWlyZWQsXG4gICAgLy8gV2lkdGggaW4gcGl4ZWxzXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvLyBIZWlnaHQgaW4gcGl4ZWxzXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy8gVVJMIGZvciB0aGUgZ2xvYmVzIG1haW4gdGV4dHVyZVxuICAgIGdsb2JlVGV4dHVyZVVSTDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBVUkwgZm9yIGEgYnVtcCBtYXAgaWYgYXBwbGljYWJsZVxuICAgIGdsb2JlQnVtcFRleHR1cmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gRmxvYXRpbmcgcG9pbnQgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZVxuICAgIGluaXRab29tTGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gSG93IHF1aWNrbHkgd2lsbCB0aGUgZ2xvYmUgcm90YXRlIHBlciAxMDAwa20gb24gdGhlIGluaXQgYW5pbWF0aW9uXG4gICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gUG9pbnRzIHRvIHJvdGF0ZSBhcm91bmQgd2hlbiB0aGUgZ2xvYmUgbG9hZHNcbiAgICBpbml0Um90YXRpb25Qb2ludHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pKSxcbiAgICAvLyBBZGp1c3QgdGhlIGxpZ2h0aW5nIGZvciB0aGUgc2NlbmVcbiAgICBsaWdodGluZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgaW50ZW5zaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgYW5nbGU6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KSxcbiAgICAvLyBEaXN0YW5jZSB0aGF0IHRoZSBtYXJrZXJzIHdpbGwgZHJvcCBmcm9tIHNwYWNlXG4gICAgbWFya2VyRHJvcERpc3RhbmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIENvbG9ycyBldGMuXG4gICAgdGhlbWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtYXJrZXJDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFya2VyRm9udENvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFya2VyRm9udEhpZ2hsaWdodENvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgICBsb2FkaW5nQ29tcG9uZW50Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBkaWFsb2c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHRpdGxlRm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdGl0bGVGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRpdGxlRm9udFdlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNvbnRhaW5lckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNoYWRvd0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsaW5rQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJ1dHRvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBib2R5Rm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8vIEpTWCBvciBhIHN0cmluZyBmb3IgdGhlIGNoYXJhY3RlciB0byBhcHBlYXJcbiAgICAgICAgYmFja0J1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKSxcbiAgICAgICAgLy8gSlNYIG9yIGEgc3RyaW5nIGZvciB0aGUgaW9uaWNvbiBpY29uIHRvIGFwcGVhciBodHRwczovL2lvbmljb25zLmNvbS8gcHJlcGVuZCBpb3MtIG9yIG1kLVxuICAgICAgICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaWdodGluZzoge1xuICAgICAgY29sb3I6IDB4NDA0MDQwLFxuICAgICAgaW50ZW5zaXR5OiA4LFxuICAgICAgYW5nbGU6IE1hdGguUEkgLyA2XG4gICAgfSxcbiAgICBtYXJrZXJEcm9wRGlzdGFuY2U6IDEsXG4gICAgaW5pdFJvdGF0aW9uUG9pbnRzOiBbXSxcbiAgICBnbG9iZVRleHR1cmVVUkw6ICdodHRwczovL2xld25lbHNvbi5naXRodWIuaW8vcmVhY3QtZ2xvYmUtZXZlbnRzLXZpc3VhbGlzZXIvYXNzZXRzL2ltYWdlcy90ZXh0dXJlcy9yZWFsaXN0aWMtZ2xvYmUvZ2xvYmUuanBnJyxcbiAgICBnbG9iZUJ1bXBUZXh0dXJlVVJMOiAnaHR0cHM6Ly9sZXduZWxzb24uZ2l0aHViLmlvL3JlYWN0LWdsb2JlLWV2ZW50cy12aXN1YWxpc2VyL2Fzc2V0cy9pbWFnZXMvdGV4dHVyZXMvcmVhbGlzdGljLWdsb2JlL2dsb2JlLmpwZycsXG4gICAgdGhlbWU6IHtcbiAgICAgIG1hcmtlckNvbG9yOiAweDcwOWNmMCxcbiAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yOiAweDFmYzFjMyxcbiAgICAgIG1hcmtlckZvbnRDb2xvcjogMHg3MDljZjAsXG4gICAgICBtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3I6IDB4MWZjMWMzLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudDogbnVsbCxcbiAgICAgIGxvYWRpbmdDb21wb25lbnRDb2xvcjogJyMwMDAwZmYnLFxuICAgICAgZGlhbG9nOiB7XG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiAnZGlhbG9nJyxcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dDogNTAwLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiA1MDAsXG4gICAgICAgIHRpdGxlRm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICB0aXRsZUZvbnRDb2xvcjogJyMwMDAnLFxuICAgICAgICB0aXRsZUZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kOiAnI2RkZCcsXG4gICAgICAgIGJvZHlCYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgICAgIGNvbnRhaW5lckJhY2tncm91bmQ6ICcjZWVlJyxcbiAgICAgICAgc2hhZG93Q29sb3I6ICcjMDAwJyxcbiAgICAgICAgbGlua0NvbG9yOiAnIzAwMDBmZicsXG4gICAgICAgIGJ1dHRvbkNvbG9yOiAnIzAwMCcsXG4gICAgICAgIGJvZHlGb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDAwJyxcbiAgICAgICAgYmFja0J1dHRvbjogJ21kLWFycm93LWJhY2snLFxuICAgICAgICBjbG9zZUJ1dHRvbjogJ21kLWNsb3NlLWNpcmNsZS1vdXRsaW5lJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBnbG9iZVJlYWR5OiBmYWxzZSxcbiAgICAgIGNvbnRyb2xzRW5hYmxlZDogIShwcm9wcy5pbml0Um90YXRpb25Qb2ludHMubGVuZ3RoID4gMSksXG4gICAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgICAgIGFjdGl2ZUV2ZW50czogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2VcbiAgfVxuXG4gIGdsb2JlUmVhZHkgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxuICAgIHRoaXMuX2lzTW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKHsgZ2xvYmVSZWFkeTogdHJ1ZSB9KVxuICB9XG5cbiAgZ2xvYmVPblJvdGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiBmYWxzZSB9KVxuICB9XG5cbiAgZ2xvYmVPblJvdGF0ZUVuZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiB0cnVlIH0pXG4gIH1cblxuICBhc3luYyBnbG9iZU1hcmtlckNsaWNrZWQgKGV2ZW50cywgYW5pbWF0aW9uVGltZSwgZG9uZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IGZhbHNlIH0pXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBhbmltYXRpb25UaW1lKSlcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuXG4gICAgaWYgKGRvbmUpIHRoaXMuZGlhbG9nRG9uZSA9IGRvbmVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICBhY3RpdmVFdmVudHM6IGV2ZW50c1xuICAgIH0pXG4gIH1cblxuICBvbkRpYWxvZ0Nsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuZGlhbG9nRG9uZSAmJiB0aGlzLmRpYWxvZ0RvbmUoKVxuICAgIHRoaXMuZGlhbG9nRG9uZSA9IG51bGxcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiB0cnVlLCBzaG93RGlhbG9nOiBmYWxzZSwgYWN0aXZlRXZlbnRzOiBudWxsIH0pXG4gIH1cblxuICBnZXREaWFsb2dXaWR0aCAoKSB7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCAvIDNcbiAgICBpZiAod2lkdGggPCAzMjApIHdpZHRoID0gMzIwXG4gICAgaWYgKHdpZHRoID4gNDAwKSB3aWR0aCA9IDQwMFxuICAgIHJldHVybiB3aWR0aFxuICB9XG5cbiAgZ2V0RGlhbG9nSGVpZ2h0ICgpIHtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyXG4gICAgaWYgKGhlaWdodCA8IDMwMCkgaGVpZ2h0ID0gMzAwXG4gICAgaWYgKGhlaWdodCA+IDYwMCkgaGVpZ2h0ID0gNjAwXG4gICAgcmV0dXJuIGhlaWdodFxuICB9XG5cbiAgcmVuZGVyTG9hZGVyICgpIHtcbiAgICBjb25zdCB0aGVtZSA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZSwgLi4udGhpcy5wcm9wcy50aGVtZSB9XG4gICAgaWYgKHRoZW1lLmxvYWRpbmdDb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IExvYWRpbmdDb21wb25lbnQgPSB0aGVtZS5sb2FkaW5nQ29tcG9uZW50XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGVyIGNvbG9yPXt0aGVtZS5sb2FkaW5nQ29tcG9uZW50Q29sb3J9PlxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50IC8+XG4gICAgICAgIDwvTG9hZGVyPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGVyIGNvbG9yPXt0aGVtZS5sb2FkaW5nQ29tcG9uZW50Q29sb3J9IC8+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRGlhbG9nICgpIHtcbiAgICBjb25zdCB7IHNob3dEaWFsb2csIGFjdGl2ZUV2ZW50cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghc2hvd0RpYWxvZyB8fCAhYWN0aXZlRXZlbnRzKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHsgZGlhbG9nIH0gPSB0aGlzLnByb3BzLnRoZW1lIHx8IHt9XG4gICAgY29uc3QgZGVmYXVsdERpYWxvZyA9IEV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUuZGlhbG9nXG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgZXZlbnRzPXthY3RpdmVFdmVudHN9XG4gICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLm9uRGlhbG9nQ2xvc2V9XG4gICAgICAgIHdpZHRoPXt0aGlzLmdldERpYWxvZ1dpZHRoKCl9XG4gICAgICAgIGhlaWdodD17dGhpcy5nZXREaWFsb2dIZWlnaHQoKX1cbiAgICAgICAgdGhlbWU9e3sgLi4uZGVmYXVsdERpYWxvZywgLi4uZGlhbG9nIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbGlnaHRpbmcgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMubGlnaHRpbmcsIC4uLnRoaXMucHJvcHMubGlnaHRpbmcgfVxuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICBjb25zdCBkaWFsb2cgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUuZGlhbG9nLCAuLi4odGhpcy5wcm9wcy50aGVtZSB8fCB7fSkuZGlhbG9nIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0+XG4gICAgICAgIDxTY2VuZSB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0gY29udHJvbHNFbmFibGVkPXt0aGlzLnN0YXRlLmNvbnRyb2xzRW5hYmxlZH0gaW5pdFpvb21MZXZlbD17dGhpcy5wcm9wcy5pbml0Wm9vbUxldmVsfT5cbiAgICAgICAgICA8U3BvdExpZ2h0XG4gICAgICAgICAgICBpZD0nbWFpbl9saWdodCdcbiAgICAgICAgICAgIGludGVuc2l0eT17bGlnaHRpbmcuaW50ZW5zaXR5fVxuICAgICAgICAgICAgY29sb3I9e2xpZ2h0aW5nLmNvbG9yfVxuICAgICAgICAgICAgYW5nbGU9e2xpZ2h0aW5nLmFuZ2xlfVxuICAgICAgICAgICAgZGlzdGFuY2U9ezEwMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R2xvYmVcbiAgICAgICAgICAgIGlkPSdnbG9iZSdcbiAgICAgICAgICAgIGltYWdlUGF0aD17dGhpcy5wcm9wcy5nbG9iZVRleHR1cmVVUkx9XG4gICAgICAgICAgICBidW1wUGF0aD17dGhpcy5wcm9wcy5nbG9iZUJ1bXBUZXh0dXJlVVJMfVxuICAgICAgICAgICAgcmFkaXVzPXszMH1cbiAgICAgICAgICAgIG9uVGV4dHVyZWQ9e3RoaXMuZ2xvYmVSZWFkeX1cbiAgICAgICAgICAgIG9uUm90YXRlPXt0aGlzLmdsb2JlT25Sb3RhdGV9XG4gICAgICAgICAgICBvblJvdGF0ZUVuZD17dGhpcy5nbG9iZU9uUm90YXRlRW5kfVxuICAgICAgICAgICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb249e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICBpbml0Um90YXRpb25Qb2ludHM9e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudHMubWFwKChldmVudHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHbG9iZU1hcmtlclxuICAgICAgICAgICAgICAgIGtleT17ZXZlbnRzWzBdLmlkfVxuICAgICAgICAgICAgICAgIGlkPXtldmVudHNbMF0uaWR9XG4gICAgICAgICAgICAgICAgZXZlbnRDb3VudD17ZXZlbnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBnbG9iZT0nZ2xvYmUnXG4gICAgICAgICAgICAgICAgbGF0PXtldmVudHNbMF0ubGF0fVxuICAgICAgICAgICAgICAgIGxvbj17ZXZlbnRzWzBdLmxvbn1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU9e2V2ZW50c1swXS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICByYWRpdXM9ezAuM31cbiAgICAgICAgICAgICAgICBkcm9wRGlzdGFuY2U9e3RoaXMucHJvcHMubWFya2VyRHJvcERpc3RhbmNlfVxuICAgICAgICAgICAgICAgIHpJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGFuaW1hdGlvblRpbWUsIGRvbmUpID0+IHRoaXMuZ2xvYmVNYXJrZXJDbGlja2VkKGV2ZW50cywgYW5pbWF0aW9uVGltZSwgZG9uZSl9XG4gICAgICAgICAgICAgICAgbWFya2VyQ29sb3I9e3RoZW1lLm1hcmtlckNvbG9yfVxuICAgICAgICAgICAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yPXt0aGVtZS5tYXJrZXJIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250SGlnaGxpZ2h0Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1NjZW5lPlxuICAgICAgICB7IXRoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJiB0aGlzLnJlbmRlckxvYWRlcigpfVxuICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17ZGlhbG9nLnRyYW5zaXRpb25OYW1lfVxuICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0fVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyRGlhbG9nKCl9XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXG4iXX0=