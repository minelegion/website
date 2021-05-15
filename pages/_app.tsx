import { createMuiTheme, CssBaseline, NoSsr, ThemeProvider } from "@material-ui/core";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider as SessionProvider } from "next-auth/client";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { lightBlue, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default: "#000",
            paper: "#111111",
        },
        primary: lightBlue,
        secondary: pink,
    },
});


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SnackbarProvider>
            <SessionProvider>
                <CssBaseline />
                <Head>
                    <title>MineLegion</title>
                    
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                </Head>
                <ThemeProvider theme={theme}>
                    <NoSsr>
                        <Component {...pageProps} />
                    </NoSsr>
                </ThemeProvider>
            </SessionProvider>
        </SnackbarProvider>
    );
};

export default MyApp;
