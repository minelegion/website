import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, makeStyles, TextField } from "@material-ui/core";
import { FileCopyRounded as CopyIcon } from "@material-ui/icons";

type PropsType = {
    open: boolean;
    onClose: () => any;
};

const DiscordModal = ({ open, onClose }: PropsType) => {
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                className: classes.dialog,
            }}
            fullWidth
            maxWidth={"sm"}
        >
            <DialogTitle>
                Csatlakozz a Discord szerverünkhöz!
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button
                            className={classes.button}
                            size="large"
                            fullWidth
                            variant="contained"
                            onClick={() => window.location.replace("https://discord.gg/CEPV3acrJx")}
                        >
                            Megnyitás
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

const useStyles = makeStyles((theme) => ({
    dialog: {
        backgroundColor: "#5865F2",
        color: "#fff",
    },
    button: {
        marginBottom: 16,
    },
}));

export default DiscordModal;