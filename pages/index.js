import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/MyLayout.js'
import Button from '../components/Button'
import Link from 'next/link'
// import makeStore from '../store/index'

function getPosts() {
  return [
    {
      id: 'hello-nextjs',
      title: 'Hello Next.js',
    },
    {
      id: 'learn-nextjs',
      title: 'Learn Next.js is awesome',
    },
    {
      id: 'deploy-nextjs',
      title: 'Deploy apps with ZEIT',
    },
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

function Blog(props) {
  const { count } = props

  const handleCount = type => props.dispatch({ type, payload: null })

  return (
    <Layout>
      <h1>My Blog</h1>
      <h3>My count: {count}</h3>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <br />
      <Link href="/material">
        <a>Test Material UI ThmmeneProvider</a>
      </Link>
      <br />
      <Button name="Counter+" onClick={() => handleCount('PLUS')} />
      <Button name="Counter-" onClick={() => handleCount('MINUS')} />
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}

Blog.getInitialProps = ({ reduxStore, isServer, pathname, query }) => {
  // component will read from store's state when rendered
  reduxStore.dispatch({ type: 'FOO', payload: 'foo' })
  // pass some custom props to component from here
  return {}
}

function mapStateToProps(state) {
  const { foo, count } = state
  return { foo, count }
}

export default connect(
  mapStateToProps,
  null
)(Blog)
