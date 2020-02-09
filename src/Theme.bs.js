'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");

var spacing100 = Css.px(3);

var spacing200 = Css.px(12);

var spacing300 = Css.px(24);

var neutral100 = Css.hex("CACFCF");

var neutral200 = Css.hex("F3F3F3");

function defaultBorder(fn) {
  return Curry._3(fn, Css.px(1), Css.solid, neutral100);
}

var defaultFontSize = Css.px(16);

var defaultButtonLineHeight = Css.px(18);

var primaryBackgroundColor = Css.hex("DD4B39");

var defaultFontFamily = "Fira Sans, sans-serif";

var defaultInputLineHeight = /* `abs */[
  4845682,
  1.0
];

var primaryTextColor = Css.white;

exports.spacing100 = spacing100;
exports.spacing200 = spacing200;
exports.spacing300 = spacing300;
exports.neutral100 = neutral100;
exports.neutral200 = neutral200;
exports.defaultFontFamily = defaultFontFamily;
exports.defaultBorder = defaultBorder;
exports.defaultFontSize = defaultFontSize;
exports.defaultButtonLineHeight = defaultButtonLineHeight;
exports.defaultInputLineHeight = defaultInputLineHeight;
exports.primaryBackgroundColor = primaryBackgroundColor;
exports.primaryTextColor = primaryTextColor;
/* spacing100 Not a pure module */
