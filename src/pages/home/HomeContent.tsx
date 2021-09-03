import Hidden from '@material-ui/core/Hidden';
import HomeMobile from './components/HomeMobile';
import HomeDesktop from './components/HomeDesktop';
import HomeTablet from './components/HomeTablet';

const HomeContent = () => {
  return (
    <>
      <Hidden lgUp>
        <HomeMobile />
      </Hidden>
      <Hidden only={['md', 'xl']}>
        <HomeTablet />
      </Hidden>
      <Hidden lgDown>
        <HomeDesktop />
      </Hidden>
    </>
  )
}

export default HomeContent;