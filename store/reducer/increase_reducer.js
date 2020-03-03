const increase_reducer = (count = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return (count = ++count)
    default:
      return count
  }
}

export default increase_reducer
