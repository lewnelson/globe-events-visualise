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
      var activeEvents = this.state.activeEvents;

      var _ref4 = this.props.theme || {},
          dialog = _ref4.dialog;

      var defaultDialog = Events.defaultProps.theme.dialog;
      return _react["default"].createElement(_Dialog["default"], {
        key: activeEvents.map(function (e) {
          return e.id;
        }).join(''),
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
        transitionAppear: dialog.transitionAppear,
        transitionAppearTimeout: dialog.transitionAppearTimeout,
        transitionName: dialog.transitionName,
        transitionEnter: dialog.transitionEnter,
        transitionEnterTimeout: dialog.transitionEnterTimeout,
        transitionLeave: dialog.transitionLeave,
        transitionLeaveTimeout: dialog.transitionLeaveTimeout
      }, this.state.showDialog && this.state.activeEvents && _react["default"].createElement("div", {
        key: "dialog-container"
      }, this.renderDialog())));
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
      transitionAppearTimeout: _propTypes["default"].number,
      transitionAppear: _propTypes["default"].bool,
      transitionEnter: _propTypes["default"].bool,
      transitionLeave: _propTypes["default"].bool,
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
      transitionAppearTimeout: 100,
      transitionAppear: false,
      transitionEnter: true,
      transitionLeave: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwic2V0U3RhdGUiLCJnbG9iZU9uUm90YXRlIiwiY29udHJvbHNFbmFibGVkIiwiZ2xvYmVPblJvdGF0ZUVuZCIsIm9uRGlhbG9nQ2xvc2UiLCJkaWFsb2dEb25lIiwic2hvd0RpYWxvZyIsImFjdGl2ZUV2ZW50cyIsInN0YXRlIiwiaW5pdFJvdGF0aW9uUG9pbnRzIiwibGVuZ3RoIiwiZXZlbnRzIiwiYW5pbWF0aW9uVGltZSIsImRvbmUiLCJ0aGVtZSIsImRlZmF1bHRQcm9wcyIsImxvYWRpbmdDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwibG9hZGluZ0NvbXBvbmVudENvbG9yIiwiZGlhbG9nIiwiZGVmYXVsdERpYWxvZyIsIm1hcCIsImUiLCJpZCIsImpvaW4iLCJnZXREaWFsb2dXaWR0aCIsImdldERpYWxvZ0hlaWdodCIsImxpZ2h0aW5nIiwiaW5pdFpvb21MZXZlbCIsImludGVuc2l0eSIsImNvbG9yIiwiYW5nbGUiLCJnbG9iZVRleHR1cmVVUkwiLCJnbG9iZUJ1bXBUZXh0dXJlVVJMIiwiaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb24iLCJpbmRleCIsImxhdCIsImxvbiIsImxvY2F0aW9uIiwibWFya2VyRHJvcERpc3RhbmNlIiwiZ2xvYmVNYXJrZXJDbGlja2VkIiwibWFya2VyQ29sb3IiLCJtYXJrZXJIaWdobGlnaHRDb2xvciIsIm1hcmtlckZvbnRDb2xvciIsIm1hcmtlckZvbnRIaWdobGlnaHRDb2xvciIsInJlbmRlckxvYWRlciIsInRyYW5zaXRpb25BcHBlYXIiLCJ0cmFuc2l0aW9uQXBwZWFyVGltZW91dCIsInRyYW5zaXRpb25OYW1lIiwidHJhbnNpdGlvbkVudGVyIiwidHJhbnNpdGlvbkVudGVyVGltZW91dCIsInRyYW5zaXRpb25MZWF2ZSIsInRyYW5zaXRpb25MZWF2ZVRpbWVvdXQiLCJyZW5kZXJEaWFsb2ciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwibmFtZSIsImFkZHJlc3MiLCJkYXRlIiwibG9jYWxUaW1lIiwidXJsIiwibm9kZSIsInRpdGxlRm9udEZhbWlseSIsInRpdGxlRm9udENvbG9yIiwidGl0bGVGb250V2VpZ2h0IiwiaGVhZGVyQmFja2dyb3VuZCIsImJvZHlCYWNrZ3JvdW5kIiwiY29udGFpbmVyQmFja2dyb3VuZCIsInNoYWRvd0NvbG9yIiwibGlua0NvbG9yIiwiYnV0dG9uQ29sb3IiLCJib2R5Rm9udEZhbWlseSIsImJvZHlGb250Q29sb3IiLCJib29sIiwiYmFja0J1dHRvbiIsIm9uZU9mVHlwZSIsImNsb3NlQnV0dG9uIiwiTWF0aCIsIlBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixvQkFHSjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQUhJLEVBSUg7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFnQkEsTUFBaEI7QUFBQSxDQUpHLENBQWY7O0lBT01DLE07Ozs7O0FBcUlKLGtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGdGQUFNQSxLQUFOO0FBRGtCLFVBa0JwQkMsVUFsQm9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBa0JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNMLElB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O0FBS0w1QixJQUFBQSxnQkFBZ0IsRUFBRSxJQUxiO0FBTUxFLElBQUFBLHFCQUFxQixFQUFFLFNBTmxCO0FBT0xDLElBQUFBLE1BQU0sRUFBRTtBQUNONkIsTUFBQUEsY0FBYyxFQUFFLFFBRFY7QUFFTkUsTUFBQUEsc0JBQXNCLEVBQUUsR0FGbEI7QUFHTkUsTUFBQUEsc0JBQXNCLEVBQUUsR0FIbEI7QUFJTkwsTUFBQUEsdUJBQXVCLEVBQUUsR0FKbkI7QUFLTkQsTUFBQUEsZ0JBQWdCLEVBQUUsS0FMWjtBQU1ORyxNQUFBQSxlQUFlLEVBQUUsSUFOWDtBQU9ORSxNQUFBQSxlQUFlLEVBQUUsSUFQWDtBQVFOaUIsTUFBQUEsZUFBZSxFQUFFLFlBUlg7QUFTTkMsTUFBQUEsY0FBYyxFQUFFLE1BVFY7QUFVTkMsTUFBQUEsZUFBZSxFQUFFLEtBVlg7QUFXTkMsTUFBQUEsZ0JBQWdCLEVBQUUsTUFYWjtBQVlOQyxNQUFBQSxjQUFjLEVBQUUsTUFaVjtBQWFOQyxNQUFBQSxtQkFBbUIsRUFBRSxNQWJmO0FBY05DLE1BQUFBLFdBQVcsRUFBRSxNQWRQO0FBZU5DLE1BQUFBLFNBQVMsRUFBRSxTQWZMO0FBZ0JOQyxNQUFBQSxXQUFXLEVBQUUsTUFoQlA7QUFpQk5DLE1BQUFBLGNBQWMsRUFBRSxZQWpCVjtBQWtCTkMsTUFBQUEsYUFBYSxFQUFFLE1BbEJUO0FBbUJORSxNQUFBQSxVQUFVLEVBQUUsZUFuQk47QUFvQk5FLE1BQUFBLFdBQVcsRUFBRTtBQXBCUDtBQVBIO0FBVmEsQztlQTRNVHpGLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnXG5pbXBvcnQgR2xvYmUgZnJvbSAnLi9HbG9iZSdcbmltcG9ydCBHbG9iZU1hcmtlciBmcm9tICcuL0dsb2JlTWFya2VyJ1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgU3BvdExpZ2h0IGZyb20gJy4vU3BvdExpZ2h0J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHR9cHg7XG5gXG5cbmNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdGhlIGdsb2JlXG4gICAgZXZlbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIC8vIFVuaXF1ZSBldmVudCBpZFxuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMYXRpdHVkZVxuICAgICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9uZ2l0dWRlXG4gICAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBOYW1lICh0aXRsZSkgb2YgdGhlIGV2ZW50XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9jYXRpb24gYXBwZWFycyBvbiB0aGUgZ2xvYmVcbiAgICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gQXBwZWFycyBpbiB0aGUgZGlhbG9nIGlmIGRlZmluZWQsIG90aGVyd2lzZSBsb2NhdGlvbiBpcyB1c2VkXG4gICAgICAgIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8vIERhdGUgb2YgdGhlIGV2ZW50XG4gICAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9jYWwgdGltZSBvZiB0aGUgZXZlbnRcbiAgICAgICAgbG9jYWxUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIFVSTCB0byB0aGUgZXZlbnRcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICApKS5pc1JlcXVpcmVkLFxuICAgIC8vIFdpZHRoIGluIHBpeGVsc1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy8gSGVpZ2h0IGluIHBpeGVsc1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIC8vIFVSTCBmb3IgdGhlIGdsb2JlcyBtYWluIHRleHR1cmVcbiAgICBnbG9iZVRleHR1cmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gVVJMIGZvciBhIGJ1bXAgbWFwIGlmIGFwcGxpY2FibGVcbiAgICBnbG9iZUJ1bXBUZXh0dXJlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIEZsb2F0aW5nIHBvaW50IGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVcbiAgICBpbml0Wm9vbUxldmVsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIEhvdyBxdWlja2x5IHdpbGwgdGhlIGdsb2JlIHJvdGF0ZSBwZXIgMTAwMGttIG9uIHRoZSBpbml0IGFuaW1hdGlvblxuICAgIGluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIFBvaW50cyB0byByb3RhdGUgYXJvdW5kIHdoZW4gdGhlIGdsb2JlIGxvYWRzXG4gICAgaW5pdFJvdGF0aW9uUG9pbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gICAgLy8gQWRqdXN0IHRoZSBsaWdodGluZyBmb3IgdGhlIHNjZW5lXG4gICAgbGlnaHRpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGludGVuc2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGFuZ2xlOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG4gICAgLy8gRGlzdGFuY2UgdGhhdCB0aGUgbWFya2VycyB3aWxsIGRyb3AgZnJvbSBzcGFjZVxuICAgIG1hcmtlckRyb3BEaXN0YW5jZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBDb2xvcnMgZXRjLlxuICAgIHRoZW1lOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWFya2VyQ29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGxvYWRpbmdDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGlhbG9nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZUZvbnRXZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaGFkb3dDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGlua0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBidXR0b25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8vIEpTWCBvciBhIHN0cmluZyBmb3IgdGhlIGNoYXJhY3RlciB0byBhcHBlYXJcbiAgICAgICAgYmFja0J1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKSxcbiAgICAgICAgLy8gSlNYIG9yIGEgc3RyaW5nIGZvciB0aGUgaW9uaWNvbiBpY29uIHRvIGFwcGVhciBodHRwczovL2lvbmljb25zLmNvbS8gcHJlcGVuZCBpb3MtIG9yIG1kLVxuICAgICAgICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaWdodGluZzoge1xuICAgICAgY29sb3I6IDB4NDA0MDQwLFxuICAgICAgaW50ZW5zaXR5OiA4LFxuICAgICAgYW5nbGU6IE1hdGguUEkgLyA2XG4gICAgfSxcbiAgICBtYXJrZXJEcm9wRGlzdGFuY2U6IDEsXG4gICAgaW5pdFJvdGF0aW9uUG9pbnRzOiBbXSxcbiAgICBnbG9iZVRleHR1cmVVUkw6ICdodHRwczovL2xld25lbHNvbi5naXRodWIuaW8vcmVhY3QtZ2xvYmUtZXZlbnRzLXZpc3VhbGlzZXIvYXNzZXRzL2ltYWdlcy90ZXh0dXJlcy9yZWFsaXN0aWMtZ2xvYmUvZ2xvYmUuanBnJyxcbiAgICBnbG9iZUJ1bXBUZXh0dXJlVVJMOiAnaHR0cHM6Ly9sZXduZWxzb24uZ2l0aHViLmlvL3JlYWN0LWdsb2JlLWV2ZW50cy12aXN1YWxpc2VyL2Fzc2V0cy9pbWFnZXMvdGV4dHVyZXMvcmVhbGlzdGljLWdsb2JlL2dsb2JlLmpwZycsXG4gICAgdGhlbWU6IHtcbiAgICAgIG1hcmtlckNvbG9yOiAweDcwOWNmMCxcbiAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yOiAweDFmYzFjMyxcbiAgICAgIG1hcmtlckZvbnRDb2xvcjogMHg3MDljZjAsXG4gICAgICBtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3I6IDB4MWZjMWMzLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudDogbnVsbCxcbiAgICAgIGxvYWRpbmdDb21wb25lbnRDb2xvcjogJyMwMDAwZmYnLFxuICAgICAgZGlhbG9nOiB7XG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiAnZGlhbG9nJyxcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dDogNTAwLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiA1MDAsXG4gICAgICAgIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0OiAxMDAsXG4gICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZTogdHJ1ZSxcbiAgICAgICAgdGl0bGVGb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiAnIzAwMCcsXG4gICAgICAgIHRpdGxlRm9udFdlaWdodDogJzYwMCcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6ICcjZGRkJyxcbiAgICAgICAgYm9keUJhY2tncm91bmQ6ICcjZWVlJyxcbiAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZDogJyNlZWUnLFxuICAgICAgICBzaGFkb3dDb2xvcjogJyMwMDAnLFxuICAgICAgICBsaW5rQ29sb3I6ICcjMDAwMGZmJyxcbiAgICAgICAgYnV0dG9uQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrQnV0dG9uOiAnbWQtYXJyb3ctYmFjaycsXG4gICAgICAgIGNsb3NlQnV0dG9uOiAnbWQtY2xvc2UtY2lyY2xlLW91dGxpbmUnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdsb2JlUmVhZHk6IGZhbHNlLFxuICAgICAgY29udHJvbHNFbmFibGVkOiAhKHByb3BzLmluaXRSb3RhdGlvblBvaW50cy5sZW5ndGggPiAxKSxcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgICAgYWN0aXZlRXZlbnRzOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgZ2xvYmVSZWFkeSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXG4gICAgdGhpcy5faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUoeyBnbG9iZVJlYWR5OiB0cnVlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IGZhbHNlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlRW5kID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUgfSlcbiAgfVxuXG4gIGFzeW5jIGdsb2JlTWFya2VyQ2xpY2tlZCAoZXZlbnRzLCBhbmltYXRpb25UaW1lLCBkb25lKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogZmFsc2UgfSlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIGFuaW1hdGlvblRpbWUpKVxuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICBpZiAoZG9uZSkgdGhpcy5kaWFsb2dEb25lID0gZG9uZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIGFjdGl2ZUV2ZW50czogZXZlbnRzXG4gICAgfSlcbiAgfVxuXG4gIG9uRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5kaWFsb2dEb25lICYmIHRoaXMuZGlhbG9nRG9uZSgpXG4gICAgdGhpcy5kaWFsb2dEb25lID0gbnVsbFxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUsIHNob3dEaWFsb2c6IGZhbHNlLCBhY3RpdmVFdmVudHM6IG51bGwgfSlcbiAgfVxuXG4gIGdldERpYWxvZ1dpZHRoICgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoIC8gM1xuICAgIGlmICh3aWR0aCA8IDMyMCkgd2lkdGggPSAzMjBcbiAgICBpZiAod2lkdGggPiA0MDApIHdpZHRoID0gNDAwXG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICBnZXREaWFsb2dIZWlnaHQgKCkge1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCAvIDJcbiAgICBpZiAoaGVpZ2h0IDwgMzAwKSBoZWlnaHQgPSAzMDBcbiAgICBpZiAoaGVpZ2h0ID4gNjAwKSBoZWlnaHQgPSA2MDBcbiAgICByZXR1cm4gaGVpZ2h0XG4gIH1cblxuICByZW5kZXJMb2FkZXIgKCkge1xuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICBpZiAodGhlbWUubG9hZGluZ0NvbXBvbmVudCkge1xuICAgICAgY29uc3QgTG9hZGluZ0NvbXBvbmVudCA9IHRoZW1lLmxvYWRpbmdDb21wb25lbnRcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkZXIgY29sb3I9e3RoZW1lLmxvYWRpbmdDb21wb25lbnRDb2xvcn0+XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnQgLz5cbiAgICAgICAgPC9Mb2FkZXI+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkZXIgY29sb3I9e3RoZW1lLmxvYWRpbmdDb21wb25lbnRDb2xvcn0gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXJEaWFsb2cgKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlRXZlbnRzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBkaWFsb2cgfSA9IHRoaXMucHJvcHMudGhlbWUgfHwge31cbiAgICBjb25zdCBkZWZhdWx0RGlhbG9nID0gRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZS5kaWFsb2dcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ1xuICAgICAgICBrZXk9e2FjdGl2ZUV2ZW50cy5tYXAoZSA9PiBlLmlkKS5qb2luKCcnKX1cbiAgICAgICAgZXZlbnRzPXthY3RpdmVFdmVudHN9XG4gICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLm9uRGlhbG9nQ2xvc2V9XG4gICAgICAgIHdpZHRoPXt0aGlzLmdldERpYWxvZ1dpZHRoKCl9XG4gICAgICAgIGhlaWdodD17dGhpcy5nZXREaWFsb2dIZWlnaHQoKX1cbiAgICAgICAgdGhlbWU9e3sgLi4uZGVmYXVsdERpYWxvZywgLi4uZGlhbG9nIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbGlnaHRpbmcgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMubGlnaHRpbmcsIC4uLnRoaXMucHJvcHMubGlnaHRpbmcgfVxuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICBjb25zdCBkaWFsb2cgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUuZGlhbG9nLCAuLi4odGhpcy5wcm9wcy50aGVtZSB8fCB7fSkuZGlhbG9nIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0+XG4gICAgICAgIDxTY2VuZSB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0gY29udHJvbHNFbmFibGVkPXt0aGlzLnN0YXRlLmNvbnRyb2xzRW5hYmxlZH0gaW5pdFpvb21MZXZlbD17dGhpcy5wcm9wcy5pbml0Wm9vbUxldmVsfT5cbiAgICAgICAgICA8U3BvdExpZ2h0XG4gICAgICAgICAgICBpZD0nbWFpbl9saWdodCdcbiAgICAgICAgICAgIGludGVuc2l0eT17bGlnaHRpbmcuaW50ZW5zaXR5fVxuICAgICAgICAgICAgY29sb3I9e2xpZ2h0aW5nLmNvbG9yfVxuICAgICAgICAgICAgYW5nbGU9e2xpZ2h0aW5nLmFuZ2xlfVxuICAgICAgICAgICAgZGlzdGFuY2U9ezEwMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R2xvYmVcbiAgICAgICAgICAgIGlkPSdnbG9iZSdcbiAgICAgICAgICAgIGltYWdlUGF0aD17dGhpcy5wcm9wcy5nbG9iZVRleHR1cmVVUkx9XG4gICAgICAgICAgICBidW1wUGF0aD17dGhpcy5wcm9wcy5nbG9iZUJ1bXBUZXh0dXJlVVJMfVxuICAgICAgICAgICAgcmFkaXVzPXszMH1cbiAgICAgICAgICAgIG9uVGV4dHVyZWQ9e3RoaXMuZ2xvYmVSZWFkeX1cbiAgICAgICAgICAgIG9uUm90YXRlPXt0aGlzLmdsb2JlT25Sb3RhdGV9XG4gICAgICAgICAgICBvblJvdGF0ZUVuZD17dGhpcy5nbG9iZU9uUm90YXRlRW5kfVxuICAgICAgICAgICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb249e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICBpbml0Um90YXRpb25Qb2ludHM9e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudHMubWFwKChldmVudHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHbG9iZU1hcmtlclxuICAgICAgICAgICAgICAgIGtleT17ZXZlbnRzWzBdLmlkfVxuICAgICAgICAgICAgICAgIGlkPXtldmVudHNbMF0uaWR9XG4gICAgICAgICAgICAgICAgZXZlbnRDb3VudD17ZXZlbnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBnbG9iZT0nZ2xvYmUnXG4gICAgICAgICAgICAgICAgbGF0PXtldmVudHNbMF0ubGF0fVxuICAgICAgICAgICAgICAgIGxvbj17ZXZlbnRzWzBdLmxvbn1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU9e2V2ZW50c1swXS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICByYWRpdXM9ezAuM31cbiAgICAgICAgICAgICAgICBkcm9wRGlzdGFuY2U9e3RoaXMucHJvcHMubWFya2VyRHJvcERpc3RhbmNlfVxuICAgICAgICAgICAgICAgIHpJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGFuaW1hdGlvblRpbWUsIGRvbmUpID0+IHRoaXMuZ2xvYmVNYXJrZXJDbGlja2VkKGV2ZW50cywgYW5pbWF0aW9uVGltZSwgZG9uZSl9XG4gICAgICAgICAgICAgICAgbWFya2VyQ29sb3I9e3RoZW1lLm1hcmtlckNvbG9yfVxuICAgICAgICAgICAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yPXt0aGVtZS5tYXJrZXJIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250SGlnaGxpZ2h0Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1NjZW5lPlxuICAgICAgICB7IXRoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJiB0aGlzLnJlbmRlckxvYWRlcigpfVxuICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyPXtkaWFsb2cudHJhbnNpdGlvbkFwcGVhcn1cbiAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyVGltZW91dD17ZGlhbG9nLnRyYW5zaXRpb25BcHBlYXJUaW1lb3V0fVxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtkaWFsb2cudHJhbnNpdGlvbk5hbWV9XG4gICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXtkaWFsb2cudHJhbnNpdGlvbkVudGVyfVxuICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0fVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZT17ZGlhbG9nLnRyYW5zaXRpb25MZWF2ZX1cbiAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXtkaWFsb2cudHJhbnNpdGlvbkxlYXZlVGltZW91dH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEaWFsb2cgJiYgdGhpcy5zdGF0ZS5hY3RpdmVFdmVudHMgJiZcbiAgICAgICAgICAgIDxkaXYga2V5PSdkaWFsb2ctY29udGFpbmVyJz5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGlhbG9nKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXG4iXX0=