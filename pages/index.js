import React, { useState } from 'react'
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
  let [count, setCount] = useState(props.count)

  const handleCount = () => {
    const newCount = (count += 1)
    props.dispatch({ type: 'PLUS', payload: newCount })
    setCount(newCount)
  }
  console.log('component', props)
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
      <Button name="Counter" onClick={handleCount} />
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
  console.log(state)
  const { foo, count } = state
  return { foo, count }
}

export default connect(
  mapStateToProps,
  null
)(Blog)

// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';

// const Index = ({shows}) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;

// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';

// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {

//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="learn-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   );
// }

// import Layout from '../components/MyLayout.js';
// import Link from 'next/link';

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }
