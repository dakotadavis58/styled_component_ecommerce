import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { db } from "../firebase";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getDocs(collection(db, "fakeProducts"));
  //       setIsLoading(false);
  //       setData(result);
  //       console.log(result);
  //       console.log("gathered data successfully");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
