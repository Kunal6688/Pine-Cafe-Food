import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer.jsx";
import MobileApp from "./components/MobileApp.jsx";
import LogIn from "./components/LogIn.jsx";
import ExploreMenu from "./components/ExploreMenu.jsx";

const App = () => {

  const [showLogin,setShowLogin] = React.useState(false);

  return ( 
    <BrowserRouter>
      <div className="scroll-smooth">
        {showLogin?<LogIn setShowLogin={setShowLogin}/>:<></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/#ExploreMenu" element={<ExploreMenu/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <MobileApp/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
