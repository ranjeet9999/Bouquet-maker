import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import { Custom } from './components/Custom';
import { Dragdrop } from './components/Dragdrop';
import './App.css';
import { Final } from './components/Final';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="selectFlower" element={<Custom />} />
      <Route path="dragDrop" element={<Dragdrop />} />
      <Route path="bouquetReady" element={<Final />} />
    </Routes>
  );
}

export default App;
