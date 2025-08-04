import { useState } from 'react'
import './App.css'
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About';
import Nav from './component/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
