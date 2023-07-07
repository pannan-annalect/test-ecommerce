
import * as React from "react";
import { Typography, Grid, Box, Link, Button, List, ListItem, ListItemText,Tabs,Tab, Container } from "@mui/material";
import PropTypes from 'prop-types';
import './Product-View.scss'
import productimage from '../../assets/images/best-seller.jpg';
import {Star} from '@mui/icons-material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component='div'>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function ProductView() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <>
        <div className="product-view">
            <Grid container className="container">
                <Grid item md={5} xs={12}>
                    <img src={productimage} alt=""/>
                    <div>
                        <Box>
                            <List sx={{listStyleType:'disc',pl:4}}>
                                <ListItem sx={{display:"list-item",p:0}}>
                                    <ListItemText>
                                        <strong>Birthday Sale: Buy 2 Get 2 FREE Sitewide</strong>
                                    </ListItemText>
                                    </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <strong>Flash Sale: FREE Barrier Repair Facewash above Rs.1299</strong> 
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <strong>Deal of the Day: Free Watermelon Cleanser (15ml) on all orders</strong> 
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </div>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Grid>
                        <Typography variant="h2" className="product-title">
                            Vitamin C Daily Glow Booster Combo
                        </Typography>
                        <Typography component="div" className="product-benefit">
                            Sicilian Blood Orange for Even Toned, Glowing Skin
                        </Typography>
                        <Typography component="div" className="product-type">
                            Facewash
                        </Typography>
                        <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",mb:1}}>
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Link href="#">8 Reviews</Link>
                        </Typography>
                        <div>
                            <Button variant="contained" sx={{borderRadius:0,width:'100%', boxShadow:'none',mb:1}}>Sold Out</Button>
                            <Button variant="contained" sx={{borderRadius:0,width:'100%', boxShadow:'none',background:'#3c3c3c'}}>Notify Me</Button>
                        </div>
                        <div>
                            <List sx={{listStyleType:'disc',pl:4}}>
                                <ListItem sx={{display:"list-item",p:0}}>
                                    <ListItemText>
                                        <em><strong>Vitamin C Foaming Face Wash:</strong> Sulphate-free, daily facewash with triple vitamin C for clean, even-toned &amp; glowing skin.</em>
                                    </ListItemText>
                                    </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <em><strong>10% Vitamin C+E Serum:</strong> Lightweight serum with 5% Niacinamide to treat dullness, dark spots &amp; pigmentation.</em>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <em><strong>Vitamin C+E Moisturizer:</strong> Non-comedogenic face cream with Sicilian Blood Orange for moisturised, glowing skin.</em>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <strong>Vitamin C+E Sunscreen :</strong><em> 2-in-1 glow + protect SPF 50 sunscreen for <b>even-toned, glowing &amp; protected skin every day.</b></em>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="product-all-details">
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs className="product-tabs" value={value} onChange={handleChange} aria-label="product details">
                            <Tab label="Product Details" {...a11yProps(0)} />
                            <Tab label="Ingredient" {...a11yProps(1)} />
                            <Tab label="How To Use" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <div variant="div" className="product-tab-details">
                        <TabPanel value={value} index={0}>
                            <Grid className="benefit-section">
                                <Grid className="benefit-content">
                                    <Typography variant="h2">
                                        Benefits
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemText>
                                            Treats dullness for glowing skin.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                            Treats dullness for glowing skin.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                            Treats dullness for glowing skin.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                            Treats dullness for glowing skin.
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid className="benefit-img">
                                    <img src={productimage} alt=""/>
                                </Grid>
                            </Grid>
                            <Grid className="skin-care">
                                <Grid className="skincare-img">
                                    <img src={productimage} alt=""/>
                                </Grid>
                                <Grid className="">
                                    <Typography variant="h2">Who is it for?</Typography>
                                    <hr />
                                    <Typography variant="h4">Targets</Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemText>
                                                Dullness, Dark Spots
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                Dullness, Dark Spots
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                Dullness, Dark Spots
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                Dullness, Dark Spots
                                            </ListItemText>
                                        </ListItem>
                                    </List>

                                </Grid>
                            </Grid>
                            <Grid className="skin-type">
                                <Typography className="skin-head" variant="h3">Skin Types</Typography>
                                <Typography className="skin-text" variant="body1">For All Skin Types</Typography>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </div>
                </Grid>
            </Grid>
        </div>
        Product view
        </>
    )
}

export default ProductView;