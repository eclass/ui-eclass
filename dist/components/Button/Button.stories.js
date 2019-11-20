"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xs = exports.OtherStates = exports.states = exports.buttons = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

var _default = {
  title: 'Plataforma v8|Button',
  parameters: {
    component: _Button.default,
    componentSubtitle: 'Displays an image that represents a user or organization'
  }
};
exports.default = _default;

var buttons = function buttons() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
    state: "primary",
    text: 'Button Primary',
    onClick: (0, _addonActions.action)('click')
  }), _react.default.createElement(_Button.default, {
    text: 'Button Ghost',
    ghost: true,
    onClick: (0, _addonActions.action)('click')
  }), _react.default.createElement(_Button.default, {
    state: "info",
    text: 'Disabled',
    disabled: true,
    onClick: (0, _addonActions.action)('click')
  }));
};

exports.buttons = buttons;

var states = function states() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
    state: "primary",
    text: 'Button Blue'
  }), _react.default.createElement(_Button.default, {
    text: 'Button Ghost',
    ghost: true
  }), _react.default.createElement(_Button.default, {
    state: "info",
    text: 'Disabled',
    disabled: true
  }));
};

exports.states = states;

var OtherStates = function OtherStates() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
    state: "info",
    text: 'Button',
    opacityPressed: 0
  }), _react.default.createElement(_Button.default, {
    state: "danger",
    text: 'Button'
  }), _react.default.createElement(_Button.default, {
    state: "warning",
    text: 'Disabled'
  }));
};

exports.OtherStates = OtherStates;

var xs = function xs() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
    state: "primary",
    size: 'xs',
    text: 'Disabled'
  }));
};

exports.xs = xs;