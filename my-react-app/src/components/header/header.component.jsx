import React from "react";
import { AccountCircle } from '@mui/icons-material';
import { Grid, Box, Container,IconButton, InputAdornment, TextField, Typography } from '@mui/material'


const HeaderComponent = () => {
    return(
        <>
            <Container className="container">
                <header>
                    <Grid container >
                        <Grid item xs={12}>
                            <Box component="img" src="https://www.dotandkey.com/cdn/shop/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg" alt="logo"/>
                        </Grid>
                    </Grid>
                </header>
            </Container>
        
        </>
    )
}

export default HeaderComponent
