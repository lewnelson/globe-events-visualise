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
              if (_this._isMounted) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _this.props.onReady && _this.props.onReady();

              _this.setState({
                globeReady: true
              });

            case 6:
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
        theme: _objectSpread({}, defaultDialog, dialog),
        DialogTitleComponent: this.props.DialogTitleComponent,
        DialogBodyComponent: this.props.DialogBodyComponent
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
        initZoomLevel: this.props.initZoomLevel,
        enableZoom: this.props.enableZoom
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
          fontSize: _this2.props.markerFontSize,
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
      })), _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
        transitionName: dialog.transitionName,
        transitionEnterTimeout: dialog.transitionEnterTimeout,
        transitionLeaveTimeout: dialog.transitionLeaveTimeout
      }, this.state.showDialog && this.state.activeEvents && _react["default"].createElement("div", {
        className: "dialog-container",
        key: "dialog-container"
      }, this.renderDialog())), this.props.children);
    }
  }]);

  return Events;
}(_react.Component);

Events.propTypes = {
  // Called when the scene is ready and loaded 
  onReady: _propTypes["default"].func,
  // Enable/disable zoom controls
  enableZoom: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),
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
    // When is the event, any format is accepted
    datetime: _propTypes["default"].string.isRequired,
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
  // How big is the font, defaults to 0.3
  markerFontSize: _propTypes["default"].number,
  // Component to use for the dialog title
  // Receives props:
  // - event (for single event, event object)
  DialogTitleComponent: _propTypes["default"].func,
  // Component to use for the dialog body
  // Receives props:
  // - event (for single event, event object)
  DialogBodyComponent: _propTypes["default"].func,
  // Colors etc.
  theme: _propTypes["default"].shape({
    markerColor: _propTypes["default"].number,
    markerHighlightColor: _propTypes["default"].number,
    markerFontColor: _propTypes["default"].number,
    markerFontHighlightColor: _propTypes["default"].number,
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
      transitionName: _propTypes["default"].string,
      transitionEnterTimeout: _propTypes["default"].number,
      transitionLeaveTimeout: _propTypes["default"].number,
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
  enableZoom: true,
  markerDropDistance: 1,
  initRotationPoints: [],
  globeTextureURL: 'https://lewnelson.github.io/react-globe-events-visualiser/assets/images/textures/realistic-globe/globe.jpg',
  globeBumpTextureURL: 'https://lewnelson.github.io/react-globe-events-visualiser/assets/images/textures/realistic-globe/globe.jpg',
  theme: {
    markerColor: 0x709cf0,
    markerHighlightColor: 0x1fc1c3,
    markerFontColor: 0x709cf0,
    markerFontHighlightColor: 0x1fc1c3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwib25SZWFkeSIsInNldFN0YXRlIiwiZ2xvYmVPblJvdGF0ZSIsImNvbnRyb2xzRW5hYmxlZCIsImdsb2JlT25Sb3RhdGVFbmQiLCJvbkRpYWxvZ0Nsb3NlIiwiZGlhbG9nRG9uZSIsInNob3dEaWFsb2ciLCJhY3RpdmVFdmVudHMiLCJzdGF0ZSIsImluaXRSb3RhdGlvblBvaW50cyIsImxlbmd0aCIsImV2ZW50cyIsImFuaW1hdGlvblRpbWUiLCJkb25lIiwidGhlbWUiLCJkaWFsb2ciLCJkZWZhdWx0RGlhbG9nIiwiZGVmYXVsdFByb3BzIiwibWFwIiwiZSIsImlkIiwiam9pbiIsImdldERpYWxvZ1dpZHRoIiwiZ2V0RGlhbG9nSGVpZ2h0IiwiRGlhbG9nVGl0bGVDb21wb25lbnQiLCJEaWFsb2dCb2R5Q29tcG9uZW50IiwibGlnaHRpbmciLCJpbml0Wm9vbUxldmVsIiwiZW5hYmxlWm9vbSIsImludGVuc2l0eSIsImNvbG9yIiwiYW5nbGUiLCJnbG9iZVRleHR1cmVVUkwiLCJnbG9iZUJ1bXBUZXh0dXJlVVJMIiwiaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb24iLCJpbmRleCIsImxhdCIsImxvbiIsImxvY2F0aW9uIiwibWFya2VyRm9udFNpemUiLCJtYXJrZXJEcm9wRGlzdGFuY2UiLCJnbG9iZU1hcmtlckNsaWNrZWQiLCJtYXJrZXJDb2xvciIsIm1hcmtlckhpZ2hsaWdodENvbG9yIiwibWFya2VyRm9udENvbG9yIiwibWFya2VyRm9udEhpZ2hsaWdodENvbG9yIiwidHJhbnNpdGlvbk5hbWUiLCJ0cmFuc2l0aW9uRW50ZXJUaW1lb3V0IiwidHJhbnNpdGlvbkxlYXZlVGltZW91dCIsInJlbmRlckRpYWxvZyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIm5hbWUiLCJhZGRyZXNzIiwiZGF0ZXRpbWUiLCJ1cmwiLCJ0aXRsZUZvbnRGYW1pbHkiLCJ0aXRsZUZvbnRDb2xvciIsInRpdGxlRm9udFdlaWdodCIsImhlYWRlckJhY2tncm91bmQiLCJib2R5QmFja2dyb3VuZCIsImNvbnRhaW5lckJhY2tncm91bmQiLCJzaGFkb3dDb2xvciIsImxpbmtDb2xvciIsImJ1dHRvbkNvbG9yIiwiYm9keUZvbnRGYW1pbHkiLCJib2R5Rm9udENvbG9yIiwidHJhbnNpdGlvbkVudGVyIiwidHJhbnNpdGlvbkxlYXZlIiwiYmFja0J1dHRvbiIsImNsb3NlQnV0dG9uIiwiTWF0aCIsIlBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixvQkFHSjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQUhJLEVBSUg7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFnQkEsTUFBaEI7QUFBQSxDQUpHLENBQWY7O0lBYU1DLE07Ozs7O0FBNElKLGtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGdGQUFNQSxLQUFOO0FBRGtCLFVBa0JwQkMsVUFsQm9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBa0JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNMLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsdUJB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LEVBQUUsR0FIbEI7QUFJTm1CLE1BQUFBLGVBQWUsRUFBRSxZQUpYO0FBS05DLE1BQUFBLGNBQWMsRUFBRSxNQUxWO0FBTU5DLE1BQUFBLGVBQWUsRUFBRSxLQU5YO0FBT05DLE1BQUFBLGdCQUFnQixFQUFFLE1BUFo7QUFRTkMsTUFBQUEsY0FBYyxFQUFFLE1BUlY7QUFTTkMsTUFBQUEsbUJBQW1CLEVBQUUsTUFUZjtBQVVOQyxNQUFBQSxXQUFXLEVBQUUsTUFWUDtBQVdOQyxNQUFBQSxTQUFTLEVBQUUsU0FYTDtBQVlOQyxNQUFBQSxXQUFXLEVBQUUsTUFaUDtBQWFOQyxNQUFBQSxjQUFjLEVBQUUsWUFiVjtBQWNOQyxNQUFBQSxhQUFhLEVBQUUsTUFkVDtBQWVORyxNQUFBQSxVQUFVLEVBQUUsZUFmTjtBQWdCTkMsTUFBQUEsV0FBVyxFQUFFO0FBaEJQO0FBTEg7QUFYYSxDO2VBOExUekYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSdcbmltcG9ydCBHbG9iZSBmcm9tICcuL0dsb2JlJ1xuaW1wb3J0IEdsb2JlTWFya2VyIGZyb20gJy4vR2xvYmVNYXJrZXInXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJ1xuaW1wb3J0IFNwb3RMaWdodCBmcm9tICcuL1Nwb3RMaWdodCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9cHg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuXG4gIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICB9XG5gXG5cbmNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQ2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIHJlYWR5IGFuZCBsb2FkZWQgXG4gICAgb25SZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLy8gRW5hYmxlL2Rpc2FibGUgem9vbSBjb250cm9sc1xuICAgIGVuYWJsZVpvb206IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgXSksXG4gICAgLy8gQXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdGhlIGdsb2JlXG4gICAgZXZlbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIC8vIFVuaXF1ZSBldmVudCBpZFxuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMYXRpdHVkZVxuICAgICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9uZ2l0dWRlXG4gICAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBOYW1lICh0aXRsZSkgb2YgdGhlIGV2ZW50XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9jYXRpb24gYXBwZWFycyBvbiB0aGUgZ2xvYmVcbiAgICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gQXBwZWFycyBpbiB0aGUgZGlhbG9nIGlmIGRlZmluZWQsIG90aGVyd2lzZSBsb2NhdGlvbiBpcyB1c2VkXG4gICAgICAgIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8vIFdoZW4gaXMgdGhlIGV2ZW50LCBhbnkgZm9ybWF0IGlzIGFjY2VwdGVkXG4gICAgICAgIGRhdGV0aW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIFVSTCB0byB0aGUgZXZlbnRcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICApKS5pc1JlcXVpcmVkLFxuICAgIC8vIFdpZHRoIGluIHBpeGVsc1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy8gSGVpZ2h0IGluIHBpeGVsc1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIC8vIFVSTCBmb3IgdGhlIGdsb2JlcyBtYWluIHRleHR1cmVcbiAgICBnbG9iZVRleHR1cmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gVVJMIGZvciBhIGJ1bXAgbWFwIGlmIGFwcGxpY2FibGVcbiAgICBnbG9iZUJ1bXBUZXh0dXJlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIEZsb2F0aW5nIHBvaW50IGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVcbiAgICBpbml0Wm9vbUxldmVsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIEhvdyBxdWlja2x5IHdpbGwgdGhlIGdsb2JlIHJvdGF0ZSBwZXIgMTAwMGttIG9uIHRoZSBpbml0IGFuaW1hdGlvblxuICAgIGluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIFBvaW50cyB0byByb3RhdGUgYXJvdW5kIHdoZW4gdGhlIGdsb2JlIGxvYWRzXG4gICAgaW5pdFJvdGF0aW9uUG9pbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gICAgLy8gQWRqdXN0IHRoZSBsaWdodGluZyBmb3IgdGhlIHNjZW5lXG4gICAgbGlnaHRpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGludGVuc2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGFuZ2xlOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG4gICAgLy8gRGlzdGFuY2UgdGhhdCB0aGUgbWFya2VycyB3aWxsIGRyb3AgZnJvbSBzcGFjZVxuICAgIG1hcmtlckRyb3BEaXN0YW5jZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBIb3cgYmlnIGlzIHRoZSBmb250LCBkZWZhdWx0cyB0byAwLjNcbiAgICBtYXJrZXJGb250U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBDb21wb25lbnQgdG8gdXNlIGZvciB0aGUgZGlhbG9nIHRpdGxlXG4gICAgLy8gUmVjZWl2ZXMgcHJvcHM6XG4gICAgLy8gLSBldmVudCAoZm9yIHNpbmdsZSBldmVudCwgZXZlbnQgb2JqZWN0KVxuICAgIERpYWxvZ1RpdGxlQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvLyBDb21wb25lbnQgdG8gdXNlIGZvciB0aGUgZGlhbG9nIGJvZHlcbiAgICAvLyBSZWNlaXZlcyBwcm9wczpcbiAgICAvLyAtIGV2ZW50IChmb3Igc2luZ2xlIGV2ZW50LCBldmVudCBvYmplY3QpXG4gICAgRGlhbG9nQm9keUNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLy8gQ29sb3JzIGV0Yy5cbiAgICB0aGVtZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1hcmtlckNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJGb250Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBkaWFsb2c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHRpdGxlRm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdGl0bGVGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRpdGxlRm9udFdlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNvbnRhaW5lckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNoYWRvd0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsaW5rQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJ1dHRvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBib2R5Rm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8vIEpTWCBvciBhIHN0cmluZyBmb3IgdGhlIGNoYXJhY3RlciB0byBhcHBlYXJcbiAgICAgICAgYmFja0J1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKSxcbiAgICAgICAgLy8gSlNYIG9yIGEgc3RyaW5nIGZvciB0aGUgaW9uaWNvbiBpY29uIHRvIGFwcGVhciBodHRwczovL2lvbmljb25zLmNvbS8gcHJlcGVuZCBpb3MtIG9yIG1kLVxuICAgICAgICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaWdodGluZzoge1xuICAgICAgY29sb3I6IDB4NDA0MDQwLFxuICAgICAgaW50ZW5zaXR5OiA4LFxuICAgICAgYW5nbGU6IE1hdGguUEkgLyA2XG4gICAgfSxcbiAgICBlbmFibGVab29tOiB0cnVlLFxuICAgIG1hcmtlckRyb3BEaXN0YW5jZTogMSxcbiAgICBpbml0Um90YXRpb25Qb2ludHM6IFtdLFxuICAgIGdsb2JlVGV4dHVyZVVSTDogJ2h0dHBzOi8vbGV3bmVsc29uLmdpdGh1Yi5pby9yZWFjdC1nbG9iZS1ldmVudHMtdmlzdWFsaXNlci9hc3NldHMvaW1hZ2VzL3RleHR1cmVzL3JlYWxpc3RpYy1nbG9iZS9nbG9iZS5qcGcnLFxuICAgIGdsb2JlQnVtcFRleHR1cmVVUkw6ICdodHRwczovL2xld25lbHNvbi5naXRodWIuaW8vcmVhY3QtZ2xvYmUtZXZlbnRzLXZpc3VhbGlzZXIvYXNzZXRzL2ltYWdlcy90ZXh0dXJlcy9yZWFsaXN0aWMtZ2xvYmUvZ2xvYmUuanBnJyxcbiAgICB0aGVtZToge1xuICAgICAgbWFya2VyQ29sb3I6IDB4NzA5Y2YwLFxuICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IDB4MWZjMWMzLFxuICAgICAgbWFya2VyRm9udENvbG9yOiAweDcwOWNmMCxcbiAgICAgIG1hcmtlckZvbnRIaWdobGlnaHRDb2xvcjogMHgxZmMxYzMsXG4gICAgICBkaWFsb2c6IHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6ICdkaWFsb2cnLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA1MDAsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDUwMCxcbiAgICAgICAgdGl0bGVGb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiAnIzAwMCcsXG4gICAgICAgIHRpdGxlRm9udFdlaWdodDogJzYwMCcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6ICcjZGRkJyxcbiAgICAgICAgYm9keUJhY2tncm91bmQ6ICcjZWVlJyxcbiAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZDogJyNlZWUnLFxuICAgICAgICBzaGFkb3dDb2xvcjogJyMwMDAnLFxuICAgICAgICBsaW5rQ29sb3I6ICcjMDAwMGZmJyxcbiAgICAgICAgYnV0dG9uQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrQnV0dG9uOiAnbWQtYXJyb3ctYmFjaycsXG4gICAgICAgIGNsb3NlQnV0dG9uOiAnbWQtY2xvc2UtY2lyY2xlLW91dGxpbmUnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdsb2JlUmVhZHk6IGZhbHNlLFxuICAgICAgY29udHJvbHNFbmFibGVkOiAhKHByb3BzLmluaXRSb3RhdGlvblBvaW50cy5sZW5ndGggPiAxKSxcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgICAgYWN0aXZlRXZlbnRzOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgZ2xvYmVSZWFkeSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVyblxuICAgIHRoaXMucHJvcHMub25SZWFkeSAmJiB0aGlzLnByb3BzLm9uUmVhZHkoKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBnbG9iZVJlYWR5OiB0cnVlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IGZhbHNlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlRW5kID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUgfSlcbiAgfVxuXG4gIGFzeW5jIGdsb2JlTWFya2VyQ2xpY2tlZCAoZXZlbnRzLCBhbmltYXRpb25UaW1lLCBkb25lKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogZmFsc2UgfSlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIGFuaW1hdGlvblRpbWUpKVxuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICBpZiAoZG9uZSkgdGhpcy5kaWFsb2dEb25lID0gZG9uZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIGFjdGl2ZUV2ZW50czogZXZlbnRzXG4gICAgfSlcbiAgfVxuXG4gIG9uRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5kaWFsb2dEb25lICYmIHRoaXMuZGlhbG9nRG9uZSgpXG4gICAgdGhpcy5kaWFsb2dEb25lID0gbnVsbFxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUsIHNob3dEaWFsb2c6IGZhbHNlLCBhY3RpdmVFdmVudHM6IG51bGwgfSlcbiAgfVxuXG4gIGdldERpYWxvZ1dpZHRoICgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoIC8gM1xuICAgIGlmICh3aWR0aCA8IDMyMCkgd2lkdGggPSAzMjBcbiAgICBpZiAod2lkdGggPiA0MDApIHdpZHRoID0gNDAwXG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICBnZXREaWFsb2dIZWlnaHQgKCkge1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCAvIDJcbiAgICBpZiAoaGVpZ2h0IDwgMzAwKSBoZWlnaHQgPSAzMDBcbiAgICBpZiAoaGVpZ2h0ID4gNjAwKSBoZWlnaHQgPSA2MDBcbiAgICByZXR1cm4gaGVpZ2h0XG4gIH1cblxuICByZW5kZXJEaWFsb2cgKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlRXZlbnRzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBkaWFsb2cgfSA9IHRoaXMucHJvcHMudGhlbWUgfHwge31cbiAgICBjb25zdCBkZWZhdWx0RGlhbG9nID0gRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZS5kaWFsb2dcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ1xuICAgICAgICBrZXk9e2FjdGl2ZUV2ZW50cy5tYXAoZSA9PiBlLmlkKS5qb2luKCcnKX1cbiAgICAgICAgZXZlbnRzPXthY3RpdmVFdmVudHN9XG4gICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLm9uRGlhbG9nQ2xvc2V9XG4gICAgICAgIHdpZHRoPXt0aGlzLmdldERpYWxvZ1dpZHRoKCl9XG4gICAgICAgIGhlaWdodD17dGhpcy5nZXREaWFsb2dIZWlnaHQoKX1cbiAgICAgICAgdGhlbWU9e3sgLi4uZGVmYXVsdERpYWxvZywgLi4uZGlhbG9nIH19XG4gICAgICAgIERpYWxvZ1RpdGxlQ29tcG9uZW50PXt0aGlzLnByb3BzLkRpYWxvZ1RpdGxlQ29tcG9uZW50fVxuICAgICAgICBEaWFsb2dCb2R5Q29tcG9uZW50PXt0aGlzLnByb3BzLkRpYWxvZ0JvZHlDb21wb25lbnR9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbGlnaHRpbmcgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMubGlnaHRpbmcsIC4uLnRoaXMucHJvcHMubGlnaHRpbmcgfVxuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICBjb25zdCBkaWFsb2cgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUuZGlhbG9nLCAuLi4odGhpcy5wcm9wcy50aGVtZSB8fCB7fSkuZGlhbG9nIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0+XG4gICAgICAgIDxTY2VuZVxuICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9XG4gICAgICAgICAgY29udHJvbHNFbmFibGVkPXt0aGlzLnN0YXRlLmNvbnRyb2xzRW5hYmxlZH1cbiAgICAgICAgICBpbml0Wm9vbUxldmVsPXt0aGlzLnByb3BzLmluaXRab29tTGV2ZWx9XG4gICAgICAgICAgZW5hYmxlWm9vbT17dGhpcy5wcm9wcy5lbmFibGVab29tfVxuICAgICAgICA+XG4gICAgICAgICAgPFNwb3RMaWdodFxuICAgICAgICAgICAgaWQ9J21haW5fbGlnaHQnXG4gICAgICAgICAgICBpbnRlbnNpdHk9e2xpZ2h0aW5nLmludGVuc2l0eX1cbiAgICAgICAgICAgIGNvbG9yPXtsaWdodGluZy5jb2xvcn1cbiAgICAgICAgICAgIGFuZ2xlPXtsaWdodGluZy5hbmdsZX1cbiAgICAgICAgICAgIGRpc3RhbmNlPXsxMDAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdsb2JlXG4gICAgICAgICAgICBpZD0nZ2xvYmUnXG4gICAgICAgICAgICBpbWFnZVBhdGg9e3RoaXMucHJvcHMuZ2xvYmVUZXh0dXJlVVJMfVxuICAgICAgICAgICAgYnVtcFBhdGg9e3RoaXMucHJvcHMuZ2xvYmVCdW1wVGV4dHVyZVVSTH1cbiAgICAgICAgICAgIHJhZGl1cz17MzB9XG4gICAgICAgICAgICBvblRleHR1cmVkPXt0aGlzLmdsb2JlUmVhZHl9XG4gICAgICAgICAgICBvblJvdGF0ZT17dGhpcy5nbG9iZU9uUm90YXRlfVxuICAgICAgICAgICAgb25Sb3RhdGVFbmQ9e3RoaXMuZ2xvYmVPblJvdGF0ZUVuZH1cbiAgICAgICAgICAgIGluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uPXt0aGlzLnByb3BzLmluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICAgICAgaW5pdFJvdGF0aW9uUG9pbnRzPXt0aGlzLnByb3BzLmluaXRSb3RhdGlvblBvaW50c31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmdsb2JlUmVhZHkgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRzLm1hcCgoZXZlbnRzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R2xvYmVNYXJrZXJcbiAgICAgICAgICAgICAgICBrZXk9e2V2ZW50c1swXS5pZH1cbiAgICAgICAgICAgICAgICBpZD17ZXZlbnRzWzBdLmlkfVxuICAgICAgICAgICAgICAgIGV2ZW50Q291bnQ9e2V2ZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgZ2xvYmU9J2dsb2JlJ1xuICAgICAgICAgICAgICAgIGxhdD17ZXZlbnRzWzBdLmxhdH1cbiAgICAgICAgICAgICAgICBsb249e2V2ZW50c1swXS5sb259XG4gICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lPXtldmVudHNbMF0ubG9jYXRpb259XG4gICAgICAgICAgICAgICAgcmFkaXVzPXswLjN9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3RoaXMucHJvcHMubWFya2VyRm9udFNpemV9XG4gICAgICAgICAgICAgICAgZHJvcERpc3RhbmNlPXt0aGlzLnByb3BzLm1hcmtlckRyb3BEaXN0YW5jZX1cbiAgICAgICAgICAgICAgICB6SW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhhbmltYXRpb25UaW1lLCBkb25lKSA9PiB0aGlzLmdsb2JlTWFya2VyQ2xpY2tlZChldmVudHMsIGFuaW1hdGlvblRpbWUsIGRvbmUpfVxuICAgICAgICAgICAgICAgIG1hcmtlckNvbG9yPXt0aGVtZS5tYXJrZXJDb2xvcn1cbiAgICAgICAgICAgICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcj17dGhlbWUubWFya2VySGlnaGxpZ2h0Q29sb3J9XG4gICAgICAgICAgICAgICAgZm9udENvbG9yPXt0aGVtZS5tYXJrZXJGb250Q29sb3J9XG4gICAgICAgICAgICAgICAgZm9udEhpZ2hsaWdodENvbG9yPXt0aGVtZS5tYXJrZXJGb250SGlnaGxpZ2h0Q29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9TY2VuZT5cbiAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2RpYWxvZy50cmFuc2l0aW9uTmFtZX1cbiAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXtkaWFsb2cudHJhbnNpdGlvbkVudGVyVGltZW91dH1cbiAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXtkaWFsb2cudHJhbnNpdGlvbkxlYXZlVGltZW91dH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEaWFsb2cgJiYgdGhpcy5zdGF0ZS5hY3RpdmVFdmVudHMgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWFsb2ctY29udGFpbmVyJyBrZXk9J2RpYWxvZy1jb250YWluZXInPlxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJEaWFsb2coKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXG4iXX0=