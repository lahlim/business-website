import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Content1 = ({ handleChange }) => {
  const style = {
    headline: {
      color: 'White',
      textAlign: 'center',
      padding: '1em',
      backgroundColor: 'grey',
      opacity: '0.9',
      borderRadius: '10%',
      alignSelf: 'center',
      margin: '1em'
    },
    div: {
      display: 'flex',
      flexDirection: 'column',
      backgroundImage:
        'url(' +
        'https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?cs=srgb&dl=adults-analysis-brainstorming-1661004.jpg&fm=jpg' +
        ')',
      height: '90vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    sub: {
      color: 'White',
      textAlign: 'center',
      backgroundColor: 'grey',
      opacity: '0.9',
      borderRadius: '10%',
      alignSelf: 'center'
    },
    paper: {
      color: 'white',
      width: '50%',
      alignSelf: 'center',
      padding: '25px',
      margin: '50px',
      marginTop: '125px',
      textAlign: 'center'
    },
    button: { margin: '25px' }
  };
  return (
    <div style={style.div}>
      <Typography style={style.headline} variant='h5'>
        Kickstart your web-site now!
      </Typography>
      <Typography style={style.sub} variant='h6'>
        Web design for good cost
      </Typography>
      <Paper style={style.paper} elevation={1}>
        <Typography variant='h5' component='h3'>
          Get your new site up and running in notime!
        </Typography>
        <Typography component='p'>
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
        <Button
          value={2}
          style={style.button}
          onClick={handleChange}
          variant='contained'
        >
          Ask for offer
        </Button>
      </Paper>
    </div>
  );
};

export default Content1;
