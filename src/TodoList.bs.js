'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function TodoList(Props) {
  var todos = Props.todos;
  var onTodoRemoved = Props.onTodoRemoved;
  return Belt_Array.mapWithIndex($$Array.of_list(todos), (function (index, todo) {
                return React.createElement("div", {
                            key: String(index)
                          }, todo.text, React.createElement("button", {
                                onClick: (function (param) {
                                    return Curry._1(onTodoRemoved, todo);
                                  })
                              }, "x"));
              }));
}

var make = TodoList;

exports.make = make;
/* react Not a pure module */
