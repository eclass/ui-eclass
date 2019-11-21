"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _Icons = require("../UI/Icons");

// @External Dependencies
var ProgressIcon = function ProgressIcon(_ref) {
  var id = _ref.id,
      className = _ref.className,
      icon = _ref.icon,
      color = _ref.color,
      bgcolor = _ref.bgcolor,
      size = _ref.size,
      width = _ref.width,
      height = _ref.height,
      onClick = _ref.onClick;
  return React.createElement(_styles.Wrapper, {
    className: "".concat(className),
    id: id,
    bgcolor: bgcolor,
    size: size,
    onClick: onClick
  }, React.createElement(_Icons.Icon, {
    name: icon,
    fill: color,
    width: width,
    height: height
  }));
}; // @Default Proptypes


exports.ProgressIcon = ProgressIcon;
ProgressIcon.defaultProps = {
  icon: 'done',
  color: 'white',
  bgcolor: '#5E7A8C',
  size: '27px'
}; // @Proptypes