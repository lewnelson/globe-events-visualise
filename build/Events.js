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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FdmVudHMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJFdmVudHMiLCJwcm9wcyIsImdsb2JlUmVhZHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJfaXNNb3VudGVkIiwib25SZWFkeSIsInNldFN0YXRlIiwiZ2xvYmVPblJvdGF0ZSIsImNvbnRyb2xzRW5hYmxlZCIsImdsb2JlT25Sb3RhdGVFbmQiLCJvbkRpYWxvZ0Nsb3NlIiwiZGlhbG9nRG9uZSIsInNob3dEaWFsb2ciLCJhY3RpdmVFdmVudHMiLCJzdGF0ZSIsImluaXRSb3RhdGlvblBvaW50cyIsImxlbmd0aCIsImV2ZW50cyIsImFuaW1hdGlvblRpbWUiLCJkb25lIiwidGhlbWUiLCJkaWFsb2ciLCJkZWZhdWx0RGlhbG9nIiwiZGVmYXVsdFByb3BzIiwibWFwIiwiZSIsImlkIiwiam9pbiIsImdldERpYWxvZ1dpZHRoIiwiZ2V0RGlhbG9nSGVpZ2h0IiwiRGlhbG9nVGl0bGVDb21wb25lbnQiLCJEaWFsb2dCb2R5Q29tcG9uZW50IiwibGlnaHRpbmciLCJpbml0Wm9vbUxldmVsIiwiZW5hYmxlWm9vbSIsImludGVuc2l0eSIsImNvbG9yIiwiYW5nbGUiLCJnbG9iZVRleHR1cmVVUkwiLCJnbG9iZUJ1bXBUZXh0dXJlVVJMIiwiaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb24iLCJpbmRleCIsImxhdCIsImxvbiIsImxvY2F0aW9uIiwibWFya2VyRHJvcERpc3RhbmNlIiwiZ2xvYmVNYXJrZXJDbGlja2VkIiwibWFya2VyQ29sb3IiLCJtYXJrZXJIaWdobGlnaHRDb2xvciIsIm1hcmtlckZvbnRDb2xvciIsIm1hcmtlckZvbnRIaWdobGlnaHRDb2xvciIsInRyYW5zaXRpb25OYW1lIiwidHJhbnNpdGlvbkVudGVyVGltZW91dCIsInRyYW5zaXRpb25MZWF2ZVRpbWVvdXQiLCJyZW5kZXJEaWFsb2ciLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJib29sIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJuYW1lIiwiYWRkcmVzcyIsImRhdGV0aW1lIiwidXJsIiwidGl0bGVGb250RmFtaWx5IiwidGl0bGVGb250Q29sb3IiLCJ0aXRsZUZvbnRXZWlnaHQiLCJoZWFkZXJCYWNrZ3JvdW5kIiwiYm9keUJhY2tncm91bmQiLCJjb250YWluZXJCYWNrZ3JvdW5kIiwic2hhZG93Q29sb3IiLCJsaW5rQ29sb3IiLCJidXR0b25Db2xvciIsImJvZHlGb250RmFtaWx5IiwiYm9keUZvbnRDb2xvciIsInRyYW5zaXRpb25FbnRlciIsInRyYW5zaXRpb25MZWF2ZSIsImJhY2tCdXR0b24iLCJjbG9zZUJ1dHRvbiIsIk1hdGgiLCJQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsb0JBR0o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FISSxFQUlIO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBZ0JBLE1BQWhCO0FBQUEsQ0FKRyxDQUFmOztJQWFNQyxNOzs7OztBQTBJSixrQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixnRkFBTUEsS0FBTjtBQURrQixVQWtCcEJDLFVBbEJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWtCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTCxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLHVCQUFJQyxVQUFVLENBQUNELE9B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QUUsTUFQWjtBQVFOQyxNQUFBQSxjQUFjLEVBQUUsTUFSVjtBQVNOQyxNQUFBQSxtQkFBbUIsRUFBRSxNQVRmO0FBVU5DLE1BQUFBLFdBQVcsRUFBRSxNQVZQO0FBV05DLE1BQUFBLFNBQVMsRUFBRSxTQVhMO0FBWU5DLE1BQUFBLFdBQVcsRUFBRSxNQVpQO0FBYU5DLE1BQUFBLGNBQWMsRUFBRSxZQWJWO0FBY05DLE1BQUFBLGFBQWEsRUFBRSxNQWRUO0FBZU5HLE1BQUFBLFVBQVUsRUFBRSxlQWZOO0FBZ0JOQyxNQUFBQSxXQUFXLEVBQUU7QUFoQlA7QUFMSDtBQVhhLEM7ZUE2TFR4RixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJ1xuaW1wb3J0IEdsb2JlIGZyb20gJy4vR2xvYmUnXG5pbXBvcnQgR2xvYmVNYXJrZXIgZnJvbSAnLi9HbG9iZU1hcmtlcidcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnXG5pbXBvcnQgU3BvdExpZ2h0IGZyb20gJy4vU3BvdExpZ2h0J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHR9cHg7XG5cbiAgLmRpYWxvZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gIH1cbmBcblxuY2xhc3MgRXZlbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBDYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgcmVhZHkgYW5kIGxvYWRlZCBcbiAgICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvLyBFbmFibGUvZGlzYWJsZSB6b29tIGNvbnRyb2xzXG4gICAgZW5hYmxlWm9vbTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICBdKSxcbiAgICAvLyBBcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB0aGUgZ2xvYmVcbiAgICBldmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgLy8gVW5pcXVlIGV2ZW50IGlkXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIExhdGl0dWRlXG4gICAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb25naXR1ZGVcbiAgICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIE5hbWUgKHRpdGxlKSBvZiB0aGUgZXZlbnRcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBMb2NhdGlvbiBhcHBlYXJzIG9uIHRoZSBnbG9iZVxuICAgICAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAvLyBBcHBlYXJzIGluIHRoZSBkaWFsb2cgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGxvY2F0aW9uIGlzIHVzZWRcbiAgICAgICAgYWRkcmVzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLy8gV2hlbiBpcyB0aGUgZXZlbnQsIGFueSBmb3JtYXQgaXMgYWNjZXB0ZWRcbiAgICAgICAgZGF0ZXRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gVVJMIHRvIHRoZSBldmVudFxuICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgfSkuaXNSZXF1aXJlZFxuICAgICkpLmlzUmVxdWlyZWQsXG4gICAgLy8gV2lkdGggaW4gcGl4ZWxzXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAvLyBIZWlnaHQgaW4gcGl4ZWxzXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgLy8gVVJMIGZvciB0aGUgZ2xvYmVzIG1haW4gdGV4dHVyZVxuICAgIGdsb2JlVGV4dHVyZVVSTDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBVUkwgZm9yIGEgYnVtcCBtYXAgaWYgYXBwbGljYWJsZVxuICAgIGdsb2JlQnVtcFRleHR1cmVVUkw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLy8gRmxvYXRpbmcgcG9pbnQgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZVxuICAgIGluaXRab29tTGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gSG93IHF1aWNrbHkgd2lsbCB0aGUgZ2xvYmUgcm90YXRlIHBlciAxMDAwa20gb24gdGhlIGluaXQgYW5pbWF0aW9uXG4gICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLy8gUG9pbnRzIHRvIHJvdGF0ZSBhcm91bmQgd2hlbiB0aGUgZ2xvYmUgbG9hZHNcbiAgICBpbml0Um90YXRpb25Qb2ludHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pKSxcbiAgICAvLyBBZGp1c3QgdGhlIGxpZ2h0aW5nIGZvciB0aGUgc2NlbmVcbiAgICBsaWdodGluZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNvbG9yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgaW50ZW5zaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgYW5nbGU6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KSxcbiAgICAvLyBEaXN0YW5jZSB0aGF0IHRoZSBtYXJrZXJzIHdpbGwgZHJvcCBmcm9tIHNwYWNlXG4gICAgbWFya2VyRHJvcERpc3RhbmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8vIENvbXBvbmVudCB0byB1c2UgZm9yIHRoZSBkaWFsb2cgdGl0bGVcbiAgICAvLyBSZWNlaXZlcyBwcm9wczpcbiAgICAvLyAtIGV2ZW50IChmb3Igc2luZ2xlIGV2ZW50LCBldmVudCBvYmplY3QpXG4gICAgRGlhbG9nVGl0bGVDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8vIENvbXBvbmVudCB0byB1c2UgZm9yIHRoZSBkaWFsb2cgYm9keVxuICAgIC8vIFJlY2VpdmVzIHByb3BzOlxuICAgIC8vIC0gZXZlbnQgKGZvciBzaW5nbGUgZXZlbnQsIGV2ZW50IG9iamVjdClcbiAgICBEaWFsb2dCb2R5Q29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvLyBDb2xvcnMgZXRjLlxuICAgIHRoZW1lOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWFya2VyQ29sb3I6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcmtlckZvbnRIaWdobGlnaHRDb2xvcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGRpYWxvZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgdGl0bGVGb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0aXRsZUZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdGl0bGVGb250V2VpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBib2R5QmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2hhZG93Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxpbmtDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYnV0dG9uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGJvZHlGb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBib2R5Rm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdHJhbnNpdGlvbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgLy8gSlNYIG9yIGEgc3RyaW5nIGZvciB0aGUgY2hhcmFjdGVyIHRvIGFwcGVhclxuICAgICAgICBiYWNrQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgICAgIF0pLFxuICAgICAgICAvLyBKU1ggb3IgYSBzdHJpbmcgZm9yIHRoZSBpb25pY29uIGljb24gdG8gYXBwZWFyIGh0dHBzOi8vaW9uaWNvbnMuY29tLyBwcmVwZW5kIGlvcy0gb3IgbWQtXG4gICAgICAgIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxpZ2h0aW5nOiB7XG4gICAgICBjb2xvcjogMHg0MDQwNDAsXG4gICAgICBpbnRlbnNpdHk6IDgsXG4gICAgICBhbmdsZTogTWF0aC5QSSAvIDZcbiAgICB9LFxuICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgbWFya2VyRHJvcERpc3RhbmNlOiAxLFxuICAgIGluaXRSb3RhdGlvblBvaW50czogW10sXG4gICAgZ2xvYmVUZXh0dXJlVVJMOiAnaHR0cHM6Ly9sZXduZWxzb24uZ2l0aHViLmlvL3JlYWN0LWdsb2JlLWV2ZW50cy12aXN1YWxpc2VyL2Fzc2V0cy9pbWFnZXMvdGV4dHVyZXMvcmVhbGlzdGljLWdsb2JlL2dsb2JlLmpwZycsXG4gICAgZ2xvYmVCdW1wVGV4dHVyZVVSTDogJ2h0dHBzOi8vbGV3bmVsc29uLmdpdGh1Yi5pby9yZWFjdC1nbG9iZS1ldmVudHMtdmlzdWFsaXNlci9hc3NldHMvaW1hZ2VzL3RleHR1cmVzL3JlYWxpc3RpYy1nbG9iZS9nbG9iZS5qcGcnLFxuICAgIHRoZW1lOiB7XG4gICAgICBtYXJrZXJDb2xvcjogMHg3MDljZjAsXG4gICAgICBtYXJrZXJIaWdobGlnaHRDb2xvcjogMHgxZmMxYzMsXG4gICAgICBtYXJrZXJGb250Q29sb3I6IDB4NzA5Y2YwLFxuICAgICAgbWFya2VyRm9udEhpZ2hsaWdodENvbG9yOiAweDFmYzFjMyxcbiAgICAgIGRpYWxvZzoge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZTogJ2RpYWxvZycsXG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDUwMCxcbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogNTAwLFxuICAgICAgICB0aXRsZUZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcbiAgICAgICAgdGl0bGVGb250Q29sb3I6ICcjMDAwJyxcbiAgICAgICAgdGl0bGVGb250V2VpZ2h0OiAnNjAwJyxcbiAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogJyNkZGQnLFxuICAgICAgICBib2R5QmFja2dyb3VuZDogJyNlZWUnLFxuICAgICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgICAgIHNoYWRvd0NvbG9yOiAnIzAwMCcsXG4gICAgICAgIGxpbmtDb2xvcjogJyMwMDAwZmYnLFxuICAgICAgICBidXR0b25Db2xvcjogJyMwMDAnLFxuICAgICAgICBib2R5Rm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICBib2R5Rm9udENvbG9yOiAnIzAwMCcsXG4gICAgICAgIGJhY2tCdXR0b246ICdtZC1hcnJvdy1iYWNrJyxcbiAgICAgICAgY2xvc2VCdXR0b246ICdtZC1jbG9zZS1jaXJjbGUtb3V0bGluZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ2xvYmVSZWFkeTogZmFsc2UsXG4gICAgICBjb250cm9sc0VuYWJsZWQ6ICEocHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzLmxlbmd0aCA+IDEpLFxuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgICBhY3RpdmVFdmVudHM6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlXG4gIH1cblxuICBnbG9iZVJlYWR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuXG4gICAgdGhpcy5wcm9wcy5vblJlYWR5ICYmIHRoaXMucHJvcHMub25SZWFkeSgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGdsb2JlUmVhZHk6IHRydWUgfSlcbiAgfVxuXG4gIGdsb2JlT25Sb3RhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogZmFsc2UgfSlcbiAgfVxuXG4gIGdsb2JlT25Sb3RhdGVFbmQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSB9KVxuICB9XG5cbiAgYXN5bmMgZ2xvYmVNYXJrZXJDbGlja2VkIChldmVudHMsIGFuaW1hdGlvblRpbWUsIGRvbmUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJvbHNFbmFibGVkOiBmYWxzZSB9KVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgYW5pbWF0aW9uVGltZSkpXG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVyblxuICAgIGlmIChkb25lKSB0aGlzLmRpYWxvZ0RvbmUgPSBkb25lXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RGlhbG9nOiB0cnVlLFxuICAgICAgYWN0aXZlRXZlbnRzOiBldmVudHNcbiAgICB9KVxuICB9XG5cbiAgb25EaWFsb2dDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmRpYWxvZ0RvbmUgJiYgdGhpcy5kaWFsb2dEb25lKClcbiAgICB0aGlzLmRpYWxvZ0RvbmUgPSBudWxsXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyb2xzRW5hYmxlZDogdHJ1ZSwgc2hvd0RpYWxvZzogZmFsc2UsIGFjdGl2ZUV2ZW50czogbnVsbCB9KVxuICB9XG5cbiAgZ2V0RGlhbG9nV2lkdGggKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMucHJvcHMud2lkdGggLyAzXG4gICAgaWYgKHdpZHRoIDwgMzIwKSB3aWR0aCA9IDMyMFxuICAgIGlmICh3aWR0aCA+IDQwMCkgd2lkdGggPSA0MDBcbiAgICByZXR1cm4gd2lkdGhcbiAgfVxuXG4gIGdldERpYWxvZ0hlaWdodCAoKSB7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0IC8gMlxuICAgIGlmIChoZWlnaHQgPCAzMDApIGhlaWdodCA9IDMwMFxuICAgIGlmIChoZWlnaHQgPiA2MDApIGhlaWdodCA9IDYwMFxuICAgIHJldHVybiBoZWlnaHRcbiAgfVxuXG4gIHJlbmRlckRpYWxvZyAoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVFdmVudHMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGRpYWxvZyB9ID0gdGhpcy5wcm9wcy50aGVtZSB8fCB7fVxuICAgIGNvbnN0IGRlZmF1bHREaWFsb2cgPSBFdmVudHMuZGVmYXVsdFByb3BzLnRoZW1lLmRpYWxvZ1xuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIGtleT17YWN0aXZlRXZlbnRzLm1hcChlID0+IGUuaWQpLmpvaW4oJycpfVxuICAgICAgICBldmVudHM9e2FjdGl2ZUV2ZW50c31cbiAgICAgICAgY2xvc2VEaWFsb2c9e3RoaXMub25EaWFsb2dDbG9zZX1cbiAgICAgICAgd2lkdGg9e3RoaXMuZ2V0RGlhbG9nV2lkdGgoKX1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLmdldERpYWxvZ0hlaWdodCgpfVxuICAgICAgICB0aGVtZT17eyAuLi5kZWZhdWx0RGlhbG9nLCAuLi5kaWFsb2cgfX1cbiAgICAgICAgRGlhbG9nVGl0bGVDb21wb25lbnQ9e3RoaXMucHJvcHMuRGlhbG9nVGl0bGVDb21wb25lbnR9XG4gICAgICAgIERpYWxvZ0JvZHlDb21wb25lbnQ9e3RoaXMucHJvcHMuRGlhbG9nQm9keUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBsaWdodGluZyA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy5saWdodGluZywgLi4udGhpcy5wcm9wcy5saWdodGluZyB9XG4gICAgY29uc3QgdGhlbWUgPSB7IC4uLkV2ZW50cy5kZWZhdWx0UHJvcHMudGhlbWUsIC4uLnRoaXMucHJvcHMudGhlbWUgfVxuICAgIGNvbnN0IGRpYWxvZyA9IHsgLi4uRXZlbnRzLmRlZmF1bHRQcm9wcy50aGVtZS5kaWFsb2csIC4uLih0aGlzLnByb3BzLnRoZW1lIHx8IHt9KS5kaWFsb2cgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fT5cbiAgICAgICAgPFNjZW5lXG4gICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cbiAgICAgICAgICBjb250cm9sc0VuYWJsZWQ9e3RoaXMuc3RhdGUuY29udHJvbHNFbmFibGVkfVxuICAgICAgICAgIGluaXRab29tTGV2ZWw9e3RoaXMucHJvcHMuaW5pdFpvb21MZXZlbH1cbiAgICAgICAgICBlbmFibGVab29tPXt0aGlzLnByb3BzLmVuYWJsZVpvb219XG4gICAgICAgID5cbiAgICAgICAgICA8U3BvdExpZ2h0XG4gICAgICAgICAgICBpZD0nbWFpbl9saWdodCdcbiAgICAgICAgICAgIGludGVuc2l0eT17bGlnaHRpbmcuaW50ZW5zaXR5fVxuICAgICAgICAgICAgY29sb3I9e2xpZ2h0aW5nLmNvbG9yfVxuICAgICAgICAgICAgYW5nbGU9e2xpZ2h0aW5nLmFuZ2xlfVxuICAgICAgICAgICAgZGlzdGFuY2U9ezEwMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R2xvYmVcbiAgICAgICAgICAgIGlkPSdnbG9iZSdcbiAgICAgICAgICAgIGltYWdlUGF0aD17dGhpcy5wcm9wcy5nbG9iZVRleHR1cmVVUkx9XG4gICAgICAgICAgICBidW1wUGF0aD17dGhpcy5wcm9wcy5nbG9iZUJ1bXBUZXh0dXJlVVJMfVxuICAgICAgICAgICAgcmFkaXVzPXszMH1cbiAgICAgICAgICAgIG9uVGV4dHVyZWQ9e3RoaXMuZ2xvYmVSZWFkeX1cbiAgICAgICAgICAgIG9uUm90YXRlPXt0aGlzLmdsb2JlT25Sb3RhdGV9XG4gICAgICAgICAgICBvblJvdGF0ZUVuZD17dGhpcy5nbG9iZU9uUm90YXRlRW5kfVxuICAgICAgICAgICAgaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb249e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICBpbml0Um90YXRpb25Qb2ludHM9e3RoaXMucHJvcHMuaW5pdFJvdGF0aW9uUG9pbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZ2xvYmVSZWFkeSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudHMubWFwKChldmVudHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHbG9iZU1hcmtlclxuICAgICAgICAgICAgICAgIGtleT17ZXZlbnRzWzBdLmlkfVxuICAgICAgICAgICAgICAgIGlkPXtldmVudHNbMF0uaWR9XG4gICAgICAgICAgICAgICAgZXZlbnRDb3VudD17ZXZlbnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBnbG9iZT0nZ2xvYmUnXG4gICAgICAgICAgICAgICAgbGF0PXtldmVudHNbMF0ubGF0fVxuICAgICAgICAgICAgICAgIGxvbj17ZXZlbnRzWzBdLmxvbn1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU9e2V2ZW50c1swXS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICByYWRpdXM9ezAuM31cbiAgICAgICAgICAgICAgICBkcm9wRGlzdGFuY2U9e3RoaXMucHJvcHMubWFya2VyRHJvcERpc3RhbmNlfVxuICAgICAgICAgICAgICAgIHpJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGFuaW1hdGlvblRpbWUsIGRvbmUpID0+IHRoaXMuZ2xvYmVNYXJrZXJDbGlja2VkKGV2ZW50cywgYW5pbWF0aW9uVGltZSwgZG9uZSl9XG4gICAgICAgICAgICAgICAgbWFya2VyQ29sb3I9e3RoZW1lLm1hcmtlckNvbG9yfVxuICAgICAgICAgICAgICAgIG1hcmtlckhpZ2hsaWdodENvbG9yPXt0aGVtZS5tYXJrZXJIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250SGlnaGxpZ2h0Q29sb3I9e3RoZW1lLm1hcmtlckZvbnRIaWdobGlnaHRDb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1NjZW5lPlxuICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17ZGlhbG9nLnRyYW5zaXRpb25OYW1lfVxuICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0fVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9e2RpYWxvZy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0RpYWxvZyAmJiB0aGlzLnN0YXRlLmFjdGl2ZUV2ZW50cyAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpYWxvZy1jb250YWluZXInIGtleT0nZGlhbG9nLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckRpYWxvZygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNcbiJdfQ==