import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/header.component';
import HomeComponent from './components/home/home.component';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <HomeComponent/>
    </div>
  );
}

export default App;
