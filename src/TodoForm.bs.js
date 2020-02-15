'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Theme$ReasonReactExamples = require("./Theme.bs.js");

var container = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.marginBottom(Theme$ReasonReactExamples.spacing300),
        /* [] */0
      ]
    ]);

var input = Css.style(/* :: */[
      Css.minWidth(Css.px(190)),
      /* :: */[
        Css.padding(Theme$ReasonReactExamples.spacing200),
        /* :: */[
          Css.fontSize(Theme$ReasonReactExamples.defaultFontSize),
          /* :: */[
            Css.lineHeight(Theme$ReasonReactExamples.defaultInputLineHeight),
            /* :: */[
              Theme$ReasonReactExamples.defaultBorder(Css.border),
              /* :: */[
                Css.focus(/* :: */[
                      Css.outlineWidth(Css.zero),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var button = Css.style(/* :: */[
      Css.marginLeft(Css.px(-1)),
      /* :: */[
        Css.backgroundColor(Theme$ReasonReactExamples.primaryBackgroundColor),
        /* :: */[
          Css.color(Theme$ReasonReactExamples.primaryTextColor),
          /* :: */[
            Css.padding(Theme$ReasonReactExamples.spacing200),
            /* :: */[
              Css.fontWeight(Css.bold),
              /* :: */[
                Css.fontSize(Theme$ReasonReactExamples.defaultFontSize),
                /* :: */[
                  Css.lineHeight(Theme$ReasonReactExamples.defaultButtonLineHeight),
                  /* :: */[
                    Css.border(Css.px(1), Css.solid, Theme$ReasonReactExamples.primaryBackgroundColor),
                    /* :: */[
                      Css.focus(/* :: */[
                            Css.outlineWidth(Css.zero),
                            /* [] */0
                          ]),
                      /* :: */[
                        Css.cursor(/* pointer */-786317123),
                        /* :: */[
                          Css.disabled(/* :: */[
                                Css.background(Theme$ReasonReactExamples.neutral200),
                                /* :: */[
                                  Css.borderColor(Theme$ReasonReactExamples.neutral100),
                                  /* :: */[
                                    Css.color(Theme$ReasonReactExamples.neutral300),
                                    /* :: */[
                                      Css.cursor(/* notAllowed */939907157),
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  container: container,
  input: input,
  button: button
};

function TodoForm(Props) {
  var onSubmit = Props.onSubmit;
  var match = React.useState((function () {
          return "";
        }));
  var setNewTodo = match[1];
  var newTodo = match[0];
  return React.createElement("form", {
              className: container,
              onSubmit: (function (e) {
                  e.preventDefault();
                  Curry._1(onSubmit, {
                        id: new Date().toISOString(),
                        text: newTodo,
                        completed: false
                      });
                  return Curry._1(setNewTodo, (function (param) {
                                return "";
                              }));
                })
            }, React.createElement("input", {
                  className: input,
                  placeholder: "What's next?",
                  type: "text",
                  value: newTodo,
                  onChange: (function (e) {
                      return Curry._1(setNewTodo, e.target.value);
                    })
                }), React.createElement("button", {
                  className: button,
                  disabled: newTodo === ""
                }, "Add"));
}

var make = TodoForm;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
