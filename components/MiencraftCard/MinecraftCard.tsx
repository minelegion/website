import { Card, CardProps, makeStyles } from "@material-ui/core";

const MinecraftCard = (props: CardProps) => {
    const classes = useStyles();

    return (
        <Card {...props} className={`${classes.container} ${props.className}`}>
            {props.children}
            <div className={classes.background}>

            </div>
        </Card>
    );
};

const useStyles = makeStyles((theme) => ({
    background: {
        marginTop: -192,
        maxWidth: "100%",
        background: `linear-gradient(to bottom, ${theme.palette.background.paper}, rgba(0, 0, 0, 0.5)), url('/img/brick.jpg')`,
        width: "100%",
        height: 192,
    },
    container: {
        transition: "all 0.1s ease-in",
        '&:hover': {
            transform: "scale(1.05)",
        },
    },
}));

export default MinecraftCard;