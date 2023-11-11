import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import PokeNavbar from "./components/PokeNavbar"

function App() {
  return (
    <Router>
      <PokeNavbar/>
    </Router>

  )
}

export default App
