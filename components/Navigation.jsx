import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  navigation: {
    display: "flex",
  },
  categories: {
    margin: "0 40px 0 40px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "@media screen and (max-width: 950px)": {
      gap: "8px",
      marginBottom: "6px",
    },
    "@media screen and (max-width: 650px)": {
      display: "none",
    },
    "& > a": {
      fontFamily: "arial",
      letterSpacing: "2px",
      fontWeight: "800",
      textTransform: "uppercase",
      fontSize: "16px",
      "&:hover": {
        cursor: "pointer",
        color: "#E09B1B",
      },
      "@media screen and (max-width: 950px)": {
        fontSize: "14px",
      },
    },
  },
  searchButton: {
    padding: "0 15px 0 15px",
    fontWeight: "bold",
    fontSize: "12px",
    marginLeft: "10px",
    backgroundColor: "#E09B1B",
  },
  home: {
    "&:focus": {
      color: "#C82828",
    },
  },
  business: {
    "&:focus": {
      color: "#6AA0DC",
    },
  },
  health: {
    "&:focus": {
      color: "#BE82B9",
    },
  },
  sports: {
    "&:focus": {
      color: "#C39B41",
    },
  },
  technology: {
    "&:focus": {
      color: "#78AA6E",
    },
  },
});

const Component = ({ setSelectedCategory }) => {
  const classes = useStyles();

  return (
    <Box className={classes.navigation}>
      <Box className={classes.categories}>
        <Box className={classes.nav}>
          <a
            href="#"
            className={classes.home}
            onClick={() => setSelectedCategory("")}
          >
            HOME
          </a>
          <Typography>|</Typography>

          <a
            href="#"
            className={classes.business}
            onClick={() => setSelectedCategory("business")}
          >
            BUSINESS
          </a>
          <Typography>|</Typography>

          <a
            href="#"
            className={classes.health}
            onClick={() => setSelectedCategory("health")}
          >
            HEALTH
          </a>
          <Typography>|</Typography>

          <a
            href="#"
            className={classes.sports}
            onClick={() => setSelectedCategory("sports")}
          >
            SPORTS
          </a>
          <Typography>|</Typography>

          <a
            href="#"
            className={classes.technology}
            onClick={() => setSelectedCategory("technology")}
          >
            TECHNOLOGY
          </a>
        </Box>
      </Box>
      {/* <form onSubmit={handleSearch} style={{ display: "flex" }}>
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
    </form> */}
    </Box>
  );
};

export default Component;
