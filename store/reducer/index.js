import { combineReducers } from 'redux'
import foo_reducer from './foo_reducer'
import counter_reducer from './counter_reducer'
import theme_reducer from './theme_reducer'
// import мелкие редюсеры …

const rootReducer = combineReducers({
  foo: foo_reducer,
  count: counter_reducer,
  nameTheme: theme_reducer,
})

export default rootReducer
