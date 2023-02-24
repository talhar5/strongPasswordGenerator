import './App.css';
import Navbar from './components/Navbar';
import PasswordGenerator from './components/Qrpass';
import TextToQR from './components/TextToQR';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PasswordGenerator />} />
          <Route path='/texttoqr' element={<TextToQR />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
