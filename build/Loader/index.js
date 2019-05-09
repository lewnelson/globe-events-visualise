"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @keyframes loading-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n\n  &:after {\n    content: \" \";\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid ", ";\n    border-color: ", " transparent ", " transparent;\n    animation: loading-ring 1.2s linear infinite;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

var LoadingRing = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
});

var Loader = function Loader(_ref4) {
  var color = _ref4.color,
      children = _ref4.children;
  return _react["default"].createElement(Container, null, children, !children && _react["default"].createElement(LoadingRing, {
    color: color
  }));
};

Loader.propTypes = {
  color: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node
};
var _default = Loader;
exports["default"] = _default;