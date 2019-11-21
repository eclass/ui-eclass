"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _reactstrap = require("reactstrap");

var _Icons = require("../UI/Icons");

var _classnames = _interopRequireDefault(require("classnames"));

var Select = function Select(_ref) {
  var disabled = _ref.disabled,
      label = _ref.label,
      placeholder = _ref.placeholder,
      data = _ref.data;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      icon = _useState2[0],
      setIcon = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      borderValid = _useState4[0],
      setBorderValid = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      borderInvalid = _useState6[0],
      setBorderInvalid = _useState6[1];

  var timer;
  var interval = 1000;

  var validateSelect = function validateSelect(value) {
    if (value === 'Selecciona') {
      clearTimeout(timer);
      timer = setTimeout(function () {
        setIcon(_react.default.createElement("div", {
          className: "invalid_feedback"
        }, _react.default.createElement(_Icons.Icon, {
          width: 17,
          fill: "#ffff",
          name: "circularError"
        }), "Seleccione una opci\xF3n v\xE1lida"));
        setBorderValid(false);
        setBorderInvalid(true);
      }, interval);
    } else {
      timer = setTimeout(function () {
        setIcon(_react.default.createElement("div", {
          className: "valid_feedback"
        }, _react.default.createElement(_Icons.Icon, {
          width: 17,
          fill: "#ffff",
          name: "circularCheck"
        }), "Correcto"));
        setBorderInvalid(false);
        setBorderValid(true);
      }, interval);
    }
  };

  return _react.default.createElement(_styles.Wrapper, null, _react.default.createElement(_reactstrap.Label, {
    for: "exampleSelect",
    className: (0, _classnames.default)(disabled ? 'gray' : '')
  }, label), _react.default.createElement(_reactstrap.Input, {
    onChange: function onChange(e) {
      validateSelect(e.target.value);
    },
    className: (0, _classnames.default)({
      borderRed: borderInvalid,
      borderGreen: borderValid
    }),
    type: "select",
    name: "select",
    id: "exampleSelect",
    disabled: disabled || false
  }, _react.default.createElement("option", {
    value: "Selecciona"
  }, placeholder), data ? data.map(function (region, key) {
    return _react.default.createElement("option", {
      value: region.region,
      key: key
    }, region.region);
  }) : null), icon);
}; // @Proptypes


exports.Select = Select;
Select.defaultProps = {
  disabled: false,
  data: null,
  placeholder: 'Placeholder',
  label: 'Etiqueta'
};