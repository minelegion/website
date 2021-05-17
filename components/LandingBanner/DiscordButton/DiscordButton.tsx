import DiscordIcon from "@components/DiscordIcon";
import { Button, ButtonProps, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#5865F2",
            contrastText: "#FFFFFF",
        }
    }
});

const DiscordButton = (props: ButtonProps) => (
    <ThemeProvider theme={theme}>
        <Button {...props} startIcon={<DiscordIcon />}>
            Discord
        </Button>
    </ThemeProvider>
);

export default DiscordButton;
