import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Typography } from "@material-ui/core";

const GettingStartedSection = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5">
                        Most kezdenél el játszani?
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Töltsd le a kliensünket
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                1. lépés
                            </Typography>
                            <Typography variant="body2">
                                A saját fejlesztésű kliensünkkel ingyenesen hozzá tudsz férni a szerverhez.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Válassz egy felhasználónevet
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                2. lépés
                            </Typography>
                            <Typography variant="body2">
                                A kliensen belül csak egy felhasználónevet kell beírnod és le kell töltened a játékot.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Regisztrálj a szerverre
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                3. lépés
                            </Typography>
                            <Typography variant="body2">
                                Amikor először belépsz a szerverre, meg kell adnod egy jelszót a /register [jelszó] [jelszóÚjra] paranccsal.
                            </Typography>
                        </CardContent>
                    </Card>
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
}));

export default GettingStartedSection;