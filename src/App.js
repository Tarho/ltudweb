import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
