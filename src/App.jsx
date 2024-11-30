

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GenerateStory from "./components/GenerateStory";
import ButtonGradient from "./assets/svg/ButtonGradient";

// import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/generate" element={<GenerateStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/about" element={<AboutUS/>} /> */}
        {/* <Route path="/contact" element={<Footer />} /> */}
      </Routes>
      
      <ButtonGradient />
    </div>
  );
};

export default App;
