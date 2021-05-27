import Discord from "@lib/client/api/discord";
import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Discord as PrismaDiscord } from "@prisma/client";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { Skeleton } from "@material-ui/lab";

type StateType = {
    state: "loading";
} | {
    state: "not-connected";
} | {
    state: "connected";
    discord: PrismaDiscord;
};

const DiscordPage = () => {
    const [data, setData] = useState<StateType>({
        state: "loading",
    });

    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const classes = useStyles();
    const [disabled, setDisabled] = useState(false);

    const code = typeof router.query.code === "string" ? router.query.code : undefined;

    const load = async () => {
        try {
            setDisabled(true);
            const discord = await Discord.get();
            
            if(discord) {
                setData({
                    state: "connected",
                    discord,
                });
            } else {
                setData({
                    state: "not-connected",
                });
            }
        } catch(e) {
            enqueueSnackbar(e.message, {
                variant: "error",
            });
            router.push("/dashboard");
        }

        setDisabled(false);
    };

    const connect = async () => {
        setDisabled(true);
        try {
            const resp = await Discord.process(code);

            setData({
                state: "connected",
                discord: resp.data,
            });

            enqueueSnackbar(resp.message, { variant: "success" });
            router.push("/dashboard/discord");
        } catch(e) {
            enqueueSnackbar(e.message);
        }
        setDisabled(false);
    };

    useEffect(() => {
        if(code?.length > 0) {
            connect();
        } else {
            load();
        }
    }, [code]);

    return (
        <Container maxWidth={"sm"} className={classes.root}>
            <Card>
                <CardContent>
                    <Typography variant={"h5"} gutterBottom>
                        Összekapcsolás Discord fiókkal
                    </Typography>
                    {data.state === "loading" && (
                        <LoadingComponent />
                    )}
                    {data.state == "not-connected" && (
                        <ConnectComponent />
                    )}
                    {data.state == "connected" && (
                        <ConnectedComponent discord={data.discord} />
                    )}
                </CardContent>
                {data.state === "connected" && (
                    <CardActions>
                        <Button
                            disabled={disabled}
                            onClick={async () => {
                                setDisabled(true);
                                
                                try {
                                    await Discord.disconnect();
                                    setData({ state: "not-connected" });
                                } catch {
                                    enqueueSnackbar("Valami hiba lépett fel, próbálkozz újra!", {
                                        variant: "error",
                                    });
                                }

                                setDisabled(false);
                            }}
                        >
                            Szétválaszt
                        </Button>
                    </CardActions>
                )}
            </Card>
        </Container>
    );
};


const ConnectedComponent = ({ discord }: { discord: PrismaDiscord }) => (
    <Grid container spacing={2} alignItems={"center"}>
        <Grid item>
            <img
                style={{ width: 64, height: 64, borderRadius: 32 }}
                src={`http://cdn.discordapp.com/avatars/${discord.id}/${discord.avatar}.png`}
            />
        </Grid>
        <Grid item style={{ width: "calc(100% - 80px)"}}>
            <Typography>
                {discord.username}
            </Typography>
            <Typography variant={"body2"} gutterBottom>
                Egyedi Discord azonosító: {discord.id}
            </Typography>
            <Typography variant={"body2"}>
                Ha nincs szinkronban a Discord és a MineLegion profilod, akkor válaszd szét őket és kapcsold össze őket újra!
            </Typography>
        </Grid>
    </Grid>
);

const ConnectComponent = () => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography>
                Ha összekapcsolod a fiókodat a Discord felhasználóddal, akkor a szerverünkön számos új funkció nyílik fel és használhatod azt a bejelentkezéshez is.
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Button
                color={"primary"}
                variant={"contained"}
                onClick={async () => window.location.replace(await Discord.connect())}
            >
                Összekapcsolás
            </Button>
        </Grid>
    </Grid>
);

const LoadingComponent = () => (
    <Grid container spacing={2} alignItems={"center"}>
        <Grid item>
            <Skeleton
                variant={"circle"}
                width={64}
                height={64}
            />
        </Grid>
        <Grid item style={{ width: "calc(100% - 80px)"}}>
            <Typography>
                <Skeleton />
            </Typography>
            <Typography variant={"body2"} gutterBottom>
                <Skeleton />
            </Typography>
            <Typography variant={"body2"}>
                <Skeleton />
            </Typography>
        </Grid>
    </Grid>
);

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
    },
}));

export default DiscordPage;