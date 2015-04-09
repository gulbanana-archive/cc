/// <reference path="react-0.13.0.d.ts" />
import React = require('react')
declare function require(name: string);
var Message1 = require('./Message1')
import Message2 = require('./Message2')
import Message3 = require('./Message3')

React.render(<div>
                 <Message1 message="Hello, JSX!" />
                 <Message2 message="Hello, TypeScript!" />
                 <Message3 message="Hello, jsx-typescript!" />
             </div>, document.getElementById('content'))
