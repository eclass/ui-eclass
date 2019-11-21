"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerClick = exports.hoverAndPosition = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TooltipTrigger = require("./TooltipTrigger");

var _ProgressIcon = require("../ProgressIcon");

var _variables = _interopRequireDefault(require("../variables"));

var _default = {
  title: 'Plataforma v8| TooltipTrigger ',
  parameters: {
    component: _TooltipTrigger.TooltipTrigger,
    componentSubtitle: 'Tooltips con trigger a diferentes acciones'
  }
};
exports.default = _default;

var hoverAndPosition = function hoverAndPosition() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: "in-progress",
    id: "Tooltip-in-progress"
  }), _react.default.createElement(_TooltipTrigger.TooltipTrigger, {
    placement: "top",
    trigger: "hover",
    target: "in-progress"
  }, 'Visto 0 de 4 contenidos'), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: "opened",
    id: "Tooltip-opened"
  }), _react.default.createElement(_TooltipTrigger.TooltipTrigger, {
    placement: "right",
    trigger: "hover",
    target: "opened"
  }, 'Unidad Liberada'), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: "orange",
    icon: "blocked",
    id: "Tooltip-blocked"
  }), _react.default.createElement(_TooltipTrigger.TooltipTrigger, {
    placement: "left",
    trigger: "hover",
    target: "blocked"
  }, 'Para continuar debes completar la unidad anterior'), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: "#5E7A8C",
    icon: "done",
    id: "Tooltip-done"
  }), _react.default.createElement(_TooltipTrigger.TooltipTrigger, {
    placement: "bottom",
    trigger: "hover",
    target: "done"
  }, 'Visto 0 de 4 contenidos'), _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: _variables.default.setColors.veryLightPink,
    icon: "blocked",
    id: "Tooltip-block-gray"
  }), _react.default.createElement(_TooltipTrigger.TooltipTrigger, {
    placement: "auto",
    trigger: "hover",
    target: "block-gray"
  }, 'El examen estará disponible a partir del....'));
};

exports.hoverAndPosition = hoverAndPosition;

var triggerClick = function triggerClick() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ProgressIcon.ProgressIcon, {
    color: "white",
    bgcolor: _variables.default.setColors.deepSkyBlue,
    icon: "in-progress",
    id: "Tooltip-click"
  }), _react.default.createElement(_TooltipTrigger.TooltipTrigger, {
    placement: "top",
    trigger: "click",
    target: "click"
  }, "Visto 0 de 4 contenidos"));
};

exports.triggerClick = triggerClick;