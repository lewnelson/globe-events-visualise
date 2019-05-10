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
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  width: ", "px;\n  height: ", "px;\n\n  .dialog-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n  }\n"]);

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
        transitionName: dialog.transitionName,
        transitionEnterTimeout: dialog.transitionEnterTimeout,
        transitionLeaveTimeout: dialog.transitionLeaveTimeout
      }, this.state.showDialog && this.state.activeEvents && _react["default"].createElement("div", {
        className: "dialog-container",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwic2V0U3RhdGUiLCJnbG9iZU9uUm90YXRlIiwiY29udHJvbHNFbmFibGVkIiwiZ2xvYmVPblJvdGF0ZUVuZCIsIm9uRGlhbG9nQ2xvc2UiLCJkaWFsb2dEb25lIiwic2hvd0RpYWxvZyIsImFjdGl2ZUV2ZW50cyIsInN0YXRlIiwiaW5pdFJvdGF0aW9uUG9pbnRzIiwibGVuZ3RoIiwiZXZlbnRzIiwiYW5pbWF0aW9uVGltZSIsImRvbmUiLCJ0aGVtZSIsImRlZmF1bHRQcm9wcyIsImxvYWRpbmdDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwibG9hZGluZ0NvbXBvbmVudENvbG9yIiwiZGlhbG9nIiwiZGVmYXVsdERpYWxvZyIsIm1hcCIsImUiLCJpZCIsImpvaW4iLCJnZXREaWFsb2dXaWR0aCIsImdldERpYWxvZ0hlaWdodCIsImxpZ2h0aW5nIiwiaW5pdFpvb21MZXZlbCIsImludGVuc2l0eSIsImNvbG9yIiwiYW5nbGUiLCJnbG9iZVRleHR1cmVVUkwiLCJnbG9iZUJ1bXBUZXh0dXJlVVJMIiwiaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb24iLCJpbmRleCIsImxhdCIsImxvbiIsImxvY2F0aW9uIiwibWFya2VyRHJvcERpc3RhbmNlIiwiZ2xvYmVNYXJrZXJDbGlja2VkIiwibWFya2VyQ29sb3IiLCJtYXJrZXJIaWdobGlnaHRDb2xvciIsIm1hcmtlckZvbnRDb2xvciIsIm1hcmtlckZvbnRIaWdobGlnaHRDb2xvciIsInJlbmRlckxvYWRlciIsInRyYW5zaXRpb25OYW1lIiwidHJhbnNpdGlvbkVudGVyVGltZW91dCIsInRyYW5zaXRpb25MZWF2ZVRpbWVvdXQiLCJyZW5kZXJEaWFsb2ciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwibmFtZSIsImFkZHJlc3MiLCJkYXRlIiwibG9jYWxUaW1lIiwidXJsIiwibm9kZSIsInRpdGxlRm9udEZhbWlseSIsInRpdGxlRm9udENvbG9yIiwidGl0bGVGb250V2VpZ2h0IiwiaGVhZGVyQmFja2dyb3VuZCIsImJvZHlCYWNrZ3JvdW5kIiwiY29udGFpbmVyQmFja2dyb3VuZCIsInNoYWRvd0NvbG9yIiwibGlua0NvbG9yIiwiYnV0dG9uQ29sb3IiLCJib2R5Rm9udEZhbWlseSIsImJvZHlGb250Q29sb3IiLCJ0cmFuc2l0aW9uQXBwZWFyVGltZW91dCIsInRyYW5zaXRpb25BcHBlYXIiLCJib29sIiwidHJhbnNpdGlvbkVudGVyIiwidHJhbnNpdGlvbkxlYXZlIiwiYmFja0J1dHRvbiIsIm9uZU9mVHlwZSIsImNsb3NlQnV0dG9uIiwiTWF0aCIsIlBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixvQkFHSjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQUhJLEVBSUg7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFnQkEsTUFBaEI7QUFBQSxDQUpHLENBQWY7O0lBYU1DLE07Ozs7O0FBaUlKLGtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGdGQUFNQSxLQUFOO0FBRGtCLFVBa0JwQkMsVUFsQm9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBa0JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNMLElB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QUFHTkMsTUFBQUEsc0JBQXNCLEVBQUUsR0FIbEI7QUFJTmdCLE1BQUFBLGVBQWUsRUFBRSxZQUpYO0FBS05DLE1BQUFBLGNBQWMsRUFBRSxNQUxWO0FBTU5DLE1BQUFBLGVBQWUsRUFBRSxLQU5YO0FBT05DLE1BQUFBLGdCQUFnQixFQUFFLE1BUFo7QUFRTkMsTUFBQUEsY0FBYyxFQUFFLE1BUlY7QUFTTkMsTUFBQUEsbUJBQW1CLEVBQUUsTUFUZjtBQVVOQyxNQUFBQSxXQUFXLEVBQUUsTUFWUDtBQVdOQyxNQUFBQSxTQUFTLEVBQUUsU0FYTDtBQVlOQyxNQUFBQSxXQUFXLEVBQUUsTUFaUDtBQWFOQyxNQUFBQSxjQUFjLEVBQUUsWUFiVjtBQWNOQyxNQUFBQSxhQUFhLEVBQUUsTUFkVDtBQWVOTSxNQUFBQSxVQUFVLEVBQUUsZUFmTjtBQWdCTkUsTUFBQUEsV0FBVyxFQUFFO0FBaEJQO0FBUEg7QUFWYSxDO2VBb01UekYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSdcbmltcG9ydCBHbG9iZSBmcm9tICcuL0dsb2JlJ1xuaW1wb3J0IEdsb2JlTWFya2VyIGZyb20gJy4vR2xvYmVNYXJrZXInXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcbmltcG9ydCBTcG90TGlnaHQgZnJvbSAnLi9TcG90TGlnaHQnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRofXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcblxuICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgfVxuYFxuXG5jbGFzcyBFdmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIEFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IG9uIHRoZSBnbG9iZVxuICAgIGV2ZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAvLyBVbmlxdWUgZXZlbnQgaWRcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTGF0aXR1ZGVcbiAgICAgICAgbGF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExvbmdpdHVkZVxuICAgICAgICBsb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTmFtZSAodGl0bGUpIG9mIHRoZSBldmVudFxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExvY2F0aW9uIGFwcGVhcnMgb24gdGhlIGdsb2JlXG4gICAgICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIEFwcGVhcnMgaW4gdGhlIGRpYWxvZyBpZiBkZWZpbmVkLCBvdGhlcndpc2UgbG9jYXRpb24gaXMgdXNlZFxuICAgICAgICBhZGRyZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvLyBEYXRlIG9mIHRoZSBldmVudFxuICAgICAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExvY2FsIHRpbWUgb2YgdGhlIGV2ZW50XG4gICAgICAgIGxvY2FsVGltZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBVUkwgdG8gdGhlIGV2ZW50XG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KS5pc1JlcXVpcmVkXG4gICAgKSkuaXNSZXF1aXJlZCxcbiAgICAvLyBXaWR0aCBpbiBwaXhlbHNcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIC8vIEhlaWdodCBpbiBwaXhlbHNcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvLyBVUkwgZm9yIHRoZSBnbG9iZXMgbWFpbiB0ZXh0dXJlXG4gICAgZ2xvYmVUZXh0dXJlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIFVSTCBmb3IgYSBidW1wIG1hcCBpZiBhcHBsaWNhYmxlXG4gICAgZ2xvYmVCdW1wVGV4dHVyZVVSTDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBGbG9hdGluZyBwb2ludCBiZXR3ZWVuIDAgYW5kIDEgaW5jbHVzaXZlXG4gICAgaW5pdFpvb21MZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBIb3cgcXVpY2tseSB3aWxsIHRoZSBnbG9iZSByb3RhdGUgcGVyIDEwMDBrbSBvbiB0aGUgaW5pdCBhbmltYXRpb25cbiAgICBpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBQb2ludHMgdG8gcm90YXRlIGFyb3VuZCB3aGVuIHRoZSBnbG9iZSBsb2Fkc1xuICAgIGluaXRSb3RhdGlvblBvaW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSkpLFxuICAgIC8vIEFkanVzdCB0aGUgbGlnaHRpbmcgZm9yIHRoZSBzY2VuZVxuICAgIGxpZ2h0aW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBpbnRlbnNpdHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBhbmdsZTogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLFxuICAgIC8vIERpc3RhbmNlIHRoYXQgdGhlIG1hcmtlcnMgd2lsbCBkcm9wIGZyb20gc3BhY2VcbiAgICBtYXJrZXJEcm9wRGlzdGFuY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gQ29sb3JzIGV0Yy5cbiAgICB0aGVtZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1hcmtlckNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJGb250Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBsb2FkaW5nQ29tcG9uZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAgIGxvYWRpbmdDb21wb25lbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGRpYWxvZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgdGl0bGVGb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZUZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdGl0bGVGb250V2VpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBib2R5QmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2hhZG93Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxpbmtDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYnV0dG9uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlGb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBib2R5Rm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvLyBKU1ggb3IgYSBzdHJpbmcgZm9yIHRoZSBjaGFyYWN0ZXIgdG8gYXBwZWFyXG4gICAgICAgIGJhY2tCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICAgICAgXSksXG4gICAgICAgIC8vIEpTWCBvciBhIHN0cmluZyBmb3IgdGhlIGlvbmljb24gaWNvbiB0byBhcHBlYXIgaHR0cHM6Ly9pb25pY29ucy5jb20vIHByZXBlbmQgaW9zLSBvciBtZC1cbiAgICAgICAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGlnaHRpbmc6IHtcbiAgICAgIGNvbG9yOiAweDQwNDA0MCxcbiAgICAgIGludGVuc2l0eTogOCxcbiAgICAgIGFuZ2xlOiBNYXRoLlBJIC8gNlxuICAgIH0sXG4gICAgbWFya2VyRHJvcERpc3RhbmNlOiAxLFxuICAgIGluaXRSb3RhdGlvblBvaW50czogW10sXG4gICAgZ2xvYmVUZXh0dXJlVVJMOiAnaHR0cHM6Ly9sZXduZWxzb24uZ2l0aHViLmlvL3JlYWN0LWdsb2JlLWV2ZW50cy12aXN1YWxpc2VyL2Fzc2V0cy9pbWFnZXMvdGV4dHVyZXMvcmVhbGlzdGljLWdsb2JlL2dsb2JlLmpwZycsXG4gICAgZ2xvYmVCdW1wVGV4dHVyZVVSTDogJ2h0dHBzOi8vbGV3bmVsc29uLmdpdGh1Yi5pby9yZWFjdC1nbG9iZS1ldmVudHMtdmlzdWFsaXNlci9hc3NldHMvaW1hZ2VzL3RleHR1cmVzL3JlYWxpc3RpYy1nbG9iZS9nbG9iZS5qcGcnLFxuICAgIHRoZW1lOiB7XG4gICAgICBtYXJrZXJDb2xvcjogMHg3MDljZjAsXG4gICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogMHgxZmMxYzMsXG4gICAgICBtYXJrZXJGb250Q29sb3I6IDB4NzA5Y2YwLFxuICAgICAgbWFya2VyRm9udEhpZ2hsaWdodENvbG9yOiAweDFmYzFjMyxcbiAgICAgIGxvYWRpbmdDb21wb25lbnQ6IG51bGwsXG4gICAgICBsb2FkaW5nQ29tcG9uZW50Q29sb3I6ICcjMDAwMGZmJyxcbiAgICAgIGRpYWxvZzoge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ2RpYWxvZycsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDUwMCxcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogNTAwLFxuICAgICAgICB0aXRsZUZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgdGl0bGVGb250Q29sb3I6ICcjMDAwJyxcbiAgICAgICAgdGl0bGVGb250V2VpZ2h0OiAnNjAwJyxcbiAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogJyNkZGQnLFxuICAgICAgICBib2R5QmFja2dyb3VuZDogJyNlZWUnLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgICAgIHNoYWRvd0NvbG9yOiAnIzAwMCcsXG4gICAgICAgIGxpbmtDb2xvcjogJyMwMDAwZmYnLFxuICAgICAgICBidXR0b25Db2xvcjogJyMwMDAnLFxuICAgICAgICBib2R5Rm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICBib2R5Rm9udENvbG9yOiAnIzAwMCcsXG4gICAgICAgIGJhY2tCdXR0b246ICdtZC1hcnJvdy1iYWNrJyxcbiAgICAgICAgY2xvc2VCdXR0b246ICdtZC1jbG9zZS1jaXJjbGUtb3V0bGluZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ2xvYmVSZWFkeTogZmFsc2UsXG4gICAgICBjb250cm9sc0VuYWJsZWQ6ICEocHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzLmxlbmd0aCA+IDEpLFxuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgICBhY3RpdmVFdmVudHM6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlXG4gIH1cblxuICBnbG9iZVJlYWR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcbiAgICB0aGlzLl9pc01vdW50ZWQgJiYgdGhpcy5zZXRTdGF0ZSh7IGdsb2JlUmVhZHk6IHRydWUgfSlcbiAgfVxuXG4gIGdsb2JlT25Sb3RhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogZmFsc2UgfSlcbiAgfVxuXG4gIGdsb2JlT25Sb3RhdGVFbmQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSB9KVxuICB9XG5cbiAgYXN5bmMgZ2xvYmVNYXJrZXJDbGlja2VkIChldmVudHMsIGFuaW1hdGlvblRpbWUsIGRvbmUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiBmYWxzZSB9KVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgYW5pbWF0aW9uVGltZSkpXG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVyblxuICAgIGlmIChkb25lKSB0aGlzLmRpYWxvZ0RvbmUgPSBkb25lXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgYWN0aXZlRXZlbnRzOiBldmVudHNcbiAgICB9KVxuICB9XG5cbiAgb25EaWFsb2dDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmRpYWxvZ0RvbmUgJiYgdGhpcy5kaWFsb2dEb25lKClcbiAgICB0aGlzLmRpYWxvZ0RvbmUgPSBudWxsXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSwgc2hvd0RpYWxvZzogZmFsc2UsIGFjdGl2ZUV2ZW50czogbnVsbCB9KVxuICB9XG5cbiAgZ2V0RGlhbG9nV2lkdGggKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMucHJvcHMud2lkdGggLyAzXG4gICAgaWYgKHdpZHRoIDwgMzIwKSB3aWR0aCA9IDMyMFxuICAgIGlmICh3aWR0aCA+IDQwMCkgd2lkdGggPSA0MDBcbiAgICByZXR1cm4gd2lkdGhcbiAgfVxuXG4gIGdldERpYWxvZ0hlaWdodCAoKSB7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMlxuICAgIGlmIChoZWlnaHQgPCAzMDApIGhlaWdodCA9IDMwMFxuICAgIGlmIChoZWlnaHQgPiA2MDApIGhlaWdodCA9IDYwMFxuICAgIHJldHVybiBoZWlnaHRcbiAgfVxuXG4gIHJlbmRlckxvYWRlciAoKSB7XG4gICAgY29uc3QgdGhlbWUgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUsIC4uLnRoaXMucHJvcHMudGhlbWUgfVxuICAgIGlmICh0aGVtZS5sb2FkaW5nQ29tcG9uZW50KSB7XG4gICAgICBjb25zdCBMb2FkaW5nQ29tcG9uZW50ID0gdGhlbWUubG9hZGluZ0NvbXBvbmVudFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRlciBjb2xvcj17dGhlbWUubG9hZGluZ0NvbXBvbmVudENvbG9yfT5cbiAgICAgICAgICA8TG9hZGluZ0NvbXBvbmVudCAvPlxuICAgICAgICA8L0xvYWRlcj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRlciBjb2xvcj17dGhlbWUubG9hZGluZ0NvbXBvbmVudENvbG9yfSAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckRpYWxvZyAoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVFdmVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGRpYWxvZyB9ID0gdGhpcy5wcm9wcy50aGVtZSB8fCB7fVxuICAgIGNvbnN0IGRlZmF1bHREaWFsb2cgPSBFdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLmRpYWxvZ1xuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIGtleT17YWN0aXZlRXZlbnRzLm1hcChlID0+IGUuaWQpLmpvaW4oJycpfVxuICAgICAgICBldmVudHM9e2FjdGl2ZUV2ZW50c31cbiAgICAgICAgY2xvc2VEaWFsb2c9e3RoaXMub25EaWFsb2dDbG9zZX1cbiAgICAgICAgd2lkdGg9e3RoaXMuZ2V0RGlhbG9nV2lkdGgoKX1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLmdldERpYWxvZ0hlaWdodCgpfVxuICAgICAgICB0aGVtZT17eyAuLi5kZWZhdWx0RGlhbG9nLCAuLi5kaWFsb2cgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBsaWdodGluZyA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy5saWdodGluZywgLi4udGhpcy5wcm9wcy5saWdodGluZyB9XG4gICAgY29uc3QgdGhlbWUgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUsIC4uLnRoaXMucHJvcHMudGhlbWUgfVxuICAgIGNvbnN0IGRpYWxvZyA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZS5kaWFsb2csIC4uLih0aGlzLnByb3BzLnRoZW1lIHx8IHt9KS5kaWFsb2cgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fT5cbiAgICAgICAgPFNjZW5lIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fSBjb250cm9sc0VuYWJsZWQ9e3RoaXMuc3RhdGUuY29udHJvbHNFbmFibGVkfSBpbml0Wm9vbUxldmVsPXt0aGlzLnByb3BzLmluaXRab29tTGV2ZWx9PlxuICAgICAgICAgIDxTcG90TGlnaHRcbiAgICAgICAgICAgIGlkPSdtYWluX2xpZ2h0J1xuICAgICAgICAgICAgaW50ZW5zaXR5PXtsaWdodGluZy5pbnRlbnNpdHl9XG4gICAgICAgICAgICBjb2xvcj17bGlnaHRpbmcuY29sb3J9XG4gICAgICAgICAgICBhbmdsZT17bGlnaHRpbmcuYW5nbGV9XG4gICAgICAgICAgICBkaXN0YW5jZT17MTAwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHbG9iZVxuICAgICAgICAgICAgaWQ9J2dsb2JlJ1xuICAgICAgICAgICAgaW1hZ2VQYXRoPXt0aGlzLnByb3BzLmdsb2JlVGV4dHVyZVVSTH1cbiAgICAgICAgICAgIGJ1bXBQYXRoPXt0aGlzLnByb3BzLmdsb2JlQnVtcFRleHR1cmVVUkx9XG4gICAgICAgICAgICByYWRpdXM9ezMwfVxuICAgICAgICAgICAgb25UZXh0dXJlZD17dGhpcy5nbG9iZVJlYWR5fVxuICAgICAgICAgICAgb25Sb3RhdGU9e3RoaXMuZ2xvYmVPblJvdGF0ZX1cbiAgICAgICAgICAgIG9uUm90YXRlRW5kPXt0aGlzLmdsb2JlT25Sb3RhdGVFbmR9XG4gICAgICAgICAgICBpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbj17dGhpcy5wcm9wcy5pbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgIGluaXRSb3RhdGlvblBvaW50cz17dGhpcy5wcm9wcy5pbml0Um90YXRpb25Qb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5nbG9iZVJlYWR5ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50cy5tYXAoKGV2ZW50cywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEdsb2JlTWFya2VyXG4gICAgICAgICAgICAgICAga2V5PXtldmVudHNbMF0uaWR9XG4gICAgICAgICAgICAgICAgaWQ9e2V2ZW50c1swXS5pZH1cbiAgICAgICAgICAgICAgICBldmVudENvdW50PXtldmVudHMubGVuZ3RofVxuICAgICAgICAgICAgICAgIGdsb2JlPSdnbG9iZSdcbiAgICAgICAgICAgICAgICBsYXQ9e2V2ZW50c1swXS5sYXR9XG4gICAgICAgICAgICAgICAgbG9uPXtldmVudHNbMF0ubG9ufVxuICAgICAgICAgICAgICAgIGxvY2F0aW9uTmFtZT17ZXZlbnRzWzBdLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIHJhZGl1cz17MC4zfVxuICAgICAgICAgICAgICAgIGRyb3BEaXN0YW5jZT17dGhpcy5wcm9wcy5tYXJrZXJEcm9wRGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgekluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoYW5pbWF0aW9uVGltZSwgZG9uZSkgPT4gdGhpcy5nbG9iZU1hcmtlckNsaWNrZWQoZXZlbnRzLCBhbmltYXRpb25UaW1lLCBkb25lKX1cbiAgICAgICAgICAgICAgICBtYXJrZXJDb2xvcj17dGhlbWUubWFya2VyQ29sb3J9XG4gICAgICAgICAgICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I9e3RoZW1lLm1hcmtlckhpZ2hsaWdodENvbG9yfVxuICAgICAgICAgICAgICAgIGZvbnRDb2xvcj17dGhlbWUubWFya2VyRm9udENvbG9yfVxuICAgICAgICAgICAgICAgIGZvbnRIaWdobGlnaHRDb2xvcj17dGhlbWUubWFya2VyRm9udEhpZ2hsaWdodENvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvU2NlbmU+XG4gICAgICAgIHshdGhpcy5zdGF0ZS5nbG9iZVJlYWR5ICYmIHRoaXMucmVuZGVyTG9hZGVyKCl9XG4gICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtkaWFsb2cudHJhbnNpdGlvbk5hbWV9XG4gICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17ZGlhbG9nLnRyYW5zaXRpb25FbnRlclRpbWVvdXR9XG4gICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17ZGlhbG9nLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGlhbG9nICYmIHRoaXMuc3RhdGUuYWN0aXZlRXZlbnRzICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlhbG9nLWNvbnRhaW5lcicga2V5PSdkaWFsb2ctY29udGFpbmVyJz5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGlhbG9nKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXG4iXX0=