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
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
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
    flexGrow: 1,
    justifyContent: "space-between",
    background: "#FFF",
    borderRadius: "0 0 10px 10px",
    gap: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,

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
        <Typography className={classes.source}>{source.name} </Typography>
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
            {moment(publishedAt).fromNow()} &nbsp;|&nbsp; {author}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Component;
