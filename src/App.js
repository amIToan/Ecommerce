import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Productpage from "./Pages/productPage";
import Footer from "./components/footer";
import Productdetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Productpage />} />
          <Route path="/products/:id" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
