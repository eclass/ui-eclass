"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _reactstrap = require("reactstrap");

var _Icons = require("../UI/Icons");

var _classnames = _interopRequireDefault(require("classnames"));

var InputText = function InputText(_ref) {
  var disabled = _ref.disabled,
      autoFocus = _ref.autoFocus,
      type = _ref.type,
      placeholder = _ref.placeholder,
      label = _ref.label;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      valueInput = _useState2[0],
      setValueInput = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      icon = _useState4[0],
      setIcon = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      borderValid = _useState6[0],
      setBorderValid = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      borderInvalid = _useState8[0],
      setBorderInvalid = _useState8[1];

  var timer;
  var interval = 1000;

  var validateInput = function validateInput(typeValidation, value) {
    switch (typeValidation) {
      case 'phone':
        return validation('^([+])?([0-9]{1,20})$', value, 'Debe ingresar sólo números');

      case 'email':
        return validation('^.+@[^.].*.[a-z]{2,}$', value, 'Debes llenar este campo con email válido');

      case 'alphabetic':
        return validation('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+$', value, 'Debe contener sólo valores alfabéticos');

      default:
        return null;
    }
  };

  var validation = function validation(regex, value, message) {
    clearTimeout(timer);

    if (value.match(regex)) {
      timer = setTimeout(function () {
        setIcon(_react.default.createElement("div", {
          className: "valid_feedback"
        }, _react.default.createElement(_Icons.Icon, {
          width: 17,
          fill: "#ffff",
          name: "circularCheck"
        }), "Correcto"));
        setBorderValid(true);
        setBorderInvalid(false);
      }, interval);
    } else if (value === '') {
      timer = setTimeout(function () {
        setIcon(_react.default.createElement("div", {
          className: "invalid_feedback"
        }, _react.default.createElement(_Icons.Icon, {
          width: 17,
          fill: "#ffff",
          name: "circularError"
        }), "Este campo es obligatorio"));
        setBorderValid(false);
        setBorderInvalid(true);
      }, interval);
    } else {
      timer = setTimeout(function () {
        setIcon(_react.default.createElement("div", {
          className: "invalid_feedback"
        }, _react.default.createElement(_Icons.Icon, {
          width: 17,
          fill: "#ffff",
          name: "circularError"
        }), message));
        setBorderValid(false);
        setBorderInvalid(true);
      }, interval);
    }
  };

  return _react.default.createElement(_styles.Wrapper, null, _react.default.createElement(_reactstrap.Label, {
    for: "Input Text",
    className: (0, _classnames.default)(disabled ? 'gray' : '')
  }, ' ', label), _react.default.createElement(_reactstrap.Input, {
    "aria-label": "Campo de texto",
    value: valueInput,
    onChange: function onChange(e) {
      setValueInput(e.target.value);
    },
    onKeyUp: function onKeyUp(e) {
      clearTimeout(timer);
      validateInput(type, e.target.value);
    },
    onKeyDown: clearTimeout(timer),
    onBlur: clearTimeout(timer),
    autoFocus: autoFocus || false,
    placeholder: placeholder,
    className: (0, _classnames.default)({
      borderRed: borderInvalid,
      borderGreen: borderValid
    }),
    disabled: disabled || false
  }), icon);
}; // @Proptypes


InputText.defaultProps = {
  disabled: false,
  autoFocus: false,
  placeholder: 'Placeholder',
  label: 'Etiqueta'
};
var _default = InputText;
exports.default = _default;