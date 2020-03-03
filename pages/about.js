import React, { memo } from 'react'
import Link from 'next/link'
import Layout from '../components/MyLayout.js'

export default memo(function About() {
  return (
    <div>
      <Layout>
        <p>This is the about page</p>
        <Link href="/">
          <a>back</a>
        </Link>
      </Layout>
    </div>
  )
})
