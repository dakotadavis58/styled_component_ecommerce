import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";

import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { firebaseApp } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const app = firebaseApp;
console.log(app);

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer position="bottom-center" limit={1} />
        <Navbar />
        <Announcement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productlist/:slug" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
