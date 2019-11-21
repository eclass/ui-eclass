"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  height: ", ";\n  width: ", ";\n\n  svg {\n    margin: 0;\n    align-self: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// @Export Styled Component
var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var bgcolor = _ref.bgcolor;
  return bgcolor;
}, function (_ref2) {
  var color = _ref2.color;
  return color || 'inherit';
}, function (_ref3) {
  var size = _ref3.size;
  return size || '27px';
}, function (_ref4) {
  var size = _ref4.size;
  return size || '27px';
});

exports.Wrapper = Wrapper;