import Head from 'next/head';
import { Button, Flex, Heading } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>KomentarDulu</title>
      </Head>

      <Heading>KD</Heading>

      {auth?.user ? (
        <Button mt="4" size="sm" onClick={(e) => auth.signOut()}>
          Keluar
        </Button>
      ) : (
        <Button mt="4" size="sm" onClick={(e) => auth.signInWithGitHub()}>
          Masuk
        </Button>
      )}
    </Flex>
  );
};

export default Home;
