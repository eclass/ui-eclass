"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _variables = _interopRequireDefault(require("../variables"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: 97px;\n\n  label {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  input {\n    height: 44px;\n    width: 400px;\n    &[disabled] {\n      cursor: no-drop;\n    }\n  }\n\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border: solid 2px ", ";\n    outline: 0;\n    box-shadow: none;\n  }\n\n  .valid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .invalid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .borderGreen {\n    border: solid 2px ", ";\n  }\n  .borderGreen:focus {\n    border: solid 2px ", ";\n  }\n  .borderRed {\n    border: solid 2px ", ";\n  }\n  .borderRed:focus {\n    border: solid 2px ", ";\n  }\n  .gray {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.div(_templateObject(), _variables.default.setColors.deepSkyBlue, _variables.default.setColors.jadeGreen, _variables.default.setColors.red, _variables.default.setColors.jadeGreen, _variables.default.setColors.jadeGreen, _variables.default.setColors.red, _variables.default.setColors.red, _variables.default.setColors.brownGreyTwo);

exports.Wrapper = Wrapper;