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
      height: "80px",
    },
  },
  categories: {
    display: "flex",
    gap: "44px",
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
            <Button
              onClick={() => setSelectedCategory(category.id)}
              key={Math.random()}
            >
              {category.label}
            </Button>
          ))}
        </Container>
      </Grid>
    </>
  );
}

export default Component;
