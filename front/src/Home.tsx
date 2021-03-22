import { makeStyles } from "@material-ui/core/styles";

import Navbar from "components/Navbar";
import Container from "@material-ui/core/Container";
import PhonesList from "components/PhonesList";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container fixed maxWidth="sm" className={classes.container}>
        <PhonesList />
      </Container>
    </>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 24,
    borderRadius: "0 0 12px 12px",
  },
}));
