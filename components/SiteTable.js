import React from 'react';
import { Link, Thead, Tbody } from '@chakra-ui/react';
import {
  TableContainerCustom,
  TableCustom,
  TrHeadCustom,
  TrBodyCustom,
  ThCustom,
  TdCustom,
} from './Table';

import { parseISO, format } from 'date-fns';

const SiteTable = ({ sites }) => {
  sites.sort((a, b) => {
    let aDate = new Date(a.createdAt),
      bDate = new Date(b.createdAt);

    return bDate - aDate;
  });

  return (
    <TableContainerCustom>
      <TableCustom variant="simple">
        <Thead>
          <TrHeadCustom>
            <ThCustom>Nama</ThCustom>
            <ThCustom>Alamat Situs</ThCustom>
            <ThCustom>Alamat Feedback</ThCustom>
            <ThCustom>Tanggal Ditambahkan</ThCustom>
          </TrHeadCustom>
        </Thead>
        <Tbody>
          {sites.map((site, index) => (
            <TrBodyCustom key={index}>
              <TdCustom fontWeight="medium">{site.name}</TdCustom>
              <TdCustom>{site.url}</TdCustom>
              <TdCustom>
                <Link>Lihat Feedback</Link>
              </TdCustom>
              <TdCustom>{format(parseISO(site.createdAt), 'Pp')}</TdCustom>
            </TrBodyCustom>
          ))}
        </Tbody>
      </TableCustom>
    </TableContainerCustom>
  );
};

export default SiteTable;
