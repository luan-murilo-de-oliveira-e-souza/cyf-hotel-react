import React from "react";
import Header from "./Header.js";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings.js";
import Restaurant from "./Restaurant.js";
import Footer from "./Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
