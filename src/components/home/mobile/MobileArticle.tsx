import clsx from 'clsx';
import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginBottom: '40px',
  },
  gridContainerColor: {
    backgroundColor: '#0074C4',
  },
  image: {
    backgroundColor: '#BEE4FF',
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'SuecaSlab',
    fontSize: '20px',
    lineHeight: '20px',
    letterSpacing: '-0.2px',
    color: '#333333',
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
  whiteText: {
    color: '#F2F2F2',
  },
}));

interface IMobileArticleProps {
  number?: number;
  content?: boolean;
  color?: boolean;
  author?: boolean;
}

const MobileArticle: FC<IMobileArticleProps> = ({ number, content = false, color = false, author = true }) => {
  const classes = useStyles();
  const useNumbers = makeStyles(() => ({
    imageNumber: {
      '&::before': {
        content: `"${number}"`,
        position: 'relative',
        height: '40px',
        width: '22px',
        background: '#1C1C1F',
        color: '#FEFEFE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
      }
    },
  }));
  const numberClasses = useNumbers();
  return (
    <Grid container className={clsx(classes.gridContainer, { [classes.gridContainerColor]: color })}>
      <Box className={clsx({ [numberClasses.imageNumber]: Boolean(number) }, classes.image)} />
      <Box my={1} mx={2}>
        <Typography className={clsx({ [classes.whiteText]: color }, classes.title)}>
          <span style={{ color: '#0074C4' }}>Lead.</span> Title esto es un titulo de la novedad con unas cuantas lineas que ocupar
        </Typography>
      </Box>
      {content ? (
        <Box my={1} mx={2}>
          <Typography className={classes.content}>
            Subhead. Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial.
          </Typography>
        </Box>
      ) : null}
      {author ? (
        <Box my={1} mx={2}>
          <Typography className={clsx({ [classes.whiteText]: color }, classes.author)}>
            Marquee / Author
          </Typography>
        </Box>
      ) : null}
    </Grid>
  )
}

export default MobileArticle;