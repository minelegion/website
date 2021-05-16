import { Grid, ListItem, makeStyles, Typography } from "@material-ui/core";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { Skeleton } from "@material-ui/lab";
import { useRouter } from "next/router";

const SidenavHeader = () => {
    const [session, isLoading] = useSession();
    const router = useRouter();

    const classes = useStyles();

    if(!session && !isLoading) router.push("/dashboard/auth/signin");

    return (
        <Grid container className={classes.wrapper} alignItems={"center"}>
            <Grid item className={classes.icon}>
                {session ? (
                    <Image
                        className={classes.rounded}
                        src={`/api/avatar/${session.user?.name}`}
                        width={64}
                        height={64}
                        quality={100}
                    />
                ) : (
                    <Skeleton variant="rect" className={classes.rounded} width={64} height={64} />
                )}
            </Grid>
            <Grid item className={classes.data}>
                <Typography variant="body1" component="p" noWrap>
                    {session ? (
                        session.user?.name
                    ) : (
                        <Skeleton variant="rect" className={classes.rounded} width={172} height={24} />
                    )}
                </Typography>
                <Typography variant="body2" component="p">
                    Tulajdonos
                </Typography>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        backgroundColor: theme.palette.primary.main,
        padding: 16,
    },
    rounded: {
        userSelect: "none",
        borderRadius: theme.shape.borderRadius,
    },
    icon: {
        width: 64,
        height: 64,
        marginRight: 16,
        display: "flex",
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
    },
    data: {
        width: 172,
        maxWidth: 172,
    }
}));

export default SidenavHeader;