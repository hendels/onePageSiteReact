import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import headerStyle from '../assets/jss/material-kit-react/components/headerStyle.jsx';
//imgs
const CustomTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: "#33a09e",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, description, price) {
  id += 1;
  return { id, name, description, price };
}

const data = [
  createData('Analiza składu ciała', 'description - description', 6.0),
  createData('Usługa 2',  'description - description', 12.0),
  createData('Usługa 3', 'description - description', 3.0),
  createData('Usługa 4', 'description - description', 4.0),
  createData('Usługa 5', 'description - description', 6.0),
];
function CustomizedTable(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Nazwa</CustomTableCell>
              <CustomTableCell>Opis</CustomTableCell>
              <CustomTableCell numeric>Cena (zł)</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow className={classes.row} key={n.id}>
                  <CustomTableCell component="th" scope="row">
                    {n.name}
                  </CustomTableCell>
                  <CustomTableCell>{n.description}</CustomTableCell>
                  <CustomTableCell numeric>{n.price}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>    
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
      <p>  &nbsp;</p>
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
