"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipTrigger = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _Tooltip = _interopRequireDefault(require("reactstrap/lib/Tooltip"));

var TooltipTrigger = function TooltipTrigger(_ref) {
  var target = _ref.target,
      children = _ref.children,
      className = _ref.className,
      trigger = _ref.trigger,
      placement = _ref.placement;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tooltipOpen = _useState2[0],
      setTooltipOpen = _useState2[1];

  var toggle = function toggle() {
    return setTooltipOpen(!tooltipOpen);
  };

  return _react.default.createElement(_styles.Wrapper, null, _react.default.createElement(_Tooltip.default, {
    placement: placement,
    isOpen: tooltipOpen,
    delay: 0,
    target: "Tooltip-".concat(target),
    toggle: toggle,
    trigger: trigger
  }, children));
}; // @Proptypes


exports.TooltipTrigger = TooltipTrigger;
TooltipTrigger.defaultProps = {
  target: 0,
  children: 'Tooltip',
  placement: 'top',
  trigger: 'click'
};