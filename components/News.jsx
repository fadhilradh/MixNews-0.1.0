/* eslint-disable @next/next/no-img-element */
import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { Headlines, NewsItem } from ".";
import { getTopHeadlines } from "../pages/api/node";

const useStyles = makeStyles({
  content: {
    marginTop: "16px !important",
  },
});

function Component({ news }) {
  // getTopHeadlines();
  const [firstNews, secondNews, ...restNews] = news;
  const classes = useStyles();
  return (
    <Grid item>
      <Headlines
        firstNews={firstNews}
        secondNews={secondNews}
        style={{ width: "100%" }}
      />
      <Box className={classes.content}>
        {restNews.map((item) => (
          <NewsItem key={item.title} item={item} />
        ))}
      </Box>
    </Grid>
  );
}

export default Component;
