import './app.scss';
import { Suspense, lazy } from 'react';
import { createTheme,ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Loader = lazy(() => import('./components/loader/Loader.component'));
const HeaderComponent = lazy(() => import('./components/header/header.component'));
const HomeComponent = lazy(() => import('./routes/home/home.component'));
const FooterComponent = lazy(() => import('./components/footer/footer.component'));
const AboutUs = lazy(() => import('./components/about-us/AboutUs.comopnent'));
const ContactUs = lazy(() => import('./components/contact-us/ContactUs.comopnent'));
const LoginSignUp = lazy(() => import('./components/login-signup/LoginSIgnUp.component'));
const AllProductsListing = lazy(() => import('./routes/All-Products/AllProducts.component'));
const ProductView = lazy(() => import('./routes/Product-View/Product-View')) ;




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
          borderRadius:'5px',
          border:'1px solid #c7c7c7',
          boxShadow:'none'
        }
      }
    },
    MuiListItem:{
      styleOverrides:{
        root:{
          fontFamily:'Roboto'
        }
      }
    },
    MuiLink:{
      styleOverrides:{
        root:{
          textDecoration:'none'
        }
      }
    }
    
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader/>}>
        <div className="App">   
          <Router>  
            <HeaderComponent/>   
              <Routes>      
                <Route path="/" element={<HomeComponent/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/contact-us" element={<ContactUs/>} />
                <Route path="/auth" element={<LoginSignUp/>} />
                <Route path="/all-product" element={<AllProductsListing/>} />
                <Route path="/product-view" element={<ProductView/>} />
              </Routes>
            <FooterComponent />
        </Router>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
