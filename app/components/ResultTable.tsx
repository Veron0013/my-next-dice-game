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

function createData(
  time: string,
  gues: string,
  result: number,
  isWon: boolean
) {
  return { time, gues, result, isWon };
}

const dataArrayd = [
  createData('11:46:32', 'Over 13', 100, true),
  createData('11:46:33', 'Over 13', 75, false),
  createData('11:46:34', 'Over 13', 44, true),
  createData('11:46:35', 'Over 13', 24, true),
];

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
  if (!dataArray) return;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHeader />
        <TableBody>
          {dataArray.map(row => (
            <TableRow
              style={{ minWidth: 56 }}
              key={row.time}
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
