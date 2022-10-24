import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { db } from "../utils/firebase";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <ToastContainer position="bottom-center" limit={1} />
    </div>
  );
};

export default Home;
