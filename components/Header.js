import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { categories } from "./constant";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    background: "#F8F8F8",
  },
  title: {
    fontSize: "56px",
    fontFamily: "Playfair Display",
    color: "#09394F",
    fontWeight: "bold",
    width: "100%",
  },
  menu: {
    width: "100%",
    background: "#F1EFEF",
    height: "40px",
    "@media screen and (max-width: 700px)": {
      height: "40px",
    },
  },
  categories: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "@media screen and (max-width: 700px)": {
      justifyContent: "space-between",
      gap: "0px",
    },
  },
  button: {
    height: "40px",
    textTransform: "none",
    fontWeight: "semi-bold",
    color: "#09394F",
    fontSize: "16px",
    "@media screen and (max-width: 700px)": {
      fontSize: "14px",
    },
  },
});

function Component({ setSelectedCategory }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container style={{ maxWidth: "1084px" }}>
          <Typography className={classes.title}>Fad.News</Typography>
        </Container>
      </Box>
      <Grid container className={classes.menu}>
        <Container
          style={{ maxWidth: "1084px" }}
          className={classes.categories}
        >
          {categories.map((category) => (
            <Grid item key={Math.random()}>
              <Button
                className={classes.button}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            </Grid>
          ))}
        </Container>
      </Grid>
    </>
  );
}

export default Component;
