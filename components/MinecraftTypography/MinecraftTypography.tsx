import { makeStyles, Typography, TypographyProps } from "@material-ui/core";

const MinecraftTypography = (props: TypographyProps) => {
    const classes = useStyles();

    return (
        <Typography {...props} className={`${props.className} ${classes.text}`}>
            {props.children}
        </Typography>
    );
};

const useStyles = makeStyles(() => ({
    text: {
        fontFamily: `"Minecraftia", "Roboto", sans-serif`,
        lineHeight: "initial",
        height: 32,
    },
}));

export default MinecraftTypography;