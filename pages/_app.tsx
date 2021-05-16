import { createMuiTheme, CssBaseline, NoSsr, ThemeProvider } from "@material-ui/core";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider as SessionProvider } from "next-auth/client";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { lightBlue, pink } from "@material-ui/core/colors";
import { useRouter } from "next/router";
import Sidenav from "@components/Sidenav/Sidenav";
import { Fragment } from "react";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: lightBlue,
        secondary: pink,
    },
});


const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    const Wrapper =
        router.pathname.startsWith("/dashboard") && !router.pathname.includes("signin") ?
            Sidenav : Fragment;

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                <SessionProvider>
                    <CssBaseline />
                    <Head>
                        <title>MineLegion</title>

                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    </Head>
                    <NoSsr>
                        <Wrapper>
                            <Component {...pageProps} />
                        </Wrapper>
                    </NoSsr>
                </SessionProvider>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default MyApp;
