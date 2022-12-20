import React from "react";
import "./index.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import SingleRecipe from "./pages/singleRecipe";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Searched from "./pages/searched";
import background from "./images/background.jpg";
import Error from "./pages/error";

const App = () => {
  return (
    <div className="App">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-scroll bg-cover bg-center min-h-screen"
      >
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipes" element={<Searched />} />
          <Route exact path="/recipe/:id" element={<SingleRecipe />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
