"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DelayLink = function DelayLink(_ref) {
  var children = _ref.children,
      to = _ref.to,
      delay = _ref.delay,
      history = _ref.history,
      external = _ref.external,
      className = _ref.className,
      disabled = _ref.disabled;

  var handleClick = function handleClick(e) {
    if (disabled) {
      e.preventDefault();
    } else {
      var newDelay = delay || (external ? 1000 : 50);
      e.preventDefault();
      setTimeout(function () {
        if (external) {
          window.open(to, '_blank');
        } else {
          history.push(to);
        }
      }, newDelay);
    }
  };

  if (external) {
    return React.createElement("a", {
      href: to,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: handleClick,
      className: className
    }, children);
  }

  return React.createElement(_reactRouterDom.Link, {
    to: to,
    onClick: handleClick,
    className: className
  }, children);
}; // @Proptypes


var _default = (0, _styledComponents.default)((0, _reactRouterDom.withRouter)(DelayLink))(_templateObject());

exports.default = _default;