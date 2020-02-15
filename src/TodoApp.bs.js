'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Theme$ReasonReactExamples = require("./Theme.bs.js");
var TodoForm$ReasonReactExamples = require("./TodoForm.bs.js");
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

var title = Css.style(/* :: */[
      Css.margin4(Css.zero, Css.zero, Theme$ReasonReactExamples.spacing300, Css.zero),
      /* :: */[
        Css.padding(Css.zero),
        /* [] */0
      ]
    ]);

var Styles = {
  card: card,
  title: title
};

function TodoApp(Props) {
  var match = React.useReducer((function (state, action) {
          switch (action.tag | 0) {
            case /* Remove */0 :
                var todo = action[0];
                return {
                        todos: List.find_all((function (item) {
                                  return item.id !== todo.id;
                                }))(state.todos)
                      };
            case /* Complete */1 :
                var todo$1 = action[0];
                return {
                        todos: List.map((function (item) {
                                if (item.id === todo$1.id) {
                                  return {
                                          id: item.id,
                                          text: item.text,
                                          completed: !item.completed
                                        };
                                } else {
                                  return item;
                                }
                              }), state.todos)
                      };
            case /* Add */2 :
                return {
                        todos: List.append(state.todos, /* :: */[
                              action[0],
                              /* [] */0
                            ])
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
        ]
      });
  var dispatch = match[1];
  return React.createElement("div", {
              className: card
            }, React.createElement("h1", {
                  className: title
                }, "To-do"), React.createElement(TodoForm$ReasonReactExamples.make, {
                  onSubmit: (function (item) {
                      return Curry._1(dispatch, /* Add */Block.__(2, [item]));
                    })
                }), React.createElement(TodoList$ReasonReactExamples.make, {
                  todos: match[0].todos,
                  onTodoRemoved: (function (todo) {
                      return Curry._1(dispatch, /* Remove */Block.__(0, [todo]));
                    }),
                  onCompletedTodo: (function (todo) {
                      return Curry._1(dispatch, /* Complete */Block.__(1, [todo]));
                    })
                }));
}

var make = TodoApp;

exports.Styles = Styles;
exports.make = make;
/*  Not a pure module */
