"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.isDisabled = exports.buttonBorder = exports.buttonActionColor = exports.buttonSize = exports.buttonState = exports.buttonBackground = exports.buttonColor = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _Pressed = _interopRequireDefault(require("./Pressed"));

var _variables = _interopRequireDefault(require("../variables"));

var _DelayLink = _interopRequireDefault(require("./DelayLink"));

var _polished = require("polished");

var _Tooltip = _interopRequireDefault(require("reactstrap/lib/Tooltip"));

function Button(_ref) {
  var id = _ref.id,
      border = _ref.border,
      disabled = _ref.disabled,
      form = _ref.form,
      ghost = _ref.ghost,
      icon = _ref.icon,
      link = _ref.link,
      blank = _ref.blank,
      onClick = _ref.onClick,
      opacityPressed = _ref.opacityPressed,
      size = _ref.size,
      state = _ref.state,
      text = _ref.text,
      tooltip = _ref.tooltip,
      type = _ref.type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? '' : _ref$tabIndex,
      testid = _ref.testid,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? {} : _ref$children;

  var renderButton = function renderButton() {
    return _react.default.createElement(_styles.StyledButton, {
      "data-testid": testid,
      id: id,
      className: className,
      border: border,
      disabled: disabled,
      ghost: ghost,
      form: form,
      onClick: onClick,
      size: size,
      text: text,
      state: state,
      tabIndex: tabIndex,
      type: type
    }, _react.default.createElement(_Pressed.default, {
      ghost: ghost,
      disabled: disabled,
      state: state,
      border: border,
      opacity: opacityPressed,
      color: colorPressed()
    }, icon && _react.default.createElement(_styles.StyledIcon, {
      icon: icon,
      text: text,
      className: "nucleo-icon nucleo-icon-".concat(icon)
    }), (text || children && children.length) && _react.default.createElement("div", {
      className: "button__container"
    }, text || children)));
  };

  var colorPressed = function colorPressed() {
    if (border || state === 'link') {
      return buttonState(state);
    } else if (border || state === 'ghost') {
      return buttonState(state);
    }

    return undefined;
  };

  if (link && !tooltip) {
    return blank ? _react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: link
    }, renderButton()) : _react.default.createElement(_DelayLink.default, {
      to: link
    }, renderButton());
  } else if (!link && tooltip) {
    return _react.default.createElement(_Tooltip.default, {
      placement: "right",
      isOpen: this.state.tooltipOpen,
      target: "TooltipExample",
      toggle: this.toggle
    }, renderButton());
  } else if (link && tooltip) {
    return blank ? _react.default.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: link
    }, _react.default.createElement(_Tooltip.default, {
      placement: "right",
      isOpen: this.state.tooltipOpen,
      target: "TooltipExample",
      toggle: this.toggle
    }, renderButton())) : _react.default.createElement(_DelayLink.default, {
      to: link
    }, _react.default.createElement(_Tooltip.default, {
      placement: "right",
      isOpen: this.state.tooltipOpen,
      target: "TooltipExample",
      toggle: this.toggle
    }, renderButton()));
  } else {
    return renderButton();
  }
} // @Proptypes


Button.defaultProps = {
  state: 'ghost'
}; // @Styles

var buttonColor = function buttonColor(props) {
  if (props.border) {
    return buttonState(props.state);
  } else if (props.state === 'link') {
    return _variables.default.setColors.primary;
  } else if (props.state === 'ghost') {
    return _variables.default.setColors.primary;
  } else {
    return 'white';
  }
};

exports.buttonColor = buttonColor;

var buttonBackground = function buttonBackground(props) {
  if (props.border || props.state === 'link') {
    return 'transparent';
  } else if (props.border || props.state === 'ghost') {
    return 'white';
  } else {
    return buttonState(props.state);
  }
};

exports.buttonBackground = buttonBackground;

var buttonState = function buttonState(state) {
  var color;

  switch (state) {
    case 'primary':
      color = _variables.default.setColors.primary;
      break;

    case 'info':
      color = _variables.default.setColors.info;
      break;

    case 'success':
      color = _variables.default.setColors.buttons.success;
      break;

    case 'warning':
      color = _variables.default.setColors.warning;
      break;

    case 'danger':
      color = _variables.default.setColors.danger;
      break;

    case 'ghost':
      color = _variables.default.setColors.primary;
      break;

    default:
      color = _variables.default.setColors.primary;
  }

  return color;
};

exports.buttonState = buttonState;

var buttonSize = function buttonSize(size, text) {
  var btnSize;

  switch (size) {
    case 'lg':
      btnSize = {
        height: '70px',
        fontSize: '14px',
        width: 'auto'
      };
      break;

    case 'sm':
      btnSize = {
        height: '30px',
        fontSize: '14px',
        width: 'auto'
      };
      break;

    case 'xs':
      btnSize = {
        height: '30px',
        fontSize: '14px',
        width: 'auto'
      };
      break;

    default:
      btnSize = {
        height: text ? '44px' : 'auto',
        fontSize: '1rem',
        width: text ? '180px' : '100%'
      };
  }

  return btnSize;
};

exports.buttonSize = buttonSize;

var buttonActionColor = function buttonActionColor(action, props) {
  var background;
  var borderColor;
  var color;
  var percent;
  var colorState = buttonState(props.state);

  if (props.border || props.state === 'link') {
    borderColor = colorState;
    color = colorState;
    background = (0, _polished.transparentize)(0.95, colorState);
  } else if (props.border || props.state === 'ghost') {
    borderColor = colorState;
    color = _variables.default.setColors.primary;
    background = (0, _polished.transparentize)(0.95, colorState);
  } else if (props.border || props.state === 'primary') {
    color = 'white';

    if (action === 'hover') {
      percent = 0.03;
    } else if (action === 'active') {
      percent = 0.08;
    }

    background = (0, _polished.darken)(percent, colorState);
    borderColor = (0, _polished.darken)(percent, colorState);
  }

  return {
    background: background,
    borderColor: borderColor,
    color: color
  };
};

exports.buttonActionColor = buttonActionColor;

var buttonBorder = function buttonBorder(props) {
  if (props.border || props.state === 'link') {
    var color = buttonColor(props);
    return {
      border: "1px solid ".concat(color)
    };
  } else if (props.border || props.state === 'ghost') {
    var _color = buttonColor(props);

    return {
      border: "1px solid ".concat(_color)
    };
  }
};

exports.buttonBorder = buttonBorder;

var isDisabled = function isDisabled(props) {
  if (props.border) {
    return {
      borderColor: '#e6e6e6',
      color: _variables.default.setColors.veryLightPink
    };
  }

  return {
    background: _variables.default.setColors.veryLightPink
  };
};

exports.isDisabled = isDisabled;