import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import React from "react";
import theme from "./utils/Theme";
import { ThemeProvider } from "@mui/material";

const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
