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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwib25SZWFkeSIsInNldFN0YXRlIiwiZ2xvYmVPblJvdGF0ZSIsImNvbnRyb2xzRW5hYmxlZCIsImdsb2JlT25Sb3RhdGVFbmQiLCJvbkRpYWxvZ0Nsb3NlIiwiZGlhbG9nRG9uZSIsInNob3dEaWFsb2ciLCJhY3RpdmVFdmVudHMiLCJzdGF0ZSIsImluaXRSb3RhdGlvblBvaW50cyIsImxlbmd0aCIsImV2ZW50cyIsImFuaW1hdGlvblRpbWUiLCJkb25lIiwidGhlbWUiLCJkaWFsb2ciLCJkZWZhdWx0RGlhbG9nIiwiZGVmYXVsdFByb3BzIiwibWFwIiwiZSIsImlkIiwiam9pbiIsImdldERpYWxvZ1dpZHRoIiwiZ2V0RGlhbG9nSGVpZ2h0IiwibGlnaHRpbmciLCJpbml0Wm9vbUxldmVsIiwiaW50ZW5zaXR5IiwiY29sb3IiLCJhbmdsZSIsImdsb2JlVGV4dHVyZVVSTCIsImdsb2JlQnVtcFRleHR1cmVVUkwiLCJpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbiIsImluZGV4IiwibGF0IiwibG9uIiwibG9jYXRpb24iLCJtYXJrZXJEcm9wRGlzdGFuY2UiLCJnbG9iZU1hcmtlckNsaWNrZWQiLCJtYXJrZXJDb2xvciIsIm1hcmtlckhpZ2hsaWdodENvbG9yIiwibWFya2VyRm9udENvbG9yIiwibWFya2VyRm9udEhpZ2hsaWdodENvbG9yIiwidHJhbnNpdGlvbk5hbWUiLCJ0cmFuc2l0aW9uRW50ZXJUaW1lb3V0IiwidHJhbnNpdGlvbkxlYXZlVGltZW91dCIsInJlbmRlckRpYWxvZyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwibmFtZSIsImFkZHJlc3MiLCJkYXRlIiwibG9jYWxUaW1lIiwidXJsIiwidGl0bGVGb250RmFtaWx5IiwidGl0bGVGb250Q29sb3IiLCJ0aXRsZUZvbnRXZWlnaHQiLCJoZWFkZXJCYWNrZ3JvdW5kIiwiYm9keUJhY2tncm91bmQiLCJjb250YWluZXJCYWNrZ3JvdW5kIiwic2hhZG93Q29sb3IiLCJsaW5rQ29sb3IiLCJidXR0b25Db2xvciIsImJvZHlGb250RmFtaWx5IiwiYm9keUZvbnRDb2xvciIsInRyYW5zaXRpb25FbnRlciIsImJvb2wiLCJ0cmFuc2l0aW9uTGVhdmUiLCJiYWNrQnV0dG9uIiwiY2xvc2VCdXR0b24iLCJNYXRoIiwiUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUdKO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBSEksRUFJSDtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWdCQSxNQUFoQjtBQUFBLENBSkcsQ0FBZjs7SUFhTUMsTTs7Ozs7QUFpSUosa0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsZ0ZBQU1BLEtBQU47QUFEa0IsVUFrQnBCQyxVQWxCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFrQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0wsSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87QUFBQSx1QkFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFkO0FBQUEsZUFBbkIsQ0FESzs7QUFBQTtBQUFBLGtCQUVOLE1BQUtFLFVBRkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFHWCxvQkFBS0wsS0FBTCxDQUFXTSxPQUFYLElBQXNCLE1BQUtOLEtBQUwsQ0FBV00sT0FBWCxFQUF0Qjs7QUFDQSxvQkFBS0MsUUFBTCxDQUFjO0FBQUVOLGdCQUFBQSxVQUFVLEVBQUU7QUFBZCxlQUFkOztBQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbEJPOztBQUFBLFVBeUJwQk8sYUF6Qm9CLEdBeUJKLFlBQU07QUFDcEIsWUFBS0QsUUFBTCxDQUFjO0FBQUVFLFFBQUFBLGVBQWUsRUFBRTtBQUFuQixPQUFkO0FBQ0QsS0EzQm1COztBQUFBLFVBNkJwQkMsZ0JBN0JvQixHQTZCRCxZQUFNO0FBQ3ZCLFlBQUtILFFBQUwsQ0FBYztBQUFFRSxRQUFBQSxlQUFlLEVBQUU7QUFBbkIsT0FBZDtBQUNELEtBL0JtQjs7QUFBQSxVQTRDcEJFLGFBNUNvQixHQTRDSixZQUFNO0FBQ3BCLFlBQUtDLFVBQUwsSUFBbUIsTUFBS0EsVUFBTCxFQUFuQjtBQUNBLFlBQUtBLFVBQUwsR0FBa0IsSUFBbEI7O0FBQ0EsWUFBS0wsUUFBTCxDQUFjO0FBQUVFLFFBQUFBLGVBQWUsRUFBRSxJQUFuQjtBQUF5QkksUUFBQUEsVUFBVSxFQUFFLEtBQXJDO0FBQTRDQyxRQUFBQSxZQUFZLEVBQUU7QUFBMUQsT0FBZDtBQUNELEtBaERtQjs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hkLE1BQUFBLFVBQVUsRUFBRSxLQUREO0FBRVhRLE1BQUFBLGVBQWUsRUFBRSxFQUFFVCxLQUFLLENBQUNnQixrQkFBTixDQUF5QkMsTUFBekIsR0FBa0MsQ0FBcEMsQ0FGTjtBQUdYSixNQUFBQSxVQUFVLEVBQUUsS0FIRDtBQUlYQyxNQUFBQSxZQUFZLEVBQUU7QUFKSCxLQUFiO0FBRmtCO0FBUW5COzs7O3dDQUVvQjtBQUNuQixXQUFLVCxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7OzsyQ0FFdUI7QUFDdEIsV0FBS0EsVUFBTCxHQUFrQixLQUFsQjtBQUNEOzs7Ozs7Z0RBaUJ5QmEsTSxFQUFRQyxhLEVBQWVDLEk7Ozs7O0FBQy9DLHFCQUFLYixRQUFMLENBQWM7QUFBRUUsa0JBQUFBLGVBQWUsRUFBRTtBQUFuQixpQkFBZDs7dUJBQ00sSUFBSVAsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSx5QkFBYUMsVUFBVSxDQUFDO0FBQUEsMkJBQU1ELE9BQU8sRUFBYjtBQUFBLG1CQUFELEVBQWtCZ0IsYUFBbEIsQ0FBdkI7QUFBQSxpQkFBWixDOzs7b0JBQ0QsS0FBS2QsVTs7Ozs7Ozs7QUFDVixvQkFBSWUsSUFBSixFQUFVLEtBQUtSLFVBQUwsR0FBa0JRLElBQWxCO0FBQ1YscUJBQUtiLFFBQUwsQ0FBYztBQUNaTSxrQkFBQUEsVUFBVSxFQUFFLElBREE7QUFFWkMsa0JBQUFBLFlBQVksRUFBRUk7QUFGRixpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQVlnQjtBQUNoQixVQUFJckIsS0FBSyxHQUFHLEtBQUtHLEtBQUwsQ0FBV0gsS0FBWCxHQUFtQixDQUEvQjtBQUNBLFVBQUlBLEtBQUssR0FBRyxHQUFaLEVBQWlCQSxLQUFLLEdBQUcsR0FBUjtBQUNqQixVQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQkEsS0FBSyxHQUFHLEdBQVI7QUFDakIsYUFBT0EsS0FBUDtBQUNEOzs7c0NBRWtCO0FBQ2pCLFVBQUlDLE1BQU0sR0FBRyxLQUFLRSxLQUFMLENBQVdGLE1BQVgsR0FBb0IsQ0FBakM7QUFDQSxVQUFJQSxNQUFNLEdBQUcsR0FBYixFQUFrQkEsTUFBTSxHQUFHLEdBQVQ7QUFDbEIsVUFBSUEsTUFBTSxHQUFHLEdBQWIsRUFBa0JBLE1BQU0sR0FBRyxHQUFUO0FBQ2xCLGFBQU9BLE1BQVA7QUFDRDs7O21DQUVlO0FBQUEsVUFDTmdCLFlBRE0sR0FDVyxLQUFLQyxLQURoQixDQUNORCxZQURNOztBQUFBLGtCQUVLLEtBQUtkLEtBQUwsQ0FBV3FCLEtBQVgsSUFBb0IsRUFGekI7QUFBQSxVQUVOQyxNQUZNLFNBRU5BLE1BRk07O0FBR2QsVUFBTUMsYUFBYSxHQUFHeEIsTUFBTSxDQUFDeUIsWUFBUCxDQUFvQkgsS0FBcEIsQ0FBMEJDLE1BQWhEO0FBQ0EsYUFDRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFUixZQUFZLENBQUNXLEdBQWIsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxTQUFsQixFQUE0QkMsSUFBNUIsQ0FBaUMsRUFBakMsQ0FEUDtBQUVFLFFBQUEsTUFBTSxFQUFFZCxZQUZWO0FBR0UsUUFBQSxXQUFXLEVBQUUsS0FBS0gsYUFIcEI7QUFJRSxRQUFBLEtBQUssRUFBRSxLQUFLa0IsY0FBTCxFQUpUO0FBS0UsUUFBQSxNQUFNLEVBQUUsS0FBS0MsZUFBTCxFQUxWO0FBTUUsUUFBQSxLQUFLLG9CQUFPUCxhQUFQLEVBQXlCRCxNQUF6QjtBQU5QLFFBREY7QUFVRDs7OzZCQUVTO0FBQUE7O0FBQ1IsVUFBTVMsUUFBUSxxQkFBUWhDLE1BQU0sQ0FBQ3lCLFlBQVAsQ0FBb0JPLFFBQTVCLEVBQXlDLEtBQUsvQixLQUFMLENBQVcrQixRQUFwRCxDQUFkOztBQUNBLFVBQU1WLEtBQUsscUJBQVF0QixNQUFNLENBQUN5QixZQUFQLENBQW9CSCxLQUE1QixFQUFzQyxLQUFLckIsS0FBTCxDQUFXcUIsS0FBakQsQ0FBWDs7QUFDQSxVQUFNQyxNQUFNLHFCQUFRdkIsTUFBTSxDQUFDeUIsWUFBUCxDQUFvQkgsS0FBcEIsQ0FBMEJDLE1BQWxDLEVBQTZDLENBQUMsS0FBS3RCLEtBQUwsQ0FBV3FCLEtBQVgsSUFBb0IsRUFBckIsRUFBeUJDLE1BQXRFLENBQVo7O0FBQ0EsYUFDRSxnQ0FBQyxTQUFEO0FBQVcsUUFBQSxLQUFLLEVBQUUsS0FBS3RCLEtBQUwsQ0FBV0gsS0FBN0I7QUFBb0MsUUFBQSxNQUFNLEVBQUUsS0FBS0csS0FBTCxDQUFXRjtBQUF2RCxTQUNFLGdDQUFDLGlCQUFEO0FBQU8sUUFBQSxLQUFLLEVBQUUsS0FBS0UsS0FBTCxDQUFXSCxLQUF6QjtBQUFnQyxRQUFBLE1BQU0sRUFBRSxLQUFLRyxLQUFMLENBQVdGLE1BQW5EO0FBQTJELFFBQUEsZUFBZSxFQUFFLEtBQUtpQixLQUFMLENBQVdOLGVBQXZGO0FBQXdHLFFBQUEsYUFBYSxFQUFFLEtBQUtULEtBQUwsQ0FBV2dDO0FBQWxJLFNBQ0UsZ0NBQUMscUJBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxZQURMO0FBRUUsUUFBQSxTQUFTLEVBQUVELFFBQVEsQ0FBQ0UsU0FGdEI7QUFHRSxRQUFBLEtBQUssRUFBRUYsUUFBUSxDQUFDRyxLQUhsQjtBQUlFLFFBQUEsS0FBSyxFQUFFSCxRQUFRLENBQUNJLEtBSmxCO0FBS0UsUUFBQSxRQUFRLEVBQUU7QUFMWixRQURGLEVBUUUsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxPQURMO0FBRUUsUUFBQSxTQUFTLEVBQUUsS0FBS25DLEtBQUwsQ0FBV29DLGVBRnhCO0FBR0UsUUFBQSxRQUFRLEVBQUUsS0FBS3BDLEtBQUwsQ0FBV3FDLG1CQUh2QjtBQUlFLFFBQUEsTUFBTSxFQUFFLEVBSlY7QUFLRSxRQUFBLFVBQVUsRUFBRSxLQUFLcEMsVUFMbkI7QUFNRSxRQUFBLFFBQVEsRUFBRSxLQUFLTyxhQU5qQjtBQU9FLFFBQUEsV0FBVyxFQUFFLEtBQUtFLGdCQVBwQjtBQVFFLFFBQUEsNkJBQTZCLEVBQUUsS0FBS1YsS0FBTCxDQUFXc0MsNkJBUjVDO0FBU0UsUUFBQSxrQkFBa0IsRUFBRSxLQUFLdEMsS0FBTCxDQUFXZ0I7QUFUakMsUUFSRixFQW1CRyxLQUFLRCxLQUFMLENBQVdkLFVBQVgsSUFDQyxLQUFLRCxLQUFMLENBQVdrQixNQUFYLENBQWtCTyxHQUFsQixDQUFzQixVQUFDUCxNQUFELEVBQVNxQixLQUFUO0FBQUEsZUFDcEIsZ0NBQUMsdUJBQUQ7QUFDRSxVQUFBLEdBQUcsRUFBRXJCLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVMsRUFEakI7QUFFRSxVQUFBLEVBQUUsRUFBRVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxFQUZoQjtBQUdFLFVBQUEsVUFBVSxFQUFFVCxNQUFNLENBQUNELE1BSHJCO0FBSUUsVUFBQSxLQUFLLEVBQUMsT0FKUjtBQUtFLFVBQUEsR0FBRyxFQUFFQyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVzQixHQUxqQjtBQU1FLFVBQUEsR0FBRyxFQUFFdEIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVdUIsR0FOakI7QUFPRSxVQUFBLFlBQVksRUFBRXZCLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVXdCLFFBUDFCO0FBUUUsVUFBQSxNQUFNLEVBQUUsR0FSVjtBQVNFLFVBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQzFDLEtBQUwsQ0FBVzJDLGtCQVQzQjtBQVVFLFVBQUEsTUFBTSxFQUFFSixLQVZWO0FBV0UsVUFBQSxPQUFPLEVBQUUsaUJBQUNwQixhQUFELEVBQWdCQyxJQUFoQjtBQUFBLG1CQUF5QixNQUFJLENBQUN3QixrQkFBTCxDQUF3QjFCLE1BQXhCLEVBQWdDQyxhQUFoQyxFQUErQ0MsSUFBL0MsQ0FBekI7QUFBQSxXQVhYO0FBWUUsVUFBQSxXQUFXLEVBQUVDLEtBQUssQ0FBQ3dCLFdBWnJCO0FBYUUsVUFBQSxvQkFBb0IsRUFBRXhCLEtBQUssQ0FBQ3lCLG9CQWI5QjtBQWNFLFVBQUEsU0FBUyxFQUFFekIsS0FBSyxDQUFDMEIsZUFkbkI7QUFlRSxVQUFBLGtCQUFrQixFQUFFMUIsS0FBSyxDQUFDMkI7QUFmNUIsVUFEb0I7QUFBQSxPQUF0QixDQXBCSixDQURGLEVBMENFLGdDQUFDLHlDQUFEO0FBQ0UsUUFBQSxjQUFjLEVBQUUxQixNQUFNLENBQUMyQixjQUR6QjtBQUVFLFFBQUEsc0JBQXNCLEVBQUUzQixNQUFNLENBQUM0QixzQkFGakM7QUFHRSxRQUFBLHNCQUFzQixFQUFFNUIsTUFBTSxDQUFDNkI7QUFIakMsU0FLRyxLQUFLcEMsS0FBTCxDQUFXRixVQUFYLElBQXlCLEtBQUtFLEtBQUwsQ0FBV0QsWUFBcEMsSUFDQztBQUFLLFFBQUEsU0FBUyxFQUFDLGtCQUFmO0FBQWtDLFFBQUEsR0FBRyxFQUFDO0FBQXRDLFNBQ0csS0FBS3NDLFlBQUwsRUFESCxDQU5KLENBMUNGLEVBcURHLEtBQUtwRCxLQUFMLENBQVdxRCxRQXJEZCxDQURGO0FBeUREOzs7O0VBOVFrQkMsZ0I7O0FBQWZ2RCxNLENBQ0d3RCxTLEdBQVk7QUFDakI7QUFDQWpELEVBQUFBLE9BQU8sRUFBRWtELHNCQUFVQyxJQUZGO0FBR2pCSixFQUFBQSxRQUFRLEVBQUVHLHNCQUFVRSxTQUFWLENBQW9CLENBQzVCRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVJLElBQTVCLENBRDRCLEVBRTVCSixzQkFBVUksSUFGa0IsQ0FBcEIsQ0FITztBQU9qQjtBQUNBMUMsRUFBQUEsTUFBTSxFQUFFc0Msc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVRyxPQUFWLENBQ3hCSCxzQkFBVUssS0FBVixDQUFnQjtBQUNkO0FBQ0FsQyxJQUFBQSxFQUFFLEVBQUU2QixzQkFBVU0sTUFBVixDQUFpQkMsVUFGUDtBQUdkO0FBQ0F2QixJQUFBQSxHQUFHLEVBQUVnQixzQkFBVVEsTUFBVixDQUFpQkQsVUFKUjtBQUtkO0FBQ0F0QixJQUFBQSxHQUFHLEVBQUVlLHNCQUFVUSxNQUFWLENBQWlCRCxVQU5SO0FBT2Q7QUFDQUUsSUFBQUEsSUFBSSxFQUFFVCxzQkFBVU0sTUFBVixDQUFpQkMsVUFSVDtBQVNkO0FBQ0FyQixJQUFBQSxRQUFRLEVBQUVjLHNCQUFVTSxNQUFWLENBQWlCQyxVQVZiO0FBV2Q7QUFDQUcsSUFBQUEsT0FBTyxFQUFFVixzQkFBVU0sTUFaTDtBQWFkO0FBQ0FLLElBQUFBLElBQUksRUFBRVgsc0JBQVVNLE1BQVYsQ0FBaUJDLFVBZFQ7QUFlZDtBQUNBSyxJQUFBQSxTQUFTLEVBQUVaLHNCQUFVTSxNQUFWLENBQWlCQyxVQWhCZDtBQWlCZDtBQUNBTSxJQUFBQSxHQUFHLEVBQUViLHNCQUFVTSxNQUFWLENBQWlCQztBQWxCUixHQUFoQixFQW1CR0EsVUFwQnFCLENBQWxCLEVBcUJMQSxVQTdCYztBQThCakI7QUFDQWxFLEVBQUFBLEtBQUssRUFBRTJELHNCQUFVUSxNQUFWLENBQWlCRCxVQS9CUDtBQWdDakI7QUFDQWpFLEVBQUFBLE1BQU0sRUFBRTBELHNCQUFVUSxNQUFWLENBQWlCRCxVQWpDUjtBQWtDakI7QUFDQTNCLEVBQUFBLGVBQWUsRUFBRW9CLHNCQUFVTSxNQW5DVjtBQW9DakI7QUFDQXpCLEVBQUFBLG1CQUFtQixFQUFFbUIsc0JBQVVNLE1BckNkO0FBc0NqQjtBQUNBOUIsRUFBQUEsYUFBYSxFQUFFd0Isc0JBQVVRLE1BdkNSO0FBd0NqQjtBQUNBMUIsRUFBQUEsNkJBQTZCLEVBQUVrQixzQkFBVVEsTUF6Q3hCO0FBMENqQjtBQUNBaEQsRUFBQUEsa0JBQWtCLEVBQUV3QyxzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVLLEtBQVYsQ0FBZ0I7QUFDcERyQixJQUFBQSxHQUFHLEVBQUVnQixzQkFBVVEsTUFBVixDQUFpQkQsVUFEOEI7QUFFcER0QixJQUFBQSxHQUFHLEVBQUVlLHNCQUFVUSxNQUFWLENBQWlCRDtBQUY4QixHQUFoQixDQUFsQixDQTNDSDtBQStDakI7QUFDQWhDLEVBQUFBLFFBQVEsRUFBRXlCLHNCQUFVSyxLQUFWLENBQWdCO0FBQ3hCM0IsSUFBQUEsS0FBSyxFQUFFc0Isc0JBQVVRLE1BRE87QUFFeEIvQixJQUFBQSxTQUFTLEVBQUV1QixzQkFBVVEsTUFGRztBQUd4QjdCLElBQUFBLEtBQUssRUFBRXFCLHNCQUFVUTtBQUhPLEdBQWhCLENBaERPO0FBcURqQjtBQUNBckIsRUFBQUEsa0JBQWtCLEVBQUVhLHNCQUFVUSxNQXREYjtBQXVEakI7QUFDQTNDLEVBQUFBLEtBQUssRUFBRW1DLHNCQUFVSyxLQUFWLENBQWdCO0FBQ3JCaEIsSUFBQUEsV0FBVyxFQUFFVyxzQkFBVVEsTUFERjtBQUVyQmxCLElBQUFBLG9CQUFvQixFQUFFVSxzQkFBVVEsTUFGWDtBQUdyQmpCLElBQUFBLGVBQWUsRUFBRVMsc0JBQVVRLE1BSE47QUFJckJoQixJQUFBQSx3QkFBd0IsRUFBRVEsc0JBQVVRLE1BSmY7QUFLckIxQyxJQUFBQSxNQUFNLEVBQUVrQyxzQkFBVUssS0FBVixDQUFnQjtBQUN0QlMsTUFBQUEsZUFBZSxFQUFFZCxzQkFBVU0sTUFETDtBQUV0QlMsTUFBQUEsY0FBYyxFQUFFZixzQkFBVU0sTUFGSjtBQUd0QlUsTUFBQUEsZUFBZSxFQUFFaEIsc0JBQVVNLE1BSEw7QUFJdEJXLE1BQUFBLGdCQUFnQixFQUFFakIsc0JBQVVNLE1BSk47QUFLdEJZLE1BQUFBLGNBQWMsRUFBRWxCLHNCQUFVTSxNQUxKO0FBTXRCYSxNQUFBQSxtQkFBbUIsRUFBRW5CLHNCQUFVTSxNQU5UO0FBT3RCYyxNQUFBQSxXQUFXLEVBQUVwQixzQkFBVU0sTUFQRDtBQVF0QmUsTUFBQUEsU0FBUyxFQUFFckIsc0JBQVVNLE1BUkM7QUFTdEJnQixNQUFBQSxXQUFXLEVBQUV0QixzQkFBVU0sTUFURDtBQVV0QmlCLE1BQUFBLGNBQWMsRUFBRXZCLHNCQUFVTSxNQVZKO0FBV3RCa0IsTUFBQUEsYUFBYSxFQUFFeEIsc0JBQVVNLE1BWEg7QUFZdEJiLE1BQUFBLGNBQWMsRUFBRU8sc0JBQVVNLE1BWko7QUFhdEJaLE1BQUFBLHNCQUFzQixFQUFFTSxzQkFBVVEsTUFiWjtBQWN0QmIsTUFBQUEsc0JBQXNCLEVBQUVLLHNCQUFVUSxNQWRaO0FBZXRCaUIsTUFBQUEsZUFBZSxFQUFFekIsc0JBQVUwQixJQWZMO0FBZ0J0QkMsTUFBQUEsZUFBZSxFQUFFM0Isc0JBQVUwQixJQWhCTDtBQWlCdEI7QUFDQUUsTUFBQUEsVUFBVSxFQUFFNUIsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FDOUJGLHNCQUFVTSxNQURvQixFQUU5Qk4sc0JBQVVJLElBRm9CLENBQXBCLENBbEJVO0FBc0J0QjtBQUNBeUIsTUFBQUEsV0FBVyxFQUFFN0Isc0JBQVVFLFNBQVYsQ0FBb0IsQ0FDL0JGLHNCQUFVTSxNQURxQixFQUUvQk4sc0JBQVVJLElBRnFCLENBQXBCO0FBdkJTLEtBQWhCO0FBTGEsR0FBaEI7QUF4RFUsQztBQURmN0QsTSxDQTZGR3lCLFksR0FBZTtBQUNwQk8sRUFBQUEsUUFBUSxFQUFFO0FBQ1JHLElBQUFBLEtBQUssRUFBRSxRQURDO0FBRVJELElBQUFBLFNBQVMsRUFBRSxDQUZIO0FBR1JFLElBQUFBLEtBQUssRUFBRW1ELElBQUksQ0FBQ0MsRUFBTCxHQUFVO0FBSFQsR0FEVTtBQU1wQjVDLEVBQUFBLGtCQUFrQixFQUFFLENBTkE7QUFPcEIzQixFQUFBQSxrQkFBa0IsRUFBRSxFQVBBO0FBUXBCb0IsRUFBQUEsZUFBZSxFQUFFLDRHQVJHO0FBU3BCQyxFQUFBQSxtQkFBbUIsRUFBRSw0R0FURDtBQVVwQmhCLEVBQUFBLEtBQUssRUFBRTtBQUNMd0IsSUFBQUEsV0FBVyxFQUFFLFFBRFI7QUFFTEMsSUFBQUEsb0JBQW9CLEVBQUUsUUFGakI7QUFHTEMsSUFBQUEsZUFBZSxFQUFFLFFBSFo7QUFJTEMsSUFBQUEsd0JBQXdCLEVBQUUsUUFKckI7QUFLTDFCLElBQUFBLE1BQU0sRUFBRTtBQUNOMkIsTUFBQUEsY0FBYyxFQUFFLFFBRFY7QUFFTkMsTUFBQUEsc0JBQXNCLEVBQUUsR0FGbEI7QUFHTkMsTUFBQUEsc0JBQXNCLEVBQUUsR0FIbEI7QUFJTm1CLE1BQUFBLGVBQWUsRUFBRSxZQUpYO0FBS05DLE1BQUFBLGNBQWMsRUFBRSxNQUxWO0FBTU5DLE1BQUFBLGVBQWUsRUFBRSxLQU5YO0FBT05DLE1BQUFBLGdCQUFnQixFQUFFLE1BUFo7QUFRTkMsTUFBQUEsY0FBYyxFQUFFLE1BUlY7QUFTTkMsTUFBQUEsbUJBQW1CLEVBQUUsTUFUZjtBQVVOQyxNQUFBQSxXQUFXLEVBQUUsTUFWUDtBQVdOQyxNQUFBQSxTQUFTLEVBQUUsU0FYTDtBQVlOQyxNQUFBQSxXQUFXLEVBQUUsTUFaUDtBQWFOQyxNQUFBQSxjQUFjLEVBQUUsWUFiVjtBQWNOQyxNQUFBQSxhQUFhLEVBQUUsTUFkVDtBQWVOSSxNQUFBQSxVQUFVLEVBQUUsZUFmTjtBQWdCTkMsTUFBQUEsV0FBVyxFQUFFO0FBaEJQO0FBTEg7QUFWYSxDO2VBb0xUdEYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSdcbmltcG9ydCBHbG9iZSBmcm9tICcuL0dsb2JlJ1xuaW1wb3J0IEdsb2JlTWFya2VyIGZyb20gJy4vR2xvYmVNYXJrZXInXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJ1xuaW1wb3J0IFNwb3RMaWdodCBmcm9tICcuL1Nwb3RMaWdodCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9cHg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuXG4gIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICB9XG5gXG5cbmNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQ2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIHJlYWR5IGFuZCBsb2FkZWQgXG4gICAgb25SZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICBdKSxcbiAgICAvLyBBcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB0aGUgZ2xvYmVcbiAgICBldmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgLy8gVW5pcXVlIGV2ZW50IGlkXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExhdGl0dWRlXG4gICAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb25naXR1ZGVcbiAgICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIE5hbWUgKHRpdGxlKSBvZiB0aGUgZXZlbnRcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb2NhdGlvbiBhcHBlYXJzIG9uIHRoZSBnbG9iZVxuICAgICAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBBcHBlYXJzIGluIHRoZSBkaWFsb2cgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGxvY2F0aW9uIGlzIHVzZWRcbiAgICAgICAgYWRkcmVzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLy8gRGF0ZSBvZiB0aGUgZXZlbnRcbiAgICAgICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb2NhbCB0aW1lIG9mIHRoZSBldmVudFxuICAgICAgICBsb2NhbFRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gVVJMIHRvIHRoZSBldmVudFxuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICkpLmlzUmVxdWlyZWQsXG4gICAgLy8gV2lkdGggaW4gcGl4ZWxzXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvLyBIZWlnaHQgaW4gcGl4ZWxzXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy8gVVJMIGZvciB0aGUgZ2xvYmVzIG1haW4gdGV4dHVyZVxuICAgIGdsb2JlVGV4dHVyZVVSTDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBVUkwgZm9yIGEgYnVtcCBtYXAgaWYgYXBwbGljYWJsZVxuICAgIGdsb2JlQnVtcFRleHR1cmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gRmxvYXRpbmcgcG9pbnQgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZVxuICAgIGluaXRab29tTGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gSG93IHF1aWNrbHkgd2lsbCB0aGUgZ2xvYmUgcm90YXRlIHBlciAxMDAwa20gb24gdGhlIGluaXQgYW5pbWF0aW9uXG4gICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gUG9pbnRzIHRvIHJvdGF0ZSBhcm91bmQgd2hlbiB0aGUgZ2xvYmUgbG9hZHNcbiAgICBpbml0Um90YXRpb25Qb2ludHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pKSxcbiAgICAvLyBBZGp1c3QgdGhlIGxpZ2h0aW5nIGZvciB0aGUgc2NlbmVcbiAgICBsaWdodGluZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgaW50ZW5zaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgYW5nbGU6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KSxcbiAgICAvLyBEaXN0YW5jZSB0aGF0IHRoZSBtYXJrZXJzIHdpbGwgZHJvcCBmcm9tIHNwYWNlXG4gICAgbWFya2VyRHJvcERpc3RhbmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIENvbG9ycyBldGMuXG4gICAgdGhlbWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtYXJrZXJDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFya2VyRm9udENvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWFya2VyRm9udEhpZ2hsaWdodENvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgZGlhbG9nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZUZvbnRXZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaGFkb3dDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGlua0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBidXR0b25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAvLyBKU1ggb3IgYSBzdHJpbmcgZm9yIHRoZSBjaGFyYWN0ZXIgdG8gYXBwZWFyXG4gICAgICAgIGJhY2tCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICAgICAgXSksXG4gICAgICAgIC8vIEpTWCBvciBhIHN0cmluZyBmb3IgdGhlIGlvbmljb24gaWNvbiB0byBhcHBlYXIgaHR0cHM6Ly9pb25pY29ucy5jb20vIHByZXBlbmQgaW9zLSBvciBtZC1cbiAgICAgICAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGlnaHRpbmc6IHtcbiAgICAgIGNvbG9yOiAweDQwNDA0MCxcbiAgICAgIGludGVuc2l0eTogOCxcbiAgICAgIGFuZ2xlOiBNYXRoLlBJIC8gNlxuICAgIH0sXG4gICAgbWFya2VyRHJvcERpc3RhbmNlOiAxLFxuICAgIGluaXRSb3RhdGlvblBvaW50czogW10sXG4gICAgZ2xvYmVUZXh0dXJlVVJMOiAnaHR0cHM6Ly9sZXduZWxzb24uZ2l0aHViLmlvL3JlYWN0LWdsb2JlLWV2ZW50cy12aXN1YWxpc2VyL2Fzc2V0cy9pbWFnZXMvdGV4dHVyZXMvcmVhbGlzdGljLWdsb2JlL2dsb2JlLmpwZycsXG4gICAgZ2xvYmVCdW1wVGV4dHVyZVVSTDogJ2h0dHBzOi8vbGV3bmVsc29uLmdpdGh1Yi5pby9yZWFjdC1nbG9iZS1ldmVudHMtdmlzdWFsaXNlci9hc3NldHMvaW1hZ2VzL3RleHR1cmVzL3JlYWxpc3RpYy1nbG9iZS9nbG9iZS5qcGcnLFxuICAgIHRoZW1lOiB7XG4gICAgICBtYXJrZXJDb2xvcjogMHg3MDljZjAsXG4gICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogMHgxZmMxYzMsXG4gICAgICBtYXJrZXJGb250Q29sb3I6IDB4NzA5Y2YwLFxuICAgICAgbWFya2VyRm9udEhpZ2hsaWdodENvbG9yOiAweDFmYzFjMyxcbiAgICAgIGRpYWxvZzoge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ2RpYWxvZycsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDUwMCxcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogNTAwLFxuICAgICAgICB0aXRsZUZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgdGl0bGVGb250Q29sb3I6ICcjMDAwJyxcbiAgICAgICAgdGl0bGVGb250V2VpZ2h0OiAnNjAwJyxcbiAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogJyNkZGQnLFxuICAgICAgICBib2R5QmFja2dyb3VuZDogJyNlZWUnLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgICAgIHNoYWRvd0NvbG9yOiAnIzAwMCcsXG4gICAgICAgIGxpbmtDb2xvcjogJyMwMDAwZmYnLFxuICAgICAgICBidXR0b25Db2xvcjogJyMwMDAnLFxuICAgICAgICBib2R5Rm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICBib2R5Rm9udENvbG9yOiAnIzAwMCcsXG4gICAgICAgIGJhY2tCdXR0b246ICdtZC1hcnJvdy1iYWNrJyxcbiAgICAgICAgY2xvc2VCdXR0b246ICdtZC1jbG9zZS1jaXJjbGUtb3V0bGluZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ2xvYmVSZWFkeTogZmFsc2UsXG4gICAgICBjb250cm9sc0VuYWJsZWQ6ICEocHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzLmxlbmd0aCA+IDEpLFxuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgICBhY3RpdmVFdmVudHM6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlXG4gIH1cblxuICBnbG9iZVJlYWR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuXG4gICAgdGhpcy5wcm9wcy5vblJlYWR5ICYmIHRoaXMucHJvcHMub25SZWFkeSgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdsb2JlUmVhZHk6IHRydWUgfSlcbiAgfVxuXG4gIGdsb2JlT25Sb3RhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogZmFsc2UgfSlcbiAgfVxuXG4gIGdsb2JlT25Sb3RhdGVFbmQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSB9KVxuICB9XG5cbiAgYXN5bmMgZ2xvYmVNYXJrZXJDbGlja2VkIChldmVudHMsIGFuaW1hdGlvblRpbWUsIGRvbmUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiBmYWxzZSB9KVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgYW5pbWF0aW9uVGltZSkpXG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVyblxuICAgIGlmIChkb25lKSB0aGlzLmRpYWxvZ0RvbmUgPSBkb25lXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgYWN0aXZlRXZlbnRzOiBldmVudHNcbiAgICB9KVxuICB9XG5cbiAgb25EaWFsb2dDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmRpYWxvZ0RvbmUgJiYgdGhpcy5kaWFsb2dEb25lKClcbiAgICB0aGlzLmRpYWxvZ0RvbmUgPSBudWxsXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSwgc2hvd0RpYWxvZzogZmFsc2UsIGFjdGl2ZUV2ZW50czogbnVsbCB9KVxuICB9XG5cbiAgZ2V0RGlhbG9nV2lkdGggKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMucHJvcHMud2lkdGggLyAzXG4gICAgaWYgKHdpZHRoIDwgMzIwKSB3aWR0aCA9IDMyMFxuICAgIGlmICh3aWR0aCA+IDQwMCkgd2lkdGggPSA0MDBcbiAgICByZXR1cm4gd2lkdGhcbiAgfVxuXG4gIGdldERpYWxvZ0hlaWdodCAoKSB7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMlxuICAgIGlmIChoZWlnaHQgPCAzMDApIGhlaWdodCA9IDMwMFxuICAgIGlmIChoZWlnaHQgPiA2MDApIGhlaWdodCA9IDYwMFxuICAgIHJldHVybiBoZWlnaHRcbiAgfVxuXG4gIHJlbmRlckRpYWxvZyAoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVFdmVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGRpYWxvZyB9ID0gdGhpcy5wcm9wcy50aGVtZSB8fCB7fVxuICAgIGNvbnN0IGRlZmF1bHREaWFsb2cgPSBFdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLmRpYWxvZ1xuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIGtleT17YWN0aXZlRXZlbnRzLm1hcChlID0+IGUuaWQpLmpvaW4oJycpfVxuICAgICAgICBldmVudHM9e2FjdGl2ZUV2ZW50c31cbiAgICAgICAgY2xvc2VEaWFsb2c9e3RoaXMub25EaWFsb2dDbG9zZX1cbiAgICAgICAgd2lkdGg9e3RoaXMuZ2V0RGlhbG9nV2lkdGgoKX1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLmdldERpYWxvZ0hlaWdodCgpfVxuICAgICAgICB0aGVtZT17eyAuLi5kZWZhdWx0RGlhbG9nLCAuLi5kaWFsb2cgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBsaWdodGluZyA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy5saWdodGluZywgLi4udGhpcy5wcm9wcy5saWdodGluZyB9XG4gICAgY29uc3QgdGhlbWUgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUsIC4uLnRoaXMucHJvcHMudGhlbWUgfVxuICAgIGNvbnN0IGRpYWxvZyA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZS5kaWFsb2csIC4uLih0aGlzLnByb3BzLnRoZW1lIHx8IHt9KS5kaWFsb2cgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fT5cbiAgICAgICAgPFNjZW5lIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fSBjb250cm9sc0VuYWJsZWQ9e3RoaXMuc3RhdGUuY29udHJvbHNFbmFibGVkfSBpbml0Wm9vbUxldmVsPXt0aGlzLnByb3BzLmluaXRab29tTGV2ZWx9PlxuICAgICAgICAgIDxTcG90TGlnaHRcbiAgICAgICAgICAgIGlkPSdtYWluX2xpZ2h0J1xuICAgICAgICAgICAgaW50ZW5zaXR5PXtsaWdodGluZy5pbnRlbnNpdHl9XG4gICAgICAgICAgICBjb2xvcj17bGlnaHRpbmcuY29sb3J9XG4gICAgICAgICAgICBhbmdsZT17bGlnaHRpbmcuYW5nbGV9XG4gICAgICAgICAgICBkaXN0YW5jZT17MTAwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxHbG9iZVxuICAgICAgICAgICAgaWQ9J2dsb2JlJ1xuICAgICAgICAgICAgaW1hZ2VQYXRoPXt0aGlzLnByb3BzLmdsb2JlVGV4dHVyZVVSTH1cbiAgICAgICAgICAgIGJ1bXBQYXRoPXt0aGlzLnByb3BzLmdsb2JlQnVtcFRleHR1cmVVUkx9XG4gICAgICAgICAgICByYWRpdXM9ezMwfVxuICAgICAgICAgICAgb25UZXh0dXJlZD17dGhpcy5nbG9iZVJlYWR5fVxuICAgICAgICAgICAgb25Sb3RhdGU9e3RoaXMuZ2xvYmVPblJvdGF0ZX1cbiAgICAgICAgICAgIG9uUm90YXRlRW5kPXt0aGlzLmdsb2JlT25Sb3RhdGVFbmR9XG4gICAgICAgICAgICBpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbj17dGhpcy5wcm9wcy5pbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgIGluaXRSb3RhdGlvblBvaW50cz17dGhpcy5wcm9wcy5pbml0Um90YXRpb25Qb2ludHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5nbG9iZVJlYWR5ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50cy5tYXAoKGV2ZW50cywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEdsb2JlTWFya2VyXG4gICAgICAgICAgICAgICAga2V5PXtldmVudHNbMF0uaWR9XG4gICAgICAgICAgICAgICAgaWQ9e2V2ZW50c1swXS5pZH1cbiAgICAgICAgICAgICAgICBldmVudENvdW50PXtldmVudHMubGVuZ3RofVxuICAgICAgICAgICAgICAgIGdsb2JlPSdnbG9iZSdcbiAgICAgICAgICAgICAgICBsYXQ9e2V2ZW50c1swXS5sYXR9XG4gICAgICAgICAgICAgICAgbG9uPXtldmVudHNbMF0ubG9ufVxuICAgICAgICAgICAgICAgIGxvY2F0aW9uTmFtZT17ZXZlbnRzWzBdLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIHJhZGl1cz17MC4zfVxuICAgICAgICAgICAgICAgIGRyb3BEaXN0YW5jZT17dGhpcy5wcm9wcy5tYXJrZXJEcm9wRGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgekluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoYW5pbWF0aW9uVGltZSwgZG9uZSkgPT4gdGhpcy5nbG9iZU1hcmtlckNsaWNrZWQoZXZlbnRzLCBhbmltYXRpb25UaW1lLCBkb25lKX1cbiAgICAgICAgICAgICAgICBtYXJrZXJDb2xvcj17dGhlbWUubWFya2VyQ29sb3J9XG4gICAgICAgICAgICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I9e3RoZW1lLm1hcmtlckhpZ2hsaWdodENvbG9yfVxuICAgICAgICAgICAgICAgIGZvbnRDb2xvcj17dGhlbWUubWFya2VyRm9udENvbG9yfVxuICAgICAgICAgICAgICAgIGZvbnRIaWdobGlnaHRDb2xvcj17dGhlbWUubWFya2VyRm9udEhpZ2hsaWdodENvbG9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvU2NlbmU+XG4gICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtkaWFsb2cudHJhbnNpdGlvbk5hbWV9XG4gICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17ZGlhbG9nLnRyYW5zaXRpb25FbnRlclRpbWVvdXR9XG4gICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17ZGlhbG9nLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGlhbG9nICYmIHRoaXMuc3RhdGUuYWN0aXZlRXZlbnRzICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlhbG9nLWNvbnRhaW5lcicga2V5PSdkaWFsb2ctY29udGFpbmVyJz5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGlhbG9nKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c1xuIl19