import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import HomeComponent from './routes/home/home.component';
import FooterComponent from './components/footer/footer.component';
import AboutUs from './components/about-us/AboutUs.comopnent';

function App() {
  return (
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
  );
}

export default App;
