import Head from 'next/head';
import router from 'next/router';

import Nav from '../components/Nav';
import { useAuth } from '../src/hooks/useAuth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { user, mounted, signOut } = useAuth();

  if (mounted && !user) {
    router.push('/login');
  }

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <Head>
        <title>Authentication app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className={styles.container}>
        hello to page {user && user.providerData[0].email}
        {user && <button onClick={handleLogout}>Sign out</button>}
      </div>
    </>
  );
}
