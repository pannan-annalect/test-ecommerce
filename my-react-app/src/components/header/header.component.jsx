import React from "react";
import logo from '../../assets/images/logo.jpg';
import { ShoppingBagOutlinedIcon,PersonOutlineIcon } from '@mui/icons-material';
import { Grid, Box, Container,Link,IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import './header.scss';
const HeaderComponent = () => {
    return(
        <>
            <header className="header">
                <Container className="container">
                    <Grid container >
                        <Grid item xs={12} className="topheader">
                            <div className="logo-nav">
                                <Box className="logo" component="img" src={logo} alt="logo" height={83}/>
                                <nav>
                                <ul sx={{mx:2}} className="header-nav">
                                    <li><Link href="#">Best Sellers</Link></li>
                                    <li><Link href="#">Shop all Products</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="myaccount">
                                <Link sx={{mx:1}} href="#">Account</Link>
                                <Link sx={{mx:1}} href="#">Cart</Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </header>
        </>
    )
}

export default HeaderComponent;
