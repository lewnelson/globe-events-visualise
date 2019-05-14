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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwib25SZWFkeSIsInNldFN0YXRlIiwiZ2xvYmVPblJvdGF0ZSIsImNvbnRyb2xzRW5hYmxlZCIsImdsb2JlT25Sb3RhdGVFbmQiLCJvbkRpYWxvZ0Nsb3NlIiwiZGlhbG9nRG9uZSIsInNob3dEaWFsb2ciLCJhY3RpdmVFdmVudHMiLCJzdGF0ZSIsImluaXRSb3RhdGlvblBvaW50cyIsImxlbmd0aCIsImV2ZW50cyIsImFuaW1hdGlvblRpbWUiLCJkb25lIiwidGhlbWUiLCJkaWFsb2ciLCJkZWZhdWx0RGlhbG9nIiwiZGVmYXVsdFByb3BzIiwibWFwIiwiZSIsImlkIiwiam9pbiIsImdldERpYWxvZ1dpZHRoIiwiZ2V0RGlhbG9nSGVpZ2h0IiwibGlnaHRpbmciLCJpbml0Wm9vbUxldmVsIiwiZW5hYmxlWm9vbSIsImludGVuc2l0eSIsImNvbG9yIiwiYW5nbGUiLCJnbG9iZVRleHR1cmVVUkwiLCJnbG9iZUJ1bXBUZXh0dXJlVVJMIiwiaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb24iLCJpbmRleCIsImxhdCIsImxvbiIsImxvY2F0aW9uIiwibWFya2VyRHJvcERpc3RhbmNlIiwiZ2xvYmVNYXJrZXJDbGlja2VkIiwibWFya2VyQ29sb3IiLCJtYXJrZXJIaWdobGlnaHRDb2xvciIsIm1hcmtlckZvbnRDb2xvciIsIm1hcmtlckZvbnRIaWdobGlnaHRDb2xvciIsInRyYW5zaXRpb25OYW1lIiwidHJhbnNpdGlvbkVudGVyVGltZW91dCIsInRyYW5zaXRpb25MZWF2ZVRpbWVvdXQiLCJyZW5kZXJEaWFsb2ciLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJib29sIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJuYW1lIiwiYWRkcmVzcyIsImRhdGUiLCJsb2NhbFRpbWUiLCJ1cmwiLCJ0aXRsZUZvbnRGYW1pbHkiLCJ0aXRsZUZvbnRDb2xvciIsInRpdGxlRm9udFdlaWdodCIsImhlYWRlckJhY2tncm91bmQiLCJib2R5QmFja2dyb3VuZCIsImNvbnRhaW5lckJhY2tncm91bmQiLCJzaGFkb3dDb2xvciIsImxpbmtDb2xvciIsImJ1dHRvbkNvbG9yIiwiYm9keUZvbnRGYW1pbHkiLCJib2R5Rm9udENvbG9yIiwidHJhbnNpdGlvbkVudGVyIiwidHJhbnNpdGlvbkxlYXZlIiwiYmFja0J1dHRvbiIsImNsb3NlQnV0dG9uIiwiTWF0aCIsIlBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixvQkFHSjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQWY7QUFBQSxDQUhJLEVBSUg7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFnQkEsTUFBaEI7QUFBQSxDQUpHLENBQWY7O0lBYU1DLE07Ozs7O0FBb0lKLGtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGdGQUFNQSxLQUFOO0FBRGtCLFVBa0JwQkMsVUFsQm9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBa0JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNMLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsdUJBQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVLElBQVYsQ0FBZDtBQUFBLGVBQW5CLENBREs7O0FB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QUFFLE1BZFQ7QUFlTkcsTUFBQUEsVUFBVSxFQUFFLGVBZk47QUFnQk5DLE1BQUFBLFdBQVcsRUFBRTtBQWhCUDtBQUxIO0FBWGEsQztlQTJMVHZGLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnXG5pbXBvcnQgR2xvYmUgZnJvbSAnLi9HbG9iZSdcbmltcG9ydCBHbG9iZU1hcmtlciBmcm9tICcuL0dsb2JlTWFya2VyJ1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZydcbmltcG9ydCBTcG90TGlnaHQgZnJvbSAnLi9TcG90TGlnaHQnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRofXB4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcblxuICAuZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgfVxuYFxuXG5jbGFzcyBFdmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIENhbGxlZCB3aGVuIHRoZSBzY2VuZSBpcyByZWFkeSBhbmQgbG9hZGVkIFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8vIEVuYWJsZS9kaXNhYmxlIHpvb20gY29udHJvbHNcbiAgICBlbmFibGVab29tOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgICBQcm9wVHlwZXMubm9kZVxuICAgIF0pLFxuICAgIC8vIEFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IG9uIHRoZSBnbG9iZVxuICAgIGV2ZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAvLyBVbmlxdWUgZXZlbnQgaWRcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTGF0aXR1ZGVcbiAgICAgICAgbGF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExvbmdpdHVkZVxuICAgICAgICBsb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTmFtZSAodGl0bGUpIG9mIHRoZSBldmVudFxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExvY2F0aW9uIGFwcGVhcnMgb24gdGhlIGdsb2JlXG4gICAgICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIEFwcGVhcnMgaW4gdGhlIGRpYWxvZyBpZiBkZWZpbmVkLCBvdGhlcndpc2UgbG9jYXRpb24gaXMgdXNlZFxuICAgICAgICBhZGRyZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvLyBEYXRlIG9mIHRoZSBldmVudFxuICAgICAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExvY2FsIHRpbWUgb2YgdGhlIGV2ZW50XG4gICAgICAgIGxvY2FsVGltZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBVUkwgdG8gdGhlIGV2ZW50XG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KS5pc1JlcXVpcmVkXG4gICAgKSkuaXNSZXF1aXJlZCxcbiAgICAvLyBXaWR0aCBpbiBwaXhlbHNcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIC8vIEhlaWdodCBpbiBwaXhlbHNcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvLyBVUkwgZm9yIHRoZSBnbG9iZXMgbWFpbiB0ZXh0dXJlXG4gICAgZ2xvYmVUZXh0dXJlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIFVSTCBmb3IgYSBidW1wIG1hcCBpZiBhcHBsaWNhYmxlXG4gICAgZ2xvYmVCdW1wVGV4dHVyZVVSTDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBGbG9hdGluZyBwb2ludCBiZXR3ZWVuIDAgYW5kIDEgaW5jbHVzaXZlXG4gICAgaW5pdFpvb21MZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBIb3cgcXVpY2tseSB3aWxsIHRoZSBnbG9iZSByb3RhdGUgcGVyIDEwMDBrbSBvbiB0aGUgaW5pdCBhbmltYXRpb25cbiAgICBpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBQb2ludHMgdG8gcm90YXRlIGFyb3VuZCB3aGVuIHRoZSBnbG9iZSBsb2Fkc1xuICAgIGluaXRSb3RhdGlvblBvaW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSkpLFxuICAgIC8vIEFkanVzdCB0aGUgbGlnaHRpbmcgZm9yIHRoZSBzY2VuZVxuICAgIGxpZ2h0aW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBpbnRlbnNpdHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBhbmdsZTogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLFxuICAgIC8vIERpc3RhbmNlIHRoYXQgdGhlIG1hcmtlcnMgd2lsbCBkcm9wIGZyb20gc3BhY2VcbiAgICBtYXJrZXJEcm9wRGlzdGFuY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gQ29sb3JzIGV0Yy5cbiAgICB0aGVtZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1hcmtlckNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJGb250Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBkaWFsb2c6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHRpdGxlRm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdGl0bGVGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRpdGxlRm9udFdlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNvbnRhaW5lckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNoYWRvd0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsaW5rQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJ1dHRvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBib2R5Rm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIC8vIEpTWCBvciBhIHN0cmluZyBmb3IgdGhlIGNoYXJhY3RlciB0byBhcHBlYXJcbiAgICAgICAgYmFja0J1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKSxcbiAgICAgICAgLy8gSlNYIG9yIGEgc3RyaW5nIGZvciB0aGUgaW9uaWNvbiBpY29uIHRvIGFwcGVhciBodHRwczovL2lvbmljb25zLmNvbS8gcHJlcGVuZCBpb3MtIG9yIG1kLVxuICAgICAgICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaWdodGluZzoge1xuICAgICAgY29sb3I6IDB4NDA0MDQwLFxuICAgICAgaW50ZW5zaXR5OiA4LFxuICAgICAgYW5nbGU6IE1hdGguUEkgLyA2XG4gICAgfSxcbiAgICBlbmFibGVab29tOiB0cnVlLFxuICAgIG1hcmtlckRyb3BEaXN0YW5jZTogMSxcbiAgICBpbml0Um90YXRpb25Qb2ludHM6IFtdLFxuICAgIGdsb2JlVGV4dHVyZVVSTDogJ2h0dHBzOi8vbGV3bmVsc29uLmdpdGh1Yi5pby9yZWFjdC1nbG9iZS1ldmVudHMtdmlzdWFsaXNlci9hc3NldHMvaW1hZ2VzL3RleHR1cmVzL3JlYWxpc3RpYy1nbG9iZS9nbG9iZS5qcGcnLFxuICAgIGdsb2JlQnVtcFRleHR1cmVVUkw6ICdodHRwczovL2xld25lbHNvbi5naXRodWIuaW8vcmVhY3QtZ2xvYmUtZXZlbnRzLXZpc3VhbGlzZXIvYXNzZXRzL2ltYWdlcy90ZXh0dXJlcy9yZWFsaXN0aWMtZ2xvYmUvZ2xvYmUuanBnJyxcbiAgICB0aGVtZToge1xuICAgICAgbWFya2VyQ29sb3I6IDB4NzA5Y2YwLFxuICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IDB4MWZjMWMzLFxuICAgICAgbWFya2VyRm9udENvbG9yOiAweDcwOWNmMCxcbiAgICAgIG1hcmtlckZvbnRIaWdobGlnaHRDb2xvcjogMHgxZmMxYzMsXG4gICAgICBkaWFsb2c6IHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6ICdkaWFsb2cnLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA1MDAsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDUwMCxcbiAgICAgICAgdGl0bGVGb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiAnIzAwMCcsXG4gICAgICAgIHRpdGxlRm9udFdlaWdodDogJzYwMCcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6ICcjZGRkJyxcbiAgICAgICAgYm9keUJhY2tncm91bmQ6ICcjZWVlJyxcbiAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZDogJyNlZWUnLFxuICAgICAgICBzaGFkb3dDb2xvcjogJyMwMDAnLFxuICAgICAgICBsaW5rQ29sb3I6ICcjMDAwMGZmJyxcbiAgICAgICAgYnV0dG9uQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrQnV0dG9uOiAnbWQtYXJyb3ctYmFjaycsXG4gICAgICAgIGNsb3NlQnV0dG9uOiAnbWQtY2xvc2UtY2lyY2xlLW91dGxpbmUnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdsb2JlUmVhZHk6IGZhbHNlLFxuICAgICAgY29udHJvbHNFbmFibGVkOiAhKHByb3BzLmluaXRSb3RhdGlvblBvaW50cy5sZW5ndGggPiAxKSxcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgICAgYWN0aXZlRXZlbnRzOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgZ2xvYmVSZWFkeSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVyblxuICAgIHRoaXMucHJvcHMub25SZWFkeSAmJiB0aGlzLnByb3BzLm9uUmVhZHkoKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBnbG9iZVJlYWR5OiB0cnVlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IGZhbHNlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlRW5kID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUgfSlcbiAgfVxuXG4gIGFzeW5jIGdsb2JlTWFya2VyQ2xpY2tlZCAoZXZlbnRzLCBhbmltYXRpb25UaW1lLCBkb25lKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogZmFsc2UgfSlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIGFuaW1hdGlvblRpbWUpKVxuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICBpZiAoZG9uZSkgdGhpcy5kaWFsb2dEb25lID0gZG9uZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIGFjdGl2ZUV2ZW50czogZXZlbnRzXG4gICAgfSlcbiAgfVxuXG4gIG9uRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5kaWFsb2dEb25lICYmIHRoaXMuZGlhbG9nRG9uZSgpXG4gICAgdGhpcy5kaWFsb2dEb25lID0gbnVsbFxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUsIHNob3dEaWFsb2c6IGZhbHNlLCBhY3RpdmVFdmVudHM6IG51bGwgfSlcbiAgfVxuXG4gIGdldERpYWxvZ1dpZHRoICgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoIC8gM1xuICAgIGlmICh3aWR0aCA8IDMyMCkgd2lkdGggPSAzMjBcbiAgICBpZiAod2lkdGggPiA0MDApIHdpZHRoID0gNDAwXG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICBnZXREaWFsb2dIZWlnaHQgKCkge1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCAvIDJcbiAgICBpZiAoaGVpZ2h0IDwgMzAwKSBoZWlnaHQgPSAzMDBcbiAgICBpZiAoaGVpZ2h0ID4gNjAwKSBoZWlnaHQgPSA2MDBcbiAgICByZXR1cm4gaGVpZ2h0XG4gIH1cblxuICByZW5kZXJEaWFsb2cgKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlRXZlbnRzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBkaWFsb2cgfSA9IHRoaXMucHJvcHMudGhlbWUgfHwge31cbiAgICBjb25zdCBkZWZhdWx0RGlhbG9nID0gRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZS5kaWFsb2dcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ1xuICAgICAgICBrZXk9e2FjdGl2ZUV2ZW50cy5tYXAoZSA9PiBlLmlkKS5qb2luKCcnKX1cbiAgICAgICAgZXZlbnRzPXthY3RpdmVFdmVudHN9XG4gICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLm9uRGlhbG9nQ2xvc2V9XG4gICAgICAgIHdpZHRoPXt0aGlzLmdldERpYWxvZ1dpZHRoKCl9XG4gICAgICAgIGhlaWdodD17dGhpcy5nZXREaWFsb2dIZWlnaHQoKX1cbiAgICAgICAgdGhlbWU9e3sgLi4uZGVmYXVsdERpYWxvZywgLi4uZGlhbG9nIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbGlnaHRpbmcgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMubGlnaHRpbmcsIC4uLnRoaXMucHJvcHMubGlnaHRpbmcgfVxuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICBjb25zdCBkaWFsb2cgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUuZGlhbG9nLCAuLi4odGhpcy5wcm9wcy50aGVtZSB8fCB7fSkuZGlhbG9nIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0+XG4gICAgICAgIDxTY2VuZVxuICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9XG4gICAgICAgICAgY29udHJvbHNFbmFibGVkPXt0aGlzLnN0YXRlLmNvbnRyb2xzRW5hYmxlZH1cbiAgICAgICAgICBpbml0Wm9vbUxldmVsPXt0aGlzLnByb3BzLmluaXRab29tTGV2ZWx9XG4gICAgICAgICAgZW5hYmxlWm9vbT17dGhpcy5wcm9wcy5lbmFibGVab29tfVxuICAgICAgICA+XG4gICAgICAgICAgPFNwb3RMaWdodFxuICAgICAgICAgICAgaWQ9J21haW5fbGlnaHQnXG4gICAgICAgICAgICBpbnRlbnNpdHk9e2xpZ2h0aW5nLmludGVuc2l0eX1cbiAgICAgICAgICAgIGNvbG9yPXtsaWdodGluZy5jb2xvcn1cbiAgICAgICAgICAgIGFuZ2xlPXtsaWdodGluZy5hbmdsZX1cbiAgICAgICAgICAgIGRpc3RhbmNlPXsxMDAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdsb2JlXG4gICAgICAgICAgICBpZD0nZ2xvYmUnXG4gICAgICAgICAgICBpbWFnZVBhdGg9e3RoaXMucHJvcHMuZ2xvYmVUZXh0dXJlVVJMfVxuICAgICAgICAgICAgYnVtcFBhdGg9e3RoaXMucHJvcHMuZ2xvYmVCdW1wVGV4dHVyZVVSTH1cbiAgICAgICAgICAgIHJhZGl1cz17MzB9XG4gICAgICAgICAgICBvblRleHR1cmVkPXt0aGlzLmdsb2JlUmVhZHl9XG4gICAgICAgICAgICBvblJvdGF0ZT17dGhpcy5nbG9iZU9uUm90YXRlfVxuICAgICAgICAgICAgb25Sb3RhdGVFbmQ9e3RoaXMuZ2xvYmVPblJvdGF0ZUVuZH1cbiAgICAgICAgICAgIGluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uPXt0aGlzLnByb3BzLmluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICAgICAgaW5pdFJvdGF0aW9uUG9pbnRzPXt0aGlzLnByb3BzLmluaXRSb3RhdGlvblBvaW50c31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmdsb2JlUmVhZHkgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRzLm1hcCgoZXZlbnRzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R2xvYmVNYXJrZXJcbiAgICAgICAgICAgICAgICBrZXk9e2V2ZW50c1swXS5pZH1cbiAgICAgICAgICAgICAgICBpZD17ZXZlbnRzWzBdLmlkfVxuICAgICAgICAgICAgICAgIGV2ZW50Q291bnQ9e2V2ZW50cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgZ2xvYmU9J2dsb2JlJ1xuICAgICAgICAgICAgICAgIGxhdD17ZXZlbnRzWzBdLmxhdH1cbiAgICAgICAgICAgICAgICBsb249e2V2ZW50c1swXS5sb259XG4gICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lPXtldmVudHNbMF0ubG9jYXRpb259XG4gICAgICAgICAgICAgICAgcmFkaXVzPXswLjN9XG4gICAgICAgICAgICAgICAgZHJvcERpc3RhbmNlPXt0aGlzLnByb3BzLm1hcmtlckRyb3BEaXN0YW5jZX1cbiAgICAgICAgICAgICAgICB6SW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhhbmltYXRpb25UaW1lLCBkb25lKSA9PiB0aGlzLmdsb2JlTWFya2VyQ2xpY2tlZChldmVudHMsIGFuaW1hdGlvblRpbWUsIGRvbmUpfVxuICAgICAgICAgICAgICAgIG1hcmtlckNvbG9yPXt0aGVtZS5tYXJrZXJDb2xvcn1cbiAgICAgICAgICAgICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcj17dGhlbWUubWFya2VySGlnaGxpZ2h0Q29sb3J9XG4gICAgICAgICAgICAgICAgZm9udENvbG9yPXt0aGVtZS5tYXJrZXJGb250Q29sb3J9XG4gICAgICAgICAgICAgICAgZm9udEhpZ2hsaWdodENvbG9yPXt0aGVtZS5tYXJrZXJGb250SGlnaGxpZ2h0Q29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9TY2VuZT5cbiAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2RpYWxvZy50cmFuc2l0aW9uTmFtZX1cbiAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXtkaWFsb2cudHJhbnNpdGlvbkVudGVyVGltZW91dH1cbiAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXtkaWFsb2cudHJhbnNpdGlvbkxlYXZlVGltZW91dH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEaWFsb2cgJiYgdGhpcy5zdGF0ZS5hY3RpdmVFdmVudHMgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWFsb2ctY29udGFpbmVyJyBrZXk9J2RpYWxvZy1jb250YWluZXInPlxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJEaWFsb2coKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXG4iXX0=