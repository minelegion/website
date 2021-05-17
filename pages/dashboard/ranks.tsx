import MinecraftCard from "@components/MiencraftCard";
import MinecraftTypography from "@components/MinecraftTypography/MinecraftTypography";
import { Button, Card, CardContent, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import { DoneRounded as CheckIcon } from "@material-ui/icons";

const RanksPage = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <MinecraftCard>
                        <CardContent>
                            <MinecraftTypography variant={"h5"} gutterBottom color={"primary"}>
                                Lovag
                            </MinecraftTypography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Valami"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Valami"} />
                                </ListItem>
                            </List>
                            <Button variant="contained" size="large" fullWidth color="primary">
                                VÁSÁRLÁS
                            </Button>
                        </CardContent>
                    </MinecraftCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <MinecraftCard>
                        <CardContent>
                            <MinecraftTypography variant={"h5"} gutterBottom color={"primary"}>
                                Lovag
                            </MinecraftTypography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Valami"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Valami"} />
                                </ListItem>
                            </List>
                            <Button variant="contained" size="large" fullWidth color="primary">
                                VÁSÁRLÁS
                            </Button>
                        </CardContent>
                    </MinecraftCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <MinecraftCard>
                        <CardContent>
                            <MinecraftTypography variant={"h5"} gutterBottom color={"primary"}>
                                Lovag
                            </MinecraftTypography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Valami"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Valami"} />
                                </ListItem>
                            </List>
                            <Button variant="contained" size="large" fullWidth color="primary">
                                VÁSÁRLÁS
                            </Button>
                        </CardContent>
                    </MinecraftCard>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <MinecraftCard>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <MinecraftTypography variant={"h5"} gutterBottom color={"primary"}>
                                        Lovag
                                    </MinecraftTypography>
                                    <Typography variant={"h6"}>
                                        Jelenlegi rangod
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Valami"} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={"Valami"} />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography>
                                                Lejár:
                                            </Typography>
                                            <Typography variant="h6">
                                                2021. 06. 17.
                                            </Typography>
                                        </Grid>    
                                        <Grid item xs={12}>
                                            <Divider />    
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" size="large" fullWidth color="primary">
                                                Hosszabbítás
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </MinecraftCard>
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 16,
    },
}))

export default RanksPage;