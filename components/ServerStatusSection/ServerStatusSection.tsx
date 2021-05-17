import Status from "@lib/client/api/status";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Status as StatusType } from "mc-server-status";
import Image from "next/image";
import { useEffect, useState } from "react";

const ServerStatusSection = () => {
    const classes = useStyles();
    const [status, setStatus] = useState<StatusType>();

    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        setStatus(await Status.get());
    };

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            {status?.players?.online !== undefined ? (
                                <Typography variant={"h4"} align={"center"}>
                                    {status.players.online}
                                </Typography>
                            ) : (
                                <Skeleton height={41} />
                            )}
                            <Typography align={"center"}>
                                online
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            {status?.players?.max !== undefined ? (
                                <Typography variant={"h4"} align={"center"}>
                                    {status.players.max}
                                </Typography>
                            ) : (
                                <Skeleton height={41} />
                            )}
                            <Typography align={"center"}>
                                férőhely
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            {status?.version !== undefined ? (
                                <Typography variant={"h4"} align={"center"}>
                                    {status.version.name}
                                </Typography>
                            ) : (
                                <Skeleton height={41} />
                            )}
                            <Typography align={"center"}>
                                verzió
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant={"h4"} align={"center"}>
                                {6}
                            </Typography>
                            <Typography align={"center"}>
                                adminisztrátor
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

const useStyles = makeStyles(() => ({
    background: {
        background: "url(/img/bg.jpg)",
        backgroundSize: "cover",
    },
    container: {
        backdropFilter: "blur(32px) brightness(50%)",
        paddingTop: 32,
        paddingBottom: 32,
    }
}));

export default ServerStatusSection;