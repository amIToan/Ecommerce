import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Productpage from "./Pages/productPage";
import Footer from "./components/footer";
import Productdetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Productpage />}>
            <Route path=":params" element={<Productpage />} />
          </Route>
          <Route path="/products/:id" element={<Productdetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
