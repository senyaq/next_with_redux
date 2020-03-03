const theme_reducer = (nameTheme = 'theme_red', action) => {
  switch (action.type) {
    case 'THEME':
      return action.payload
    default:
      return nameTheme
  }
}

export default theme_reducer
