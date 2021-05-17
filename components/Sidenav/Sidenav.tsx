import { AppBar, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { HomeRounded as HomeIcon, InsertEmoticonRounded as SkinIcon, MenuRounded as MenuIcon, StarRounded as RanksIcon } from "@material-ui/icons";
import { useRouter } from "next/router";
import { Fragment, PropsWithChildren, useState } from "react";
import LogoutButton from "./LogoutButton";
import SidenavHeader from "./SidenavHeader";

const Sidenav = ({ children }: PropsWithChildren<{}>) => {
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const classes = useStyles();

    const DrawerContent = (
        <Fragment>
            <SidenavHeader />
            <div className={classes.drawer}>
                <List>
                    <ListItem
                        button
                        key={"home-button"}
                        onClick={() => router.push("/dashboard")}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={"Főoldal"}
                        />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem
                        onClick={() => router.push("/dashboard/skin")}
                        button
                        key={"skin-button"}
                    >
                        <ListItemIcon>
                            <SkinIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={"Kinézet"}
                        />
                    </ListItem>
                    <ListItem
                        onClick={() => router.push("/dashboard/ranks")}
                        button
                        key={"ranks-button"}
                    >
                        <ListItemIcon>
                            <RanksIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={"Rangok"}
                        />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <LogoutButton />
                </List>                
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            <Hidden mdUp>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            edge={"start"}
                            color={"inherit"}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6">
                            MineLegion
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Hidden>
            <Hidden smDown>
                <Drawer variant="permanent">
                    {DrawerContent}
                </Drawer>
            </Hidden>
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    open={open}
                    onClose={() => setOpen(false)}
                    keepMounted
                >
                    {DrawerContent}
                </Drawer>
            </Hidden>
            <div className={classes.main}>
                {children}
            </div>
        </Fragment>
    );
};

const DRAWER_WIDTH = 300;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: DRAWER_WIDTH,
        overflowX: "hidden",
    },
    main: {
        marginTop: 64,
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            marginLeft: DRAWER_WIDTH,
        },
    },
    title: {
        flexGrow: 1,
    },
}));

export default Sidenav;