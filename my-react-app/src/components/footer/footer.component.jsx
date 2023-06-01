import React from "react";
import { Grid, Box, Container,IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import './footer.scss';
import { Link } from 'react-router-dom';
const FooterComponent = () => {
    return(
        <>
            <footer className="footer">
                <Container className="container">
                    <Grid container >
                        <Grid item md={4} xs={12} sx={{py:1}}>
                            <Typography variant="h6">
                                Get to know us 
                            </Typography>
                            <nav>
                                <ul className="footer-links">
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">About Us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Grid>
                        <Grid item md={4} xs={12} sx={{py:1}}>
                            <Typography variant="h6">
                                Get to know us 
                            </Typography>
                            <ul className="footer-links">
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={4} xs={12} sx={{py:1}}>
                            <Typography variant="h6">
                                Stay updated
                            </Typography>
                            <Typography>
                                Follow us
                            </Typography>
                            <Typography>
                                &copy; 2023 Lorem
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;
