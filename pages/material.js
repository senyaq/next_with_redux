import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import Layout from '../components/MyLayout.js'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.buttom.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: theme.buttom.boxShadow,
    color: theme.buttom.color,
    height: 48,
    padding: '0 30px',
  },
  btn: {
    padding: '0 30px',
  },
}))

const useGeneral = makeStyles(theme => ({
  root: {
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}))

const useContainer = makeStyles(theme => ({
  root: {
    border: '1px solid',
    borderColor: theme.container.borderColor,
    borderRadius: 3,
    padding: '10px 30px',
    margin: '0px 1%',
    background: theme.container.background,
  },
}))

const theme_red = {
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
}

const theme_blue = {
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
}

function DeepChild() {
  const classes = useStyles()
  return (
    <button type="button" className={classes.root}>
      Theme nesting
    </button>
  )
}

function Container(props) {
  const classes = useContainer()
  return (
    <div type="button" className={classes.root}>
      {props.children}
    </div>
  )
}

function ThemeNesting(props) {
  const classes = useGeneral()
  const { nameTheme } = props

  const handler = () => {
    if (nameTheme === 'theme_red') {
      props.dispatch({ type: 'THEME', payload: 'theme_blue' })
    } else {
      props.dispatch({ type: 'THEME', payload: 'theme_red' })
    }
  }

  return (
    <Layout>
      <button type="button" onClick={handler} className={classes.btn}>
        Theme change
      </button>
      <br />
      <br />
      <Container>
        <DeepChild />
      </Container>
      <br />
      <br />
      <Container>
        <DeepChild />
      </Container>
    </Layout>
  )
}

function mapStateToProps(state) {
  const { nameTheme } = state
  return { nameTheme }
}

export default connect(
  mapStateToProps,
  null
)(ThemeNesting)
