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
                <Grid item xs={12} md={6}>
                    <img src={aboutimage} />
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Grid className="grid-content">
                        <Typography variant="h2">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Phasellus feugiat lacus nec risus faucibus, ullamcorper tempor leo pellentesque.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Grid className="grid-content">
                        <Typography variant="h2">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget vulputate metus, non maximus risus. Phasellus feugiat lacus nec risus faucibus, ullamcorper tempor leo pellentesque.</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
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
                                Lorem ipsum dolor sit amet
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
                                Lorem ipsum dolor sit amet
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
        


        

       
        
        

        <div className="dot-key-section">
            <h2>THE DOT & KEY PROMISE</h2>
            
            <div className="promise-container">
                <div className="promise-box">
                    <div>
                        <img src="//www.dotandkey.com/cdn/shop/t/952/assets/crnf.jpg?v=144518637420478652841685356657" alt="Consumer Research &amp; need fulfilment"/>
                    </div>
                    <div className="promise-txt">
                        <h3>CONSUMER RESEARCH &<br/>NEED FULFILMENT</h3>
                        <p>We always have our ear to the ground listening to consumer needs, and feed that to our team of skilled chemists who then work on new product ideas, new solutions, research on blends, cutting edge technology and creating prototypes.</p>
                    </div>
                </div>

                <div className="promise-box">
                    <div>
                        <img src="https://www.dotandkey.com/cdn/shop/t/952/assets/Testing-validation.jpg?v=96291345747492281441685356657" alt="Consumer Research &amp; need fulfilment"/>
                    </div>
                    <div className="promise-txt">
                        <h3>TESTING & VALIDATION</h3>
                        <p>We’re unaffected by trends because we launch new products only in response to genuine unaddressed needs expressed by our customers. And only after extensive research, do we deliver formulations of the highest quality and safety. All our products released only after a high performance grading standard is met.</p>
                    </div>
                </div>
            </div>

            <div className="promise-container">
                <div className="promise-box">
                    <div>
                        <img src="https://www.dotandkey.com/cdn/shop/t/952/assets/ima.jpg?v=937156809220645199716853566577" alt="Consumer Research &amp; need fulfilment"/>
                    </div>
                    <div className="promise-txt">
                        <h3>INGREDIENT & MATERIAL ASSESSMENT</h3>
                        <p>We like to be ahead of the curve, both in the technology we use and the science we incorporate. Our ingredients are sourced from the most reputed suppliers with all the necessary compliances verified and checked. As a result, our products promise to always be innovative, gentle-to-use and have the lowest impact on the environment.</p>
                    </div>
                </div>

                <div className="promise-box">
                    <div>
                        <img src="https://www.dotandkey.com/cdn/shop/t/952/assets/Label-transparency.jpg?v=43075071097887518831685356657g" alt="Consumer Research &amp; need fulfilment"/>
                    </div>
                    <div className="promise-txt">
                        <h3>LABEL TRANSPARENCY</h3>
                        <p>We believe you have a right to know what goes into your products. We list our ingredients clearly and consistently according to established standards. Our products are dermatologically tested to be 100% safe on skin, and are safe to life. We carefully formulate each of our products with “The Good Stuff” using as much from nature as possible.</p>
                    </div>
                </div>
            </div>

            <div className="promise-container">
                <div className="promise-box">
                    <div>
                        <img src="https://www.dotandkey.com/cdn/shop/t/952/assets/Production.jpg?v=103117539792042279541685356657" alt="Consumer Research &amp; need fulfilment"/>
                    </div>
                    <div className="promise-txt">
                        <h3>PRODUCTION</h3>
                        <p>We choose to work with our supply-chain & manufacturing partners after a thorough study of their quality standards and consistency. We evaluate based on compliance with our environment, technological, sanitisation and ethical standards.</p>
                    </div>
                </div>

                <div className="promise-box">
                    <div>
                        <img src="https://www.dotandkey.com/cdn/shop/t/952/assets/Packaging.jpg?v=134638703072571645821685356657" alt="Consumer Research &amp; need fulfilment"/>
                    </div>
                    <div className="promise-txt">
                        <h3>PACKAGING</h3>
                        <p>Making everyday beautiful matters to us; we design to inspire little joys. However, our packaging development isn’t just pretty to look at. We are mindful of its composition as well, focusing on inks and materials that are environmentally responsible and eliminating materials of concern.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default AboutUs;