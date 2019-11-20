"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var Avatar = function Avatar(_ref) {
  var alt = _ref.alt,
      size = _ref.size,
      userId = _ref.userId,
      picture = _ref.picture,
      fullName = _ref.fullName,
      fontSize = _ref.fontSize;

  var _useState = (0, _react.useState)('#0076ba'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedColor = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      validUrl = _useState4[0],
      setValidUrl = _useState4[1];

  (0, _react.useEffect)(function () {
    var colors = ['#0076ba', '#229f9c', '#2cb26b', '#30baed', '#95569e', '#9bc03a', '#d84315', '#f5a623', '#f6712f', '#ff6363'];
    var colorPosition = 0;

    if (userId >= 0) {
      var numbers = userId.toString().split('');
      colorPosition = parseInt(numbers[numbers.length - 1], 10);
    } else {
      colorPosition = Math.floor(Math.random() * colors.length);
    }

    setColor(colors["".concat(colorPosition)]);
  }, [userId]);

  var splitLetterFromName = function splitLetterFromName(input) {
    return input.split(' ').map(function (string) {
      return string[0];
    }).slice(0, 2).join('');
  };

  var ImgElement = function ImgElement(_ref2) {
    var url = _ref2.url,
        fn = _ref2.fn,
        alt = _ref2.alt;
    return _react.default.createElement("img", {
      className: validUrl ? ' ' : 'test-img',
      alt: alt,
      src: url,
      onLoad: function onLoad() {
        return fn(true);
      },
      onError: function onError() {
        return fn(false);
      }
    });
  };

  if (picture) {
    if (!validUrl) {
      return _react.default.createElement(_styles.Wrapper, {
        fontSize: fontSize,
        size: size,
        selectedColor: selectedColor,
        className: "RoundedImage"
      }, _react.default.createElement("span", null, splitLetterFromName(fullName)), _react.default.createElement(ImgElement, {
        url: picture,
        alt: fullName,
        fn: function fn(status) {
          setValidUrl(status);
        }
      }));
    }

    return _react.default.createElement(_styles.Wrapper, {
      fontSize: fontSize,
      size: size,
      selectedColor: selectedColor,
      className: "RoundedImage"
    }, _react.default.createElement("img", {
      src: picture,
      alt: alt
    }));
  }

  return _react.default.createElement(_styles.Wrapper, {
    fontSize: fontSize,
    size: size,
    selectedColor: selectedColor,
    className: "PlaceholderName flex-center"
  }, _react.default.createElement("span", null, splitLetterFromName(fullName)));
};

exports.Avatar = Avatar;
Avatar.defaultProps = {
  fullName: 'n n',
  fontSize: 14,
  alt: 'Rounded Image',
  size: 50
};