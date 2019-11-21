"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.icons = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressIcon = require("./ProgressIcon");

var _variables = _interopRequireDefault(require("../variables"));

var _default = {
  title: 'Plataforma v8|Progress Icon ',
  parameters: {
    component: _ProgressIcon.ProgressIcon,
    componentSubtitle: 'Iconos de progreso diseñados para plataforma v8'
  }
};
exports.default = _default;

var icons = function icons() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: 'in-progress'
  }), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: 'opened'
  }), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: 'orange',
    icon: 'blocked'
  }), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: '#5E7A8C',
    icon: 'done'
  }), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: _variables.default.setColors.veryLightPink,
    icon: 'blocked'
  }));
};

exports.icons = icons;

var sizes = function sizes() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ProgressIcon.ProgressIcon, {
    size: '50px',
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: 'in-progress'
  }), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    size: '40px',
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: 'in-progress'
  }), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    size: '27px',
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: 'in-progress'
  }));
};

exports.sizes = sizes;