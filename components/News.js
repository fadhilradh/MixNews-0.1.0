/* eslint-disable @next/next/no-img-element */
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { NewsItem } from ".";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Playfair Display",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#09394F",
    marginBottom: "16px",
    marginTop: "20px",
  },
  content: {
    "& > :nth-child(2) > div ": {
      background: "#F9ECC0",
    },
  },
});

function Component({ news }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Typography className={classes.heading}>Berita Terbaru</Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={classes.content}
      >
        {news.map((item) => (
          <NewsItem
            key={item.title}
            url={item.url}
            title={item.title}
            description={item.description}
            urlToImage={item.urlToImage}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Component;
