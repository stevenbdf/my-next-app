import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          {
            posts.map((post) => (
              <div key={post.id} className={styles.card}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return {
    props: {
      posts: response.data
    }, // will be passed to the page component as props
  }
}

export default Home;