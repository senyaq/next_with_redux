webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\hello-next\\pages\\index.js";





 // import makeStore from '../store/index'

function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, post.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1341333550",
    __self: this
  }, "li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmdCLEFBR3lCLEFBS0ssQUFNVCxZQUNkLElBWGUsYUFDZixxQkFJYSxXQUNTLG9CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxoZWxsby1uZXh0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1wb3J0IG1ha2VTdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCdcclxuXHJcbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnaGVsbG8tbmV4dGpzJyxcclxuICAgICAgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnbGVhcm4tbmV4dGpzJyxcclxuICAgICAgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdkZXBsb3ktbmV4dGpzJyxcclxuICAgICAgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnLFxyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbiAgPGxpPlxyXG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cclxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvbGk+XHJcbilcclxuXHJcbmZ1bmN0aW9uIEJsb2cocHJvcHMpIHtcclxuICBsZXQgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBoYW5kbGVDb3VudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0NvdW50ID0gKGNvdW50ICs9IDEpXHJcbiAgICBwcm9wcy5kaXNwYXRjaCh7IHR5cGU6ICdQTFVTJywgcGF5bG9hZDogbmV3Q291bnQgfSlcclxuICAgIHNldENvdW50KG5ld0NvdW50KVxyXG4gIH1cclxuICBjb25zb2xlLmxvZygnY29tcG9uZW50JywgcHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgICAgPGgzPk15IGNvdW50OiB7Y291bnR9PC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8QnV0dG9uIG5hbWU9XCJDb3VudGVyXCIgb25DbGljaz17aGFuZGxlQ291bnR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoMSxcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJsb2dcclxuXHJcbi8vIEJsb2cgPSB3aXRoUmVkdXgobWFrZVN0b3JlLCBzdGF0ZSA9PiAoeyBmb286IHN0YXRlLmZvbyB9KSkoQmxvZylcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJsb2dcclxuXHJcbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVkdXhTdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeSB9KSA9PiB7XHJcbiAgLy8gY29tcG9uZW50IHdpbGwgcmVhZCBmcm9tIHN0b3JlJ3Mgc3RhdGUgd2hlbiByZW5kZXJlZFxyXG4gIHJlZHV4U3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnRk9PJywgcGF5bG9hZDogJ2ZvbycgfSlcclxuICAvLyBwYXNzIHNvbWUgY3VzdG9tIHByb3BzIHRvIGNvbXBvbmVudCBmcm9tIGhlcmVcclxuICByZXR1cm4ge31cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgY29uc3QgeyBmb28sIGNvdW50IH0gPSBzdGF0ZVxyXG4gIHJldHVybiB7IGZvbywgY291bnQgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBudWxsXHJcbikoQmxvZylcclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSAoe3Nob3dzfSkgPT4gKFxyXG4vLyAgIDxMYXlvdXQ+XHJcbi8vICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cclxuLy8gICAgIDx1bD5cclxuLy8gICAgICAge3Nob3dzLm1hcChzaG93ID0+IChcclxuLy8gICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cclxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Nob3cuaWR9YH0+XHJcbi8vICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICkpfVxyXG4vLyAgICAgPC91bD5cclxuLy8gICA8L0xheW91dD5cclxuLy8gKTtcclxuXHJcbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuLy8gICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxyXG4vLyAgIDxsaT5cclxuLy8gICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxyXG4vLyAgICAgICA8YT57cHJvcHMuaWR9PC9hPlxyXG4vLyAgICAgPC9MaW5rPlxyXG4vLyAgIDwvbGk+XHJcbi8vICk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPExheW91dD5cclxuLy8gICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4vLyAgICAgICA8dWw+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgLz5cclxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiAvPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiAvPlxyXG4vLyAgICAgICA8L3VsPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxyXG4vLyAgIDxsaT5cclxuLy8gICAgIDxMaW5rIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxyXG4vLyAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxyXG4vLyAgICAgPC9MaW5rPlxyXG4vLyAgIDwvbGk+XHJcbi8vICk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuLy8gICAgICAgPHVsPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkhlbGxvIE5leHQuanNcIiAvPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIC8+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cclxuLy8gICAgICAgPC91bD5cclxuLy8gICAgIDwvTGF5b3V0PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Admin\\Desktop\\hello-next\\pages\\index.js */"));
};

function Blog(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var handleCount = function handleCount() {
    var newCount = count += 1;
    props.dispatch({
      type: 'PLUS',
      payload: newCount
    });
    setCount(newCount);
  };

  console.log('component', props);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "My count: ", count), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Counter",
    onClick: handleCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "344512576",
    __self: this
  }, "h1.jsx-344512576,a.jsx-344512576{font-family:'Arial';}ul.jsx-344512576{padding:0;}li.jsx-344512576{list-style:none;margin:5px 0;}a.jsx-344512576{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-344512576:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRWtCLEFBSStCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxcaGVsbG8tbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltcG9ydCBtYWtlU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2hlbGxvLW5leHRqcycsXHJcbiAgICAgIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2xlYXJuLW5leHRqcycsXHJcbiAgICAgIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZGVwbG95LW5leHRqcycsXHJcbiAgICAgIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxyXG4gIDxsaT5cclxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2xpPlxyXG4pXHJcblxyXG5mdW5jdGlvbiBCbG9nKHByb3BzKSB7XHJcbiAgbGV0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ291bnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdDb3VudCA9IChjb3VudCArPSAxKVxyXG4gICAgcHJvcHMuZGlzcGF0Y2goeyB0eXBlOiAnUExVUycsIHBheWxvYWQ6IG5ld0NvdW50IH0pXHJcbiAgICBzZXRDb3VudChuZXdDb3VudClcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ2NvbXBvbmVudCcsIHByb3BzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbiAgICAgIDxoMz5NeSBjb3VudDoge2NvdW50fTwvaDM+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPEJ1dHRvbiBuYW1lPVwiQ291bnRlclwiIG9uQ2xpY2s9e2hhbmRsZUNvdW50fSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDEsXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4vLyBleHBvcnQgZGVmYXVsdCBCbG9nXHJcblxyXG4vLyBCbG9nID0gd2l0aFJlZHV4KG1ha2VTdG9yZSwgc3RhdGUgPT4gKHsgZm9vOiBzdGF0ZS5mb28gfSkpKEJsb2cpXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBCbG9nXHJcblxyXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlZHV4U3RvcmUsIGlzU2VydmVyLCBwYXRobmFtZSwgcXVlcnkgfSkgPT4ge1xyXG4gIC8vIGNvbXBvbmVudCB3aWxsIHJlYWQgZnJvbSBzdG9yZSdzIHN0YXRlIHdoZW4gcmVuZGVyZWRcclxuICByZWR1eFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0ZPTycsIHBheWxvYWQ6ICdmb28nIH0pXHJcbiAgLy8gcGFzcyBzb21lIGN1c3RvbSBwcm9wcyB0byBjb21wb25lbnQgZnJvbSBoZXJlXHJcbiAgcmV0dXJuIHt9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gIGNvbnN0IHsgZm9vLCBjb3VudCB9ID0gc3RhdGVcclxuICByZXR1cm4geyBmb28sIGNvdW50IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbnVsbFxyXG4pKEJsb2cpXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKHtzaG93c30pID0+IChcclxuLy8gICA8TGF5b3V0PlxyXG4vLyAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XHJcbi8vICAgICA8dWw+XHJcbi8vICAgICAgIHtzaG93cy5tYXAoc2hvdyA9PiAoXHJcbi8vICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XHJcbi8vICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxyXG4vLyAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cclxuLy8gICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICA8L2xpPlxyXG4vLyAgICAgICApKX1cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgPC9MYXlvdXQ+XHJcbi8vICk7XHJcblxyXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cclxuLy8gICAgICAgPGE+e3Byb3BzLmlkfTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICA8L2xpPlxyXG4vLyApO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuLy8gICAgICAgPHVsPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIC8+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgLz5cclxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgLz5cclxuLy8gICAgICAgPC91bD5cclxuLy8gICAgIDwvTGF5b3V0PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cclxuLy8gICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICA8L2xpPlxyXG4vLyApO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbi8vICAgICAgIDx1bD5cclxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cclxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiAvPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XHJcbi8vICAgICAgIDwvdWw+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gICApO1xyXG4vLyB9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Admin\\Desktop\\hello-next\\pages\\index.js */"));
} // export default Blog
// Blog = withRedux(makeStore, state => ({ foo: state.foo }))(Blog)
// export default Blog


Blog.getInitialProps = function (_ref2) {
  var reduxStore = _ref2.reduxStore,
      isServer = _ref2.isServer,
      pathname = _ref2.pathname,
      query = _ref2.query;
  // component will read from store's state when rendered
  reduxStore.dispatch({
    type: 'FOO',
    payload: 'foo'
  }); // pass some custom props to component from here

  return {};
};

function mapStateToProps(state) {
  console.log(state);
  var foo = state.foo,
      count = state.count;
  return {
    foo: foo,
    count: count
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null)(Blog)); // import Layout from '../components/MyLayout.js';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
// const Index = ({shows}) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };
// export default Index;
// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';
// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="learn-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   );
// }
// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';
// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }

/***/ })

})
//# sourceMappingURL=index.js.e253cf0908dcaf0976c9.hot-update.js.map