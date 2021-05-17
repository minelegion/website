import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";

const DashboardPromo = () => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <Container>
                    <Grid container spacing={2} alignItems={"center"}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h5" component="h2">
                                Nézz körbe a központban!
                            </Typography>
                            <Typography>
                                Állíts be saját skint, vásárolj rangot és kapj jutalmakat!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                onClick={() => router.push("/dashboard")}
                                size={"large"}
                                color={"primary"}
                                variant={"contained"}
                                fullWidth
                            >
                                Megnyitás
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        background: "url(/img/medieval.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },
    inner: {
        backdropFilter: "brightness(50%)",
        paddingTop: 48,
        paddingBottom: 48,
    },
}));

export default DashboardPromo;