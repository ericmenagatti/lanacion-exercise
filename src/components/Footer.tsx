import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LaNacionIcon from 'src/icons/LaNacionIcon';
import FacebookIcon from 'src/icons/FacebookIcon';
import TwitterIcon from 'src/icons/TwitterIcon';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from 'src/icons/InstagramIcon';
import RSSIcon from 'src/icons/RSSIcon';
import GooglePlayIcon from 'src/icons/GooglePlayIcon';
import AppStoreIcon from 'src/icons/AppStoreIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '70px',
    backgroundColor: '#FEFEFE',
    padding: '0 7% 0 7%',
    [theme.breakpoints.down(1200)]: {
      padding: '0',
    },
  },
  container: {
    maxWidth: '100%',
    padding: 0,
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridItemOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  gridItemTwo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
  },
  gridItemThree: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  divider: {
    background: '#CCCCCC',
    height: '1px',
    margin: '10px 0',
  },
  text: {
    fontWeight: 700,
    fontFamily: 'Arial',
    fontSize: '15px',
    lineHeight: '22px',
    margin: '10px 0',
    marginRight: '16px',
  },
  blueText: {
    color: '#0074C4',
  },
  lightblueText: {
    color: '#0074C4',
    fontWeight: 400,
  },
  blackText: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#272727',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Grid className={classes.gridContainer} container>
          <Hidden mdDown>
            <Grid item className={classes.gridItemOne}>
              <Box display="flex" gridGap="35px">
                <Box><FacebookIcon /></Box>
                <Box><TwitterIcon /></Box>
                <Box><InstagramIcon /></Box>
                <Box><RSSIcon /></Box>
              </Box>
              <Box display="flex">
                <LaNacionIcon width={215} height={21} />
              </Box>
              <Box display="flex" gridGap="32px">
                <Box><GooglePlayIcon /></Box>
                <Box><AppStoreIcon /></Box>
              </Box>
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item alignItems="center" justifyContent="center">
              <Box display="flex" mb={2} justifyContent="center">
                <LaNacionIcon width={215} height={21} />
              </Box>
            </Grid>
          </Hidden>
          <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
          <Hidden mdDown>
            <Grid item className={classes.gridItemTwo}>
              <Box display="flex">
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Últimas noticias</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Política</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Economía</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>El mundo</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Sociedad</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Opinión</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Deportes</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Lifestyle</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Espectáculos</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Edición impresa</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>LN+</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Club LA NACION</Typography>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Typography className={clsx(classes.text, classes.blackText)}>Revistas</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>OHLALÁ!</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>¡HOLA!</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>ROLLING STONE</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>LIVING</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>BRANDO</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>JARDIN</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>LUGARES</Typography>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Typography className={clsx(classes.text, classes.blackText)}>Club del vino:</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Bon vivir</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blackText)}>Envíos:</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>HOP</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Colecciones</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Máster en periodismo</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Fundación LA NACION</Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blueText)}>Avisos solidarios</Typography>
                </Box>
              </Box>
            </Grid>
            <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
          </Hidden>
          <Hidden mdDown>
            <Grid item className={classes.gridItemThree}>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="row">
                  <Box>
                    <Typography className={clsx(classes.text, classes.lightblueText)}>Mapa del sitio </Typography>
                  </Box>
                  <Box>
                    <Typography className={clsx(classes.text, classes.lightblueText)}>Ayuda</Typography>
                  </Box>
                  <Box>
                    <Typography className={clsx(classes.text, classes.lightblueText)}>Términos y condiciones</Typography>
                  </Box>
                  <Box>
                    <Typography className={clsx(classes.text, classes.lightblueText)}>¿Cómo anunciar?</Typography>
                  </Box>
                  <Box>
                    <Typography className={clsx(classes.text, classes.lightblueText)}>Suscribirse al diario impreso</Typography>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Box>
                    <Typography className={clsx(classes.text, classes.blackText)}>Protegido por re CAPTCHA: </Typography>
                  </Box>
                  <Box>
                    <Typography className={clsx(classes.text, classes.lightblueText)}>Condiciones</Typography>
                  </Box>
                  <Box>
                    <Typography className={clsx(classes.text, classes.lightblueText)}>Privacidad</Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography className={clsx(classes.text, classes.blackText)}>
                    Copyright 2019 SA LA NACION | Todos los derechos reservados
                  </Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blackText)}>
                    Miembro de GDA. Grupo de Diarios América
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item className={classes.gridItemThree}>
              <Box display="flex" mt={2} gridGap="16px" justifyContent="space-between" flexDirection="column" alignItems="center">
                <Box display="flex" gridGap="35px">
                  <Box><FacebookIcon /></Box>
                  <Box><TwitterIcon /></Box>
                  <Box><InstagramIcon /></Box>
                  <Box><RSSIcon /></Box>
                </Box>
                <Box display="flex" gridGap="32px">
                  <Box><GooglePlayIcon /></Box>
                  <Box><AppStoreIcon /></Box>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blackText)}>
                    Miembro de GDA. Grupo de Diarios América
                  </Typography>
                </Box>
                <Box>
                  <Typography className={clsx(classes.text, classes.blackText)}>
                    Copyright 2019 SA LA NACION | Todos los derechos reservados
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer;
