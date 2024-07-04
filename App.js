import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import QRGenerator from "./QR/QR";
import NFC from "./NFC/NFC";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Register from './Register/Register';

function App() {

  return (
    <div>
      <Header/>
      <div>
        <Routes>
          <Route path = '/register' element = {<Register/>}/>
        <Route path='/qr' element={<QRGenerator/>} />
          <Route path='/' element={<NFC/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
