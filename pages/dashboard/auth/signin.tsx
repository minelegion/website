import { Button, CardContent, Container, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import { signIn, useSession } from "next-auth/client";
import ResponseiveCard from "@components/ResponsiveCard/ResponsiveCard";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Image from "next/image";

const SigninPage = () => {
    const classes = useStyles();
    const [session, isLoading] = useSession();
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    const { enqueueSnackbar } = useSnackbar();


    if (session) router.push("/dashboard");

    const onLogin = async () => {
        if (isLoading || disabled) return;

        setDisabled(true);

        const { error } = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if (error) {
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
        <Fragment>
            <Grid container className={classes.container} alignItems={"center"}>
                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <ResponseiveCard maxHeightOnMobile={true}>
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography variant="h5">Bejelentkezés</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={isLoading || disabled}
                                            label="Felhasználónév"
                                            variant="outlined"
                                            fullWidth
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={isLoading || disabled}
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
                                            color="secondary"
                                            size="large"
                                            disabled={isLoading || disabled || !!session}
                                            onClick={onLogin}
                                            fullWidth
                                        >
                                            Bejelentkezés
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </ResponseiveCard>
                    </Container>
                </Grid>
            </Grid>

            <div className={classes.background}>
                <Image
                    src={"/img/bg.jpg"}
                    quality={1}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </Fragment>
    );
};

const useStyles = makeStyles(() => ({
    container: {
        minHeight: "100vh",
        backdropFilter: "blur(32px)",
        zIndex: 1000,
    },
    background: {
        zIndex: -1,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        pointerEvents: "none",
        userSelect: "none",
    }
}));

export default SigninPage;