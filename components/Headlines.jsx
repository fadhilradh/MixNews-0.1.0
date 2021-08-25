/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    background: "white",
    borderRadius: "10px",
    height: "auto",
  },
  firstNews: {
    "& img": {
      objectFit: "cover",
      height: "50%",
      width: "100%",
      borderRadius: "10px 10px 0 0",
    },
    "&:hover": {
      cursor: "pointer",
      "& > div > a": {
        color: "#0066CC",
      },
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
    marginBottom: "10px",
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
    marginTop: "10px",
  },
  text: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  secondNews: {
    display: "flex",
    height: "135px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    "& > img": {
      borderRadius: "10px 0 0 10px",
      width: "38%",
      height: "100%",
    },
    "&:hover": {
      "& > div > a": {
        color: "#0066CC",
      },
    },
  },
  secondText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "12px",
  },
  secondTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  secondDesc: {
    fontWeight: "300",
    lineHeight: "16px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
});

const addDefaultSrc = (ev) => {
  ev.target.src = "https://picsum.photos/600/340";
};

function Component({ firstNews, secondNews }) {
  const classes = useStyles();
  // console.log(firstNews);
  return (
    <Grid className={classes.root}>
      <Box className={classes.firstNews}>
        <a href={firstNews?.url}>
          <img
            onError={addDefaultSrc}
            src={
              firstNews?.urlToImage !== null
                ? firstNews?.urlToImage
                : "https://picsum.photos/600/340"
            }
            alt="image"
          />
        </a>
        <Box
          style={{
            padding: "16px",
          }}
        >
          <a href={firstNews?.url} className={classes.title}>
            {firstNews?.title}
          </a>
          <Typography className={classes.description}>
            {firstNews?.description}
          </Typography>
          <Typography variant="caption" style={{ color: "#A5A6A7" }}>
            {moment(firstNews?.publishedAt).fromNow()}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box style={{ padding: "16px" }}>
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
          <Box className={classes.secondText}>
            <a className={classes.secondTitle} href={secondNews?.url}>
              {secondNews?.title}
            </a>
            <Typography variant="subtitle2" className={classes.secondDesc}>
              {secondNews?.description}
            </Typography>
            <Typography variant="caption" style={{ color: "#A5A6A7" }}>
              {moment(secondNews?.publishedAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Component;
