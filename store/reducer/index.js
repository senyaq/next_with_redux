import { combineReducers } from 'redux'
import foo_reducer from './foo_reducer'
import increase_reducer from './increase_reducer'
import theme_reducer from './theme_reducer'
// import мелкие редюсеры …

const rootReducer = combineReducers({
  foo: foo_reducer,
  count: increase_reducer,
  nameTheme: theme_reducer,
})

export default rootReducer
