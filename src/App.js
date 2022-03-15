import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Productpage from "./Pages/productPage";
import Footer from "./components/footer";
import Productdetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from './Pages/Login';
import Register from './Pages/register'
<<<<<<< HEAD

=======
>>>>>>> master
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
          <Route path="/categories" element={<Productpage />} >
            <Route path=":params" element={<Productpage />} />
          </Route>
          <Route path="/products/:id" element={<Productdetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
