import {Container, Grid} from "@mui/material";
import Header from "./Header.jsx";

const DefaultLayout = ({children}) => {

    return (
        <>
            <Header />
            <Container style={{width: '100%', marginTop: '1rem'}} >
                <Grid
                    container
                    spacing={2}
                    alignItems="flex-start"
                    justifyContent="flex-start"
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default DefaultLayout;