import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Itemselect = props => {
  const style = {
    height: '5vh'
  };
  return (
    <Paper style={style}>
      <Tabs
        value={props.value}
        indicatorColor='primary'
        textColor='primary'
        centered
        onChange={props.handleChange}
      >
        <Tab label='Kickstart' />
        <Tab label='Pricing' />
        <Tab label='Contact' />
      </Tabs>
    </Paper>
  );
};

const styles = {
  root: {
    flexGrow: 1
  }
};

export default withStyles(styles)(Itemselect);
