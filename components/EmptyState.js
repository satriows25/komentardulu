import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems={['stretch', 'center']}
    borderRadius={8}
    backgroundColor="white"
    p={[8, 16]}
    width="100%"
  >
    <Heading size="md" mb={2}>
      Kamu belum menambahkan situs apapun.
    </Heading>
    <Text mb={4}>Selamat datang, Mari kita mulai.</Text>
    <AddSiteModal>Tambah Situs Pertamamu</AddSiteModal>
  </Flex>
);

export default EmptyState;
