import React from 'react';
import SolCommentInput from './SolCommentInput';

import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

const COMMENTS = ['Comment1', 'Comment2'];

const SolCommentList = ({ answerId }) => {
  console.log('answerId : ', answerId);

  return (
    // <CardContent sx={{ backgroundColor: 'WhiteSmoke' }}>
    <CardContent>
      <Divider />
      <Table size="small">
        <TableBody>
          {COMMENTS.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell sx={{ border: 0 }}>{item}</TableCell>
              <TableCell sx={{ border: 0, color: 'red', textAlign: 'right' }}>
                <Link
                  underline="none"
                  component="button"
                  onClick={() => {
                    console.info(`remove! ${idx}`);
                  }}
                >
                  삭제
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SolCommentInput />
    </CardContent>
  );
};

export default React.memo(SolCommentList);
