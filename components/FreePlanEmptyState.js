import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
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
        Dapatkan feedback dari situs anda dengan cepat.
      </Heading>
      <Text mb={4}>Mulai sekarang, dan berkembang bersama kami.</Text>
      <Button variant="solid" size="md">
        Upgrade ke Starter
      </Button>
    </Flex>
  </DashboardShell>
);

export default FreePlanEmptyState;
