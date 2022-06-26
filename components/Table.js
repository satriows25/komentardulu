import React from 'react';
import { Table, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

export const ThCustom = (props) => (
  <Th
    textTransform="uppercase"
    fontSize="xs"
    color="gray.500"
    fontWeight="medium"
    px={4}
    {...props}
  />
);

export const TdCustom = (props) => (
  <Td
    color="gray.900"
    p={4}
    borderBottom="1px solid"
    borderBottomColor="gray.100"
    {...props}
  />
);

export const TrHeadCustom = (props) => (
  <Tr
    backgroundColor="gray.50"
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  />
);

export const TrBodyCustom = (props) => (
  <Tr
    backgroundColor="white"
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  />
);

export const TableCustom = (props) => {
  return <Table textAlign="left" backgroundColor="white" {...props} />;
};

export const TableContainerCustom = (props) => {
  return (
    <TableContainer
      textAlign="left"
      backgroundColor="white"
      ml={0}
      mr={0}
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
      {...props}
    />
  );
};
