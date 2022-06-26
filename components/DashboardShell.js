import React from 'react';
import {
  Flex,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
} from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user, signOut } = useAuth();

  return (
    <Flex flexDirection="column" backgroundColor="gray.100" minH="100vh">
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
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signOut()}>
                Keluar
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
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
          <Flex justifyContent="space-between">
            <Heading size="xl">Situs Saya</Heading>
            <AddSiteModal>+ Tambah Situs</AddSiteModal>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
