"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = exports.StyledIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = _interopRequireDefault(require("../variables"));

var _Button = require("./Button");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  line-height: 0;\n  margin-right: ", ";\n  vertical-align: middle;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  background: ", ";\n  border: none;\n  border-radius: 4px;\n  color: ", ";\n  margin-right: 10px;\n  padding: 0;\n  transition: all 0.25s;\n  line-height: normal;\n  font-size: xx-small;\n  ", ";\n  \n  &:hover {\n    ", "\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n  }\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  \n  &[disabled] {\n    background: ", ";\n    border-color: ", ";\n    cursor: no-drop;\n    ", "\n    .button__container {\n      ", "\n    }\n    &:hover {\n      box-shadow: none;\n    }\n    &:hover,\n    &:active {\n      background: ", ";\n      .button__container {\n        ", "\n      }\n    }\n  }\n  \n  .button__container {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    ", "\n    padding: ", ";\n    text-align: center;\n    border-radius: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledButton = _styledComponents.default.button(_templateObject(), function (props) {
  return (0, _Button.buttonBackground)(props);
}, function (props) {
  return (0, _Button.buttonColor)(props);
}, function (props) {
  return (0, _Button.buttonBorder)(props);
}, function (props) {
  return (0, _Button.buttonActionColor)('hover', props);
}, _variables.default.setColors.veryLightPink, _variables.default.setColors.veryLightPink, function (props) {
  return (0, _Button.isDisabled)(props);
}, function (props) {
  return (0, _Button.isDisabled)(props);
}, function (props) {
  return !props.border ? _variables.default.setColors.veryLightPink : 'transparent';
}, function (props) {
  return (0, _Button.isDisabled)(props);
}, function (props) {
  return (0, _Button.buttonSize)(props.size, props.text);
}, function (_ref) {
  var text = _ref.text;
  return text ? '0 10px' : '0';
});

exports.StyledButton = StyledButton;

var StyledIcon = _styledComponents.default.span(_templateObject2(), function (props) {
  return props.icon && props.text ? '5px' : '0';
});

exports.StyledIcon = StyledIcon;