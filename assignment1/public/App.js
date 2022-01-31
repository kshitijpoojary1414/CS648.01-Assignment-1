"use strict";

var nameComponent = /*#__PURE__*/React.createElement("div", {
  id: "out"
}, /*#__PURE__*/React.createElement("h2", {
  id: "name_comp"
}, "Kshitij V Poojary"));
var pictureComponent = /*#__PURE__*/React.createElement("div", {
  id: "picture_out"
}, /*#__PURE__*/React.createElement("img", {
  id: "picture_comp",
  src: "./tiger.jpg"
}));
var introComponent = /*#__PURE__*/React.createElement("div", {
  id: "intro_out"
}, /*#__PURE__*/React.createElement("p", {
  id: "intro_comp"
}, "Hi there, I'm Kshitij Poojary a MSCS graduate at San Diego State University."));
var buttonComponent = /*#__PURE__*/React.createElement("div", {
  id: "button_out"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/kshitijpoojary1414"
}, /*#__PURE__*/React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));