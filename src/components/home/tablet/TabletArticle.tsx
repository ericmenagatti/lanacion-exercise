import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 330,
  },
  image: {
    backgroundColor: '#BEE4FF',
    width: '100%',
    height: 370,
  },
  title: {
    fontFamily: 'SuecaSlab',
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.4px',
    color: '#1C1C1F',
  },
  content: {
    fontFamily: 'Arial',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#333333',
  },
  author: {
    color: '#272727',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
}));

interface ITabletArticleProps {
  content?: boolean;
  color?: boolean;
  author?: boolean;
  image?: boolean;
  imageReverse?: boolean;
}

const TabletArticle: FC<ITabletArticleProps> = ({ content = false, color = false, author = true, image = true, imageReverse = false }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      {imageReverse ? <Box className={classes.image} /> : null}
      <Box mb={1}>
        <Typography className={classes.title}>
          {color ? <span style={{ color: '#0074C4' }}>Lead.</span> : 'Lead.'} Title esto es un titulo de la novedad con unas cuantas lineas que ocupar
        </Typography>
      </Box>
      {content ? (
        <Box mb={1}>
          <Typography className={classes.content}>
            Subhead. Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial.
          </Typography>
        </Box>
      ) : null}
      {author ? (
        <Box mb={1}>
          <Typography className={classes.author}>
            Marquee / Author
          </Typography>
        </Box>
      ) : null}
      {image ? <Box className={classes.image} /> : null}
    </Grid>
  )
}

export default TabletArticle;