/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "../styles/News.module.css";

const useStyles = makeStyles({
    newsContainer: {
        padding: 0,
        "@media screen and (max-width: 700px)": {
            height: "300px",
        },
    },
    title: {
        fontSize: "24px",
        color: "#09394F",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "@media screen and (max-width: 700px)": {
            fontSize: "18px",
        },
    },
    description: {
        fontFamily: "Mulish",
        "@media screen and (max-width: 700px)": {
            display: "none",
        },
    },
    text: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
});

function Component({ url, title, description, urlToImage }) {
    const classes = useStyles();
    return (
        <Grid item xs={6} md={4} className={classes.newsContainer}>
            <Box className={styles.article}>
                <a href={url}>
                    <img
                        className={styles.image}
                        src={
                            urlToImage
                                ? urlToImage
                                : "https://picsum.photos/600/340"
                        }
                        alt=""
                    />
                </a>
                <Box className={classes.text}>
                    <a href={url} className={classes.title}>
                        {title}
                    </a>
                    <Typography className={classes.description}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
}

export default Component;
