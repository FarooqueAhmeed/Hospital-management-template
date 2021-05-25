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
    id: 'staff',
    label: 'Staff',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, type, status, payments,staff) {
  
  return { name, type, status, payments, staff};
}

const rows = [
  createData('Jacob', 'Tests', 'Active', '$300','Robe',),
  createData('Sofia', 'Tests', 'Finished', '$300','James',),
  createData('Sofia', 'Tests', 'Finished', '$300','Robe',),
  createData('William', 'Appointment', 'Finished', '$100','Robert',),
  createData('Dennis', 'Appointment', 'Finished','$100','James',),
  createData('Carry', 'Appointment', 'Finished', '$100','Robert',),
  createData('Junijo', 'Appointment', 'Active', '$100','James',),
  createData('Sofia', 'Appointment', 'Active', '$100','Robe',),
  createData('Jhon', 'Pharmacy', 'Active', '$400','James',),
  createData('Tokyo', 'Pharmacy', 'Active', '$400','James',),
  createData('Professor', 'Pharmacy', 'Active','$100','James',),
  createData('Berlin', 'Pharmacy', 'Active', '$100','James',),
  createData('Jacob ', 'Blood bank','Finished', '$200','James',),
  createData('Lily', 'Blood bank', 'Finished', '$100','James',),
  createData('Rehman', 'Ambulance', 'Finished', '$100','James',),
  createData('Ali', 'Ambulance', 'Finished', '$200'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Payments() {
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
