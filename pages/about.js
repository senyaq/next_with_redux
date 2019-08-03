import Link from 'next/link';
// import Header from '../components/Header';
import Layout from '../components/MyLayout.js';

export default function About() {
    return (
      <div>
        {/* <Header/> */}
        <Layout>
          <p>This is the about page</p>
          <Link href="/">
            <a >back</a>
          </Link>
        </Layout>
      </div>
    );
  }