const counter_reducer = (count = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return (count = ++count)
    case 'MINUS':
      return (count = count === 0 ? 0 : --count)
    default:
      return count
  }
}

export default counter_reducer
