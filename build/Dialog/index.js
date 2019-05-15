"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Ionicons = _interopRequireWildcard(require("react-icons/io"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: block;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 600;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px 0;\n\n  &:first-of-type {\n    padding-top: 0;\n  }\n\n  &:last-of-type {\n    padding-bottom: 0;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  list-style: none;\n  margin: 0;\n  padding: 16px;\n  font-size: 1em;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  color: ", ";\n  background: none;\n  border: none;\n  outline: none;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  background: none;\n  border: none;\n  outline: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: ", ";\n  font-size: 1.2em;\n  margin: 0;\n  flex: 5;\n  text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 16px 8px;\n\n  > div {\n    display: flex;\n    flex-direction: row;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: auto;\n  flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  box-shadow: 5px 5px 10px 2px ", ";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);

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
}, function (_ref3) {
  var background = _ref3.background;
  return background;
}, function (_ref4) {
  var shadowColor = _ref4.shadowColor;
  return shadowColor;
});

var ScrollWrapper = _styledComponents["default"].div(_templateObject2());

var Header = _styledComponents["default"].div(_templateObject3(), function (_ref5) {
  var background = _ref5.background;
  return background;
});

var Title = _styledComponents["default"].h3(_templateObject4(), function (_ref6) {
  var fontFamily = _ref6.fontFamily;
  return fontFamily;
}, function (_ref7) {
  var color = _ref7.color;
  return color;
}, function (_ref8) {
  var fontWeight = _ref8.fontWeight;
  return fontWeight;
});

var CloseButton = _styledComponents["default"].button(_templateObject5(), function (_ref9) {
  var color = _ref9.color;
  return color;
});

var BackButton = _styledComponents["default"].button(_templateObject6(), function (_ref10) {
  var showBack = _ref10.showBack;
  return showBack ? 1 : 0;
}, function (_ref11) {
  var color = _ref11.color;
  return color;
});

var Body = _styledComponents["default"].ul(_templateObject7(), function (_ref12) {
  var fontFamily = _ref12.fontFamily;
  return fontFamily;
}, function (_ref13) {
  var color = _ref13.color;
  return color;
});

var Field = _styledComponents["default"].li(_templateObject8());

var Label = _styledComponents["default"].label(_templateObject9());

var Value = _styledComponents["default"].div(_templateObject10());

var EventLink = _styledComponents["default"].a(_templateObject11(), function (_ref14) {
  var color = _ref14.color;
  return color;
});

var Dialog =
/*#__PURE__*/
function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, props));

    _this.onResize = function () {
      _this.setState({
        screenWidth: window.screen.availWidth,
        screenHeight: window.screen.availHeight
      });
    };

    _this.goBack = function () {
      _this.setState({
        selectedEvent: -1
      });
    };

    _this.selectEvent = function (index) {
      _this.setState({
        selectedEvent: index
      });
    };

    _this.state = {
      selectedEvent: -1,
      screenWidth: 0,
      screenHeight: 0
    };
    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      var _this$state = this.state,
          screenWidth = _this$state.screenWidth,
          screenHeight = _this$state.screenHeight;
      if (width > screenWidth || height > screenHeight) return screenWidth;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height;
      var _this$state2 = this.state,
          screenWidth = _this$state2.screenWidth,
          screenHeight = _this$state2.screenHeight;
      if (width > screenWidth || height > screenHeight) return screenHeight;
      return height;
    }
  }, {
    key: "renderIonicon",
    value: function renderIonicon(iconName, color) {
      var normalisedIconName = "".concat(iconName[0].toUpperCase()).concat(iconName.substring(1)).replace(/-(.)/g, function (m) {
        return m[1].toUpperCase();
      });
      var key = "Io".concat(normalisedIconName);
      var IconComponent = Ionicons[key];
      if (!IconComponent) throw new Error("Invalid icon ".concat(iconName));
      return _react["default"].createElement(IconComponent, {
        color: color,
        size: "1.5em"
      });
    }
  }, {
    key: "getBackButtonIcon",
    value: function getBackButtonIcon() {
      var theme = this.props.theme;
      if (typeof theme.backButton === 'string') return this.renderIonicon(theme.backButton, theme.buttonColor);
      return theme.backButton;
    }
  }, {
    key: "getCloseButtonIcon",
    value: function getCloseButtonIcon() {
      var theme = this.props.theme;
      if (typeof theme.closeButton === 'string') return this.renderIonicon(theme.closeButton, theme.buttonColor);
      return theme.closeButton;
    }
  }, {
    key: "getHeader",
    value: function getHeader(title, showBack, DialogTitleComponent, event) {
      var _this2 = this;

      var _this$props3 = this.props,
          closeDialog = _this$props3.closeDialog,
          theme = _this$props3.theme;
      return _react["default"].createElement(Header, {
        background: theme.headerBackground
      }, _react["default"].createElement("div", {
        className: "dialog-header"
      }, _react["default"].createElement(BackButton, {
        showBack: showBack,
        onClick: function onClick() {
          return showBack && _this2.goBack();
        },
        color: theme.buttonColor
      }, this.getBackButtonIcon()), _react["default"].createElement(Title, {
        color: theme.titleFontColor,
        fontFamily: theme.titleFontFamily,
        fontWeight: theme.titleFontWeight
      }, DialogTitleComponent && _react["default"].createElement(DialogTitleComponent, {
        event: event,
        multipleEvents: typeof event === 'array'
      }), !DialogTitleComponent && title), _react["default"].createElement(CloseButton, {
        onClick: closeDialog,
        color: theme.buttonColor
      }, this.getCloseButtonIcon())));
    }
  }, {
    key: "getSelectEventHandler",
    value: function getSelectEventHandler(index) {
      var _this3 = this;

      return function (e) {
        e.preventDefault();

        _this3.selectEvent(index);
      };
    }
  }, {
    key: "renderMultipleEvents",
    value: function renderMultipleEvents() {
      var _this4 = this;

      var _this$props4 = this.props,
          events = _this$props4.events,
          theme = _this$props4.theme,
          DialogTitleComponent = _this$props4.DialogTitleComponent;
      var width = this.getWidth();
      var height = this.getHeight();
      var title = "Events near ".concat(events[0].location);
      return _react["default"].createElement(Container, {
        className: "dialog",
        width: width,
        height: height,
        background: theme.containerBackground,
        shadowColor: theme.shadowColor
      }, this.getHeader(title, false, DialogTitleComponent, events), _react["default"].createElement(ScrollWrapper, null, _react["default"].createElement(Body, {
        background: theme.bodyBackground
      }, events.map(function (event, index) {
        return _react["default"].createElement(Field, {
          key: event.id
        }, _react["default"].createElement(EventLink, {
          href: "#",
          onClick: _this4.getSelectEventHandler(index),
          color: theme.linkColor
        }, event.name));
      }))));
    }
  }, {
    key: "renderSingleEvent",
    value: function renderSingleEvent(event) {
      var _this$props5 = this.props,
          theme = _this$props5.theme,
          DialogBodyComponent = _this$props5.DialogBodyComponent,
          DialogTitleComponent = _this$props5.DialogTitleComponent;
      var width = this.getWidth();
      var height = this.getHeight();
      return _react["default"].createElement(Container, {
        className: "dialog",
        width: width,
        height: height,
        background: theme.containerBackground,
        shadowColor: theme.shadowColor
      }, this.getHeader(event.name, this.props.events.length > 1, DialogTitleComponent, event), _react["default"].createElement(ScrollWrapper, null, _react["default"].createElement(Body, {
        className: "dialog-body",
        fontFamily: theme.bodyFontFamily,
        color: theme.bodyFontColor,
        background: theme.bodyBackground
      }, DialogBodyComponent && _react["default"].createElement(DialogBodyComponent, {
        event: event
      }), !DialogBodyComponent && _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(Field, null, _react["default"].createElement(Label, null, "Where?"), _react["default"].createElement(Value, null, event.location)), _react["default"].createElement(Field, null, _react["default"].createElement(Label, null, "When?"), _react["default"].createElement(Value, null, event.datetime)), _react["default"].createElement(Field, null, _react["default"].createElement(Label, null, "Event URL:"), _react["default"].createElement(EventLink, {
        href: event.url,
        target: "_blank",
        color: theme.linkColor
      }, event.url))))));
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.props.events;
      var selectedEvent = this.state.selectedEvent;
      if (events.length > 1 && selectedEvent < 0) return this.renderMultipleEvents();
      var event = events.length > 1 ? events[selectedEvent] : events[0];
      return this.renderSingleEvent(event);
    }
  }]);

  return Dialog;
}(_react.Component);

exports["default"] = Dialog;
Dialog.propTypes = {
  events: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    name: _propTypes["default"].string.isRequired,
    datetime: _propTypes["default"].string.isRequired,
    lat: _propTypes["default"].number.isRequired,
    lon: _propTypes["default"].number.isRequired,
    location: _propTypes["default"].string.isRequired,
    url: _propTypes["default"].string.isRequired
  })),
  closeDialog: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  DialogTitleComponent: _propTypes["default"].func,
  DialogBodyComponent: _propTypes["default"].func,
  theme: _propTypes["default"].shape({
    titleFontFamily: _propTypes["default"].string.isRequired,
    titleFontColor: _propTypes["default"].string.isRequired,
    titleFontWeight: _propTypes["default"].string.isRequired,
    headerBackground: _propTypes["default"].string.isRequired,
    bodyBackground: _propTypes["default"].string.isRequired,
    containerBackground: _propTypes["default"].string.isRequired,
    shadowColor: _propTypes["default"].string.isRequired,
    buttonColor: _propTypes["default"].string.isRequired,
    bodyFontFamily: _propTypes["default"].string.isRequired,
    bodyFontColor: _propTypes["default"].string.isRequired,
    linkColor: _propTypes["default"].string.isRequired,
    backButton: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,
    closeButton: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired
  }).isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaWFsb2cvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwic2hhZG93Q29sb3IiLCJTY3JvbGxXcmFwcGVyIiwiSGVhZGVyIiwiVGl0bGUiLCJoMyIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsIkJhY2tCdXR0b24iLCJzaG93QmFjayIsIkJvZHkiLCJ1bCIsIkZpZWxkIiwibGkiLCJMYWJlbCIsImxhYmVsIiwiVmFsdWUiLCJFdmVudExpbmsiLCJhIiwiRGlhbG9nIiwicHJvcHMiLCJvblJlc2l6ZSIsInNldFN0YXRlIiwic2NyZWVuV2lkdGgiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYXZhaWxIZWlnaHQiLCJnb0JhY2siLCJzZWxlY3RlZEV2ZW50Iiwic2VsZWN0RXZlbnQiLCJpbmRleCIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpY29uTmFtZSIsIm5vcm1hbGlzZWRJY29uTmFtZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsIm0iLCJrZXkiLCJJY29uQ29tcG9uZW50IiwiSW9uaWNvbnMiLCJFcnJvciIsInRoZW1lIiwiYmFja0J1dHRvbiIsInJlbmRlcklvbmljb24iLCJidXR0b25Db2xvciIsImNsb3NlQnV0dG9uIiwidGl0bGUiLCJEaWFsb2dUaXRsZUNvbXBvbmVudCIsImV2ZW50IiwiY2xvc2VEaWFsb2ciLCJoZWFkZXJCYWNrZ3JvdW5kIiwiZ2V0QmFja0J1dHRvbkljb24iLCJ0aXRsZUZvbnRDb2xvciIsInRpdGxlRm9udEZhbWlseSIsInRpdGxlRm9udFdlaWdodCIsImdldENsb3NlQnV0dG9uSWNvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50cyIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwibG9jYXRpb24iLCJjb250YWluZXJCYWNrZ3JvdW5kIiwiZ2V0SGVhZGVyIiwiYm9keUJhY2tncm91bmQiLCJtYXAiLCJpZCIsImdldFNlbGVjdEV2ZW50SGFuZGxlciIsImxpbmtDb2xvciIsIm5hbWUiLCJEaWFsb2dCb2R5Q29tcG9uZW50IiwibGVuZ3RoIiwiYm9keUZvbnRGYW1pbHkiLCJib2R5Rm9udENvbG9yIiwiZGF0ZXRpbWUiLCJ1cmwiLCJyZW5kZXJNdWx0aXBsZUV2ZW50cyIsInJlbmRlclNpbmdsZUV2ZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImxhdCIsIm51bWJlciIsImxvbiIsImZ1bmMiLCJvbmVPZlR5cGUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNKO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBREksRUFFSDtBQUFBLE1BQUdDLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWdCQSxNQUFoQjtBQUFBLENBRkcsRUFPQztBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQW9CQSxVQUFwQjtBQUFBLENBUEQsRUFRa0I7QUFBQSxNQUFHQyxXQUFILFNBQUdBLFdBQUg7QUFBQSxTQUFxQkEsV0FBckI7QUFBQSxDQVJsQixDQUFmOztBQWNBLElBQU1DLGFBQWEsR0FBR04sNkJBQU9DLEdBQVYsb0JBQW5COztBQU1BLElBQU1NLE1B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cnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCAqIGFzIElvbmljb25zIGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHR9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiBiYWNrZ3JvdW5kfTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDJweCAkeyh7IHNoYWRvd0NvbG9yIH0pID0+IHNoYWRvd0NvbG9yfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuY29uc3QgU2Nyb2xsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZmxleDogMTtcbmBcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IGJhY2tncm91bmR9O1xuICBwYWRkaW5nOiAxNnB4IDhweDtcblxuICA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LWZhbWlseTogJHsoeyBmb250RmFtaWx5IH0pID0+IGZvbnRGYW1pbHl9O1xuICBjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiAkeyh7IGZvbnRXZWlnaHQgfSkgPT4gZm9udFdlaWdodH07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMDtcbiAgZmxleDogNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yfTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuYFxuXG5jb25zdCBCYWNrQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgb3BhY2l0eTogJHsoeyBzaG93QmFjayB9KSA9PiBzaG93QmFjayA/IDEgOiAwfTtcbiAgY29sb3I6ICR7KHsgY29sb3IgfSkgPT4gY29sb3J9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5gXG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQudWxgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IGZvbnRGYW1pbHkgfSkgPT4gZm9udEZhbWlseX07XG4gIGNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yfTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDFlbTtcbmBcblxuY29uc3QgRmllbGQgPSBzdHlsZWQubGlgXG4gIHBhZGRpbmc6IDhweCAwO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbmBcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5gXG5cbmNvbnN0IFZhbHVlID0gc3R5bGVkLmRpdmBcblxuYFxuXG5jb25zdCBFdmVudExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7KHsgY29sb3IgfSkgPT4gY29sb3J9O1xuICBkaXNwbGF5OiBibG9jaztcbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBldmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZGF0ZXRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KSksXG4gICAgY2xvc2VEaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBEaWFsb2dUaXRsZUNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgRGlhbG9nQm9keUNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGhlbWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0aXRsZUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRpdGxlRm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0aXRsZUZvbnRXZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGhlYWRlckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJvZHlCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzaGFkb3dDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgYnV0dG9uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJvZHlGb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBib2R5Rm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsaW5rQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJhY2tCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICAgIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICAgIF0pLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZEV2ZW50OiAtMSwgc2NyZWVuV2lkdGg6IDAsIHNjcmVlbkhlaWdodDogMCB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gIH1cblxuICBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2NyZWVuV2lkdGg6IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCwgc2NyZWVuSGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IH0pXG4gIH1cblxuICBnb0JhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRXZlbnQ6IC0xIH0pXG4gIH1cblxuICBzZWxlY3RFdmVudCA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEV2ZW50OiBpbmRleCB9KVxuICB9XG5cbiAgZ2V0V2lkdGggKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh3aWR0aCA+IHNjcmVlbldpZHRoIHx8IGhlaWdodCA+IHNjcmVlbkhlaWdodCkgcmV0dXJuIHNjcmVlbldpZHRoXG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICBnZXRIZWlnaHQgKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh3aWR0aCA+IHNjcmVlbldpZHRoIHx8IGhlaWdodCA+IHNjcmVlbkhlaWdodCkgcmV0dXJuIHNjcmVlbkhlaWdodFxuICAgIHJldHVybiBoZWlnaHRcbiAgfVxuXG4gIHJlbmRlcklvbmljb24gKGljb25OYW1lLCBjb2xvcikge1xuICAgIGNvbnN0IG5vcm1hbGlzZWRJY29uTmFtZSA9IGAke2ljb25OYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtpY29uTmFtZS5zdWJzdHJpbmcoMSl9YC5yZXBsYWNlKC8tKC4pL2csIChtKSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpXG4gICAgY29uc3Qga2V5ID0gYElvJHtub3JtYWxpc2VkSWNvbk5hbWV9YFxuICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBJb25pY29uc1trZXldXG4gICAgaWYgKCFJY29uQ29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaWNvbiAke2ljb25OYW1lfWApXG4gICAgcmV0dXJuIDxJY29uQ29tcG9uZW50IGNvbG9yPXtjb2xvcn0gc2l6ZT0nMS41ZW0nIC8+XG4gIH1cblxuICBnZXRCYWNrQnV0dG9uSWNvbiAoKSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2YgdGhlbWUuYmFja0J1dHRvbiA9PT0gJ3N0cmluZycpIHJldHVybiB0aGlzLnJlbmRlcklvbmljb24odGhlbWUuYmFja0J1dHRvbiwgdGhlbWUuYnV0dG9uQ29sb3IpXG4gICAgcmV0dXJuIHRoZW1lLmJhY2tCdXR0b25cbiAgfVxuXG4gIGdldENsb3NlQnV0dG9uSWNvbiAoKSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2YgdGhlbWUuY2xvc2VCdXR0b24gPT09ICdzdHJpbmcnKSByZXR1cm4gdGhpcy5yZW5kZXJJb25pY29uKHRoZW1lLmNsb3NlQnV0dG9uLCB0aGVtZS5idXR0b25Db2xvcilcbiAgICByZXR1cm4gdGhlbWUuY2xvc2VCdXR0b25cbiAgfVxuXG4gIGdldEhlYWRlciAodGl0bGUsIHNob3dCYWNrLCBEaWFsb2dUaXRsZUNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsb3NlRGlhbG9nLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyIGJhY2tncm91bmQ9e3RoZW1lLmhlYWRlckJhY2tncm91bmR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlhbG9nLWhlYWRlcic+XG4gICAgICAgICAgPEJhY2tCdXR0b25cbiAgICAgICAgICAgIHNob3dCYWNrPXtzaG93QmFja31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dCYWNrICYmIHRoaXMuZ29CYWNrKCl9XG4gICAgICAgICAgICBjb2xvcj17dGhlbWUuYnV0dG9uQ29sb3J9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2V0QmFja0J1dHRvbkljb24oKX1cbiAgICAgICAgICA8L0JhY2tCdXR0b24+XG4gICAgICAgICAgPFRpdGxlXG4gICAgICAgICAgICBjb2xvcj17dGhlbWUudGl0bGVGb250Q29sb3J9XG4gICAgICAgICAgICBmb250RmFtaWx5PXt0aGVtZS50aXRsZUZvbnRGYW1pbHl9XG4gICAgICAgICAgICBmb250V2VpZ2h0PXt0aGVtZS50aXRsZUZvbnRXZWlnaHR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge0RpYWxvZ1RpdGxlQ29tcG9uZW50ICYmXG4gICAgICAgICAgICAgIDxEaWFsb2dUaXRsZUNvbXBvbmVudCBldmVudD17ZXZlbnR9IG11bHRpcGxlRXZlbnRzPXt0eXBlb2YgZXZlbnQgPT09ICdhcnJheSd9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IURpYWxvZ1RpdGxlQ29tcG9uZW50ICYmIHRpdGxlfVxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURpYWxvZ31cbiAgICAgICAgICAgIGNvbG9yPXt0aGVtZS5idXR0b25Db2xvcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5nZXRDbG9zZUJ1dHRvbkljb24oKX1cbiAgICAgICAgICA8L0Nsb3NlQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVhZGVyPlxuICAgIClcbiAgfVxuXG4gIGdldFNlbGVjdEV2ZW50SGFuZGxlciAoaW5kZXgpIHtcbiAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWxlY3RFdmVudChpbmRleClcbiAgICB9XG4gIH1cblxuICByZW5kZXJNdWx0aXBsZUV2ZW50cyAoKSB7XG4gICAgY29uc3QgeyBldmVudHMsIHRoZW1lLCBEaWFsb2dUaXRsZUNvbXBvbmVudCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKVxuICAgIGNvbnN0IHRpdGxlID0gYEV2ZW50cyBuZWFyICR7ZXZlbnRzWzBdLmxvY2F0aW9ufWBcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J2RpYWxvZycgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gYmFja2dyb3VuZD17dGhlbWUuY29udGFpbmVyQmFja2dyb3VuZH0gc2hhZG93Q29sb3I9e3RoZW1lLnNoYWRvd0NvbG9yfT5cbiAgICAgICAge3RoaXMuZ2V0SGVhZGVyKHRpdGxlLCBmYWxzZSwgRGlhbG9nVGl0bGVDb21wb25lbnQsIGV2ZW50cyl9XG4gICAgICAgIDxTY3JvbGxXcmFwcGVyPlxuICAgICAgICAgIDxCb2R5IGJhY2tncm91bmQ9e3RoZW1lLmJvZHlCYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgIHtldmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEZpZWxkIGtleT17ZXZlbnQuaWR9PlxuICAgICAgICAgICAgICAgIDxFdmVudExpbmsgaHJlZj0nIycgb25DbGljaz17dGhpcy5nZXRTZWxlY3RFdmVudEhhbmRsZXIoaW5kZXgpfSBjb2xvcj17dGhlbWUubGlua0NvbG9yfT57ZXZlbnQubmFtZX08L0V2ZW50TGluaz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgPC9TY3JvbGxXcmFwcGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyU2luZ2xlRXZlbnQgKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0aGVtZSwgRGlhbG9nQm9keUNvbXBvbmVudCwgRGlhbG9nVGl0bGVDb21wb25lbnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KClcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J2RpYWxvZycgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gYmFja2dyb3VuZD17dGhlbWUuY29udGFpbmVyQmFja2dyb3VuZH0gc2hhZG93Q29sb3I9e3RoZW1lLnNoYWRvd0NvbG9yfT5cbiAgICAgICAge3RoaXMuZ2V0SGVhZGVyKGV2ZW50Lm5hbWUsIHRoaXMucHJvcHMuZXZlbnRzLmxlbmd0aCA+IDEsIERpYWxvZ1RpdGxlQ29tcG9uZW50LCBldmVudCl9XG4gICAgICAgIDxTY3JvbGxXcmFwcGVyPlxuICAgICAgICAgIDxCb2R5IGNsYXNzTmFtZT0nZGlhbG9nLWJvZHknIGZvbnRGYW1pbHk9e3RoZW1lLmJvZHlGb250RmFtaWx5fSBjb2xvcj17dGhlbWUuYm9keUZvbnRDb2xvcn0gYmFja2dyb3VuZD17dGhlbWUuYm9keUJhY2tncm91bmR9PlxuICAgICAgICAgICAge0RpYWxvZ0JvZHlDb21wb25lbnQgJiZcbiAgICAgICAgICAgICAgPERpYWxvZ0JvZHlDb21wb25lbnQgZXZlbnQ9e2V2ZW50fSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFEaWFsb2dCb2R5Q29tcG9uZW50ICYmXG4gICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+V2hlcmU/PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxWYWx1ZT57ZXZlbnQubG9jYXRpb259PC9WYWx1ZT5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbD5XaGVuPzwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8VmFsdWU+e2V2ZW50LmRhdGV0aW1lfTwvVmFsdWU+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+RXZlbnQgVVJMOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8RXZlbnRMaW5rIGhyZWY9e2V2ZW50LnVybH0gdGFyZ2V0PSdfYmxhbmsnIGNvbG9yPXt0aGVtZS5saW5rQ29sb3J9PntldmVudC51cmx9PC9FdmVudExpbms+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgIDwvU2Nyb2xsV3JhcHBlcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkRXZlbnQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDEgJiYgc2VsZWN0ZWRFdmVudCA8IDApIHJldHVybiB0aGlzLnJlbmRlck11bHRpcGxlRXZlbnRzKClcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5sZW5ndGggPiAxID8gZXZlbnRzW3NlbGVjdGVkRXZlbnRdIDogZXZlbnRzWzBdXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2luZ2xlRXZlbnQoZXZlbnQpXG4gIH1cbn1cbiJdfQ==