import './App.css';
import Navbar from './components/Navbar';
import PasswordGenerator from './components/Qrpass';
import TextToQR from './components/TextToQR';
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PasswordGenerator />} />
          <Route path='/texttoqr' element={<TextToQR />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
