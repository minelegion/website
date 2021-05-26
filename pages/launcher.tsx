import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Github, { ReleaseType } from "@lib/client/api/github";
import { useEffect, useState } from "react";
import WindowsIcon from "@components/WindowsIcon";

const LauncherPage = () => {
    const classes = useStyles();
    const router = useRouter();
    const [releases, setReleases] = useState<ReleaseType[]>();

    const load = async () => {
        const data = await Github.getReleases("minelegion/launcher");
        setReleases(data);
    };

    const download = (content_type: string) => window.location.replace(releases[0].assets.find(e => e.content_type === content_type).browser_download_url);
    
    useEffect(() => {
        load();
    }, []);

    return (
        <Container>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        <b>
                            MineLegion Launcher
                        </b>
                    </Typography>
                    <Typography>
                        Ezzel az indítóval nem kell foglalkoznod, hogy előzetes beállításokat végezzetek el, egyszerűen minden működik egyből!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        size={"large"}
                        onClick={() => download("application/octet-stream")}
                        startIcon={<WindowsIcon />}
                        disabled={!releases}
                    >
                        Letöltés Windows rendszerre (.exe)
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        size={"large"}
                        onClick={() => download("application/zip")}
                        startIcon={<WindowsIcon />}
                        disabled={!releases}
                    >
                        Letöltés Windows rendszerre (.zip)
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 64,
    },
}));

export default LauncherPage;