webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);

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
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1341333550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, post.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1341333550",
    __self: this
  }, "li.jsx-1341333550{list-style:none;margin:5px 0;}a.jsx-1341333550{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:'Arial';}a.jsx-1341333550:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBR3lCLEFBS0ssQUFNVCxZQUNkLElBWGUsYUFDZixxQkFJYSxXQUNTLG9CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxoZWxsby1uZXh0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltcG9ydCBtYWtlU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBpZDogJ2hlbGxvLW5leHRqcycsXHJcbiAgICAgIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2xlYXJuLW5leHRqcycsXHJcbiAgICAgIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZGVwbG95LW5leHRqcycsXHJcbiAgICAgIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxyXG4gIDxsaT5cclxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2xpPlxyXG4pXHJcblxyXG5mdW5jdGlvbiBCbG9nKHByb3BzKSB7XHJcbiAgbGV0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ291bnQgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5kaXNwYXRjaCh7IHR5cGU6ICdQTFVTJywgcGF5bG9hZDogMTIzIH0pXHJcbiAgICBzZXRDb3VudCgoY291bnQgKz0gMSkpXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKCdjb21wb25lbnQnLCBwcm9wcylcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4gICAgICA8aDM+TXkgY291bnQ6IHtjb3VudH08L2gzPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxCdXR0b24gbmFtZT1cIkNvdW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVDb3VudH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgQmxvZ1xyXG5cclxuLy8gQmxvZyA9IHdpdGhSZWR1eChtYWtlU3RvcmUsIHN0YXRlID0+ICh7IGZvbzogc3RhdGUuZm9vIH0pKShCbG9nKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQmxvZ1xyXG5cclxuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSAoeyByZWR1eFN0b3JlLCBpc1NlcnZlciwgcGF0aG5hbWUsIHF1ZXJ5IH0pID0+IHtcclxuICAvLyBjb21wb25lbnQgd2lsbCByZWFkIGZyb20gc3RvcmUncyBzdGF0ZSB3aGVuIHJlbmRlcmVkXHJcbiAgcmVkdXhTdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdGT08nLCBwYXlsb2FkOiAnZm9vJyB9KVxyXG4gIC8vIHBhc3Mgc29tZSBjdXN0b20gcHJvcHMgdG8gY29tcG9uZW50IGZyb20gaGVyZVxyXG4gIHJldHVybiB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICBjb25zb2xlLmxvZyhzdGF0ZSlcclxuICBjb25zdCB7IGZvbyB9ID0gc3RhdGVcclxuICByZXR1cm4geyBmb28gfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IHN0YXJ0Q2xvY2sgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbnVsbFxyXG4pKEJsb2cpXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKHtzaG93c30pID0+IChcclxuLy8gICA8TGF5b3V0PlxyXG4vLyAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XHJcbi8vICAgICA8dWw+XHJcbi8vICAgICAgIHtzaG93cy5tYXAoc2hvdyA9PiAoXHJcbi8vICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XHJcbi8vICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxyXG4vLyAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cclxuLy8gICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICA8L2xpPlxyXG4vLyAgICAgICApKX1cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgPC9MYXlvdXQ+XHJcbi8vICk7XHJcblxyXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cclxuLy8gICAgICAgPGE+e3Byb3BzLmlkfTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICA8L2xpPlxyXG4vLyApO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuLy8gICAgICAgPHVsPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIC8+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgLz5cclxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgLz5cclxuLy8gICAgICAgPC91bD5cclxuLy8gICAgIDwvTGF5b3V0PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cclxuLy8gICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICA8L2xpPlxyXG4vLyApO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbi8vICAgICAgIDx1bD5cclxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cclxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiAvPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XHJcbi8vICAgICAgIDwvdWw+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gICApO1xyXG4vLyB9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Admin\\Desktop\\hello-next\\pages\\index.js */"));
};

function Blog(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var handleCount = function handleCount() {
    props.dispatch({
      type: 'PLUS',
      payload: 123
    });
    setCount(count += 1);
  };

  console.log('component', props);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, "h1.jsx-344512576,a.jsx-344512576{font-family:'Arial';}ul.jsx-344512576{padding:0;}li.jsx-344512576{list-style:none;margin:5px 0;}a.jsx-344512576{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-344512576:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXGhlbGxvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRWtCLEFBSStCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxcaGVsbG8tbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgbWFrZVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdoZWxsby1uZXh0anMnLFxyXG4gICAgICB0aXRsZTogJ0hlbGxvIE5leHQuanMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdsZWFybi1uZXh0anMnLFxyXG4gICAgICB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2RlcGxveS1uZXh0anMnLFxyXG4gICAgICB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcsXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcclxuICA8bGk+XHJcbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxyXG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgfVxyXG5cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9saT5cclxuKVxyXG5cclxuZnVuY3Rpb24gQmxvZyhwcm9wcykge1xyXG4gIGxldCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvdW50ID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuZGlzcGF0Y2goeyB0eXBlOiAnUExVUycsIHBheWxvYWQ6IDEyMyB9KVxyXG4gICAgc2V0Q291bnQoKGNvdW50ICs9IDEpKVxyXG4gIH1cclxuICBjb25zb2xlLmxvZygnY29tcG9uZW50JywgcHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgICAgPGgzPk15IGNvdW50OiB7Y291bnR9PC9oMz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8QnV0dG9uIG5hbWU9XCJDb3VudGVyXCIgb25DbGljaz17aGFuZGxlQ291bnR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoMSxcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJsb2dcclxuXHJcbi8vIEJsb2cgPSB3aXRoUmVkdXgobWFrZVN0b3JlLCBzdGF0ZSA9PiAoeyBmb286IHN0YXRlLmZvbyB9KSkoQmxvZylcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJsb2dcclxuXHJcbkJsb2cuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVkdXhTdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeSB9KSA9PiB7XHJcbiAgLy8gY29tcG9uZW50IHdpbGwgcmVhZCBmcm9tIHN0b3JlJ3Mgc3RhdGUgd2hlbiByZW5kZXJlZFxyXG4gIHJlZHV4U3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnRk9PJywgcGF5bG9hZDogJ2ZvbycgfSlcclxuICAvLyBwYXNzIHNvbWUgY3VzdG9tIHByb3BzIHRvIGNvbXBvbmVudCBmcm9tIGhlcmVcclxuICByZXR1cm4ge31cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgY29uc3QgeyBmb28gfSA9IHN0YXRlXHJcbiAgcmV0dXJuIHsgZm9vIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBzdGFydENsb2NrIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG51bGxcclxuKShCbG9nKVxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICh7c2hvd3N9KSA9PiAoXHJcbi8vICAgPExheW91dD5cclxuLy8gICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxyXG4vLyAgICAgPHVsPlxyXG4vLyAgICAgICB7c2hvd3MubWFwKHNob3cgPT4gKFxyXG4vLyAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxyXG4vLyAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cclxuLy8gICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XHJcbi8vICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L3VsPlxyXG4vLyAgIDwvTGF5b3V0PlxyXG4vLyApO1xyXG5cclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXHJcbi8vICAgPGxpPlxyXG4vLyAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XHJcbi8vICAgICAgIDxhPntwcm9wcy5pZH08L2E+XHJcbi8vICAgICA8L0xpbms+XHJcbi8vICAgPC9saT5cclxuLy8gKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbi8vICAgICAgIDx1bD5cclxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiAvPlxyXG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIC8+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIC8+XHJcbi8vICAgICAgIDwvdWw+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXHJcbi8vICAgPGxpPlxyXG4vLyAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XHJcbi8vICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XHJcbi8vICAgICA8L0xpbms+XHJcbi8vICAgPC9saT5cclxuLy8gKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPExheW91dD5cclxuLy8gICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4vLyAgICAgICA8dWw+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiIC8+XHJcbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cclxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxyXG4vLyAgICAgICA8L3VsPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vICAgKTtcclxuLy8gfVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Admin\\Desktop\\hello-next\\pages\\index.js */"));
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
  var foo = state.foo;
  return {
    foo: foo
  };
}

var mapDispatchToProps = {
  startClock: startClock
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null)(Blog)); // import Layout from '../components/MyLayout.js';
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
//# sourceMappingURL=index.js.c53c6f1fc07f9a19ccab.hot-update.js.map