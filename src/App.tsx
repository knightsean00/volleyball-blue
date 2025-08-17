// import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './assets/custom.scss'

import Home from './routes/Home';
import FAQ from './routes/FAQ';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;
