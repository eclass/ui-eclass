"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationAlphabetic = exports.validationEmail = exports.validationPhone = exports.disabled = exports.autofocus = exports.input = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputText = require("./InputText");

var _default = {
  title: 'Plataforma v8|Input',
  parameters: {
    component: _InputText.InputText,
    componentSubtitle: 'Input con validaciones según tipo'
  }
};
exports.default = _default;

var input = function input() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_InputText.InputText, {
    placeholder: "Escribe algo...",
    label: "Estandar"
  }));
};

exports.input = input;

var autofocus = function autofocus() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_InputText.InputText, {
    placeholder: "Escribe algo...",
    autoFocus: true,
    label: "Autofocus"
  }));
};

exports.autofocus = autofocus;

var disabled = function disabled() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_InputText.InputText, {
    placeholder: "Placeholder",
    label: "Disabled",
    disabled: true
  }));
};

exports.disabled = disabled;

var validationPhone = function validationPhone() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_InputText.InputText, {
    placeholder: "Ingresa un n\xFAmero de tel\xE9fono",
    label: "N\xFAmero de tel\xE9fono",
    type: "phone"
  }));
};

exports.validationPhone = validationPhone;

var validationEmail = function validationEmail() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_InputText.InputText, {
    placeholder: "Correo electr\xF3nico",
    label: "Correo electr\xF3nico",
    type: "email"
  }));
};

exports.validationEmail = validationEmail;

var validationAlphabetic = function validationAlphabetic() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_InputText.InputText, {
    placeholder: "Ingresa tu nombre",
    label: "Nombre",
    type: "alphabetic"
  }));
};

exports.validationAlphabetic = validationAlphabetic;