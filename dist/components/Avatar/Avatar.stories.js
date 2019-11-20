"use strict";

var _interopRequireDefault = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Picture = exports.LoadingOrDefault = exports.avatar = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = require("./Avatar");

var _florDeMargarita830x = _interopRequireDefault(require("../UI/images/flor-de-margarita-830x551.jpg"));

var _ = _interopRequireDefault(require("../UI/images/263385.jpeg"));

var _2 = _interopRequireDefault(require("../UI/images/132554.jpeg"));

var _default = {
  title: 'Plataforma v8|Avatar',
  parameters: {
    component: _Avatar.Avatar,
    componentSubtitle: 'Muestra un avatar por defecto, con iniciales y fotografía'
  }
};
exports.default = _default;

var avatar = function avatar() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Avatar.Avatar, {
    fullName: "Mar\xEDa Salinas",
    userId: '87398241',
    size: 70,
    fontSize: 30
  }), _react.default.createElement(_Avatar.Avatar, {
    fullName: "Juan Maestro",
    userId: '87398242',
    picture: _florDeMargarita830x.default,
    size: 70
  }), _react.default.createElement(_Avatar.Avatar, {
    fullName: "Flor Jansen",
    userId: '87398242',
    picture: _.default,
    size: 70
  }));
};

exports.avatar = avatar;

var LoadingOrDefault = function LoadingOrDefault() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Avatar.Avatar, {
    fullName: "Mar\xEDa Salinas",
    userId: '8739',
    size: 50,
    fontSize: 20
  }), _react.default.createElement(_Avatar.Avatar, {
    fullName: "juanito parra",
    userId: '40',
    size: 50,
    fontSize: 20
  }), _react.default.createElement(_Avatar.Avatar, {
    size: 50,
    fontSize: 20
  }));
};

exports.LoadingOrDefault = LoadingOrDefault;

var Picture = function Picture() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Avatar.Avatar, {
    fullName: "Mar\xEDa Salinas",
    userId: '87398242',
    size: 70,
    picture: _2.default,
    fontSize: 30
  }), _react.default.createElement(_Avatar.Avatar, {
    fullName: "Luis Mora",
    userId: '435',
    size: 70,
    picture: _.default,
    fontSize: 30
  }), _react.default.createElement(_Avatar.Avatar, {
    fullName: "Rosa Gutierrez",
    userId: '43',
    picture: _florDeMargarita830x.default,
    size: 70,
    fontSize: 30
  }));
};

exports.Picture = Picture;