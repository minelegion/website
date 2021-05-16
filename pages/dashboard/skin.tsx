import Skin from "@lib/client/api/skin";
import { Button, Container, Divider, Grid, makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useState } from "react";

const SkinPage = () => {
    const [file, setFile] = useState<File>();
    const [disabled, setDisabled] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    const onSubmit = async () => {
        setDisabled(true);

        try {
            const resp = await Skin.upload(file);

            enqueueSnackbar(resp.message, {
                variant: "success",
            });
        } catch(e) {
            enqueueSnackbar(e.message, {
                variant: "error",
            });
        }
 
        setDisabled(false);
    };

    const onReset = async () => {
        setDisabled(true);

        try {
            const resp = await Skin.reset();

            enqueueSnackbar(resp.message, {
                variant: "success",
            });
        } catch(e) {
            enqueueSnackbar(e.message, {
                variant: "error",
            });
        }
 
        setDisabled(false);
    };

    return (
        <Container maxWidth={"sm"} className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        component="label"
                        disabled={disabled}
                        fullWidth
                    >
                        Fájl feltöltése
                        <input
                            accept={"image/*"}
                            onChange={(e) => setFile(e.target.files[0])}
                            type="file"
                            hidden
                        />
                    </Button>
                </Grid>    
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        disabled={disabled || !file}
                        onClick={onSubmit}
                    >
                        Feltöltés
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        disabled={disabled}
                        onClick={onReset}
                    >
                        Eredeti visszaállítása
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
    },
}));

export default SkinPage;