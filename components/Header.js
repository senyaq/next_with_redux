import React, { memo } from 'react'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
}

const Header = () => (
  <div>
    {console.log(1234, process.env.API_URL)}
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default memo(Header)
