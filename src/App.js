import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement";
import ProductList from "./pages/ProductList.js/ProductList";
import Product from "./pages/Product.js/Product";
import { Profile } from "./pages/Profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useSelector } from "react-redux";

function App() {
  const ruser = useSelector((state) => state.user.currentUser);
  const [user] = useAuthState(auth);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer position="bottom-center" limit={1} />
        <Announcement />
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {user ? (
            <Route path="/login" element={<Home />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}

          {user ? (
            <Route path="/register" element={<Home />} />
          ) : (
            <Route path="/register" element={<Register />} />
          )}
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productlist/:id" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>404: Page not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
