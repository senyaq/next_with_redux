import React from 'react'
import { useRouter } from 'next/router'
import Markdown from 'react-markdown'
import { connect } from 'react-redux'
import Layout from '../../components/MyLayout.js'

const Article = props => {
  const router = useRouter()
  const { count } = props

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <h3 onClick={() => props.dispatch({ type: 'PLUS', payload: null })}>Count from redux: {count}</h3>

      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/).
And we can have a title as well.

### This is a title

And here's the content.
      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

function mapStateToProps(state) {
  const { foo, count } = state
  return { foo, count }
}

export default connect(
  mapStateToProps,
  null
)(Article)
