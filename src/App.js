import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Productpage from "./Pages/productPage";
import Footer from "./components/footer";
import Productdetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
      <div className="main-body">
        <Home />
        {/* <Productpage /> */}
        {/* <Productdetails /> */}
        {/* <Cart /> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
