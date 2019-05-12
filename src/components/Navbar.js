import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const Navbar = () => {
  const style = {
    appBar: {
      height: '5vh',
      alignText: 'center'
    },
    tBar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '1em'
    }
  };
  return (
    <div>
      <AppBar style={style.appBar} position='static' color='inherit'>
        <Toolbar style={style.tBar}>
          <Typography
            style={{ textAlign: 'center', fontFamily: 'roboto', color: '#101' }}
            variant='h3'
            color='inherit'
          >
            Web Business Kickstart
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
