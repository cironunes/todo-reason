'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var TodoApp$ReasonReactExamples = require("./TodoApp.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(TodoApp$ReasonReactExamples.make, { }), "app");

/*  Not a pure module */
