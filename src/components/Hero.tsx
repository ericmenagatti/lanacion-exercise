import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '800px',
    padding: 0,
    marginBottom: '65px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(#BEE4FF, #BEE4FF)',
    [theme.breakpoints.down(320)]: {
      height: '450px',
    },
  },
  backgroundBox: {
    height: '100%',
  },
  contentBox: {
    height: '25%',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 62.76%)',
    padding: '0 7% 0 7%',
    [theme.breakpoints.down(1200)]: {
      padding: '0',
    },
    [theme.breakpoints.down(1010)]: {
      height: '35%',
    },
    [theme.breakpoints.down(660)]: {
      height: '50%',
    },
    [theme.breakpoints.down(410)]: {
      height: '65%',
    },
    [theme.breakpoints.down(320)]: {
      height: '70%',
    },
  },
  infographic: {
    padding: '4px 8px',
    background: '#000000',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    maxWidth: 'min-content',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
  },
  heroTitle: {
    fontFamily: 'SuecaSlab',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-0.4px',
    color: '#FFFFFF',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down(320)]: {
      fontSize: '24px',
    },
  },
  author: {
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    maxWidth: 'min-content',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.container}>
      <Box className={classes.backgroundBox} />
      <Box className={classes.contentBox}>
        <Box className={classes.infographic}>
          <Typography style={{ color: '#FFFFFF' }}>Infografía</Typography>
        </Box>
        <Box>
          <Typography className={classes.heroTitle}>
            Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar
          </Typography>
        </Box>
        <Box className={classes.author}>
          <Typography style={{ color: '#FFFFFF' }}>Marquee / Author</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Hero
