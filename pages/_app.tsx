import { CssBaseline, NoSsr, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles"
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider as SessionProvider } from "next-auth/client";
import Head from "next/head";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider>
            <CssBaseline />
            <Head>
                <title>
                    MineLegion
                </title>
            </Head>
            <ThemeProvider theme={theme}>
                <SnackbarProvider>
                    <NoSsr>
                        <Component {...pageProps} />
                    </NoSsr>
                </SnackbarProvider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export default MyApp;
