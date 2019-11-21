"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabled = exports.Selects = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Select = require("./Select");

var _countries = _interopRequireDefault(require("./countries"));

var _default = {
  title: 'Plataforma v8| Select ',
  parameters: {
    component: _Select.Select,
    componentSubtitle: 'Selects con validación al no seleccionar op. válida'
  }
};
exports.default = _default;

var Selects = function Selects() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Select.Select, {
    label: "Selecciona tu regi\xF3n",
    placeholder: "Selecciona",
    data: _countries.default.regiones
  }));
};

exports.Selects = Selects;

var disabled = function disabled() {
  return _react.default.createElement(_Select.Select, {
    disabled: true,
    placeholder: "Seleccionar",
    label: "Select disabled"
  });
};

exports.disabled = disabled;