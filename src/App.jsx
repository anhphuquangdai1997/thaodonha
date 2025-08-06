import { useState } from 'react'
import './App.css'
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About';
import Nav from './component/Nav';
import One from './component/One';
import Two from './component/Two';
import Three from './component/Three';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
