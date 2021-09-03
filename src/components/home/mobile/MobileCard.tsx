import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: 'auto',
    marginBottom: '32px',
    margin: '0 16px 0 16px',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    border: '1px solid #CCCCCC'
  },
  image: {
    backgroundColor: '#CCCCCC',
    width: 80,
    height: 80,
    borderRadius: '50%'
  },
  title: {
    fontFamily: 'SuecaSlab',
    fontSize: '20px',
    lineHeight: '20px',
    letterSpacing: '-0.2px',
    color: '#333333',
  },
  author: {
    color: '#272727',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  divider: {
    background: '#5A5A5A',
    height: '1px',
    width: '80px',
    display: 'flex',
    alignSelf: 'center',
  },
}));

const MobileCard = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Box my={1} mx={2} display="flex" justifyContent="center">
        <Typography className={classes.title}>
          <span style={{ color: '#0074C4' }}>Lead.</span> Title esto es un titulo de la novedad con unas cuantas lineas que ocupar
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box className={classes.image} />
      </Box>
      <Box my={1} mx={2} display="flex" justifyContent="center">
        <Typography className={classes.author}>
          Author full name
        </Typography>
      </Box>
      <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
    </Grid>
  )
}

export default MobileCard;