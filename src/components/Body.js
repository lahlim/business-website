import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

import Itemselect from './Itemselect';

const Body = ({ value, handleChange, handleClick }) => {
  let itemToRender = <Content1 handleClick={handleClick} />;
  switch (value) {
    case 0:
      itemToRender = <Content1 handleClick={handleClick} />;
      break;
    case 1:
      itemToRender = <Content2 handleClick={handleClick} />;
      break;
    case 2:
      itemToRender = <Content3 />;
      break;
    default:
      itemToRender = <Content1 />;
  }
  return (
    <>
      <Itemselect value={value} handleChange={handleChange} />
      {itemToRender}
    </>
  );
};

const styles = {
  root: {
    flexGrow: 1
  }
};

export default withStyles(styles)(Body);
