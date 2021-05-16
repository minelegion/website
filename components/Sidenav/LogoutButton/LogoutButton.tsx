import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ListItem, ListItemIcon, ListItemText, Modal } from "@material-ui/core";
import { ExitToAppRounded as ExitIcon } from "@material-ui/icons";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { Fragment, useState } from "react";

const LogoutButton = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const onLogout = () => {
        signOut({
            redirect: false,
        });

        router.push("/dashboard/auth/signin");

        enqueueSnackbar("Sikeres kijelentkezés!", {
            variant: "success",
        });
    };

    return (
        <Fragment>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                    Biztos vagy benne?
                </DialogTitle>
                <DialogContent>
                    Kijelentkezés után újra be kell jelentkezned, hogy tudd használni a központ funkcióit.
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Mégse</Button>
                    <Button onClick={onLogout} color="primary">Kijelentkezés</Button>
                </DialogActions>
            </Dialog>
            <ListItem button onClick={() => setOpen(true)}>
                <ListItemIcon>
                    <ExitIcon />
                </ListItemIcon>
                <ListItemText primary="Kijelentkezés" />
            </ListItem>
        </Fragment>
    );
};

export default LogoutButton;