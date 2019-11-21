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
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: 97px;\n  select {\n    width: 400px;\n    height: 44px;\n  }\n\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border: solid 2px ", ";\n    outline: 0;\n    box-shadow: none;\n  }\n\n  .form-control:disabled {\n    color: ", ";\n  }\n\n  select.form-control {\n    font-family: 'Roboto', sans-serif;\n    background-repeat: no-repeat;\n    background-position: 370px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    position: relative;\n    overflow: hidden;\n    color: ", ";\n    :before {\n      -webkit-transform: rotate(deg);\n      transform: rotate(90deg);\n    }\n  }\n  .valid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .invalid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .borderGreen {\n    border: solid 2px ", ";\n  }\n  .borderGreen:focus {\n    border: solid 2px ", ";\n  }\n  .borderRed {\n    border: solid 2px ", ";\n  }\n  .borderRed:focus {\n    border: solid 2px ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  label {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .gray {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents.default.div(_templateObject(), _variables.default.setColors.deepSkyBlue, _variables.default.setColors.veryLightPink, _variables.default.setColors.black, _variables.default.setColors.jadeGreen, _variables.default.setColors.red, _variables.default.setColors.jadeGreen, _variables.default.setColors.jadeGreen, _variables.default.setColors.red, _variables.default.setColors.red, _variables.default.setColors.brownGreyTwo, _variables.default.setColors.brownGreyTwo);

exports.Wrapper = Wrapper;