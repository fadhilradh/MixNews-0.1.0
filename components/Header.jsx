import clsx from "clsx";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Navigation from "./Navigation";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    background: "#F8F8F8",
    marginBottom: "32px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media screen and (max-width: 700px)": {
      flexDirection: "column",
    },
  },
  title: {
    fontSize: "42px",
    fontFamily: "arial",
    color: "#494D58",
    fontWeight: "bold",
  },
  logo: {
    "@media screen and (max-width: 700px)": {
      display: "flex",
      alignItems: "items-end",
    },
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

  searchButton: {
    padding: "0 15px 0 15px",
    fontWeight: "bold",
    fontSize: "12px",
    marginLeft: "10px",
    backgroundColor: "#E09B1B",
  },
  border: {
    height: "4px",
    width: "100%",
    background: "#C82828",
  },
  business: {
    backgroundColor: "#6AA0DC",
    color: "#0066CC",
  },
  health: {
    backgroundColor: "#BE82B9",
    color: "#6AA0DC",
  },
  sports: {
    backgroundColor: "#C39B41",
  },
  technology: {
    backgroundColor: "#78AA6E",
  },
});

function Component({
  setSelectedCategory,
  selectedCategory,
  searchQuery,
  setSearchQuery,
  handleSearch,
}) {
  const isBusiness = selectedCategory === "business";
  const isSports = selectedCategory === "sports";
  const isTech = selectedCategory === "technology";
  const isHealth = selectedCategory === "health";
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.header}>
        <Box className={classes.logo}>
          <span style={{ display: "flex" }}>
            <Typography className={classes.title}>MIX</Typography>
            <Typography className={classes.title} style={{ color: "#E09B1B" }}>
              NEWS
            </Typography>
          </span>
          <Typography
            style={{ fontFamily: "arial", fontSize: 12, color: "#E09B1B" }}
          >
            by Fadhil Radhian
          </Typography>
        </Box>
        <Navigation setSelectedCategory={setSelectedCategory} />
      </Container>
      <Divider
        className={clsx(classes.border, {
          [classes.business]: isBusiness,
          [classes.health]: isHealth,
          [classes.sports]: isSports,
          [classes.technology]: isTech,
        })}
      />
    </Box>
  );
}

export default Component;
