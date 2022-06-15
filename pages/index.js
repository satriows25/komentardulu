import Head from 'next/head';
import { Button, Heading, Text, Code } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>KomentarDulu</title>
      </Head>

      <main>
        <Heading>KomentarDulu</Heading>

        <Text>
          Pengguna aktif: <Code>{auth?.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth?.user ? (
          <Button onClick={(e) => auth.signOut()}>Keluar</Button>
        ) : (
          <Button onClick={(e) => auth.signInWithGitHub()}>Masuk</Button>
        )}
      </main>
    </>
  );
};

export default Home;
