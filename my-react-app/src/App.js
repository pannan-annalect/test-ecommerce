import './app.scss';
import { createTheme,ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import HomeComponent from './routes/home/home.component';
import FooterComponent from './components/footer/footer.component';
import AboutUs from './components/about-us/AboutUs.comopnent';
import ContactUs from './components/contact-us/ContactUs.comopnent';
import LoginSignUp from './components/login-signup/LoginSIgnUp.component';
import AllProductsListing from './routes/All-Products/AllProducts.component';
const theme = createTheme({
  typography:{
    "fontFamily":'"Roboto","sans-serif"'
  },
  palette:{
    text:{
      primary:'#3c3c3c'
    },
    primary:{
      main:'#000000',
    }
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontSize:'16px',
          lineHeight:'30px',
          minHeight:'54px'
        }
      }
    },
    MuiCard:{
      styleOverrides:{
        root:{
          borderRadius:'5px'
        }
      }
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">   
        <Router>  
          <HeaderComponent/>   
            <Routes>      
              <Route path="/" element={<HomeComponent/>} />
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/contact-us" element={<ContactUs/>} />
              <Route path="/auth" element={<LoginSignUp/>} />
              <Route path="/all-product" element={<AllProductsListing/>} />
            </Routes>
          <FooterComponent />
      </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
