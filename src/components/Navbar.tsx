import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import LaNacionIcon from 'src/icons/LaNacionIcon';
import CloudIcon from 'src/icons/CloudIcon';
import ClubIcon from 'src/icons/ClubIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: 'none',
    height: '112px',
    [theme.breakpoints.down(768)]: {
      height: '80px',
      padding: '0 0%',
    }
  },
  toolbar: {
    height: '72px',
    padding: '0 7% 0 7%',
    [theme.breakpoints.down(1600)]: {
      padding: '0 7% 0 7%',
    },
    [theme.breakpoints.down(1200)]: {
      padding: '0',
    },
    [theme.breakpoints.down(768)]: {
      height: '40px',
    },
  },
  subToolbar: {
    height: '40px',
    backgroundColor: '#F2F2F2',
    padding: '0 7% 0 7%',
    minHeight: '40px',
    [theme.breakpoints.down(1600)]: {
      padding: '0 7% 0 7%',
    },
    [theme.breakpoints.down(1200)]: {
      padding: '0',
    },
    [theme.breakpoints.down(768)]: {
      height: '40px',
    }
  },
  gridContainer: {
    height: '100%',
    [theme.breakpoints.down(768)]: {
      display: 'flex',
      justifyContent: 'space-between',
    }
  },
  subGridContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  gridItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    boxShadow: 'none',
    boxSizing: 'border-box',
    height: '40px',
    borderRadius: '4px',
    [theme.breakpoints.down(768)]: {
      height: '16px',
    }
  },
  grayButtons: {
    background: '#F2F2F2',
    color: '#272727',
  },
  subscribeButton: {
    background: '#FFFF24',
    border: '1px solid #CCCCCC',
    '&:hover': {
      background: '#FFF024',
    }
  },
  mdSubscribeButton: {
    color: '#0074C4',
    '&:hover': {
      background: 'none',
    }
  },
  loginButton: {
    color: '#0074C4',
    border: '1px solid #0074C4',
  },
  font: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
  },
  noHover: {
    '&:hover': {
      boxShadow: 'none !important',
    },
  },
  logoBox: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5px',
    [theme.breakpoints.down(865)]: {
      '&>svg': {
        width: 230,
      },
    },
    [theme.breakpoints.down(768)]: {
      justifyContent: 'start',
      paddingTop: '0',
      '&>svg': {
        width: 164,
      },
    },
  },
  searchIcon: {
    color: '#272727',
    fontSize: '30px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar} >
      <Toolbar className={classes.toolbar}>
        <Grid container className={classes.gridContainer}>
          <Hidden mdDown>
            <Grid item lg={4} className={classes.gridItems}>
              <Box display="flex" gridGap='24px' justifyContent="center">
                <Button className={clsx(classes.button, classes.grayButtons, classes.font, classes.noHover)} variant="contained" endIcon={<MenuIcon color="inherit" />}>
                  SECCIONES
                </Button>
                <Button className={clsx(classes.button, classes.grayButtons, classes.font, classes.noHover)} variant="contained" endIcon={<SearchIcon color="inherit" />}>
                  BUSCAR
                </Button>
              </Box>
            </Grid>
          </Hidden>
          <Grid item lg={4} className={classes.gridItems}>
            <Box className={classes.logoBox}>
              <Hidden mdDown>
                <LaNacionIcon width={300} height={30} />
              </Hidden>
              <Hidden lgUp>
                <LaNacionIcon width={164} height={16} />
              </Hidden>
            </Box>
          </Grid>
          <Hidden mdDown>
            <Grid item lg={4} className={classes.gridItems}>
              <Box display="flex" gridGap='24px' justifyContent="center">
                <Button className={clsx(classes.button, classes.subscribeButton, classes.font, classes.noHover)} variant="contained">
                  SUSCRIBITE
                </Button>
                <Button className={clsx(classes.button, classes.loginButton, classes.font, classes.noHover)} variant="outlined">
                  INGRESAR
                </Button>
              </Box>
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item className={classes.gridItems}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button className={clsx(classes.button, classes.mdSubscribeButton, classes.font, classes.noHover)} variant="text">
                  SUSCRIBITE
                </Button>
                <IconButton>
                  <SearchIcon className={clsx(classes.searchIcon)} color="inherit" />
                </IconButton>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
      <Toolbar className={classes.subToolbar}>
        <Grid container className={classes.subGridContainer}>
          <Grid item className={classes.gridItems}>
            <Box display="flex">
              <Hidden mdDown>
                <Box mr={2}>
                  <Typography style={{ color: '#0074C4', fontWeight: 700 }}>
                    Dólar:
                  </Typography>
                </Box>
              </Hidden>
              <Box mr={2}>
                <Typography style={{ color: '#1C1C1F' }}>
                  BNA: <span style={{ fontWeight: 700 }}>$00,00 / $00,00</span>
                </Typography>
              </Box>
              <Box>
                <Typography style={{ color: '#1C1C1F' }}>
                  Blue: <span style={{ fontWeight: 700 }}>$00,00 / $00,00</span>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Hidden lgDown>
            <Grid item className={classes.gridItems}>
              <Box display="flex">
                <Box mr={2}>
                  <CloudIcon />
                </Box>
                <Box mr={2}>
                  <Typography style={{ color: '#1C1C1F', fontWeight: 700 }}>
                    00.0°
                  </Typography>
                </Box>
                <Box mr={2}>
                  <Typography style={{ color: '#1C1C1F' }}>
                    Capital Federal
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <Hidden lgDown>
            <Grid item className={classes.gridItems}>
              <Box display="flex">
                <Box mr={2}>
                  <Typography style={{ color: '#0074C4' }}>
                    Recibí Newsletters
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item className={classes.gridItems}>
              <Box display="flex">
                <Box mr={2}>
                  <ClubIcon />
                </Box>
                <Box mr={2}>
                  <Typography style={{ color: '#0074C4' }}>
                    Descubrí tus beneficios
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
