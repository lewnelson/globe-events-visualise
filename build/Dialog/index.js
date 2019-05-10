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
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  display: flex;\n  flex-direction: row;\n  padding: 16px 8px;\n"]);

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
      return _react["default"].createElement(theme.backButton, {
        color: color
      });
    }
  }, {
    key: "getCloseButtonIcon",
    value: function getCloseButtonIcon() {
      var theme = this.props.theme;
      if (typeof theme.closeButton === 'string') return this.renderIonicon(theme.closeButton, theme.buttonColor);
      return _react["default"].createElement(theme.closeButton, {
        color: color
      });
    }
  }, {
    key: "getHeader",
    value: function getHeader(title, showBack) {
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
      }, title), _react["default"].createElement(CloseButton, {
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
          theme = _this$props4.theme;
      var width = this.getWidth();
      var height = this.getHeight();
      var title = "Events near ".concat(events[0].location);
      return _react["default"].createElement(Container, {
        className: "dialog",
        width: width,
        height: height,
        background: theme.containerBackground,
        shadowColor: theme.shadowColor
      }, this.getHeader(title, false), _react["default"].createElement(ScrollWrapper, null, _react["default"].createElement(Body, {
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
      var theme = this.props.theme;
      var width = this.getWidth();
      var height = this.getHeight();
      return _react["default"].createElement(Container, {
        className: "dialog",
        width: width,
        height: height,
        background: theme.containerBackground,
        shadowColor: theme.shadowColor
      }, this.getHeader(event.name, this.props.events.length > 1), _react["default"].createElement(ScrollWrapper, null, _react["default"].createElement(Body, {
        className: "dialog-body",
        fontFamily: theme.bodyFontFamily,
        color: theme.bodyFontColor,
        background: theme.bodyBackground
      }, _react["default"].createElement(Field, null, _react["default"].createElement(Label, null, "Where?"), _react["default"].createElement(Value, null, event.location)), _react["default"].createElement(Field, null, _react["default"].createElement(Label, null, "When?"), _react["default"].createElement(Value, null, event.date, " ", event.localTime)), _react["default"].createElement(Field, null, _react["default"].createElement(Label, null, "Event URL:"), _react["default"].createElement(EventLink, {
        href: event.url,
        target: "_blank",
        color: theme.linkColor
      }, event.url)))));
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
    localTime: _propTypes["default"].string.isRequired,
    date: _propTypes["default"].string.isRequired,
    lat: _propTypes["default"].number.isRequired,
    lon: _propTypes["default"].number.isRequired,
    location: _propTypes["default"].string.isRequired,
    url: _propTypes["default"].string.isRequired
  })),
  closeDialog: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaWFsb2cvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwic2hhZG93Q29sb3IiLCJTY3JvbGxXcmFwcGVyIiwiSGVhZGVyIiwiVGl0bGUiLCJoMyIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsIkJhY2tCdXR0b24iLCJzaG93QmFjayIsIkJvZHkiLCJ1bCIsIkZpZWxkIiwibGkiLCJMYWJlbCIsImxhYmVsIiwiVmFsdWUiLCJFdmVudExpbmsiLCJhIiwiRGlhbG9nIiwicHJvcHMiLCJvblJlc2l6ZSIsInNldFN0YXRlIiwic2NyZWVuV2lkdGgiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYXZhaWxIZWlnaHQiLCJnb0JhY2siLCJzZWxlY3RlZEV2ZW50Iiwic2VsZWN0RXZlbnQiLCJpbmRleCIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpY29uTmFtZSIsIm5vcm1hbGlzZWRJY29uTmFtZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsIm0iLCJrZXkiLCJJY29uQ29tcG9uZW50IiwiSW9uaWNvbnMiLCJFcnJvciIsInRoZW1lIiwiYmFja0J1dHRvbiIsInJlbmRlcklvbmljb24iLCJidXR0b25Db2xvciIsImNsb3NlQnV0dG9uIiwidGl0bGUiLCJjbG9zZURpYWxvZyIsImhlYWRlckJhY2tncm91bmQiLCJnZXRCYWNrQnV0dG9uSWNvbiIsInRpdGxlRm9udENvbG9yIiwidGl0bGVGb250RmFtaWx5IiwidGl0bGVGb250V2VpZ2h0IiwiZ2V0Q2xvc2VCdXR0b25JY29uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnRzIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJsb2NhdGlvbiIsImNvbnRhaW5lckJhY2tncm91bmQiLCJnZXRIZWFkZXIiLCJib2R5QmFja2dyb3VuZCIsIm1hcCIsImV2ZW50IiwiaWQiLCJnZXRTZWxlY3RFdmVudEhhbmRsZXIiLCJsaW5rQ29sb3IiLCJuYW1lIiwibGVuZ3RoIiwiYm9keUZvbnRGYW1pbHkiLCJib2R5Rm9udENvbG9yIiwiZGF0ZSIsImxvY2FsVGltZSIsInVybCIsInJlbmRlck11bHRpcGxlRXZlbnRzIiwicmVuZGVyU2luZ2xlRXZlbnQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibGF0IiwibnVtYmVyIiwibG9uIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ0o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FESSxFQUVIO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBZ0JBLE1BQWhCO0FBQUEsQ0FGRyxFQU9DO0FBQUEsTUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBb0JBLFVBQXBCO0FBQUEsQ0FQRCxFQVFrQjtBQUFBLE1BQUdDLFdBQUgsU0FBR0EsV0FBSDtBQUFBLFNBQXFCQSxXQUFyQjtBQUFBLENBUmxCLENBQWY7O0FBY0EsSUFBTUMsYUFBYSxHQUFHTiw2QkFBT0MsR0FBVixvQkFBbkI7O0FBTUEsSUFBTU0sTUFBTSxHQUFHUCw2QkFBT0MsR0FBVixxQkFDSTtBQUFBLE1BQUdH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VUFOakI7QUFPckIxRixJQUFBQSxXQUFXLEVBQUVzRixzQkFBVUcsTUFBVixDQUFpQkMsVUFQVDtBQVFyQnZDLElBQUFBLFdBQVcsRUFBRW1DLHNCQUFVRyxNQUFWLENBQWlCQyxVQVJUO0FBU3JCYixJQUFBQSxjQUFjLEVBQUVTLHNCQUFVRyxNQUFWLENBQWlCQyxVQVRaO0FBVXJCWixJQUFBQSxhQUFhLEVBQUVRLHNCQUFVRyxNQUFWLENBQWlCQyxVQVZYO0FBV3JCaEIsSUFBQUEsU0FBUyxFQUFFWSxzQkFBVUcsTUFBVixDQUFpQkMsVUFYUDtBQVlyQnpDLElBQUFBLFVBQVUsRUFBRXFDLHNCQUFVUyxTQUFWLENBQW9CLENBQzlCVCxzQkFBVUcsTUFEb0IsRUFFOUJILHNCQUFVVSxJQUZvQixDQUFwQixFQUdUTixVQWZrQjtBQWdCckJ0QyxJQUFBQSxXQUFXLEVBQUVrQyxzQkFBVVMsU0FBVixDQUFvQixDQUMvQlQsc0JBQVVHLE1BRHFCLEVBRS9CSCxzQkFBVVUsSUFGcUIsQ0FBcEIsRUFHVk47QUFuQmtCLEdBQWhCLEVBb0JKQTtBQWxDYyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCAqIGFzIElvbmljb25zIGZyb20gJ3JlYWN0LWljb25zL2lvJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aH1weDtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHR9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiBiYWNrZ3JvdW5kfTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDJweCAkeyh7IHNoYWRvd0NvbG9yIH0pID0+IHNoYWRvd0NvbG9yfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuY29uc3QgU2Nyb2xsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZmxleDogMTtcbmBcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IGJhY2tncm91bmR9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxNnB4IDhweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IGZvbnRGYW1pbHkgfSkgPT4gZm9udEZhbWlseX07XG4gIGNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yfTtcbiAgZm9udC13ZWlnaHQ6ICR7KHsgZm9udFdlaWdodCB9KSA9PiBmb250V2VpZ2h0fTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAwO1xuICBmbGV4OiA1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7KHsgY29sb3IgfSkgPT4gY29sb3J9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5gXG5cbmNvbnN0IEJhY2tCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBvcGFjaXR5OiAkeyh7IHNob3dCYWNrIH0pID0+IHNob3dCYWNrID8gMSA6IDB9O1xuICBjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvcn07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbmBcblxuY29uc3QgQm9keSA9IHN0eWxlZC51bGBcbiAgZm9udC1mYW1pbHk6ICR7KHsgZm9udEZhbWlseSB9KSA9PiBmb250RmFtaWx5fTtcbiAgY29sb3I6ICR7KHsgY29sb3IgfSkgPT4gY29sb3J9O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuYFxuXG5jb25zdCBGaWVsZCA9IHN0eWxlZC5saWBcbiAgcGFkZGluZzogOHB4IDA7XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuYFxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbmBcblxuY29uc3QgVmFsdWUgPSBzdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IEV2ZW50TGluayA9IHN0eWxlZC5hYFxuICBjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvcn07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGV2ZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsb2NhbFRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxhdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbG9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KSksXG4gICAgY2xvc2VEaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0aGVtZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRpdGxlRm9udEZhbWlseTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdGl0bGVGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRpdGxlRm9udFdlaWdodDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgaGVhZGVyQmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgYm9keUJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGNvbnRhaW5lckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHNoYWRvd0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBidXR0b25Db2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgYm9keUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJvZHlGb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxpbmtDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgYmFja0J1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5ub2RlXG4gICAgICBdKS5pc1JlcXVpcmVkLFxuICAgICAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgXSkuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkRXZlbnQ6IC0xLCBzY3JlZW5XaWR0aDogMCwgc2NyZWVuSGVpZ2h0OiAwIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSlcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSlcbiAgfVxuXG4gIG9uUmVzaXplID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JlZW5XaWR0aDogd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoLCBzY3JlZW5IZWlnaHQ6IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgfSlcbiAgfVxuXG4gIGdvQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRFdmVudDogLTEgfSlcbiAgfVxuXG4gIHNlbGVjdEV2ZW50ID0gKGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRXZlbnQ6IGluZGV4IH0pXG4gIH1cblxuICBnZXRXaWR0aCAoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHdpZHRoID4gc2NyZWVuV2lkdGggfHwgaGVpZ2h0ID4gc2NyZWVuSGVpZ2h0KSByZXR1cm4gc2NyZWVuV2lkdGhcbiAgICByZXR1cm4gd2lkdGhcbiAgfVxuXG4gIGdldEhlaWdodCAoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKHdpZHRoID4gc2NyZWVuV2lkdGggfHwgaGVpZ2h0ID4gc2NyZWVuSGVpZ2h0KSByZXR1cm4gc2NyZWVuSGVpZ2h0XG4gICAgcmV0dXJuIGhlaWdodFxuICB9XG5cbiAgcmVuZGVySW9uaWNvbiAoaWNvbk5hbWUsIGNvbG9yKSB7XG4gICAgY29uc3Qgbm9ybWFsaXNlZEljb25OYW1lID0gYCR7aWNvbk5hbWVbMF0udG9VcHBlckNhc2UoKX0ke2ljb25OYW1lLnN1YnN0cmluZygxKX1gLnJlcGxhY2UoLy0oLikvZywgKG0pID0+IG1bMV0udG9VcHBlckNhc2UoKSlcbiAgICBjb25zdCBrZXkgPSBgSW8ke25vcm1hbGlzZWRJY29uTmFtZX1gXG4gICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IElvbmljb25zW2tleV1cbiAgICBpZiAoIUljb25Db21wb25lbnQpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBpY29uICR7aWNvbk5hbWV9YClcbiAgICByZXR1cm4gPEljb25Db21wb25lbnQgY29sb3I9e2NvbG9yfSBzaXplPScxLjVlbScgLz5cbiAgfVxuXG4gIGdldEJhY2tCdXR0b25JY29uICgpIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiB0aGVtZS5iYWNrQnV0dG9uID09PSAnc3RyaW5nJykgcmV0dXJuIHRoaXMucmVuZGVySW9uaWNvbih0aGVtZS5iYWNrQnV0dG9uLCB0aGVtZS5idXR0b25Db2xvcilcbiAgICByZXR1cm4gPHRoZW1lLmJhY2tCdXR0b24gY29sb3I9e2NvbG9yfSAvPlxuICB9XG5cbiAgZ2V0Q2xvc2VCdXR0b25JY29uICgpIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiB0aGVtZS5jbG9zZUJ1dHRvbiA9PT0gJ3N0cmluZycpIHJldHVybiB0aGlzLnJlbmRlcklvbmljb24odGhlbWUuY2xvc2VCdXR0b24sIHRoZW1lLmJ1dHRvbkNvbG9yKVxuICAgIHJldHVybiA8dGhlbWUuY2xvc2VCdXR0b24gY29sb3I9e2NvbG9yfSAvPlxuICB9XG5cbiAgZ2V0SGVhZGVyICh0aXRsZSwgc2hvd0JhY2spIHtcbiAgICBjb25zdCB7IGNsb3NlRGlhbG9nLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyIGJhY2tncm91bmQ9e3RoZW1lLmhlYWRlckJhY2tncm91bmR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlhbG9nLWhlYWRlcic+XG4gICAgICAgICAgPEJhY2tCdXR0b25cbiAgICAgICAgICAgIHNob3dCYWNrPXtzaG93QmFja31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dCYWNrICYmIHRoaXMuZ29CYWNrKCl9XG4gICAgICAgICAgICBjb2xvcj17dGhlbWUuYnV0dG9uQ29sb3J9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2V0QmFja0J1dHRvbkljb24oKX1cbiAgICAgICAgICA8L0JhY2tCdXR0b24+XG4gICAgICAgICAgPFRpdGxlXG4gICAgICAgICAgICBjb2xvcj17dGhlbWUudGl0bGVGb250Q29sb3J9XG4gICAgICAgICAgICBmb250RmFtaWx5PXt0aGVtZS50aXRsZUZvbnRGYW1pbHl9XG4gICAgICAgICAgICBmb250V2VpZ2h0PXt0aGVtZS50aXRsZUZvbnRXZWlnaHR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURpYWxvZ31cbiAgICAgICAgICAgIGNvbG9yPXt0aGVtZS5idXR0b25Db2xvcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5nZXRDbG9zZUJ1dHRvbkljb24oKX1cbiAgICAgICAgICA8L0Nsb3NlQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVhZGVyPlxuICAgIClcbiAgfVxuXG4gIGdldFNlbGVjdEV2ZW50SGFuZGxlciAoaW5kZXgpIHtcbiAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWxlY3RFdmVudChpbmRleClcbiAgICB9XG4gIH1cblxuICByZW5kZXJNdWx0aXBsZUV2ZW50cyAoKSB7XG4gICAgY29uc3QgeyBldmVudHMsIHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpXG4gICAgY29uc3QgdGl0bGUgPSBgRXZlbnRzIG5lYXIgJHtldmVudHNbMF0ubG9jYXRpb259YFxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT0nZGlhbG9nJyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBiYWNrZ3JvdW5kPXt0aGVtZS5jb250YWluZXJCYWNrZ3JvdW5kfSBzaGFkb3dDb2xvcj17dGhlbWUuc2hhZG93Q29sb3J9PlxuICAgICAgICB7dGhpcy5nZXRIZWFkZXIodGl0bGUsIGZhbHNlKX1cbiAgICAgICAgPFNjcm9sbFdyYXBwZXI+XG4gICAgICAgICAgPEJvZHkgYmFja2dyb3VuZD17dGhlbWUuYm9keUJhY2tncm91bmR9PlxuICAgICAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8RmllbGQga2V5PXtldmVudC5pZH0+XG4gICAgICAgICAgICAgICAgPEV2ZW50TGluayBocmVmPScjJyBvbkNsaWNrPXt0aGlzLmdldFNlbGVjdEV2ZW50SGFuZGxlcihpbmRleCl9IGNvbG9yPXt0aGVtZS5saW5rQ29sb3J9PntldmVudC5uYW1lfTwvRXZlbnRMaW5rPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8L1Njcm9sbFdyYXBwZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cblxuICByZW5kZXJTaW5nbGVFdmVudCAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdkaWFsb2cnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGJhY2tncm91bmQ9e3RoZW1lLmNvbnRhaW5lckJhY2tncm91bmR9IHNoYWRvd0NvbG9yPXt0aGVtZS5zaGFkb3dDb2xvcn0+XG4gICAgICAgIHt0aGlzLmdldEhlYWRlcihldmVudC5uYW1lLCB0aGlzLnByb3BzLmV2ZW50cy5sZW5ndGggPiAxKX1cbiAgICAgICAgPFNjcm9sbFdyYXBwZXI+XG4gICAgICAgICAgPEJvZHkgY2xhc3NOYW1lPSdkaWFsb2ctYm9keScgZm9udEZhbWlseT17dGhlbWUuYm9keUZvbnRGYW1pbHl9IGNvbG9yPXt0aGVtZS5ib2R5Rm9udENvbG9yfSBiYWNrZ3JvdW5kPXt0aGVtZS5ib2R5QmFja2dyb3VuZH0+XG4gICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgIDxMYWJlbD5XaGVyZT88L0xhYmVsPlxuICAgICAgICAgICAgICA8VmFsdWU+e2V2ZW50LmxvY2F0aW9ufTwvVmFsdWU+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPEZpZWxkPlxuICAgICAgICAgICAgICA8TGFiZWw+V2hlbj88L0xhYmVsPlxuICAgICAgICAgICAgICA8VmFsdWU+e2V2ZW50LmRhdGV9IHtldmVudC5sb2NhbFRpbWV9PC9WYWx1ZT5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgIDxMYWJlbD5FdmVudCBVUkw6PC9MYWJlbD5cbiAgICAgICAgICAgICAgPEV2ZW50TGluayBocmVmPXtldmVudC51cmx9IHRhcmdldD0nX2JsYW5rJyBjb2xvcj17dGhlbWUubGlua0NvbG9yfT57ZXZlbnQudXJsfTwvRXZlbnRMaW5rPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgIDwvU2Nyb2xsV3JhcHBlcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkRXZlbnQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDEgJiYgc2VsZWN0ZWRFdmVudCA8IDApIHJldHVybiB0aGlzLnJlbmRlck11bHRpcGxlRXZlbnRzKClcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5sZW5ndGggPiAxID8gZXZlbnRzW3NlbGVjdGVkRXZlbnRdIDogZXZlbnRzWzBdXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2luZ2xlRXZlbnQoZXZlbnQpXG4gIH1cbn1cbiJdfQ==