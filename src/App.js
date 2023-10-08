import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactusquick from "./components/contactusquick";
import Contactus from "./pages/contactus";
import Slide from "./pages/slide";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            element={[
              <Navbar />,
              <Home />,
              <Slide />,
              <Main />,
              <Contactusquick />,
              <Footer />,
            ]}
          ></Route>
          <Route
            path="/contactus"
            element={[<Navbar />, <Contactus />, <Footer />]}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
