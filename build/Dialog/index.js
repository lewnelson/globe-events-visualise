"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _io = _interopRequireDefault(require("react-icons/io"));

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

console.log('Ionicons', _io["default"]);

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
      var IconComponent = _io["default"][key];
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