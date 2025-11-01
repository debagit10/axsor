import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import React from "react";

const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
