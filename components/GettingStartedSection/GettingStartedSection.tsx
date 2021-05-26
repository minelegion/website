import { Button, Card, CardActions, CardContent, Container, createMuiTheme, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

const GettingStartedSection = () => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems={"center"} className={classes.container}>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h5">Központ</Typography>
                            <Typography gutterBottom>A központban tudsz magadnak kinézetet állítani, rangot vásárolni és egyéb jóságokra szert tetnni. Ajánlott körbenézni mindenképpen!</Typography>
                            <Button
                                color={"primary"}
                                size={"large"}
                                variant={"contained"}
                                className={classes.button}
                                onClick={() => router.push("/dashboard")}
                            >Irány a központ!</Button>
                        </Grid>
                        <Hidden smDown>
                            <Grid item md={6}>
                                <Image src={"/img/explore.webp"} width={383} height={300} />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems={"center"} className={classes.container}>
                        <Hidden smDown>
                            <Grid item md={6}>
                                <Image src={"/img/redstone.webp"} width={427} height={337} />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h5">Saját kliens</Typography>
                            <Typography gutterBottom>Szerverünkre bármilyen indítóval felléphetsz, de ha nem akarsz ezekkel vesződni, akkor nyugodtan használd a miénket!</Typography>
                            <Button
                                color={"primary"}
                                size={"large"}
                                variant={"contained"}
                                className={classes.button}
                                onClick={() => router.push("/launcher")}
                            >Letöltés!</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles(() => ({
    container: {
        paddingTop: 32,
        paddingBottom: 32,
    },
    button: {
        marginTop: 32,
    },
}));

export default GettingStartedSection;