import { Container, Divider, Grid, List, ListItem, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import Image from "next/image";

const LandingFooter = () => {
    const router = useRouter();

    return (
        <Paper>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Image src={"/img/logo.png"} width={2086} height={320} />
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                Központ    
                            </ListItem>
                            <ListItem>
                                Fejlesztőknek    
                            </ListItem>
                            <ListItem>
                                Márka    
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default LandingFooter;