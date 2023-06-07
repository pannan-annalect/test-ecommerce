import { Grid, Link, List, Typography,ListItem,ListItemText } from "@mui/material";
import "./AboutUs.styles.scss"
import aboutbanner from '../../assets/images/about-banner.jpg'
import aboutimage from '../../assets/images/about-image.jpg'
import promiseimg from '../../assets/images/promise1.jpg'

const AboutUs = () =>{

return(
    <div className="aboutus-content">
        <div className="about-banner">
            <img src={aboutbanner} alt=""/>
        </div>
        <Grid className="container">
            <Typography variant="body1" className="banner-content">
            We want to change how we look after ourselves by drawing attention to the areas and the problems that we often overlook, or consider unimportant - but do in fact, affect how we feel and consequently how we appear. By addressing the root of these issues, we bring to you the key to a longer-lasting, deeper and more meaningful version of beautiful.
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={6} px={1}>
                    <img src={aboutimage} />
                </Grid>
                <Grid item xs={12} sm={6} px={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Grid className="grid-content">
                        <Typography variant="h2">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Phasellus feugiat lacus nec risus faucibus, ullamcorper tempor leo pellentesque.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="content-three">
                <Grid item xs={12} sm={6} px={1} display={'flex'} alignItems={'center'} justifyContent={'center'} className="content-left">
                    <Grid className="grid-content">
                        <Typography variant="h2">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Phasellus feugiat lacus nec risus faucibus, ullamcorper tempor leo pellentesque.</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} px={1}>
                    <img src={aboutimage} />
                </Grid>
            </Grid>
            <Grid className="content-one">
                <Typography variant="h2">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                <Typography variant="body1" sx={{mb:2}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Phasellus feugiat lacus nec risus faucibus, ullamcorper tempor leo pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Phasellus feugiat lacus nec risus faucibus, ullamcorper tempor leo pellentesque.</Typography>
                <Typography>
                    <Link href="#">Phasellus feugiat lacus nec &gt;</Link>
                </Typography>
            </Grid>
            <Grid className="content-two" container pb={'5%'}>
                <Grid className="ct-image" item xs={12} md={6}>
                    <img src={aboutimage} />
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Grid className="grid-content">
                        <Typography variant="h2">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Phasellus feugiat lacus nec risus faucibus, ullamcorper tempor leo pellentesque.</Typography>
                        <List className="about-items">
                            <ListItem>- Single-line item</ListItem>
                            <ListItem>- Single-line item</ListItem>
                            <ListItem>- Single-line item</ListItem>
                            <ListItem>- Single-line item</ListItem>
                            <ListItem>- Single-line item</ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className="about-promise">
                <Typography variant="h2" textAlign={"center"}>
                    Lorem ipsum dolor
                </Typography>
                <Grid container>
                    <Grid item xs={12} md={6} p={2}>
                        <Grid container className="promise-section">
                            <Grid className="promise-image">
                                <img src={promiseimg} />
                            </Grid>
                            <Grid className="promise-content">
                                <Typography variant="h2">
                                Lorem ipsum dolor <br/> sit amet
                                </Typography>
                                <Typography variant="body1"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} p={2}>
                        <Grid container className="promise-section">
                            <Grid className="promise-image">
                                <img src={promiseimg} />
                            </Grid>
                            <Grid className="promise-content">
                                <Typography variant="h2">
                                Lorem ipsum dolor <br/> sit amet
                                </Typography>
                                <Typography variant="body1"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} p={2}>
                        <Grid container className="promise-section">
                            <Grid className="promise-image">
                                <img src={promiseimg} />
                            </Grid>
                            <Grid className="promise-content">
                                <Typography variant="h2">
                                Lorem ipsum dolor <br/> sit amet
                                </Typography>
                                <Typography variant="body1"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} p={2}>
                        <Grid container className="promise-section">
                            <Grid className="promise-image">
                                <img src={promiseimg} />
                            </Grid>
                            <Grid className="promise-content">
                                <Typography variant="h2">
                                Lorem ipsum dolor <br/> sit amet
                                </Typography>
                                <Typography variant="body1"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} p={2}>
                        <Grid container className="promise-section">
                            <Grid className="promise-image">
                                <img src={promiseimg} />
                            </Grid>
                            <Grid className="promise-content">
                                <Typography variant="h2">
                                Lorem ipsum dolor <br/> sit amet
                                </Typography>
                                <Typography variant="body1"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} p={2}>
                        <Grid container className="promise-section">
                            <Grid className="promise-image">
                                <img src={promiseimg} />
                            </Grid>
                            <Grid className="promise-content">
                                <Typography variant="h2">
                                Lorem ipsum dolor <br/> sit amet
                                </Typography>
                                <Typography variant="body1"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
)
}

export default AboutUs;