import React from 'react';
import {
  Flex,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column" backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" w="100%">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          py={4}
          px={[4, 8]}
          maxW="1250px"
          w="100%"
          ml="auto"
          mr="auto"
        >
          <Flex alignItems="center">
            <Link fontWeight="bold" mr={[6, 8]} fontSize="lg">
              KD
            </Link>
            <Link mr={4}>Situs</Link>
            <Link>Feedback</Link>
          </Flex>
          <Flex alignItems="center">
            <Link mr={4}>Akun</Link>
            <Avatar size="sm" src={auth.user.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="stretch"
        maxWidth="1250px"
        w="100%"
        px={[4, 8]}
        my={16}
        mx="auto"
      >
        <Flex flexDirection="column" mb={8}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Situs</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading size="xl">Situs Saya</Heading>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
