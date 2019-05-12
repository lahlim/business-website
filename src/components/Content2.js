import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Content2 = ({ handleClick }) => {
  const Background =
    'https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_960_720.jpg';
  const style = {
    headline: {
      color: 'White',
      textAlign: 'center',
      padding: '1em',
      backgroundColor: '#101',
      opacity: '0.9',
      borderRadius: '10%',
      alignSelf: 'center',
      margin: '1em'
    },
    div: {
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `url(${Background})`,
      height: '90vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      color: 'white',
      width: '30%',
      padding: '25px',
      margin: '50px',
      marginTop: '125px',
      textAlign: 'center'
    },
    button: {
      margin: '25px',
      alignSelf: 'auto'
    },
    paperDiv: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  };
  return (
    <div style={style.div}>
      <Typography style={style.headline} variant='h5'>
        Check out our prising and services
      </Typography>
      <div style={style.paperDiv} className='papers'>
        <Paper style={style.paper} elevation={1}>
          <Typography variant='h5' component='h3'>
            Simple one page payout
          </Typography>
          <Typography variant='h6' component='h3'>
            Price starting at 100€
          </Typography>
          <Typography component='p'>
            We will provide a simple one page layout with clear Call To Action
            to enchange your customer experiense
          </Typography>
          <Button
            value={2}
            style={style.button}
            onClick={handleClick}
            variant='contained'
          >
            Ask for offer
          </Button>
        </Paper>

        <Paper style={style.paper} elevation={1}>
          <Typography variant='h5' component='h3'>
            More personal and complex choice for You and Your brand
          </Typography>
          <Typography variant='h6' component='h3'>
            Price starting at 250€
          </Typography>
          <Typography component='p'>
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
          <Button
            value={2}
            style={style.button}
            onClick={handleClick}
            variant='contained'
          >
            Ask for offer
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Content2;
