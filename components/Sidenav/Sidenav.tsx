import { AppBar, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { HomeRounded as HomeIcon, MenuRounded as MenuIcon } from "@material-ui/icons";
import { Fragment, PropsWithChildren, useState } from "react";
import LogoutButton from "./LogoutButton";
import SidenavHeader from "./SidenavHeader";

const Sidenav = ({ children }: PropsWithChildren<{}>) => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const DrawerContent = (
        <Fragment>
            <SidenavHeader />
            <List className={classes.drawer}>
                <ListItem button key={"home-button"}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={"Főoldal"}
                    />
                </ListItem>
                <Divider />
                <LogoutButton />
            </List>
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
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            marginTop: 64,
        },
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