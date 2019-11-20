"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-family: \"'Roboto', sans-serif\";\n  border-radius: 50%;\n  flex-shrink: 0;\n  height: ", ";\n  margin: 0px 0px 0px 0px;\n  overflow: hidden;\n  width: ", ";\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  span {\n    color: white;\n    text-transform: uppercase;\n    font: 400 ", " / 30px 'Roboto', sans-serif;\n  }\n  img {\n    height: 100%;\n    max-width: auto;\n  }\n  .test-img {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.figure(_templateObject(), function (prop) {
  return "".concat(prop.size, "px");
}, function (prop) {
  return "".concat(prop.size, "px");
}, function (props) {
  return props.selectedColor;
}, function (props) {
  return "".concat(props.fontSize, "px");
});

exports.Wrapper = Wrapper;