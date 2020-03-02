import { combineReducers } from 'redux'
import foo_reduser from './foo_reduser'
import increase_reduser from './increase_reduser'
import theme_reduser from './theme_reduser'
// import мелкие редюсеры …

const rootReducer = combineReducers({
  foo: foo_reduser,
  count: increase_reduser,
  nameTheme: theme_reduser,
})

export default rootReducer
