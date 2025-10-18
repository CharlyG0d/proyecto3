// src/__mocks__/react-router-dom.js
const React = require("react");

module.exports = {
  ...jest.requireActual("react-router-dom"),
  Link: ({ children, to }) => React.createElement("a", { href: to }, children),
  BrowserRouter: ({ children }) => React.createElement(React.Fragment, null, children),
}; 
