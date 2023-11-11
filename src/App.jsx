import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokeNavbar from "./components/PokeNavbar";
import DetallePokemon from "./views/DetallePokemon";
import './App.css';

function App() {
  return (
    <Router>
      <PokeNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:name' element={<DetallePokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
