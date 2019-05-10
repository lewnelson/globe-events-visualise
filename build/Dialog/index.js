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
      }, this.getCloseButtonIcon()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaWFsb2cvaW5kZXguanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwic2hhZG93Q29sb3IiLCJTY3JvbGxXcmFwcGVyIiwiSGVhZGVyIiwiVGl0bGUiLCJoMyIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsIkJhY2tCdXR0b24iLCJzaG93QmFjayIsIkJvZHkiLCJ1bCIsIkZpZWxkIiwibGkiLCJMYWJlbCIsImxhYmVsIiwiVmFsdWUiLCJFdmVudExpbmsiLCJhIiwiRGlhbG9nIiwicHJvcHMiLCJvblJlc2l6ZSIsInNldFN0YXRlIiwic2NyZWVuV2lkdGgiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYXZhaWxIZWlnaHQiLCJnb0JhY2siLCJzZWxlY3RlZEV2ZW50Iiwic2VsZWN0RXZlbnQiLCJpbmRleCIsInN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpY29uTmFtZSIsIm5vcm1hbGlzZWRJY29uTmFtZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsIm0iLCJrZXkiLCJJY29uQ29tcG9uZW50IiwiSW9uaWNvbnMiLCJFcnJvciIsInRoZW1lIiwiYmFja0J1dHRvbiIsInJlbmRlcklvbmljb24iLCJidXR0b25Db2xvciIsImNsb3NlQnV0dG9uIiwidGl0bGUiLCJjbG9zZURpYWxvZyIsImhlYWRlckJhY2tncm91bmQiLCJnZXRCYWNrQnV0dG9uSWNvbiIsInRpdGxlRm9udENvbG9yIiwidGl0bGVGb250RmFtaWx5IiwidGl0bGVGb250V2VpZ2h0IiwiZ2V0Q2xvc2VCdXR0b25JY29uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnRzIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJsb2NhdGlvbiIsImNvbnRhaW5lckJhY2tncm91bmQiLCJnZXRIZWFkZXIiLCJib2R5QmFja2dyb3VuZCIsIm1hcCIsImV2ZW50IiwiaWQiLCJnZXRTZWxlY3RFdmVudEhhbmRsZXIiLCJsaW5rQ29sb3IiLCJuYW1lIiwibGVuZ3RoIiwiYm9keUZvbnRGYW1pbHkiLCJib2R5Rm9udENvbG9yIiwiZGF0ZSIsImxvY2FsVGltZSIsInVybCIsInJlbmRlck11bHRpcGxlRXZlbnRzIiwicmVuZGVyU2luZ2xlRXZlbnQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibGF0IiwibnVtYmVyIiwibG9uIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ0o7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFmO0FBQUEsQ0FESSxFQUVIO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBZ0JBLE1BQWhCO0FBQUEsQ0FGRyxFQU9DO0FBQUEsTUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBb0JBLFVBQXBCO0FBQUEsQ0FQRCxFQVFrQjtBQUFBLE1BQUdDLFdBQUgsU0FBR0EsV0FBSDtBQUFBLFNBQXFCQSxXQUFyQjtBQUFBLENBUmxCLENBQWY7O0FBY0EsSUFBTUMsYUFBYSxHQUFHTiw2QkFBT0MsR0FBVixvQkFBbkI7O0FBTUEsSUFBTU0sTUFBTSxHQUFHUCw2QkFBT0MsR0FBVixxQkFDSTtBQUFBLE1BQUdH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QyxJQUFBQSxXQUFXLEVBQUVtQyxzQkFBVUcsTUFBVixDQUFpQkMsVUFSVDtBQVNyQmIsSUFBQUEsY0FBYyxFQUFFUyxzQkFBVUcsTUFBVixDQUFpQkMsVUFUWjtBQVVyQlosSUFBQUEsYUFBYSxFQUFFUSxzQkFBVUcsTUFBVixDQUFpQkMsVUFWWDtBQVdyQmhCLElBQUFBLFNBQVMsRUFBRVksc0JBQVVHLE1BQVYsQ0FBaUJDLFVBWFA7QUFZckJ6QyxJQUFBQSxVQUFVLEVBQUVxQyxzQkFBVVMsU0FBVixDQUFvQixDQUM5QlQsc0JBQVVHLE1BRG9CLEVBRTlCSCxzQkFBVVUsSUFGb0IsQ0FBcEIsRUFHVE4sVUFma0I7QUFnQnJCdEMsSUFBQUEsV0FBVyxFQUFFa0Msc0JBQVVTLFNBQVYsQ0FBb0IsQ0FDL0JULHNCQUFVRyxNQURxQixFQUUvQkgsc0JBQVVVLElBRnFCLENBQXBCLEVBR1ZOO0FBbkJrQixHQUFoQixFQW9CSkE7QUFsQ2MsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgKiBhcyBJb25pY29ucyBmcm9tICdyZWFjdC1pY29ucy9pbydcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9cHg7XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gYmFja2dyb3VuZH07XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAycHggJHsoeyBzaGFkb3dDb2xvciB9KSA9PiBzaGFkb3dDb2xvcn07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmNvbnN0IFNjcm9sbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZsZXg6IDE7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiBiYWNrZ3JvdW5kfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTZweCA4cHg7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LWZhbWlseTogJHsoeyBmb250RmFtaWx5IH0pID0+IGZvbnRGYW1pbHl9O1xuICBjb2xvcjogJHsoeyBjb2xvciB9KSA9PiBjb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiAkeyh7IGZvbnRXZWlnaHQgfSkgPT4gZm9udFdlaWdodH07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMDtcbiAgZmxleDogNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yfTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuYFxuXG5jb25zdCBCYWNrQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgb3BhY2l0eTogJHsoeyBzaG93QmFjayB9KSA9PiBzaG93QmFjayA/IDEgOiAwfTtcbiAgY29sb3I6ICR7KHsgY29sb3IgfSkgPT4gY29sb3J9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5gXG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQudWxgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IGZvbnRGYW1pbHkgfSkgPT4gZm9udEZhbWlseX07XG4gIGNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yfTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDFlbTtcbmBcblxuY29uc3QgRmllbGQgPSBzdHlsZWQubGlgXG4gIHBhZGRpbmc6IDhweCAwO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbmBcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5gXG5cbmNvbnN0IFZhbHVlID0gc3R5bGVkLmRpdmBcblxuYFxuXG5jb25zdCBFdmVudExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7KHsgY29sb3IgfSkgPT4gY29sb3J9O1xuICBkaXNwbGF5OiBibG9jaztcbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBldmVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbG9jYWxUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGxvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSkpLFxuICAgIGNsb3NlRGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdGhlbWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0aXRsZUZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRpdGxlRm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0aXRsZUZvbnRXZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGhlYWRlckJhY2tncm91bmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJvZHlCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBjb250YWluZXJCYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzaGFkb3dDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgYnV0dG9uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJvZHlGb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBib2R5Rm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsaW5rQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJhY2tCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubm9kZVxuICAgICAgXSkuaXNSZXF1aXJlZCxcbiAgICAgIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICAgIF0pLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZEV2ZW50OiAtMSwgc2NyZWVuV2lkdGg6IDAsIHNjcmVlbkhlaWdodDogMCB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gIH1cblxuICBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2NyZWVuV2lkdGg6IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCwgc2NyZWVuSGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IH0pXG4gIH1cblxuICBnb0JhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRXZlbnQ6IC0xIH0pXG4gIH1cblxuICBzZWxlY3RFdmVudCA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEV2ZW50OiBpbmRleCB9KVxuICB9XG5cbiAgZ2V0V2lkdGggKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh3aWR0aCA+IHNjcmVlbldpZHRoIHx8IGhlaWdodCA+IHNjcmVlbkhlaWdodCkgcmV0dXJuIHNjcmVlbldpZHRoXG4gICAgcmV0dXJuIHdpZHRoXG4gIH1cblxuICBnZXRIZWlnaHQgKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh3aWR0aCA+IHNjcmVlbldpZHRoIHx8IGhlaWdodCA+IHNjcmVlbkhlaWdodCkgcmV0dXJuIHNjcmVlbkhlaWdodFxuICAgIHJldHVybiBoZWlnaHRcbiAgfVxuXG4gIHJlbmRlcklvbmljb24gKGljb25OYW1lLCBjb2xvcikge1xuICAgIGNvbnN0IG5vcm1hbGlzZWRJY29uTmFtZSA9IGAke2ljb25OYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtpY29uTmFtZS5zdWJzdHJpbmcoMSl9YC5yZXBsYWNlKC8tKC4pL2csIChtKSA9PiBtWzFdLnRvVXBwZXJDYXNlKCkpXG4gICAgY29uc3Qga2V5ID0gYElvJHtub3JtYWxpc2VkSWNvbk5hbWV9YFxuICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBJb25pY29uc1trZXldXG4gICAgaWYgKCFJY29uQ29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaWNvbiAke2ljb25OYW1lfWApXG4gICAgcmV0dXJuIDxJY29uQ29tcG9uZW50IGNvbG9yPXtjb2xvcn0gc2l6ZT0nMS41ZW0nIC8+XG4gIH1cblxuICBnZXRCYWNrQnV0dG9uSWNvbiAoKSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2YgdGhlbWUuYmFja0J1dHRvbiA9PT0gJ3N0cmluZycpIHJldHVybiB0aGlzLnJlbmRlcklvbmljb24odGhlbWUuYmFja0J1dHRvbiwgdGhlbWUuYnV0dG9uQ29sb3IpXG4gICAgcmV0dXJuIDx0aGVtZS5iYWNrQnV0dG9uIGNvbG9yPXtjb2xvcn0gLz5cbiAgfVxuXG4gIGdldENsb3NlQnV0dG9uSWNvbiAoKSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2YgdGhlbWUuY2xvc2VCdXR0b24gPT09ICdzdHJpbmcnKSByZXR1cm4gdGhpcy5yZW5kZXJJb25pY29uKHRoZW1lLmNsb3NlQnV0dG9uLCB0aGVtZS5idXR0b25Db2xvcilcbiAgICByZXR1cm4gPHRoZW1lLmNsb3NlQnV0dG9uIGNvbG9yPXtjb2xvcn0gLz5cbiAgfVxuXG4gIGdldEhlYWRlciAodGl0bGUsIHNob3dCYWNrKSB7XG4gICAgY29uc3QgeyBjbG9zZURpYWxvZywgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlciBiYWNrZ3JvdW5kPXt0aGVtZS5oZWFkZXJCYWNrZ3JvdW5kfT5cbiAgICAgICAgPEJhY2tCdXR0b25cbiAgICAgICAgICBzaG93QmFjaz17c2hvd0JhY2t9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0JhY2sgJiYgdGhpcy5nb0JhY2soKX1cbiAgICAgICAgICBjb2xvcj17dGhlbWUuYnV0dG9uQ29sb3J9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRCYWNrQnV0dG9uSWNvbigpfVxuICAgICAgICA8L0JhY2tCdXR0b24+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIGNvbG9yPXt0aGVtZS50aXRsZUZvbnRDb2xvcn1cbiAgICAgICAgICBmb250RmFtaWx5PXt0aGVtZS50aXRsZUZvbnRGYW1pbHl9XG4gICAgICAgICAgZm9udFdlaWdodD17dGhlbWUudGl0bGVGb250V2VpZ2h0fVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8Q2xvc2VCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtjbG9zZURpYWxvZ31cbiAgICAgICAgICBjb2xvcj17dGhlbWUuYnV0dG9uQ29sb3J9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRDbG9zZUJ1dHRvbkljb24oKX1cbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cbiAgICAgIDwvSGVhZGVyPlxuICAgIClcbiAgfVxuXG4gIGdldFNlbGVjdEV2ZW50SGFuZGxlciAoaW5kZXgpIHtcbiAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5zZWxlY3RFdmVudChpbmRleClcbiAgICB9XG4gIH1cblxuICByZW5kZXJNdWx0aXBsZUV2ZW50cyAoKSB7XG4gICAgY29uc3QgeyBldmVudHMsIHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpXG4gICAgY29uc3QgdGl0bGUgPSBgRXZlbnRzIG5lYXIgJHtldmVudHNbMF0ubG9jYXRpb259YFxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT0nZGlhbG9nJyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBiYWNrZ3JvdW5kPXt0aGVtZS5jb250YWluZXJCYWNrZ3JvdW5kfSBzaGFkb3dDb2xvcj17dGhlbWUuc2hhZG93Q29sb3J9PlxuICAgICAgICB7dGhpcy5nZXRIZWFkZXIodGl0bGUsIGZhbHNlKX1cbiAgICAgICAgPFNjcm9sbFdyYXBwZXI+XG4gICAgICAgICAgPEJvZHkgYmFja2dyb3VuZD17dGhlbWUuYm9keUJhY2tncm91bmR9PlxuICAgICAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8RmllbGQga2V5PXtldmVudC5pZH0+XG4gICAgICAgICAgICAgICAgPEV2ZW50TGluayBocmVmPScjJyBvbkNsaWNrPXt0aGlzLmdldFNlbGVjdEV2ZW50SGFuZGxlcihpbmRleCl9IGNvbG9yPXt0aGVtZS5saW5rQ29sb3J9PntldmVudC5uYW1lfTwvRXZlbnRMaW5rPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8L1Njcm9sbFdyYXBwZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cblxuICByZW5kZXJTaW5nbGVFdmVudCAoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdkaWFsb2cnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGJhY2tncm91bmQ9e3RoZW1lLmNvbnRhaW5lckJhY2tncm91bmR9IHNoYWRvd0NvbG9yPXt0aGVtZS5zaGFkb3dDb2xvcn0+XG4gICAgICAgIHt0aGlzLmdldEhlYWRlcihldmVudC5uYW1lLCB0aGlzLnByb3BzLmV2ZW50cy5sZW5ndGggPiAxKX1cbiAgICAgICAgPFNjcm9sbFdyYXBwZXI+XG4gICAgICAgICAgPEJvZHkgZm9udEZhbWlseT17dGhlbWUuYm9keUZvbnRGYW1pbHl9IGNvbG9yPXt0aGVtZS5ib2R5Rm9udENvbG9yfSBiYWNrZ3JvdW5kPXt0aGVtZS5ib2R5QmFja2dyb3VuZH0+XG4gICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgIDxMYWJlbD5XaGVyZT88L0xhYmVsPlxuICAgICAgICAgICAgICA8VmFsdWU+e2V2ZW50LmxvY2F0aW9ufTwvVmFsdWU+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPEZpZWxkPlxuICAgICAgICAgICAgICA8TGFiZWw+V2hlbj88L0xhYmVsPlxuICAgICAgICAgICAgICA8VmFsdWU+e2V2ZW50LmRhdGV9IHtldmVudC5sb2NhbFRpbWV9PC9WYWx1ZT5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgIDxMYWJlbD5FdmVudCBVUkw6PC9MYWJlbD5cbiAgICAgICAgICAgICAgPEV2ZW50TGluayBocmVmPXtldmVudC51cmx9IHRhcmdldD0nX2JsYW5rJyBjb2xvcj17dGhlbWUubGlua0NvbG9yfT57ZXZlbnQudXJsfTwvRXZlbnRMaW5rPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgIDwvU2Nyb2xsV3JhcHBlcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkRXZlbnQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDEgJiYgc2VsZWN0ZWRFdmVudCA8IDApIHJldHVybiB0aGlzLnJlbmRlck11bHRpcGxlRXZlbnRzKClcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5sZW5ndGggPiAxID8gZXZlbnRzW3NlbGVjdGVkRXZlbnRdIDogZXZlbnRzWzBdXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2luZ2xlRXZlbnQoZXZlbnQpXG4gIH1cbn1cbiJdfQ==