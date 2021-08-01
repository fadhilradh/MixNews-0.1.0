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
    marginBottom: "32px",
  },
  title: {
    fontSize: "42px",
    fontFamily: "arial",
    color: "#494D58",
    fontWeight: "bold",
  },
  subtitle: {
    marginLeft: "3px",
    fontFamily: "Roboto",
    fontSize: "20px",
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
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",

    "@media screen and (max-width: 700px)": {
      display: "none",
    },
  },
  nav: {
    fontFamily: "arial",
    letterSpacing: "2px",
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: "18px",
    "&:hover": {
      cursor: "pointer",
      color: "#E09B1B",
    },
    "@media screen and (max-width: 950px)": {
      fontSize: "14px",
    },
  },
});

function Component({
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  handleSearch,
}) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container
          style={{ maxWidth: "1084px", display: "flex", alignItems: "center" }}
        >
          <span style={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography className={classes.title}>MIX</Typography>
            <Typography className={classes.title} style={{ color: "#E09B1B" }}>
              NEWS
            </Typography>
          </span>
          <Box className={classes.categories}>
            {categories.map((category) => (
              <Box key={Math.random()} style={{ display: "flex", gap: "18px" }}>
                <Typography
                  className={classes.nav}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Typography>
                <Typography>|</Typography>
              </Box>
            ))}
            <form onSubmit={handleSearch}>
              <input
                style={{ width: "220px" }}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="English news from around the world"
              />
              <input type="submit" value="Search" />
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Component;
