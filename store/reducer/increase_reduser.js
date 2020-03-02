const increase_reduser = (count = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return action.payload
    default:
      return count
  }
}

export default increase_reduser
