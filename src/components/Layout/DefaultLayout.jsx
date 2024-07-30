import {Container, Grid} from "@mui/material";

import {styled} from '@mui/material/styles';
import Header from "./Header.jsx";

const useStyle = styled(() => ({
    color: {
        backgroundColor: 'black',
    }
}))

const DefaultLayout = ({children}) => {
    const classes = useStyle();

    return (
        <Container style={{width: '100%'}}>
            <Header></Header>
            <Grid
                container
                spacing={2}
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Grid
                    item
                    xs={12}
                    sm={4}
                    className={classes.color}>
                    {children}
                </Grid>
            </Grid>

        </Container>
    )
}

export default DefaultLayout;