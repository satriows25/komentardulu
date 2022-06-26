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
      minH="100vh"
    >
      <Head>
        <title>KomentarDulu</title>
      </Head>

      <Heading>KD</Heading>

      {auth?.user ? (
        <Button as="a" href="/dashboard" mt="4" size="sm">
          Lihat Dashboard
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
