const foo_reduser = (foo = 'start', action) => {
  switch (action.type) {
    case 'FOO':
      return action.payload
    default:
      return foo
  }
}

export default foo_reduser
