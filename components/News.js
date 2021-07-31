/* eslint-disable @next/next/no-img-element */
import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { FirstNews, NewsItem } from ".";

const useStyles = makeStyles({
  content: {
    marginTop: "16px !important",
  },
});

function Component({ news }) {
  const [firstNews, secondNews, ...restNews] = news;
  const classes = useStyles();
  return (
    <Grid item>
      <FirstNews
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
