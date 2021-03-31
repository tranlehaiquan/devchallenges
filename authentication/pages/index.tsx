import Head from 'next/head'
import { useAuth } from '../src/hooks/useAuth';
import styles from '../styles/Home.module.css'

export default function Home() {
  const user = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user.user.email}
    </div>
  )
}
