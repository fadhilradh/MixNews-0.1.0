import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import { categories } from "./constant";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    background: "#F8F8F8",
    marginBottom: "32px",
    borderBottom: "4px solid #E09B1B",
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
  navigation: {
    display: "flex",
    "@media screen and (max-width: 800px)": {
      display: "none",
    },
  },
  categories: {
    margin: "0 40px 0 40px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
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
  searchButton: {
    padding: "0 15px 0 15px",
    fontWeight: "bold",
    fontSize: "12px",
    marginLeft: "10px",
    backgroundColor: "#E09B1B",
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
    <Box className={classes.root}>
      <Container style={{ display: "flex", alignItems: "center" }}>
        <span style={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography className={classes.title}>MIX</Typography>
          <Typography className={classes.title} style={{ color: "#E09B1B" }}>
            NEWS
          </Typography>
        </span>
        <Box className={classes.navigation}>
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
          </Box>
          <form onSubmit={handleSearch} style={{ display: "flex" }}>
            <TextField
              size="small"
              style={{ width: "220px" }}
              label="Search topics, names, etc"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
            />
            <Button
              type="submit"
              value="Search"
              size="small"
              variant="contained"
              className={classes.searchButton}
            >
              Search
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default Component;
