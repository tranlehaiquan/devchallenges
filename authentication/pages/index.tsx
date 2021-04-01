import Head from 'next/head'
import router from 'next/router';

import { useAuth } from '../src/hooks/useAuth';
import styles from '../styles/Home.module.css'

export default function Home() {
  const { user, mounted, signOut } = useAuth();

  if(mounted && !user) {
    router.push('/login');
  }

  const handleLogout = () => {
    signOut();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      hello to page {user && user.providerData[0].email}

      {user && (
        <button onClick={handleLogout}>Sign out</button>
      )}
    </div>
  )
}
