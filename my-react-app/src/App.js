import logo from './logo.svg';
import './app.scss';
import HeaderComponent from './components/header/header.component';
import HomeComponent from './routes/home/home.component';
import FooterComponent from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <HomeComponent/>
      <FooterComponent />
    </div>
  );
}

export default App;
