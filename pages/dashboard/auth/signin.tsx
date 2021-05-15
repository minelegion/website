import { Button, CardContent, Container, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import { signIn, useSession } from "next-auth/client";
import ResponseiveCard from "@components/ResponsiveCard/ResponsiveCard";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const SigninPage = () => {
    const classes = useStyles();
    const [session, isLoading] = useSession();
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    const { enqueueSnackbar } = useSnackbar();


    if(session) router.push("/dashboard");

    const onLogin = async () => {
        setDisabled(true);
        
        const { error } = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if(error) {
            enqueueSnackbar(error, {
                variant: "error",
            });
            
            setDisabled(false);
        } else {
            enqueueSnackbar("Sikeres bejelentkezés!", {
                variant: "success",
            });
        }
    };

    return (
        <Grid container className={classes.container} alignItems={"center"}>
            <Grid item xs={12}>
                <Container maxWidth="sm">
                    <ResponseiveCard maxHeightOnMobile={true}>
                        <CardContent>
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                await onLogin();
                            }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h5">
                                            Bejelentkezés
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={isLoading}
                                            label="Felhasználónév"
                                            variant="outlined"
                                            fullWidth
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={isLoading}
                                            label="Jelszó"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            disabled={isLoading}
                                            onClick={onLogin}
                                            fullWidth
                                        >
                                            Bejelentkezés
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </ResponseiveCard>
                </Container>
            </Grid>
        </Grid> 
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "100vh",
    }
}));

export default SigninPage;