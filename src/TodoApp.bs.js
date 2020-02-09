'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Theme$ReasonReactExamples = require("./Theme.bs.js");
var TodoList$ReasonReactExamples = require("./TodoList.bs.js");

Css.$$global("body", /* :: */[
      Css.fontFamily(Theme$ReasonReactExamples.defaultFontFamily),
      /* :: */[
        Css.padding(Theme$ReasonReactExamples.spacing300),
        /* :: */[
          Css.margin(Theme$ReasonReactExamples.spacing300),
          /* [] */0
        ]
      ]
    ]);

var card = Css.style(/* :: */[
      Css.padding(Theme$ReasonReactExamples.spacing300),
      /* :: */[
        Theme$ReasonReactExamples.defaultBorder(Css.border),
        /* :: */[
          Css.borderRadius(Theme$ReasonReactExamples.spacing100),
          /* [] */0
        ]
      ]
    ]);

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
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var button = Css.style(/* :: */[
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
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  card: card,
  container: container,
  input: input,
  button: button
};

function text(prim) {
  return prim;
}

function TodoApp(Props) {
  var match = React.useReducer((function (state, action) {
          switch (action.tag | 0) {
            case /* ChangeTodoText */0 :
                return {
                        todos: state.todos,
                        newTodo: action[0]
                      };
            case /* Remove */1 :
                var todo = action[0];
                return {
                        todos: List.find_all((function (item) {
                                  return item.id !== todo.id;
                                }))(state.todos),
                        newTodo: state.newTodo
                      };
            case /* Add */2 :
                return {
                        todos: List.append(state.todos, /* :: */[
                              action[0],
                              /* [] */0
                            ]),
                        newTodo: ""
                      };
            
          }
        }), {
        todos: /* :: */[
          {
            id: "1",
            text: "Learn Reason",
            completed: true
          },
          /* :: */[
            {
              id: "2",
              text: "Present at SydCSS",
              completed: false
            },
            /* [] */0
          ]
        ],
        newTodo: ""
      });
  var dispatch = match[1];
  var state = match[0];
  return React.createElement("div", {
              className: card
            }, React.createElement("h1", undefined, "To-do"), React.createElement("form", {
                  className: container,
                  onSubmit: (function (e) {
                      e.preventDefault();
                      return Curry._1(dispatch, /* Add */Block.__(2, [{
                                      id: new Date().toISOString(),
                                      text: state.newTodo,
                                      completed: false
                                    }]));
                    })
                }, React.createElement("input", {
                      className: input,
                      placeholder: "What's next?",
                      type: "text",
                      value: state.newTodo,
                      onChange: (function (e) {
                          return Curry._1(dispatch, /* ChangeTodoText */Block.__(0, [e.target.value]));
                        })
                    }), React.createElement("button", {
                      className: button
                    }, "Add")), React.createElement(TodoList$ReasonReactExamples.make, {
                  todos: state.todos,
                  onTodoRemoved: (function (todo) {
                      return Curry._1(dispatch, /* Remove */Block.__(1, [todo]));
                    })
                }));
}

var make = TodoApp;

exports.Styles = Styles;
exports.text = text;
exports.make = make;
/*  Not a pure module */
