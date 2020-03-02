const theme_reduser = (nameTheme = 'theme_red', action) => {
  switch (action.type) {
    case 'THEME':
      return action.payload
    default:
      return nameTheme
  }
}

export default theme_reduser
