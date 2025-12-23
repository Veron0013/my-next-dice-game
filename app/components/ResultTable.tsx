import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TAB_HEADER } from '../lib/vars';
import { TabDataType } from '../types/tabTypes';

interface TabProps {
  dataArray: TabDataType[];
}

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        {TAB_HEADER.map(title => (
          <TableCell key={title} align="left">
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function ResultTable({ dataArray }: TabProps) {
  if (!dataArray.length) return;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHeader />
        <TableBody>
          {dataArray.map(row => (
            <TableRow
              style={{ minWidth: 56 }}
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" style={{ minWidth: 56 }}>
                {row.time}
              </TableCell>
              <TableCell align="left">{row.gues}</TableCell>
              <TableCell
                style={{ minWidth: 56 }}
                align="left"
                sx={{ color: row.isWon ? 'green' : 'red' }}
              >
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
