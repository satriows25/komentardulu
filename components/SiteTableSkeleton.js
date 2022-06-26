import React from 'react';
import { Skeleton, Thead, Tbody } from '@chakra-ui/react';
import {
  TableContainerCustom,
  TableCustom,
  TrHeadCustom,
  TrBodyCustom,
  ThCustom,
  TdCustom,
} from './Table';

const SkeletonRow = ({ width }) => (
  <TrBodyCustom>
    <TdCustom>
      <Skeleton height="10px" w={width} my={4} />
    </TdCustom>
    <TdCustom>
      <Skeleton height="10px" w={width} my={4} />
    </TdCustom>
    <TdCustom>
      <Skeleton height="10px" w={width} my={4} />
    </TdCustom>
    <TdCustom>
      <Skeleton height="10px" w={width} my={4} />
    </TdCustom>
  </TrBodyCustom>
);

const SiteTableSkeleton = () => {
  return (
    <TableContainerCustom>
      <TableCustom>
        <Thead>
          <TrHeadCustom>
            <ThCustom>Nama</ThCustom>
            <ThCustom>Alamat Situs</ThCustom>
            <ThCustom>Alamat Feedback</ThCustom>
            <ThCustom>Tanggal Ditambahkan</ThCustom>
          </TrHeadCustom>
        </Thead>
        <Tbody>
          <SkeletonRow width="75px" />
          <SkeletonRow width="125px" />
          <SkeletonRow width="50px" />
          <SkeletonRow width="100px" />
        </Tbody>
      </TableCustom>
    </TableContainerCustom>
  );
};

export default SiteTableSkeleton;
