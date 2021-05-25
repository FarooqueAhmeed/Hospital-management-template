import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Patient Name', minWidth: 170 },
  { id: 'type', label: 'Type', minWidth: 100 },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
   
  },
  {
    id: 'payments',
    label: 'Payments',
    minWidth: 170,
    align: 'right',
   
  },
  {
    id: 'dr',
    label: 'Doctor',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, type, status, payments,dr) {
  
  return { name, type, status, payments, dr };
}

const rows = [
  createData('Jacob', 'Blood', 'Active', 'Paid','James',),
  createData('Sofia', 'Blood', 'Finished', 'Paid','James',),
  createData('Sofia', 'Blood', 'Finished', 'Paid','James',),
  createData('William', 'Blood', 'Finished', 'Paid','James',),
  createData('Dennis', 'Blood', 'Finished','Paid','James',),
  createData('Carry', 'Blood', 'Finished', 'Paid','James',),
  createData('Junijo', 'Blood', 'Active', 'Not paid','James',),
  createData('Sofia', 'Blood', 'Active', 'Not paid','James',),
  createData('Jhon', 'Blood', 'Active', 'Paid','James',),
  createData('Tokyo', 'Blood', 'Active', 'Not paid','James',),
  createData('Professor', 'Blood', 'Active','Not paid','James',),
  createData('Berlin', 'Blood', 'Active', 'Not paid','James',),
  createData('Jacob Kingdom', 'Blood','Finished', 'Paid','James',),
  createData('Lily', 'Blood', 'Finished', 'Not paid','James',),
  createData('Rehman', 'Blood', 'Finished', 'Not paid','James',),
  createData('Ali', 'Blood', 'Finished', 'Paid'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Tests() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
