import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Content1 = ({ handleClick }) => {
  const style = {
    headline: {
      color: 'White',
      textAlign: 'center',
      padding: '1em',
      backgroundColor: '#101',
      opacity: '0.9',
      borderRadius: '5%',
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
        Kickstart Your web-site now!
      </Typography>
      <Paper style={style.paper} elevation={1}>
        <Typography variant='h5' component='h3'>
          Get your new site up and running in notime!
        </Typography>
        <Typography component='p'>
          Ask for an offer to enchance Your online presence
        </Typography>
        <Button
          value='2'
          style={style.button}
          onClick={handleClick}
          variant='contained'
        >
          Ask for offer
        </Button>
      </Paper>
    </div>
  );
};

export default Content1;
