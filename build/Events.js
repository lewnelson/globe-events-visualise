"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
      })), !this.state.globeReady && this.renderLoader(), this.renderDialog());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwic2V0U3RhdGUiLCJnbG9iZU9uUm90YXRlIiwiY29udHJvbHNFbmFibGVkIiwiZ2xvYmVPblJvdGF0ZUVuZCIsIm9uRGlhbG9nQ2xvc2UiLCJkaWFsb2dEb25lIiwic2hvd0RpYWxvZyIsImFjdGl2ZUV2ZW50cyIsInN0YXRlIiwiaW5pdFJvdGF0aW9uUG9pbnRzIiwibGVuZ3RoIiwiZXZlbnRzIiwiYW5pbWF0aW9uVGltZSIsImRvbmUiLCJ0aGVtZSIsImRlZmF1bHRQcm9wcyIsImxvYWRpbmdDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwibG9hZGluZ0NvbXBvbmVudENvbG9yIiwiZGlhbG9nIiwiZGVmYXVsdERpYWxvZyIsImdldERpYWxvZ1dpZHRoIiwiZ2V0RGlhbG9nSGVpZ2h0IiwibGlnaHRpbmciLCJpbml0Wm9vbUxldmVsIiwiaW50ZW5zaXR5IiwiY29sb3IiLCJhbmdsZSIsImdsb2JlVGV4dHVyZVVSTCIsImdsb2JlQnVtcFRleHR1cmVVUkwiLCJpbml0Um90YXRpb25BbmltYXRpb25EdXJhdGlvbiIsIm1hcCIsImluZGV4IiwiaWQiLCJsYXQiLCJsb24iLCJsb2NhdGlvbiIsIm1hcmtlckRyb3BEaXN0YW5jZSIsImdsb2JlTWFya2VyQ2xpY2tlZCIsIm1hcmtlckNvbG9yIiwibWFya2VySGlnaGxpZ2h0Q29sb3IiLCJtYXJrZXJGb250Q29sb3IiLCJtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3IiLCJyZW5kZXJMb2FkZXIiLCJyZW5kZXJEaWFsb2ciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwibmFtZSIsImFkZHJlc3MiLCJkYXRlIiwibG9jYWxUaW1lIiwidXJsIiwibm9kZSIsInRpdGxlRm9udEZhbWlseSIsInRpdGxlRm9udENvbG9yIiwidGl0bGVGb250V2VpZ2h0IiwiaGVhZGVyQmFja2dyb3VuZCIsImJvZHlCYWNrZ3JvdW5kIiwiY29udGFpbmVyQmFja2dyb3VuZCIsInNoYWRvd0NvbG9yIiwibGlua0NvbG9yIiwiYnV0dG9uQ29sb3IiLCJib2R5Rm9udEZhbWlseSIsImJvZHlGb250Q29sb3IiLCJiYWNrQnV0dG9uIiwib25lT2ZUeXBlIiwiY2xvc2VCdXR0b24iLCJNYXRoIiwiUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUdKO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBSEksRUFJSDtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWdCQSxNQUFoQjtBQUFBLENBSkcsQ0FBZjs7SUFPTUMsTTs7Ozs7QUF1SEosa0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsZ0ZBQU1BLEtBQU47QUFEa0IsVUFrQnBCQyxVQWxCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFrQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0wsSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87QUFBQSx1QkFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFkO0FBQUEsZUFBbkIsQ0FESzs7QUFBQTtBQUVYLG9CQUFLRSxVQUFMLElBQW1CLE1BQUtDLFFBQUwsQ0FBYztBQUFFTCxnQkFBQUEsVUFBVSxFQUFFO0FBQWQsZUFBZCxDQUFuQjs7QUFG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LEVBQUUsTUFGVjtBQUdOQyxNQUFBQSxlQUFlLEVBQUUsS0FIWDtBQUlOQyxNQUFBQSxnQkFBZ0IsRUFBRSxNQUpaO0FBS05DLE1BQUFBLGNBQWMsRUFBRSxNQUxWO0FBTU5DLE1BQUFBLG1CQUFtQixFQUFFLE1BTmY7QUFPTkMsTUFBQUEsV0FBVyxFQUFFLE1BUFA7QUFRTkMsTUFBQUEsU0FBUyxFQUFFLFNBUkw7QUFTTkMsTUFBQUEsV0FBVyxFQUFFLE1BVFA7QUFVTkMsTUFBQUEsY0FBYyxFQUFFLFlBVlY7QUFXTkMsTUFBQUEsYUFBYSxFQUFFLE1BWFQ7QUFZTkMsTUFBQUEsVUFBVSxFQUFFLGVBWk47QUFhTkUsTUFBQUEsV0FBVyxFQUFFO0FBYlA7QUFQSDtBQVZhLEM7ZUFzTFQvRSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnXG5pbXBvcnQgR2xvYmUgZnJvbSAnLi9HbG9iZSdcbmltcG9ydCBHbG9iZU1hcmtlciBmcm9tICcuL0dsb2JlTWFya2VyJ1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgU3BvdExpZ2h0IGZyb20gJy4vU3BvdExpZ2h0J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHR9cHg7XG5gXG5cbmNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdGhlIGdsb2JlXG4gICAgZXZlbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIC8vIFVuaXF1ZSBldmVudCBpZFxuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMYXRpdHVkZVxuICAgICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9uZ2l0dWRlXG4gICAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBOYW1lICh0aXRsZSkgb2YgdGhlIGV2ZW50XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9jYXRpb24gYXBwZWFycyBvbiB0aGUgZ2xvYmVcbiAgICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gQXBwZWFycyBpbiB0aGUgZGlhbG9nIGlmIGRlZmluZWQsIG90aGVyd2lzZSBsb2NhdGlvbiBpcyB1c2VkXG4gICAgICAgIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8vIERhdGUgb2YgdGhlIGV2ZW50XG4gICAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9jYWwgdGltZSBvZiB0aGUgZXZlbnRcbiAgICAgICAgbG9jYWxUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIFVSTCB0byB0aGUgZXZlbnRcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICApKS5pc1JlcXVpcmVkLFxuICAgIC8vIFdpZHRoIGluIHBpeGVsc1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy8gSGVpZ2h0IGluIHBpeGVsc1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIC8vIFVSTCBmb3IgdGhlIGdsb2JlcyBtYWluIHRleHR1cmVcbiAgICBnbG9iZVRleHR1cmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gVVJMIGZvciBhIGJ1bXAgbWFwIGlmIGFwcGxpY2FibGVcbiAgICBnbG9iZUJ1bXBUZXh0dXJlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIEZsb2F0aW5nIHBvaW50IGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVcbiAgICBpbml0Wm9vbUxldmVsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIEhvdyBxdWlja2x5IHdpbGwgdGhlIGdsb2JlIHJvdGF0ZSBwZXIgMTAwMGttIG9uIHRoZSBpbml0IGFuaW1hdGlvblxuICAgIGluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIFBvaW50cyB0byByb3RhdGUgYXJvdW5kIHdoZW4gdGhlIGdsb2JlIGxvYWRzXG4gICAgaW5pdFJvdGF0aW9uUG9pbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gICAgLy8gQWRqdXN0IHRoZSBsaWdodGluZyBmb3IgdGhlIHNjZW5lXG4gICAgbGlnaHRpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGludGVuc2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGFuZ2xlOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG4gICAgLy8gRGlzdGFuY2UgdGhhdCB0aGUgbWFya2VycyB3aWxsIGRyb3AgZnJvbSBzcGFjZVxuICAgIG1hcmtlckRyb3BEaXN0YW5jZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBDb2xvcnMgZXRjLlxuICAgIHRoZW1lOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWFya2VyQ29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGxvYWRpbmdDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGlhbG9nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZUZvbnRXZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaGFkb3dDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGlua0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBidXR0b25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8vIEpTWCBvciBhIHN0cmluZyBmb3IgdGhlIGNoYXJhY3RlciB0byBhcHBlYXJcbiAgICAgICAgYmFja0J1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKSxcbiAgICAgICAgLy8gSlNYIG9yIGEgc3RyaW5nIGZvciB0aGUgaW9uaWNvbiBpY29uIHRvIGFwcGVhciBodHRwczovL2lvbmljb25zLmNvbS8gcHJlcGVuZCBpb3MtIG9yIG1kLVxuICAgICAgICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaWdodGluZzoge1xuICAgICAgY29sb3I6IDB4NDA0MDQwLFxuICAgICAgaW50ZW5zaXR5OiA4LFxuICAgICAgYW5nbGU6IE1hdGguUEkgLyA2XG4gICAgfSxcbiAgICBtYXJrZXJEcm9wRGlzdGFuY2U6IDEsXG4gICAgaW5pdFJvdGF0aW9uUG9pbnRzOiBbXSxcbiAgICBnbG9iZVRleHR1cmVVUkw6ICdodHRwczovL2xld25lbHNvbi5naXRodWIuaW8vcmVhY3QtZ2xvYmUtZXZlbnRzLXZpc3VhbGlzZXIvYXNzZXRzL2ltYWdlcy90ZXh0dXJlcy9yZWFsaXN0aWMtZ2xvYmUvZ2xvYmUuanBnJyxcbiAgICBnbG9iZUJ1bXBUZXh0dXJlVVJMOiAnaHR0cHM6Ly9sZXduZWxzb24uZ2l0aHViLmlvL3JlYWN0LWdsb2JlLWV2ZW50cy12aXN1YWxpc2VyL2Fzc2V0cy9pbWFnZXMvdGV4dHVyZXMvcmVhbGlzdGljLWdsb2JlL2dsb2JlLmpwZycsXG4gICAgdGhlbWU6IHtcbiAgICAgIG1hcmtlckNvbG9yOiAweDcwOWNmMCxcbiAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yOiAweDFmYzFjMyxcbiAgICAgIG1hcmtlckZvbnRDb2xvcjogMHg3MDljZjAsXG4gICAgICBtYXJrZXJGb250SGlnaGxpZ2h0Q29sb3I6IDB4MWZjMWMzLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudDogbnVsbCxcbiAgICAgIGxvYWRpbmdDb21wb25lbnRDb2xvcjogJyMwMDAwZmYnLFxuICAgICAgZGlhbG9nOiB7XG4gICAgICAgIHRpdGxlRm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICB0aXRsZUZvbnRDb2xvcjogJyMwMDAnLFxuICAgICAgICB0aXRsZUZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kOiAnI2RkZCcsXG4gICAgICAgIGJvZHlCYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgICAgIGNvbnRhaW5lckJhY2tncm91bmQ6ICcjZWVlJyxcbiAgICAgICAgc2hhZG93Q29sb3I6ICcjMDAwJyxcbiAgICAgICAgbGlua0NvbG9yOiAnIzAwMDBmZicsXG4gICAgICAgIGJ1dHRvbkNvbG9yOiAnIzAwMCcsXG4gICAgICAgIGJvZHlGb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgIGJvZHlGb250Q29sb3I6ICcjMDAwJyxcbiAgICAgICAgYmFja0J1dHRvbjogJ21kLWFycm93LWJhY2snLFxuICAgICAgICBjbG9zZUJ1dHRvbjogJ21kLWNsb3NlLWNpcmNsZS1vdXRsaW5lJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBnbG9iZVJlYWR5OiBmYWxzZSxcbiAgICAgIGNvbnRyb2xzRW5hYmxlZDogIShwcm9wcy5pbml0Um90YXRpb25Qb2ludHMubGVuZ3RoID4gMSksXG4gICAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgICAgIGFjdGl2ZUV2ZW50czogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2VcbiAgfVxuXG4gIGdsb2JlUmVhZHkgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxuICAgIHRoaXMuX2lzTW91bnRlZCAmJiB0aGlzLnNldFN0YXRlKHsgZ2xvYmVSZWFkeTogdHJ1ZSB9KVxuICB9XG5cbiAgZ2xvYmVPblJvdGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiBmYWxzZSB9KVxuICB9XG5cbiAgZ2xvYmVPblJvdGF0ZUVuZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiB0cnVlIH0pXG4gIH1cblxuICBhc3luYyBnbG9iZU1hcmtlckNsaWNrZWQgKGV2ZW50cywgYW5pbWF0aW9uVGltZSwgZG9uZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IGZhbHNlIH0pXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBhbmltYXRpb25UaW1lKSlcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuXG4gICAgaWYgKGRvbmUpIHRoaXMuZGlhbG9nRG9uZSA9IGRvbmVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEaWFsb2c6IHRydWUsXG4gICAgICBhY3RpdmVFdmVudHM6IGV2ZW50c1xuICAgIH0pXG4gIH1cblxuICBvbkRpYWxvZ0Nsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuZGlhbG9nRG9uZSAmJiB0aGlzLmRpYWxvZ0RvbmUoKVxuICAgIHRoaXMuZGlhbG9nRG9uZSA9IG51bGxcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiB0cnVlLCBzaG93RGlhbG9nOiBmYWxzZSwgYWN0aXZlRXZlbnRzOiBudWxsIH0pXG4gIH1cblxuICBnZXREaWFsb2dXaWR0aCAoKSB7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCAvIDNcbiAgICBpZiAod2lkdGggPCAzMjApIHdpZHRoID0gMzIwXG4gICAgaWYgKHdpZHRoID4gNDAwKSB3aWR0aCA9IDQwMFxuICAgIHJldHVybiB3aWR0aFxuICB9XG5cbiAgZ2V0RGlhbG9nSGVpZ2h0ICgpIHtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQgLyAyXG4gICAgaWYgKGhlaWdodCA8IDMwMCkgaGVpZ2h0ID0gMzAwXG4gICAgaWYgKGhlaWdodCA+IDYwMCkgaGVpZ2h0ID0gNjAwXG4gICAgcmV0dXJuIGhlaWdodFxuICB9XG5cbiAgcmVuZGVyTG9hZGVyICgpIHtcbiAgICBjb25zdCB0aGVtZSA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZSwgLi4udGhpcy5wcm9wcy50aGVtZSB9XG4gICAgaWYgKHRoZW1lLmxvYWRpbmdDb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IExvYWRpbmdDb21wb25lbnQgPSB0aGVtZS5sb2FkaW5nQ29tcG9uZW50XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGVyIGNvbG9yPXt0aGVtZS5sb2FkaW5nQ29tcG9uZW50Q29sb3J9PlxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50IC8+XG4gICAgICAgIDwvTG9hZGVyPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGVyIGNvbG9yPXt0aGVtZS5sb2FkaW5nQ29tcG9uZW50Q29sb3J9IC8+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRGlhbG9nICgpIHtcbiAgICBjb25zdCB7IHNob3dEaWFsb2csIGFjdGl2ZUV2ZW50cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghc2hvd0RpYWxvZyB8fCAhYWN0aXZlRXZlbnRzKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHsgZGlhbG9nIH0gPSB0aGlzLnByb3BzLnRoZW1lIHx8IHt9XG4gICAgY29uc3QgZGVmYXVsdERpYWxvZyA9IEV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUuZGlhbG9nXG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgZXZlbnRzPXthY3RpdmVFdmVudHN9XG4gICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLm9uRGlhbG9nQ2xvc2V9XG4gICAgICAgIHdpZHRoPXt0aGlzLmdldERpYWxvZ1dpZHRoKCl9XG4gICAgICAgIGhlaWdodD17dGhpcy5nZXREaWFsb2dIZWlnaHQoKX1cbiAgICAgICAgdGhlbWU9e3sgLi4uZGVmYXVsdERpYWxvZywgLi4uZGlhbG9nIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbGlnaHRpbmcgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMubGlnaHRpbmcsIC4uLnRoaXMucHJvcHMubGlnaHRpbmcgfVxuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0+XG4gICAgICAgIDxTY2VuZSB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0gY29udHJvbHNFbmFibGVkPXt0aGlzLnN0YXRlLmNvbnRyb2xzRW5hYmxlZH0gaW5pdFpvb21MZXZlbD17dGhpcy5wcm9wcy5pbml0Wm9vbUxldmVsfT5cbiAgICAgICAgICA8U3BvdExpZ2h0XG4gICAgICAgICAgICBpZD0nbWFpbl9saWdodCdcbiAgICAgICAgICAgIGludGVuc2l0eT17bGlnaHRpbmcuaW50ZW5zaXR5fVxuICAgICAgICAgICAgY29sb3I9e2xpZ2h0aW5nLmNvbG9yfVxuICAgICAgICAgICAgYW5nbGU9e2xpZ2h0aW5nLmFuZ2xlfVxuICAgICAgICAgICAgZGlzdGFuY2U9ezEwMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R2xvYmVcbiAgICAgICAgICAgIGlkPSdnbG9iZSdcbiAgICAgICAgICAgIGltYWdlUGF0aD17dGhpcy5wcm9wcy5nbG9iZVRleHR1cmVVUkx9XG4gICAgICAgICAgICBidW1wUGF0aD17dGhpcy5wcm9wcy5nbG9iZUJ1bXBUZXh0dXJlVVJMfVxuICAgICAgICAgICAgcmFkaXVzPXszMH1cbiAgICAgICAgICAgIG9uVGV4dHVyZWQ9e3RoaXMuZ2xvYmVSZWFkeX1cbiAgICAgICAgICAgIG9uUm90YXRlPXt0aGlzLmdsb2JlT25Sb3RhdGV9XG4gICAgICAgICAgICBvblJvdGF0ZUVuZD17dGhpcy5nbG9iZU9uUm90YXRlRW5kfVxuICAgICAgICAgICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb249e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICBpbml0Um90YXRpb25Qb2ludHM9e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudHMubWFwKChldmVudHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHbG9iZU1hcmtlclxuICAgICAgICAgICAgICAgIGtleT17ZXZlbnRzWzBdLmlkfVxuICAgICAgICAgICAgICAgIGlkPXtldmVudHNbMF0uaWR9XG4gICAgICAgICAgICAgICAgZXZlbnRDb3VudD17ZXZlbnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBnbG9iZT0nZ2xvYmUnXG4gICAgICAgICAgICAgICAgbGF0PXtldmVudHNbMF0ubGF0fVxuICAgICAgICAgICAgICAgIGxvbj17ZXZlbnRzWzBdLmxvbn1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU9e2V2ZW50c1swXS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICByYWRpdXM9ezAuM31cbiAgICAgICAgICAgICAgICBkcm9wRGlzdGFuY2U9e3RoaXMucHJvcHMubWFya2VyRHJvcERpc3RhbmNlfVxuICAgICAgICAgICAgICAgIHpJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGFuaW1hdGlvblRpbWUsIGRvbmUpID0+IHRoaXMuZ2xvYmVNYXJrZXJDbGlja2VkKGV2ZW50cywgYW5pbWF0aW9uVGltZSwgZG9uZSl9XG4gICAgICAgICAgICAgICAgbWFya2VyQ29sb3I9e3RoZW1lLm1hcmtlckNvbG9yfVxuICAgICAgICAgICAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yPXt0aGVtZS5tYXJrZXJIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250SGlnaGxpZ2h0Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1NjZW5lPlxuICAgICAgICB7IXRoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJiB0aGlzLnJlbmRlckxvYWRlcigpfVxuICAgICAgICB7dGhpcy5yZW5kZXJEaWFsb2coKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNcbiJdfQ==