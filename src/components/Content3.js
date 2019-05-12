import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Content3 = () => {
  const handleSubmit = () => {
    alert('Thank you for contacting, we will be in touch with You soon!');
  };
  const Background =
    'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg';
  const style = {
    div: {
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `url(${Background})`,
      height: '90vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      width: '300px',
      padding: '25px',
      margin: '50px',
      marginTop: '125px',
      textAlign: 'center'
    }
  };
  return (
    <MuiThemeProvider>
      <div style={style.div}>
        <Paper style={style.paper} elevation={1}>
          <Typography variant='h5' component='h3'>
            Contact us
          </Typography>
          <TextField hintText='Name' />
          <br />

          <TextField hintText='Email' />
          <br />

          <TextField hintText='Phone' />
          <br />
          <RaisedButton onClick={handleSubmit} label='Jatka' primary={true} />
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default Content3;
