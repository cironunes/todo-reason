'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");

var spacing100 = Css.px(3);

var spacing200 = Css.px(12);

var spacing300 = Css.px(24);

var neutral100 = Css.hex("CACFCF");

var neutral200 = Css.hex("F3F3F3");

var neutral300 = Css.hex("444");

var primaryBackgroundColor = Css.hex("DD4B39");

var defaultFontSize = Css.px(16);

var defaultButtonLineHeight = Css.px(18);

function defaultBorder(fn) {
  return Curry._3(fn, Css.px(1), Css.solid, neutral100);
}

var fadeIn = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.opacity(0),
          /* :: */[
            Css.transform(Css.translateX(Css.px(-6))),
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* tuple */[
          100,
          /* :: */[
            Css.opacity(1),
            /* :: */[
              Css.visibility(Css.visible),
              /* :: */[
                Css.transform(Css.translateX(Css.zero)),
                /* [] */0
              ]
            ]
          ]
        ],
        /* [] */0
      ]
    ]);

var fadeOut = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.opacity(1),
          /* :: */[
            Css.transform(Css.translateX(Css.zero)),
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* tuple */[
          100,
          /* :: */[
            Css.opacity(0),
            /* :: */[
              Css.visibility(Css.visible),
              /* :: */[
                Css.transform(Css.translateX(Css.px(-6))),
                /* [] */0
              ]
            ]
          ]
        ],
        /* [] */0
      ]
    ]);

var primaryTextColor = Css.white;

var defaultFontFamily = "Fira Sans, sans-serif";

var defaultInputLineHeight = /* `abs */[
  4845682,
  1.0
];

var defaultAnimationDuration = 300;

exports.spacing100 = spacing100;
exports.spacing200 = spacing200;
exports.spacing300 = spacing300;
exports.neutral100 = neutral100;
exports.neutral200 = neutral200;
exports.neutral300 = neutral300;
exports.primaryBackgroundColor = primaryBackgroundColor;
exports.primaryTextColor = primaryTextColor;
exports.defaultFontFamily = defaultFontFamily;
exports.defaultFontSize = defaultFontSize;
exports.defaultButtonLineHeight = defaultButtonLineHeight;
exports.defaultInputLineHeight = defaultInputLineHeight;
exports.defaultBorder = defaultBorder;
exports.defaultAnimationDuration = defaultAnimationDuration;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
/* spacing100 Not a pure module */
