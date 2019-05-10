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
        transitionAppear: true,
        transitionAppearTimeout: dialog.transitionAppearTimeout,
        transitionName: dialog.transitionName,
        transitionEnterTimeout: dialog.transitionEnterTimeout,
        transitionLeaveTimeout: dialog.transitionLeaveTimeout
      }, this.state.showDialog && this.state.activeEvents && this.renderDialog()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwic2V0U3RhdGUiLCJnbG9iZU9uUm90YXRlIiwiY29udHJvbHNFbmFibGVkIiwiZ2xvYmVPblJvdGF0ZUVuZCIsIm9uRGlhbG9nQ2xvc2UiLCJkaWFsb2dEb25lIiwic2hvd0RpYWxvZyIsImFjdGl2ZUV2ZW50cyIsInN0YXRlIiwiaW5pdFJvdGF0aW9uUG9pbnRzIiwibGVuZ3RoIiwiZXZlbnRzIiwiYW5pbWF0aW9uVGltZSIsImRvbmUiLCJ0aGVtZSIsImRlZmF1bHRQcm9wcyIsImxvYWRpbmdDb21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwibG9hZGluZ0NvbXBvbmVudENvbG9yIiwiZGlhbG9nIiwiZGVmYXVsdERpYWxvZyIsIm1hcCIsImUiLCJpZCIsImpvaW4iLCJnZXREaWFsb2dXaWR0aCIsImdldERpYWxvZ0hlaWdodCIsImxpZ2h0aW5nIiwiaW5pdFpvb21MZXZlbCIsImludGVuc2l0eSIsImNvbG9yIiwiYW5nbGUiLCJnbG9iZVRleHR1cmVVUkwiLCJnbG9iZUJ1bXBUZXh0dXJlVVJMIiwiaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb24iLCJpbmRleCIsImxhdCIsImxvbiIsImxvY2F0aW9uIiwibWFya2VyRHJvcERpc3RhbmNlIiwiZ2xvYmVNYXJrZXJDbGlja2VkIiwibWFya2VyQ29sb3IiLCJtYXJrZXJIaWdobGlnaHRDb2xvciIsIm1hcmtlckZvbnRDb2xvciIsIm1hcmtlckZvbnRIaWdobGlnaHRDb2xvciIsInJlbmRlckxvYWRlciIsInRyYW5zaXRpb25BcHBlYXJUaW1lb3V0IiwidHJhbnNpdGlvbk5hbWUiLCJ0cmFuc2l0aW9uRW50ZXJUaW1lb3V0IiwidHJhbnNpdGlvbkxlYXZlVGltZW91dCIsInJlbmRlckRpYWxvZyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJuYW1lIiwiYWRkcmVzcyIsImRhdGUiLCJsb2NhbFRpbWUiLCJ1cmwiLCJub2RlIiwidGl0bGVGb250RmFtaWx5IiwidGl0bGVGb250Q29sb3IiLCJ0aXRsZUZvbnRXZWlnaHQiLCJoZWFkZXJCYWNrZ3JvdW5kIiwiYm9keUJhY2tncm91bmQiLCJjb250YWluZXJCYWNrZ3JvdW5kIiwic2hhZG93Q29sb3IiLCJsaW5rQ29sb3IiLCJidXR0b25Db2xvciIsImJvZHlGb250RmFtaWx5IiwiYm9keUZvbnRDb2xvciIsImJhY2tCdXR0b24iLCJvbmVPZlR5cGUiLCJjbG9zZUJ1dHRvbiIsIk1hdGgiLCJQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsb0JBR0o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FISSxFQUlIO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBZ0JBLE1BQWhCO0FBQUEsQ0FKRyxDQUFmOztJQU9NQyxNOzs7OztBQStISixrQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixnRkFBTUEsS0FBTjtBQURrQixVQWtCcEJDLFVBbEJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWtCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTCxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHVCQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVSxJQUFW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QSxjQUFjLEVBQUUsTUFUVjtBQVVOQyxNQUFBQSxtQkFBbUIsRUFBRSxNQVZmO0FBV05DLE1BQUFBLFdBQVcsRUFBRSxNQVhQO0FBWU5DLE1BQUFBLFNBQVMsRUFBRSxTQVpMO0FBYU5DLE1BQUFBLFdBQVcsRUFBRSxNQWJQO0FBY05DLE1BQUFBLGNBQWMsRUFBRSxZQWRWO0FBZU5DLE1BQUFBLGFBQWEsRUFBRSxNQWZUO0FBZ0JOQyxNQUFBQSxVQUFVLEVBQUUsZUFoQk47QUFpQk5FLE1BQUFBLFdBQVcsRUFBRTtBQWpCUDtBQVBIO0FBVmEsQztlQXFNVHJGLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnXG5pbXBvcnQgR2xvYmUgZnJvbSAnLi9HbG9iZSdcbmltcG9ydCBHbG9iZU1hcmtlciBmcm9tICcuL0dsb2JlTWFya2VyJ1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5pbXBvcnQgU3BvdExpZ2h0IGZyb20gJy4vU3BvdExpZ2h0J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHR9cHg7XG5gXG5cbmNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdGhlIGdsb2JlXG4gICAgZXZlbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIC8vIFVuaXF1ZSBldmVudCBpZFxuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMYXRpdHVkZVxuICAgICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9uZ2l0dWRlXG4gICAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBOYW1lICh0aXRsZSkgb2YgdGhlIGV2ZW50XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9jYXRpb24gYXBwZWFycyBvbiB0aGUgZ2xvYmVcbiAgICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gQXBwZWFycyBpbiB0aGUgZGlhbG9nIGlmIGRlZmluZWQsIG90aGVyd2lzZSBsb2NhdGlvbiBpcyB1c2VkXG4gICAgICAgIGFkZHJlc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8vIERhdGUgb2YgdGhlIGV2ZW50XG4gICAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gTG9jYWwgdGltZSBvZiB0aGUgZXZlbnRcbiAgICAgICAgbG9jYWxUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIFVSTCB0byB0aGUgZXZlbnRcbiAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICApKS5pc1JlcXVpcmVkLFxuICAgIC8vIFdpZHRoIGluIHBpeGVsc1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy8gSGVpZ2h0IGluIHBpeGVsc1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIC8vIFVSTCBmb3IgdGhlIGdsb2JlcyBtYWluIHRleHR1cmVcbiAgICBnbG9iZVRleHR1cmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gVVJMIGZvciBhIGJ1bXAgbWFwIGlmIGFwcGxpY2FibGVcbiAgICBnbG9iZUJ1bXBUZXh0dXJlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vIEZsb2F0aW5nIHBvaW50IGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVcbiAgICBpbml0Wm9vbUxldmVsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIEhvdyBxdWlja2x5IHdpbGwgdGhlIGdsb2JlIHJvdGF0ZSBwZXIgMTAwMGttIG9uIHRoZSBpbml0IGFuaW1hdGlvblxuICAgIGluaXRSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIFBvaW50cyB0byByb3RhdGUgYXJvdW5kIHdoZW4gdGhlIGdsb2JlIGxvYWRzXG4gICAgaW5pdFJvdGF0aW9uUG9pbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gICAgLy8gQWRqdXN0IHRoZSBsaWdodGluZyBmb3IgdGhlIHNjZW5lXG4gICAgbGlnaHRpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBjb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGludGVuc2l0eTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGFuZ2xlOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG4gICAgLy8gRGlzdGFuY2UgdGhhdCB0aGUgbWFya2VycyB3aWxsIGRyb3AgZnJvbSBzcGFjZVxuICAgIG1hcmtlckRyb3BEaXN0YW5jZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvLyBDb2xvcnMgZXRjLlxuICAgIHRoZW1lOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWFya2VyQ29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGxvYWRpbmdDb21wb25lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGlhbG9nOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB0aXRsZUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZUZvbnRXZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzaGFkb3dDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGlua0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBidXR0b25Db2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgLy8gSlNYIG9yIGEgc3RyaW5nIGZvciB0aGUgY2hhcmFjdGVyIHRvIGFwcGVhclxuICAgICAgICBiYWNrQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgICAgIF0pLFxuICAgICAgICAvLyBKU1ggb3IgYSBzdHJpbmcgZm9yIHRoZSBpb25pY29uIGljb24gdG8gYXBwZWFyIGh0dHBzOi8vaW9uaWNvbnMuY29tLyBwcmVwZW5kIGlvcy0gb3IgbWQtXG4gICAgICAgIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxpZ2h0aW5nOiB7XG4gICAgICBjb2xvcjogMHg0MDQwNDAsXG4gICAgICBpbnRlbnNpdHk6IDgsXG4gICAgICBhbmdsZTogTWF0aC5QSSAvIDZcbiAgICB9LFxuICAgIG1hcmtlckRyb3BEaXN0YW5jZTogMSxcbiAgICBpbml0Um90YXRpb25Qb2ludHM6IFtdLFxuICAgIGdsb2JlVGV4dHVyZVVSTDogJ2h0dHBzOi8vbGV3bmVsc29uLmdpdGh1Yi5pby9yZWFjdC1nbG9iZS1ldmVudHMtdmlzdWFsaXNlci9hc3NldHMvaW1hZ2VzL3RleHR1cmVzL3JlYWxpc3RpYy1nbG9iZS9nbG9iZS5qcGcnLFxuICAgIGdsb2JlQnVtcFRleHR1cmVVUkw6ICdodHRwczovL2xld25lbHNvbi5naXRodWIuaW8vcmVhY3QtZ2xvYmUtZXZlbnRzLXZpc3VhbGlzZXIvYXNzZXRzL2ltYWdlcy90ZXh0dXJlcy9yZWFsaXN0aWMtZ2xvYmUvZ2xvYmUuanBnJyxcbiAgICB0aGVtZToge1xuICAgICAgbWFya2VyQ29sb3I6IDB4NzA5Y2YwLFxuICAgICAgbWFya2VySGlnaGxpZ2h0Q29sb3I6IDB4MWZjMWMzLFxuICAgICAgbWFya2VyRm9udENvbG9yOiAweDcwOWNmMCxcbiAgICAgIG1hcmtlckZvbnRIaWdobGlnaHRDb2xvcjogMHgxZmMxYzMsXG4gICAgICBsb2FkaW5nQ29tcG9uZW50OiBudWxsLFxuICAgICAgbG9hZGluZ0NvbXBvbmVudENvbG9yOiAnIzAwMDBmZicsXG4gICAgICBkaWFsb2c6IHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6ICdkaWFsb2cnLFxuICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA1MDAsXG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDUwMCxcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IDEwMCxcbiAgICAgICAgdGl0bGVGb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICAgIHRpdGxlRm9udENvbG9yOiAnIzAwMCcsXG4gICAgICAgIHRpdGxlRm9udFdlaWdodDogJzYwMCcsXG4gICAgICAgIGhlYWRlckJhY2tncm91bmQ6ICcjZGRkJyxcbiAgICAgICAgYm9keUJhY2tncm91bmQ6ICcjZWVlJyxcbiAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZDogJyNlZWUnLFxuICAgICAgICBzaGFkb3dDb2xvcjogJyMwMDAnLFxuICAgICAgICBsaW5rQ29sb3I6ICcjMDAwMGZmJyxcbiAgICAgICAgYnV0dG9uQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgYm9keUZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgYm9keUZvbnRDb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrQnV0dG9uOiAnbWQtYXJyb3ctYmFjaycsXG4gICAgICAgIGNsb3NlQnV0dG9uOiAnbWQtY2xvc2UtY2lyY2xlLW91dGxpbmUnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdsb2JlUmVhZHk6IGZhbHNlLFxuICAgICAgY29udHJvbHNFbmFibGVkOiAhKHByb3BzLmluaXRSb3RhdGlvblBvaW50cy5sZW5ndGggPiAxKSxcbiAgICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICAgICAgYWN0aXZlRXZlbnRzOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgZ2xvYmVSZWFkeSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXG4gICAgdGhpcy5faXNNb3VudGVkICYmIHRoaXMuc2V0U3RhdGUoeyBnbG9iZVJlYWR5OiB0cnVlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IGZhbHNlIH0pXG4gIH1cblxuICBnbG9iZU9uUm90YXRlRW5kID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUgfSlcbiAgfVxuXG4gIGFzeW5jIGdsb2JlTWFya2VyQ2xpY2tlZCAoZXZlbnRzLCBhbmltYXRpb25UaW1lLCBkb25lKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogZmFsc2UgfSlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIGFuaW1hdGlvblRpbWUpKVxuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm5cbiAgICBpZiAoZG9uZSkgdGhpcy5kaWFsb2dEb25lID0gZG9uZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0RpYWxvZzogdHJ1ZSxcbiAgICAgIGFjdGl2ZUV2ZW50czogZXZlbnRzXG4gICAgfSlcbiAgfVxuXG4gIG9uRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5kaWFsb2dEb25lICYmIHRoaXMuZGlhbG9nRG9uZSgpXG4gICAgdGhpcy5kaWFsb2dEb25lID0gbnVsbFxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cm9sc0VuYWJsZWQ6IHRydWUsIHNob3dEaWFsb2c6IGZhbHNlLCBhY3RpdmVFdmVudHM6IG51bGwgfSlcbiAgfVxuXG4gIGdldERpYWxvZ1dpZHRoICgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoIC8gM1xuICAgIGlmICh3aWR0aCA8IDMyMCkgd2lkdGggPSAzMjBcbiAgICBpZiAod2lkdGggPiA0MDApIHdpZHRoID0gNDAwXG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICBnZXREaWFsb2dIZWlnaHQgKCkge1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCAvIDJcbiAgICBpZiAoaGVpZ2h0IDwgMzAwKSBoZWlnaHQgPSAzMDBcbiAgICBpZiAoaGVpZ2h0ID4gNjAwKSBoZWlnaHQgPSA2MDBcbiAgICByZXR1cm4gaGVpZ2h0XG4gIH1cblxuICByZW5kZXJMb2FkZXIgKCkge1xuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICBpZiAodGhlbWUubG9hZGluZ0NvbXBvbmVudCkge1xuICAgICAgY29uc3QgTG9hZGluZ0NvbXBvbmVudCA9IHRoZW1lLmxvYWRpbmdDb21wb25lbnRcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkZXIgY29sb3I9e3RoZW1lLmxvYWRpbmdDb21wb25lbnRDb2xvcn0+XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnQgLz5cbiAgICAgICAgPC9Mb2FkZXI+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkZXIgY29sb3I9e3RoZW1lLmxvYWRpbmdDb21wb25lbnRDb2xvcn0gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXJEaWFsb2cgKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlRXZlbnRzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBkaWFsb2cgfSA9IHRoaXMucHJvcHMudGhlbWUgfHwge31cbiAgICBjb25zdCBkZWZhdWx0RGlhbG9nID0gRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZS5kaWFsb2dcbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ1xuICAgICAgICBrZXk9e2FjdGl2ZUV2ZW50cy5tYXAoZSA9PiBlLmlkKS5qb2luKCcnKX1cbiAgICAgICAgZXZlbnRzPXthY3RpdmVFdmVudHN9XG4gICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLm9uRGlhbG9nQ2xvc2V9XG4gICAgICAgIHdpZHRoPXt0aGlzLmdldERpYWxvZ1dpZHRoKCl9XG4gICAgICAgIGhlaWdodD17dGhpcy5nZXREaWFsb2dIZWlnaHQoKX1cbiAgICAgICAgdGhlbWU9e3sgLi4uZGVmYXVsdERpYWxvZywgLi4uZGlhbG9nIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbGlnaHRpbmcgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMubGlnaHRpbmcsIC4uLnRoaXMucHJvcHMubGlnaHRpbmcgfVxuICAgIGNvbnN0IHRoZW1lID0geyAuLi5FdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLCAuLi50aGlzLnByb3BzLnRoZW1lIH1cbiAgICBjb25zdCBkaWFsb2cgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUuZGlhbG9nLCAuLi4odGhpcy5wcm9wcy50aGVtZSB8fCB7fSkuZGlhbG9nIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0+XG4gICAgICAgIDxTY2VuZSB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH0gY29udHJvbHNFbmFibGVkPXt0aGlzLnN0YXRlLmNvbnRyb2xzRW5hYmxlZH0gaW5pdFpvb21MZXZlbD17dGhpcy5wcm9wcy5pbml0Wm9vbUxldmVsfT5cbiAgICAgICAgICA8U3BvdExpZ2h0XG4gICAgICAgICAgICBpZD0nbWFpbl9saWdodCdcbiAgICAgICAgICAgIGludGVuc2l0eT17bGlnaHRpbmcuaW50ZW5zaXR5fVxuICAgICAgICAgICAgY29sb3I9e2xpZ2h0aW5nLmNvbG9yfVxuICAgICAgICAgICAgYW5nbGU9e2xpZ2h0aW5nLmFuZ2xlfVxuICAgICAgICAgICAgZGlzdGFuY2U9ezEwMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R2xvYmVcbiAgICAgICAgICAgIGlkPSdnbG9iZSdcbiAgICAgICAgICAgIGltYWdlUGF0aD17dGhpcy5wcm9wcy5nbG9iZVRleHR1cmVVUkx9XG4gICAgICAgICAgICBidW1wUGF0aD17dGhpcy5wcm9wcy5nbG9iZUJ1bXBUZXh0dXJlVVJMfVxuICAgICAgICAgICAgcmFkaXVzPXszMH1cbiAgICAgICAgICAgIG9uVGV4dHVyZWQ9e3RoaXMuZ2xvYmVSZWFkeX1cbiAgICAgICAgICAgIG9uUm90YXRlPXt0aGlzLmdsb2JlT25Sb3RhdGV9XG4gICAgICAgICAgICBvblJvdGF0ZUVuZD17dGhpcy5nbG9iZU9uUm90YXRlRW5kfVxuICAgICAgICAgICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb249e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICBpbml0Um90YXRpb25Qb2ludHM9e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudHMubWFwKChldmVudHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHbG9iZU1hcmtlclxuICAgICAgICAgICAgICAgIGtleT17ZXZlbnRzWzBdLmlkfVxuICAgICAgICAgICAgICAgIGlkPXtldmVudHNbMF0uaWR9XG4gICAgICAgICAgICAgICAgZXZlbnRDb3VudD17ZXZlbnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBnbG9iZT0nZ2xvYmUnXG4gICAgICAgICAgICAgICAgbGF0PXtldmVudHNbMF0ubGF0fVxuICAgICAgICAgICAgICAgIGxvbj17ZXZlbnRzWzBdLmxvbn1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU9e2V2ZW50c1swXS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICByYWRpdXM9ezAuM31cbiAgICAgICAgICAgICAgICBkcm9wRGlzdGFuY2U9e3RoaXMucHJvcHMubWFya2VyRHJvcERpc3RhbmNlfVxuICAgICAgICAgICAgICAgIHpJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGFuaW1hdGlvblRpbWUsIGRvbmUpID0+IHRoaXMuZ2xvYmVNYXJrZXJDbGlja2VkKGV2ZW50cywgYW5pbWF0aW9uVGltZSwgZG9uZSl9XG4gICAgICAgICAgICAgICAgbWFya2VyQ29sb3I9e3RoZW1lLm1hcmtlckNvbG9yfVxuICAgICAgICAgICAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yPXt0aGVtZS5tYXJrZXJIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250SGlnaGxpZ2h0Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1NjZW5lPlxuICAgICAgICB7IXRoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJiB0aGlzLnJlbmRlckxvYWRlcigpfVxuICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uQXBwZWFyVGltZW91dH1cbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17ZGlhbG9nLnRyYW5zaXRpb25OYW1lfVxuICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0fVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0RpYWxvZyAmJiB0aGlzLnN0YXRlLmFjdGl2ZUV2ZW50cyAmJlxuICAgICAgICAgICAgdGhpcy5yZW5kZXJEaWFsb2coKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNcbiJdfQ==