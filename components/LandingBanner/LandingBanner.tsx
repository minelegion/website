import { Button, Container, Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { FileCopyRounded as CopyIcon, GetAppRounded as DownloadIcon } from "@material-ui/icons";
import { useState } from "react";
import CopyAddressButton from "./CopyAddressButton";
import DiscordButton from "./DiscordButton";
import DiscordModal from "./DiscordButton/DiscordModal";

const LandingBanner = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <Container>
                    <Typography variant="h4">Üdvözöllek a <b>MineLegion</b> weboldalán!</Typography>
                    <Typography gutterBottom>Légy részese egy páratlan magyar közösségnek, ahol soha nem látott újdonságokkal találhozhatsz!</Typography>
                    <Grid container spacing={2} className={classes.button}>
                        <Grid item>
                            <CopyAddressButton
                                color="primary"
                                variant="contained"
                                size="large"
                                startIcon={<CopyIcon />}
                            >
                                IP cím másolása
                            </CopyAddressButton>
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                variant="contained"
                                size="large"
                                startIcon={<DownloadIcon />}
                            >
                                Kliens letöltése
                            </Button>
                        </Grid>
                        <Grid item>
                            <DiscordModal
                                open={open}
                                onClose={() => setOpen(false)}
                            />
                            <DiscordButton
                                color="primary"
                                variant="contained"
                                size="large"
                                onClick={() => setOpen(true)}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

const useStyles = makeStyles(() => ({
    container: {
        paddingTop: 156,
        paddingBottom: 156,
        backdropFilter: "brightness(60%)",
        color: "#ffffff",
    },
    background: {
        background: "url(/img/landscape.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },
    button: {
        marginTop: 32,
    },
}));

export default LandingBanner;