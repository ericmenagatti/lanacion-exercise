import { makeStyles } from "@material-ui/core/styles";
import Navbar from "src/components/Navbar";
import Hero from "src/components/Hero";
import Footer from "src/components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#FEFEFE',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const Layout = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Hero />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;