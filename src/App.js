import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { auth } from "./utils/firebase";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import Admin from "./pages/Admin/Admin";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // const [googleUser] = useAuthState(auth);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />

          {user?.isAdmin && <Route path="/admin" element={<Admin />} />}
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate replace to="/login" />}
          />
          <Route path="*" element={<h1>404: Page not found</h1>} />
        </Routes>
        <ToastContainer position="bottom-center" limit={1} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
