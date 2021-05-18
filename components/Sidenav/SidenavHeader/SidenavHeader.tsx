import { createMuiTheme, Grid, ListItem, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { Skeleton } from "@material-ui/lab";
import { useRouter } from "next/router";
import { useRole } from "@components/RoleProivder";
import { roles, RoleType } from "@lib/client/api/role";

const createTheme = (role: RoleType) => createMuiTheme({
    palette: {
        primary: roles[role]?.color,
    },
});

const SidenavHeader = () => {
    const [session, isLoading] = useSession();
    const router = useRouter();
    const role = useRole();

    const classes = useStyles();

    if (!session && !isLoading) router.push("/dashboard/auth/signin");

    const theme = createTheme(role);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                className={classes.wrapper}
                alignItems={"center"}
                style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                }}
            >
                <Grid item className={classes.icon}>
                    {session ? (
                        <Image
                            className={classes.rounded}
                            src={`/api/avatar/${session.user?.name}`}
                            width={48}
                            height={48}
                            unoptimized={true}
                        />
                    ) : (
                        <Skeleton
                            variant="rect"
                            className={classes.rounded}
                            width={48}
                            height={48}
                            animation={"wave"}
                        />
                    )}
                </Grid>
                <Grid item className={classes.data}>
                    <Typography variant="body1" component="p" noWrap>
                        {session ? (
                            session.user?.name
                        ) : (
                            <Skeleton
                                variant={"text"}
                                animation={"wave"}
                                height={24}
                            />
                        )}
                    </Typography>
                    {role ? (
                        <Typography variant="body2" component="p">
                            {roles[role].name}
                        </Typography>
                    ) : (
                        <Skeleton
                            variant={"text"}
                            animation={"wave"}
                            height={20}
                        />
                    )}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 24,
        paddingBottom: 24,
    },
    rounded: {
        userSelect: "none",
        borderRadius: theme.shape.borderRadius,
    },
    icon: {
        width: 48,
        height: 48,
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