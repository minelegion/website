import { Card, makeStyles, useMediaQuery } from "@material-ui/core";
import { PropsWithChildren } from "react";

type PropsType = {
    maxHeightOnMobile?: boolean;
};

const ResponsiveCard = ({ children, maxHeightOnMobile }: PropsWithChildren<PropsType>) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles();

    return (
        <Card
            elevation={isMobile ? 0 : undefined}
            className={`${isMobile ? classes.mobileCard : ""} ${isMobile && maxHeightOnMobile ? classes.maxHeight: ""}`}
        >
            {children}
        </Card>
    );
};

const useStyles = makeStyles(() => ({
    mobileCard: {
        borderRadius: "0 !important",
        marginRight: -16,
        marginLeft: -16,
    },
    maxHeight: {
        minHeight: "100vh",
    }
}));

export default ResponsiveCard;