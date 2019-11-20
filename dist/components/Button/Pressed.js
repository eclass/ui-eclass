"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTouchRipple = _interopRequireDefault(require("react-touch-ripple"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: 100%;\n  overflow: hidden;\n  & > div {\n    height: 100%;\n    position: relative;\n    z-index: 1;\n  }\n  .Pressed__content {\n    height: 100%;\n\n    & + span {\n      margin: 0;\n    }\n  }\n  .under {\n    z-index: 2;\n  }\n  .rtr-ripple-entering {\n    opacity: ", ";\n  }\n  .rtr-root {\n    position: relative;\n    display: inline-block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// @Component
var Pressed = function Pressed(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      color = _ref.color,
      dark = _ref.dark,
      under = _ref.under,
      timeout = _ref.timeout,
      opacity = _ref.opacity;

  var filterOpacity = function filterOpacity() {
    return dark ? 0.2 : opacity;
  };

  var filterColor = function filterColor() {
    if (color) {
      return color;
    } else {
      return dark ? 'rgb(204, 204, 204)' : 'rgb(255, 255, 255)';
    }
  };

  return disabled ? React.createElement("div", {
    className: "Pressed__content"
  }, children) : React.createElement(Wrap, {
    color: filterColor(),
    timeout: timeout,
    under: under,
    opacity: filterOpacity()
  }, children);
}; // @Proptypes


Pressed.defaultProps = {
  opacity: 0.2,
  timeout: 1000,
  under: true
}; // @Export Component

var _default = Pressed;
exports.default = _default;

var Wrap = function Wrap(_ref2) {
  var color = _ref2.color,
      timeout = _ref2.timeout,
      under = _ref2.under,
      children = _ref2.children,
      opacity = _ref2.opacity;
  return React.createElement(StyledWrap, {
    opacity: opacity
  }, React.createElement(_reactTouchRipple.default, {
    color: color,
    timeout: {
      enter: timeout,
      exit: timeout
    }
  }, React.createElement("div", {
    className: "Pressed__content ".concat(under ? 'under' : '')
  }, children)));
};

// @Export Component
var StyledWrap = _styledComponents.default.div(_templateObject(), function (props) {
  return props.opacity;
});