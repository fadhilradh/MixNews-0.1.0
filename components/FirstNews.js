/* eslint-disable @next/next/no-img-element */
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    background: "white",
    borderRadius: "10px",
    height: "auto",
    "& img": {
      objectFit: "cover",
      height: "50%",
      width: "100%",
      borderRadius: "10px 10px 0 0",
    },
  },
  newsContainer: {
    padding: 0,
    minHeight: "550px",
    "@media screen and (max-width: 700px)": {
      minHeight: "400px",
    },
  },
  title: {
    fontSize: "22px",
    fontWeight: "500",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media screen and (max-width: 700px)": {
      fontSize: "22px",
    },
    "&:hover": {
      textUnderline: "none",
      color: "#0066CC",
    },
  },
  description: {
    fontSize: "14px",
    color: "#48494A",
    marginTop: "8px",
  },
  text: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  content: {
    padding: "16px",
  },
  newsDate: {
    color: "#A5A6A7",
  },
  secondNews: {
    marginTop: "16px",
    height: "135px",
    borderRadius: "10px",
    border: "1px solid #eaeaea",
    "& > img": {
      borderRadius: "10px 0 0 10px",
      width: "38%",
      height: "100%",
    },
  },
});

const addDefaultSrc = (ev) => {
  ev.target.src = "https://picsum.photos/600/340";
};

function Component({ firstNews, secondNews }) {
  const classes = useStyles();
  console.log(firstNews);
  return (
    <Grid item className={classes.root}>
      <img
        onError={addDefaultSrc}
        src={
          firstNews?.urlToImage !== null
            ? firstNews?.urlToImage
            : "https://picsum.photos/600/340"
        }
        alt="image"
      />
      <Box className={classes.content}>
        <a href={firstNews?.url} className={classes.title}>
          {firstNews?.title}
        </a>
        <Typography className={classes.description}>
          {firstNews?.description}
        </Typography>
        <Typography variant="caption" className={classes.newsDate}>
          {moment(firstNews?.publishedAt).fromNow()}
        </Typography>

        <Box className={classes.secondNews}>
          <img
            onError={addDefaultSrc}
            src={
              secondNews?.urlToImage !== null
                ? secondNews?.urlToImage
                : "https://picsum.photos/600/340"
            }
            alt="2nd"
          />
          <Box></Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Component;
