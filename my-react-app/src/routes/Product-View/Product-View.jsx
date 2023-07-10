
import * as React from "react";
import { Typography, Grid, Box, Link, Button, List, ListItem, ListItemText,Tabs,Tab, Container } from "@mui/material";
import PropTypes from 'prop-types';
import './Product-View.scss'
import productimage from '../../assets/images/best-seller.jpg';
import {Star} from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CustomerReview from "./CustomerReview";

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
    const [expanded, setExpanded] = React.useState(false);

  const handleaccordChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <>
        <div className="product-view">
            <Grid container className="container">
                <Grid item md={5} xs={12} sx={{textAlign:'center', p:'0 25px'}}>
                    <img src={productimage} alt=""/>
                    <div style={{background: '#f8f8f8', marginTop: '-5px'}}>
                        <Box>
                            <List className="srtdesc" sx={{pl:4}}>
                                <ListItem sx={{p: '0 15px'}}>
                                    <ListItemText sx={{color:'#ff6781'}}>
                                        <strong style={{ fontSize:'1.7em', fontFamily: 'Tiempos Medium Italics !important'}}>Perks to love</strong>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{display:"list-item", p: '0 15px'}}>
                                    <ListItemText>Rs.400 OFF on 1299+ | Code: OFF400</ListItemText>
                                </ListItem>
                                <hr style={{width: '80%', margin: '0'}} />
                                <ListItem sx={{display:"list-item", p: '0 15px'}}>
                                    <ListItemText>Rs.800 OFF on 1999+ | Code: OFF800</ListItemText>
                                </ListItem>
                                <hr style={{width: '80%', margin: '0'}} />
                                <ListItem sx={{display:"list-item", p: '0 15px'}}>
                                    <ListItemText>Rs.200 OFF on 999+ | Code: OFF20</ListItemText>
                                </ListItem>
                                <hr style={{width: '80%', margin: '0'}} />
                                <ListItem sx={{display:"list-item", p: '0 15px'}}>
                                    <ListItemText>FREE Moisturizer (15ml) above Rs.699</ListItemText>
                                </ListItem>
                                <hr style={{width: '80%', margin: '0'}} />
                                <ListItem sx={{display:"list-item", p: '0 15px'}}>
                                    <ListItemText>Flat 25% OFF on Combos</ListItemText>
                                </ListItem>
                                <hr style={{width: '80%', margin: '0'}} />
                                <ListItem sx={{display:"list-item", p: '0 15px'}}>
                                    <ListItemText>35% OFF on Haircare</ListItemText>
                                </ListItem>
                                <hr style={{width: '80%', margin: '0'}} />
                            </List>
                        </Box>
                    </div>
                    <div style={{textAlign:'right'}}>*Offer Not Valid on Combos & Merch</div>
                </Grid>
                <Grid item md={7} xs={12} sx={{textAlign:'center', p:'0 25px'}}>
                    <Grid>
                        <Typography variant="h2" sx={{fontWeight: '600', 
                        fontSize: '2rem', mb:'0.5em'}} className="product-title">
                            Vitamin C Daily Glow Booster Combo
                        </Typography>
                        <Typography component="div"  className="product-benefit">
                            Sicilian Blood Orange for Even Toned, Glowing Skin
                        </Typography>
                        <Typography component="div" className="product-type">
                             FACE WASH 80ML, SERUM 30ML, MOISTURIZER 60ML, SUNSCREEN 50G
                        </Typography>
                        <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                            <Link href="#">8 Reviews</Link>
                        </Typography>
                        <div style={{marginBottom:'1em'}}>
                            <Button variant="contained" sx={{borderRadius:0,width:'80%',minHeight:'1.5em', boxShadow:'none',mb:1}}>Sold Out</Button>
                            <Button variant="contained" sx={{borderRadius:0,width:'80%',minHeight:'1.5em', boxShadow:'none',background:'#3c3c3c'}}>Notify Me</Button>
                        </div>
                        <div>
                            <List sx={{listStyleType:'disc',pl:4}}>
                                <ListItem sx={{display:"list-item",p:0}}>
                                    <ListItemText>
                                        <em><strong>Vitamin C Foaming Face Wash:</strong> Sulphate-free, daily facewash with triple vitamin C for clean, even-toned &amp; glowing skin.</em>
                                    </ListItemText>
                                    </ListItem>
                                <ListItem sx={{display:"list-item",p:0}}>
                                    <ListItemText>
                                        <em><strong>10% Vitamin C+E Serum:</strong> Lightweight serum with 5% Niacinamide to treat dullness, dark spots &amp; pigmentation.</em>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{display:"list-item",p:0}}>
                                    <ListItemText>
                                        <em><strong>Vitamin C+E Moisturizer:</strong> Non-comedogenic face cream with Sicilian Blood Orange for moisturised, glowing skin.</em>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{display:"list-item",p:0}}>
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
                            <Grid container className="benefit-section">
                                <Grid item sm={6} className="benefit-content">
                                    <Typography className="detail-head" variant="h2">
                                        Benefits
                                    </Typography>
                                    <List sx={{listStyleType:'disc',pl:4, margin: '0 0 2em 9em'}}>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0'}}>
                                            <ListItemText>
                                            Treats dullness for glowing skin.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0'}}>
                                            <ListItemText>
                                            Fades dark spots & pigmentation.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0'}}>
                                            <ListItemText>
                                            Promotes even-toned, firm skin.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0'}}>
                                            <ListItemText>
                                            Blocks UVA+UVB rays & prevents tanning.
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item sm={6} className="benefit-img">
                                    <img style={{width:'60%', borderRadius:'50%'}} src={productimage} alt=""/>
                                </Grid>
                            </Grid>
                            <Grid container className="skin-care">
                                <Grid item sm={4} className="skincare-img">
                                    <img style={{width:'80%', borderRadius:'50%', border: '5px solid white'}} src={productimage} alt=""/>
                                </Grid>
                                <Grid item sm={8} className="">
                                    <Typography className="detail-head" sx={{textAlign: 'left'}} variant="h2">Who is it for?</Typography>
                                    <hr />
                                    <Typography sx={{fontFamily: 'Tiempos Medium Italics', fontSize: '1.7rem',
                                    marginLeft: '3%', fontWeight: 'bold'}} variant="h4">Targets</Typography>
                                    <List sx={{listStyleType:'disc',pl:4}}>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0',float: 'left', 
                                        fontSize:'', width: '44%'}}>
                                            <ListItemText>
                                                Dullness, Dark Spots
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0', float: 'left',
                                         fontSize:'', width: '44%'}}>
                                            <ListItemText>
                                                Pigmentation
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0', float: 'left',
                                         fontSize:'', width: '44%'}}>
                                            <ListItemText>
                                                Uneven Skin Tone
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0', float: 'left',
                                         fontSize:'', width: '44%'}}>
                                            <ListItemText>
                                                Sun Damage
                                            </ListItemText>
                                        </ListItem>
                                    </List>

                                </Grid>
                            </Grid>
                            <Grid sx={{}} className="skin-type">
                                <Typography className="skin-head" variant="h3" >Skin Types &nbsp;
                                    <Typography className="skin-text" variant="span" sx={{fontSize:'1.3rem'}}>
                                        For All Skin Types
                                    </Typography>
                                </Typography>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{textAlign:'center'}}>
                                        <img style={{width:'50%',  borderRadius:'50%'}} src={productimage} alt=""/>
                                        </Grid>
                                        <Grid item xs={9} className="ingrsec">
                                        <Grid container>
                                            <Grid item>
                                                <Typography className="ingriHead">TRIPLE VITAMIN C</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography>Treats hyperpigmentation &amp; uneven skin tone.</Typography>
                                            </Grid>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{textAlign:'center'}}>
                                        <img style={{width:'50%',  borderRadius:'50%'}} src={productimage} alt=""/>
                                        </Grid>
                                        <Grid item xs={9} className="ingrsec">
                                            <Grid container>
                                                <Grid item>
                                                    <Typography className="ingriHead">SICILIAN BLOOD ORANGE</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography>Boosts collagen, firms &amp; re-energises skin.</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{textAlign:'center'}}>
                                        <img style={{width:'50%',  borderRadius:'50%'}} src={productimage} alt=""/>
                                        </Grid>
                                        <Grid item xs={9} className="ingrsec">
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography className="ingriHead">Niacinamide </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography>Fade dark spots &amp; acne scars.</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{textAlign:'center'}}>
                                        <img style={{width:'50%',  borderRadius:'50%'}} src={productimage} alt=""/>
                                        </Grid>
                                        <Grid item xs={9} className="ingrsec">
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography className="ingriHead">Vitamin E</Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography>Helps boost Vitamin C efficacy.</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ textAlign: "center", margin: '2em'}}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleaccordChange('panel1')}>
                                    <AccordionSummary
                                    // expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{alignItems: 'center', justifyContent: 'center'}}
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        FULL INGREDIENT LIST ↓
                                    </Typography>
                                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        <b>10% Vitamin C + E &amp; 5% Niacinamide Serum:</b> <br />Water, 
                                        Ethyl Ascorbic Acid, Ethoxydiglycol, Propanediol, Niacinamide, 
                                        1,3- Butylene Glycol, Citric Acid, Hydroxypropyl Guar, Disodium EDTA, 
                                        Allantoin, Sodium Gluconate, Ferulic Acid, Xanthan Gum, Hyaluronic Acid, 
                                        Tocopheryl Acetate, Alpha Arbutin, Laminaria Digitata Extract (and) 
                                        Cetyl-PG Hydroxyethyl Palmitamide (and) Ceramide mix, Citrus Aurantium 
                                        Dulcis (Blood Orange) Fruit Extract, Terminalia Ferdinandiana (Kakadu 
                                        Plum) Fruit Extract, Cucurbita Pepo (Pumpkin) Fruit Extract, Benzyl 
                                        Alcohol (and) Ethylhexylglycerin (and) Tocopherol. <b>Vitamin C Super 
                                        Bright Foaming Face Wash</b> <br /> Aqua, Cocamidopropyl Betaine, 
                                        Glycerine, Caprylyl/Capryl Glucoside, Sodium Methyl Cocoyl Taurate, 
                                        Disodium Cocoyl Glutamate, Ethyl Ascorbic Acid, Sodium Ascorbyl Phosphate,
                                        Silanetriol (and) Hyaluronic Acid, Panthenol, Citrus Sinensis (Blood 
                                        Orange) Fruit Extract, Carica Papaya (Papaya) Fruit Extract, Terminalia 
                                        Ferdinandiana (Kakadu Plum) Fruit Extract, Citric Acid, BHT, Disodium 
                                        EDTA, Benzyl Alcohol (and) Ethylhexylglycerin (and) Tocopherol, IFRA 
                                        Certified Allergen Free Fragrance, CI 15985, CI 45100 <br /> <b>Vitamin C + 
                                        E Moisturizer With Sicilian Blood Orange</b><br /> Butyrospermum Parkii 
                                        (Shea) Butter, Ethyl Ascorbic Acid, Tocopheryl Acetate, Terminalia 
                                        Ferdinandiana (Kakadu Plum) Fruit Extract, Citrus Sinensis (Blood Orange) 
                                        Fruit Extracts. <br /><br /> 
                                        <b>Vitamin C + E SPF 50 Sunscreen</b><br />Aqua, Ethylhexyl Methoxycinnamate (and) 
                                        Butyl Methoxydibenzoylmethane (and) Benzophenone-3 (and) Phospholipids, 
                                        Diethylhexyl Carbonate, Titanium Dioxide (and) Silica, Glyceryl Citrate/Lactate
                                        /Linoleate/Oleate, Caprylic/Capric Triglyceride, Coco-Caprylate/Caprate, 
                                        Glycerin, Propanediol, Polyacrylate-13 (and) Polyisobutene (and) Polysorbate 20, 
                                        Polyacrylate Crosspolymer 6 , Ascorbyl Glucoside , Fructooligosaccharides (and) 
                                        Beta Vulgaris Root Extract, Tocopheryl Acetate, Terminalia Ferdinandiana (Kakadu 
                                        Plum) Fruit Extract, Citrus Cinennsis (Blood Orange) Fruit Extract, Phenoxyethanol , 
                                        Ethylhexylglycerin, Trisodium Ethylenediamine Disuccinate, Xanthan Gum, 
                                        Citric Acid.<br />
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
      
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Grid container className="howtosec">
                                <Grid item xs={12}>
                                    <Typography className="hwtushead" variant="h2">
                                        How To Use?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <List sx={{listStyleType:'disc',pl:4, margin: '0 0 2em 9em'}}>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0'}}>
                                            <ListItemText>
                                                Step 1: Vitamin C Face Wash: Gently massage, lather & rinse.
                                                Pat Dry.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0'}}>
                                            <ListItemText>
                                                Step 2: 10% Vitamin C Serum: Apply 3-4 drops, pat & 
                                                let it get absorbed.
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{display:"list-item",padding:'0 0 2em 0'}}>
                                            <ListItemText>
                                                Step 3: Vit C+E Moisturiser: Dot on the face & 
                                                massage gently.
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image_563.png?v=1667800623" alt=""/>
            </Grid>
                            <Grid>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleaccordChange('panel2')}>
                                    <AccordionSummary
                                    // expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{alignItems: 'center', justifyContent: 'center'}}
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0, textAlign:'center' }}>
                                        FAQ ↓
                                    </Typography>
                                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography><strong>Q. Will this serum improve my skin tone?</strong></Typography>
                                        <Typography>A. The serum is powered by 10% Triple Vitamin C+5% 
                                            Niacinamide that helps fade dark, hyperpigmentation and 
                                            dullness to provide even-toned, glowing skin. 
                                            It also boosts collagen with the help of Sicilian Blood 
                                            Orange by reversing free radical damage for firmer skin.
                                        </Typography>
                                        <Typography><strong>Q. Which skin type is this combo suitable for?</strong></Typography>
                                        <Typography>A. This combo is suitable for all skin types. It is 
                                            also beginner friendly which means it suits the skin that is 
                                            new to Vitamin C. It can be easily incorporated into your 
                                            daily skincare routine
                                        </Typography>
                                        <Typography><strong>Q. Is this serum suitable for both men & women?</strong></Typography>
                                        <Typography>A. This face serum works equally well for both men and women.</Typography>
                                        <Typography><strong>Q. What is the recommended age for using this serum?</strong></Typography>
                                        <Typography>A. Anyone over 18 years of age can use this product.</Typography>
                                        <Typography><strong>Q. Why do I need Vitamin C?</strong></Typography>
                                        <Typography>A. Vitamin C is the answer to all your skin queries 
                                            concerning dullness, dark spots, pigmentation and sun damage. 
                                            It is a tried and tested antioxidant that shows the best 
                                            improvement in your complexion over time. Our users have 
                                            observed a visible reduction in dark spots, hyperpigmentation, 
                                            dullness and even fine lines and wrinkles. It is the one-stop 
                                            solution for anyone facing the above-mentioned skin concerns.
                                        </Typography>
                                        <Typography><strong>Q. Will the Vitamin C Sunscreen make my skin look greasy?</strong></Typography>
                                        <Typography>A. No. Our Vitamin C Sunscreen is formulated to give 
                                            your skin a beautiful glowy finish without making it look 
                                            greasy. It will give your skin an invisible finish without any 
                                            white cast or heavy feeling.
                                        </Typography>
                                        <Typography><strong>Q. Why Vitamin C+SPF 50?</strong></Typography>
                                        <Typography>A. Vitamin C is popularly known to fight dullness, 
                                            pigmentation, dark spots & uneven skin tone. SPF on the 
                                            other hand is known to protect skin against the damaging UVB 
                                            & UVA rays. When mixed together, it provides even-toned, 
                                            glowing & protected skin every day, thus truly making it 
                                            'The Perfect Match Made in Skin Heaven'.
                                        </Typography>
                                        <Typography><strong>Q. I have sensitive skin, can I use this combo?</strong></Typography>
                                        <Typography>A. Yes, since our combo has been designed for all 
                                            skin types. However, post-application, if you feel any 
                                            tingling effect or irritation that persists, you can stop 
                                            using it immediately.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleaccordChange('panel3')}>
                                    <AccordionSummary
                                    // expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{alignItems: 'center', justifyContent: 'center'}}
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0, textAlign:'center' }}>
                                    MORE INFORMATION ↓
                                    </Typography>
                                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>Manufactured by N/A </Typography>
                                        <Typography>Expiry date N/A</Typography>
                                        <Typography>Country of origin INDIA</Typography>
                                        <Typography>MRP 2080</Typography>
                                        <Typography>Net Qty N/A</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
        </div>
        <CustomerReview />
        </>
    )
}

export default ProductView;