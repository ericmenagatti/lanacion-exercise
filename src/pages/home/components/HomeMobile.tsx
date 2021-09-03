import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MobileArticle from "src/components/home/mobile/MobileArticle";
import MobileCard from 'src/components/home/mobile/MobileCard';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  divider: {
    background: '#CCCCCC',
    height: '1px',
    margin: '10px 0',
  },
}));

const HomeMobile = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Focal izquierdo
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle content />
      <MobileArticle />
      <MobileArticle />
      <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Notas x 2
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle />
      <MobileArticle />
      <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Focal derecho
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle content />
      <MobileArticle />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Card Group x 3, 6, 9, 12
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle />
      <MobileArticle />
      <MobileCard />
      <MobileArticle />
      <MobileArticle />
      <MobileArticle />
      <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Opinión
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle />
      <MobileCard />
      <MobileCard />
      <MobileCard />
      <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          EDITORIALES
        </Typography>
        <Box>
          <Typography>Cuando se dieron cuenta</Typography>
        </Box>
        <Box>
          <Typography>Dos hermanos estaban preparándose</Typography>
        </Box>
      </Box>
      <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Notas x 3 Color
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle color />
      <MobileArticle color />
      <MobileArticle color />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Las más leídas
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle number={1} author={false} />
      <MobileArticle number={2} author={false} />
      <MobileArticle number={3} author={false} />
      <MobileArticle number={4} author={false} />
      <Box className={classes.titleBoxes}>
        <Typography className={classes.titleContent}>
          Nota al 100%
        </Typography>
        <Divider className={classes.divider} flexItem variant="fullWidth" orientation="horizontal" />
      </Box>
      <MobileArticle content />
    </>
  )
}

export default HomeMobile
