import Header from './Header'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'

const theme_red = createMuiTheme({
  name: 'theme_red',
  buttom: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
  },
  container: {
    borderColor: 'red',
    background: '#000000d6',
  },
})

const theme_blue = createMuiTheme({
  name: 'theme_blue',
  buttom: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
  },
  container: {
    borderColor: 'blue',
    background: 'white',
  },
})

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const returnTheme = name => {
  console.log('name', name)
  if (name === 'theme_blue') {
    return theme_blue
  } else if (name === 'theme_red') {
    return theme_red
  } else {
    return theme_red
  }
}

const Layout = props => {
  console.log('layout', props.nameTheme)
  const { nameTheme } = props
  return (
    <div style={layoutStyle}>
      <Header />
      <ThemeProvider theme={returnTheme(nameTheme)}>{props.children}</ThemeProvider>
    </div>
  )
}

function mapStateToProps(state) {
  const { nameTheme } = state
  return { nameTheme }
}

export default connect(
  mapStateToProps,
  null
)(Layout)
