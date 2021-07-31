/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import moment from "moment";

const useStyles = makeStyles({
  newsContainer: {
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "16px",
    padding: "16px !important",
    borderRadius: "10px",
    background: "white",
    height: "auto",
    "@media screen and (max-width: 700px)": {
      minHeight: "400px",
    },
  },
  title: {
    fontSize: "16px",
    color: "#1D1E1F",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:hover": {
      color: "#0066CC",
    },
  },
  text: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "#FFF",
    borderRadius: "0 0 10px 10px",
    border: "1px solid #eaeaea",
  },
  image: {
    borderRadius: "10px 10px 0 0",
    width: "100%",
    height: "75%",
    objectFit: "cover",
  },
  source: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  article: {
    "&:hover": {
      cursor: "pointer",
      "& > div > a": {
        color: "#0066CC",
      },
    },
  },
});

const addDefaultSrc = (ev) => {
  ev.target.src = "https://picsum.photos/600/340";
};

function Component({ item }) {
  const { url, title, publishedAt, urlToImage, source, author } = item;
  const classes = useStyles();
  return (
    <Box className={classes.newsContainer}>
      <span style={{ display: "flex", alignItems: "baseline" }}>
        <Typography className={classes.source}>{source.name} • </Typography>
        <Typography variant="subtitle1  " style={{ color: "#a5a6a7" }}>
          &nbsp;{author}
        </Typography>
      </span>
      <Box className={classes.article}>
        <a href={url}>
          <img
            className={classes.image}
            onError={addDefaultSrc}
            src={
              urlToImage !== null ? urlToImage : "https://picsum.photos/600/340"
            }
            alt=""
          />
        </a>
        <Box className={classes.text}>
          <a href={url} className={classes.title}>
            {title}
          </a>
          <Typography variant="caption" style={{ color: "#A5A6A7" }}>
            {moment(publishedAt).fromNow()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Component;
