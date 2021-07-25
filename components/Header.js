import {
    Box,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "auto",
        background: "#F8F8F8",
    },
    title: {
        fontSize: "56px",
        fontFamily: "Playfair Display",
        color: "#09394F",
        fontWeight: "bold",
        width: "100%",
    },
    menu: {
        width: "100%",
        background: "#F1EFEF",
        height: "40px",
    },
});

function Component() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Container style={{ maxWidth: "1084px" }}>
                    <Typography className={classes.title}>Fad.News</Typography>
                </Container>
            </Box>
            <Grid container className={classes.menu}></Grid>
        </>
    );
}

export default Component;
