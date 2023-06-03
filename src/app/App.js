import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../component/header/Header";
import Carousel from "../component/carousel/Carousel";
import Assortment from "../component/assortment/Assortment";
import Footer from "../component/footer/Footer";
import Product from "../page/product/Product";

import About from "../page/about/About";
import VideoProd from  "../component/videoProd/VideoProd";
const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Carousel />
      </div>
      <Routes>
        <Route path="/" element={<Assortment />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/videoProd" element={<VideoProd />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
