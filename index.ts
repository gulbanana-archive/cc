/// <reference path="react-0.13.0.d.ts" />
import React = require('react')
var Message1 = require('./Message1')
import Message2 = require('./Message2')

React.render(React.DOM.div({},
    React.createElement(Message1, {message: "Hello, JSX!"}),
    React.createElement(Message2, {message: "Hello, TypeScript!"})
), document.getElementById('content'))
