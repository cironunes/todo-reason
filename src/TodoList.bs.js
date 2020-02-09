'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Theme$ReasonReactExamples = require("./Theme.bs.js");

var list = Css.style(/* :: */[
      Css.padding(Css.zero),
      /* :: */[
        Css.margin(Css.zero),
        /* :: */[
          Css.listStyleType(/* none */-922086728),
          /* :: */[
            Css.lineHeight(/* `abs */[
                  4845682,
                  2.0
                ]),
            /* :: */[
              Css.selector("li.removed", /* :: */[
                    Css.animationName(Theme$ReasonReactExamples.fadeOut),
                    /* :: */[
                      Css.animationDuration(Theme$ReasonReactExamples.defaultAnimationDuration),
                      /* [] */0
                    ]
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var listItem = Css.style(/* :: */[
      Css.position(Css.relative),
      /* :: */[
        Css.display(/* flex */-1010954439),
        /* :: */[
          Css.alignItems(Css.center),
          /* :: */[
            Css.justifyContent(Css.spaceBetween),
            /* :: */[
              Theme$ReasonReactExamples.defaultBorder(Css.borderBottom),
              /* :: */[
                Css.borderWidth(Css.px(1)),
                /* :: */[
                  Css.padding(Theme$ReasonReactExamples.spacing200),
                  /* :: */[
                    Css.animationName(Theme$ReasonReactExamples.fadeIn),
                    /* :: */[
                      Css.animationDuration(Theme$ReasonReactExamples.defaultAnimationDuration),
                      /* :: */[
                        Css.selector(":last-child", /* :: */[
                              Css.borderBottomWidth(Css.zero),
                              /* [] */0
                            ]),
                        /* :: */[
                          Css.hover(/* :: */[
                                Css.backgroundColor(Theme$ReasonReactExamples.neutral200),
                                /* [] */0
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

var label = Css.style(/* :: */[
      Css.selector(":before", /* :: */[
            Css.cursor(/* pointer */-786317123),
            /* :: */[
              Css.position(Css.absolute),
              /* :: */[
                Css.width(Css.pct(100)),
                /* :: */[
                  Css.height(Css.pct(100)),
                  /* :: */[
                    Css.contentRule(""),
                    /* :: */[
                      Css.left(Css.zero),
                      /* :: */[
                        Css.top(Css.zero),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var checkbox = Css.style(/* :: */[
      Css.margin4(Css.zero, Theme$ReasonReactExamples.spacing200, Css.zero, Css.zero),
      /* [] */0
    ]);

var remove = Css.style(/* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

var Styles = {
  list: list,
  listItem: listItem,
  label: label,
  checkbox: checkbox,
  remove: remove
};

function TodoList(Props) {
  var todos = Props.todos;
  var onTodoRemoved = Props.onTodoRemoved;
  var onCompletedTodo = Props.onCompletedTodo;
  var match = React.useState((function () {
          return ;
        }));
  var setRemovedIndex = match[1];
  var removedIndex = match[0];
  return React.createElement("ol", {
              className: list
            }, Belt_Array.mapWithIndex($$Array.of_list(todos), (function (index, todo) {
                    return React.createElement("li", {
                                key: String(index),
                                className: Cn.make(/* :: */[
                                      listItem,
                                      /* :: */[
                                        Cn.mapSome(removedIndex, (function (i) {
                                                if (todo.id === i) {
                                                  return "removed";
                                                } else {
                                                  return "";
                                                }
                                              })),
                                        /* [] */0
                                      ]
                                    ])
                              }, React.createElement("label", {
                                    className: label
                                  }, React.createElement("input", {
                                        className: checkbox,
                                        checked: todo.completed,
                                        type: "checkbox",
                                        onClick: (function (param) {
                                            return Curry._1(onCompletedTodo, todo);
                                          })
                                      }), React.createElement("span", undefined, todo.text)), React.createElement("button", {
                                    className: remove,
                                    onClick: (function (param) {
                                        Curry._1(setRemovedIndex, (function (param) {
                                                return todo.id;
                                              }));
                                        setTimeout((function (param) {
                                                return Curry._1(onTodoRemoved, todo);
                                              }), 200);
                                        return /* () */0;
                                      })
                                  }, "x"));
                  })));
}

var make = TodoList;

exports.Styles = Styles;
exports.make = make;
/* list Not a pure module */
