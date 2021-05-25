import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      width:132,
    },
  },
});

function createData(name, age, gender, cell_phone) {
  return {
    name,
    age,
    gender,
    cell_phone,
    history: [
      { date: '2020-01-05', customerId: '11091700',disease:'Fever', paid: 100 },
      { date: '2020-01-02', customerId: '11091711',disease:'Fever', paid: 100 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>

        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.gender}</TableCell>
        <TableCell align="right">{row.cell_phone}</TableCell>

      </TableRow>


      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer ID</TableCell>
                    <TableCell>Disease</TableCell>
                    <TableCell align="right">Paid</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.disease}</TableCell>
                      <TableCell align="right">${historyRow.paid}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>



    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    age: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
    cell_phone: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        disease: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Emily', 22, 'Female', '+16102458216',),
  createData('Emily', 22, 'Female', '+16102458216',),
  createData('Emily', 22, 'Female', '+16102458216',),
  createData('Emily', 22, 'Female', '+16102458216',),
  createData('Emily', 22, 'Female', '+16102458216',),
];

export default function AllAppointments() {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Cell phone</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>

        
      </Table>
    </TableContainer>
  );
}
