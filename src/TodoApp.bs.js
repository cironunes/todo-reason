'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var TodoList$ReasonReactExamples = require("./TodoList.bs.js");

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
        todos: /* [] */0,
        newTodo: ""
      });
  var dispatch = match[1];
  var state = match[0];
  return React.createElement("div", undefined, React.createElement("form", {
                  onSubmit: (function (e) {
                      e.preventDefault();
                      return Curry._1(dispatch, /* Add */Block.__(2, [{
                                      id: new Date().toISOString(),
                                      text: state.newTodo,
                                      completed: false
                                    }]));
                    })
                }, React.createElement("input", {
                      placeholder: "What do you have to do next?",
                      type: "text",
                      value: state.newTodo,
                      onChange: (function (e) {
                          return Curry._1(dispatch, /* ChangeTodoText */Block.__(0, [e.target.value]));
                        })
                    }), React.createElement("button", undefined, "Add")), React.createElement(TodoList$ReasonReactExamples.make, {
                  todos: state.todos,
                  onTodoRemoved: (function (todo) {
                      return Curry._1(dispatch, /* Remove */Block.__(1, [todo]));
                    })
                }));
}

var make = TodoApp;

exports.text = text;
exports.make = make;
/* react Not a pure module */
