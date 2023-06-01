import './app.scss';
import { createTheme,ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import HomeComponent from './routes/home/home.component';
import FooterComponent from './components/footer/footer.component';
import AboutUs from './components/about-us/AboutUs.comopnent';
const theme = createTheme({
  typography:{
    "fontFamily":'"Roboto","sans-serif"'
  },
  palette:{
    text:{
      primary:'#3c3c3c'
    },
  },
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
            </Routes>
          <FooterComponent />
      </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
