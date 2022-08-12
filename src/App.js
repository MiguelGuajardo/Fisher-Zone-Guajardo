import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Contacto from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Error404 from "./pages/Error404";
import CartProvider from "./context/CartContext";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:sectionId" element={<Products />} />
            <Route path="/:sectionId/:categoryId" element={<Products />} />
            <Route path="/:sectionId/:categoryId/:id" element={<Detail />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Cuenta/:Account" element={<Account />} />
            <Route path="/Cart" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
