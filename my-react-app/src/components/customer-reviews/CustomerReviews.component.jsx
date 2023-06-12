import { Typography,Card,CardContent } from "@mui/material";
import {Star,Verified} from '@mui/icons-material';
import userimage from '../../assets/images/user-image.png';
import Slider from "react-slick";
import "./CustomerReviews.scss";

function CustomerReviews() {
  const settings = {
    className: "slider",
    //innerWidth:"100%",
    arrows:false,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    draggable: true,
    accessibility: false,
    //centerMode: true,
    //variableWidth:true,
    //autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className="home-testimonail">
      <div className="title-outer">
        <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Customer</Typography>
        <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Reviews</Typography>
      </div>
      <Slider {...settings}>
        <div>
        <Card className="" sx={{maxWidth:360,margin:'0 auto',boxShadow:'none',border:'none',overflow:'visible',position:'relative',padding:'0 0 20px'}}>
              <div className="testimonial-image">
                <img src={userimage} alt=""/>
              </div>
              <CardContent sx={{paddingTop:'40px',boxShadow:'0 0 5px rgba(0,0,0,.1)',borderRadius:'10px'}}>
                <Typography className="testimonial-rating" sx={{display: "flex"}}>
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                </Typography>
                <Typography className="testimonial-title" gutterBottom component="div" sx={{mx:1,mb:0}}>
                    <em><strong>Lorem Ipsum</strong></em>
                </Typography>
                <Typography className="testimonial-desc" sx={{mx:1}}>
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod purus mauris, nec pulvinar nulla tempus eget. Aenean id magna nec purus ornare laoreet. Sed dignissim ullamcorper odio, eget commodo ante dapibus congue. Vivamus ac fermentum ipsum. Vivamus porta leo a augue viverra fringilla vel in mi
                </Typography>
                <Typography className="testimonial-username" sx={{mt:4}}><strong>Name</strong> <Verified sx={{ml:0, color: '#2196f3',fontSize:30 }} /></Typography>
              </CardContent>
            </Card>
        </div>
        <div>
        <Card className="" sx={{maxWidth:360,margin:'0 auto',boxShadow:'none',border:'none',overflow:'visible',position:'relative',padding:'0 0 20px'}}>
              <div className="testimonial-image">
                <img src={userimage} alt=""/>
              </div>
              <CardContent sx={{paddingTop:'40px',boxShadow:'0 0 5px rgba(0,0,0,.1)',borderRadius:'10px'}}>
                <Typography className="testimonial-rating" sx={{display: "flex"}}>
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                </Typography>
                <Typography className="testimonial-title" gutterBottom component="div" sx={{mx:1,mb:0}}>
                    <em><strong>Lorem Ipsum</strong></em>
                </Typography>
                <Typography className="testimonial-desc" sx={{mx:1}}>
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod purus mauris, nec pulvinar nulla tempus eget. Aenean id magna nec purus ornare laoreet. Sed dignissim ullamcorper odio, eget commodo ante dapibus congue. Vivamus ac fermentum ipsum. Vivamus porta leo a augue viverra fringilla vel in mi
                </Typography>
                <Typography className="testimonial-username" sx={{mt:4}}><strong>Name</strong> <Verified sx={{ml:0, color: '#2196f3',fontSize:30 }} /></Typography>
              </CardContent>
            </Card>
        </div>
        <div>
        <Card className="" sx={{maxWidth:360,margin:'0 auto',boxShadow:'none',border:'none',overflow:'visible',position:'relative',padding:'0 0 20px'}}>
              <div className="testimonial-image">
                <img src={userimage} alt=""/>
              </div>
              <CardContent sx={{paddingTop:'40px',boxShadow:'0 0 5px rgba(0,0,0,.1)',borderRadius:'10px'}}>
                <Typography className="testimonial-rating" sx={{display: "flex"}}>
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                </Typography>
                <Typography className="testimonial-title" gutterBottom component="div" sx={{mx:1,mb:0}}>
                    <em><strong>Lorem Ipsum</strong></em>
                </Typography>
                <Typography className="testimonial-desc" sx={{mx:1}}>
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod purus mauris, nec pulvinar nulla tempus eget. Aenean id magna nec purus ornare laoreet. Sed dignissim ullamcorper odio, eget commodo ante dapibus congue. Vivamus ac fermentum ipsum. Vivamus porta leo a augue viverra fringilla vel in mi
                </Typography>
                <Typography className="testimonial-username" sx={{mt:4}}><strong>Name</strong> <Verified sx={{ml:0, color: '#2196f3',fontSize:30 }} /></Typography>
              </CardContent>
            </Card>
        </div>
        <div>
        <Card className="" sx={{maxWidth:360,margin:'0 auto',boxShadow:'none',border:'none',overflow:'visible',position:'relative',padding:'0 0 20px'}}>
              <div className="testimonial-image">
                <img src={userimage} alt=""/>
              </div>
              <CardContent sx={{paddingTop:'40px',boxShadow:'0 0 5px rgba(0,0,0,.1)',borderRadius:'10px'}}>
                <Typography className="testimonial-rating" sx={{display: "flex"}}>
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                </Typography>
                <Typography className="testimonial-title" gutterBottom component="div" sx={{mx:1,mb:0}}>
                    <em><strong>Lorem Ipsum</strong></em>
                </Typography>
                <Typography className="testimonial-desc" sx={{mx:1}}>
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod purus mauris, nec pulvinar nulla tempus eget. Aenean id magna nec purus ornare laoreet. Sed dignissim ullamcorper odio, eget commodo ante dapibus congue. Vivamus ac fermentum ipsum. Vivamus porta leo a augue viverra fringilla vel in mi
                </Typography>
                <Typography className="testimonial-username" sx={{mt:4}}><strong>Name</strong> <Verified sx={{ml:0, color: '#2196f3',fontSize:30 }} /></Typography>
              </CardContent>
            </Card>
        </div>
      </Slider>
    </div>
    </>
  );
}

export default CustomerReviews;