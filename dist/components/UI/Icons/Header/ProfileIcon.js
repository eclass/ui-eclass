"use strict";

var _interopRequireWildcard = require("/Users/josefin/Documents/ui-eclass/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var ProfileIcon = function ProfileIcon() {
  return React.createElement("svg", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 42,
    height: 45
  }, React.createElement("defs", null, React.createElement("circle", {
    id: "a",
    cx: "20.664",
    cy: "20.459",
    r: "20.459"
  })), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("use", {
    fill: "#CCE5FF",
    transform: "translate(0 3)",
    xlinkHref: "#a"
  }), React.createElement("g", {
    transform: "translate(5)"
  }, React.createElement("path", {
    fill: "#0189FF",
    d: "M6.184 29.388h18.959a2 2 0 0 1 2 2V43a2 2 0 0 1-2 2H6.183a2 2 0 0 1-2-2V31.388a2 2 0 0 1 2-2zm9.48 11.02a3.214 3.214 0 1 0 0-6.428 3.214 3.214 0 0 0 0 6.428z"
  }), React.createElement("path", {
    stroke: "#60798E",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M30.628 31.32c-2.346-5.97-8.162-10.198-14.965-10.198-6.766 0-12.555 4.181-14.925 10.1"
  }), React.createElement("circle", {
    cx: "15.663",
    cy: "9.643",
    r: "8.643",
    stroke: "#60798E",
    strokeWidth: 2
  }))));
};

exports.ProfileIcon = ProfileIcon;