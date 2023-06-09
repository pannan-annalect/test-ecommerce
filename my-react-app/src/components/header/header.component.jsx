import React from "react";
import logo from '../../assets/images/logo.png';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Grid, Box, Container } from '@mui/material'
import { Link } from 'react-router-dom';
import './header.scss';
const HeaderComponent = () => {
    return(
        <>
            <header className="header">
                <Container className="container">
                    <Grid container >
                        <Grid item xs={12} className="topheader">
                            <div className="logo-nav">
                                <Link to="/">
                                    <Box className="logo" component="img" src={logo} alt="logo" height={83}/>
                                </Link>
                                <nav>
                                    <ul sx={{mx:2}} className="header-nav">
                                        <li><Link href="#">Best Sellers</Link></li>
                                        <li><Link to="all-product">Shop all Products</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="myaccount">
                                <Link sx={{mx:1}} href="#"><ShoppingBagOutlinedIcon sx={{ color: '#3c3c3c',fontSize:32 }} /></Link>
                                <Link sx={{mx:1}} to="/auth"><PersonOutlinedIcon sx={{ color: '#3c3c3c',fontSize:32 }} /> </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </header>
        </>
    )
}

export default HeaderComponent;
