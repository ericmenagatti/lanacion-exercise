import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MobileArticle from "src/components/home/mobile/MobileArticle";
import Hidden from '@material-ui/core/Hidden';
import DesktopArticle from 'src/components/home/desktop/DesktopArticle';
import TabletArticle from 'src/components/home/tablet/TabletArticle';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 2% 0 2%',
  },
  mainGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  firstGrid: {
    display: 'flex',
    height: 'max-content',
  },
  secondGrid: {
    display: 'flex',
    height: 'max-content',
    gap: 40,
  },
  thirdGrid: {
    display: 'flex',
    height: 'max-content',
    flexDirection: 'column',
    gap: 16,
  },
  titleBoxes: {
    padding: '16px',
  },
  titleContent: {
    color: '#1C1C1F',
    fontSize: '24px',
    fontFamily: 'SuecaSlab',
    lineHeight: '32px',
    letterSpacing: '-0.4px',
    fontWeight: 900,
  },
  verticalDivider: {
    background: '#CCCCCC',
    height: '100%',
    margin: '0 10px',
  },
  horizontalDivider: {
    background: '#CCCCCC',
    height: '2px',
    margin: '32px 0',
  },
  horizontalAdBox: {
    backgroundColor: '#FFEAF1',
    width: '100%',
    height: 100,
    marginBottom: '64px',
  },
  verticalAdBox: {
    backgroundColor: '#FFEAF1',
    width: 300,
    height: 4000,
    marginLeft: '40px',
  },
  text: {
    fontWeight: 900,
    fontFamily: 'Arial',
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.4',
    margin: '8px 0',
    color: '#1C1C1F',
  },
}));

const HomeTablet = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Box className={classes.horizontalAdBox} />
        </Grid>
        <Grid item xs={12} className={classes.firstGrid}>
          <Grid item xs={5} className={classes.mainGrid}>
            <TabletArticle content color />
          </Grid>
          <Hidden mdDown>
            <Grid item xs={1}>
              <Divider className={classes.verticalDivider} flexItem variant="fullWidth" orientation="vertical" />
            </Grid>
            <Grid item xs={6} className={classes.mainGrid}>
              <MobileArticle />
              <MobileArticle />
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.horizontalDivider} flexItem variant="fullWidth" orientation="horizontal" />
        </Grid>
        <Grid item xs={12} className={classes.secondGrid}>
          <Grid item xs={6} className={classes.mainGrid}>
            <MobileArticle />
          </Grid>
          <Grid item xs={6} className={classes.mainGrid}>
            <MobileArticle />
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.thirdGrid}>
          <Grid item xs={12}>
            <Typography className={classes.text}>Focal derecho</Typography>
            <Divider className={classes.horizontalDivider} flexItem variant="fullWidth" orientation="horizontal" />
          </Grid>
          <Grid item xs={12} className={classes.firstGrid}>
            <Grid item xs={5} className={classes.mainGrid}>
              <DesktopArticle content color image={false} />
            </Grid>
            <Grid item xs={1}>
              <Divider className={classes.verticalDivider} flexItem variant="fullWidth" orientation="vertical" />
            </Grid>
            <Grid item xs={6} className={classes.mainGrid}>
              <TabletArticle color imageReverse image={false} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.horizontalDivider} flexItem variant="fullWidth" orientation="horizontal" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeTablet;
