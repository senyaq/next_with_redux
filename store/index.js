import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/index'
// import thunk from 'redux-thunk';

const enhancer = applyMiddleware()
const store = createStore(rootReducer, {}, enhancer)

export function initializeStore(initialState) {
  return store
}

// // import React, { Component } from 'react'
// import { createStore } from 'redux'
// // create a simple reducer
// const reducer = (state = { foo: 'start', count: 0, nameTheme: 'theme_red' }, action) => {
//   switch (action.type) {
//     case 'FOO':
//       return { ...state, foo: action.payload }
//     case 'PLUS':
//       return { ...state, count: action.payload }
//     case 'THEME':
//       return { ...state, nameTheme: action.payload }
//     default:
//       return state
//   }
// }
// // create a store creator
// // const makeStore = initialState => {
// //   return createStore(reducer, initialState)
// // }
// // export default makeStore

// export function initializeStore(initialState) {
//   return createStore(reducer, initialState)
// }
