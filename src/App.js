import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './pages/main/main';

import About from './component/About/About';
import Proyect1 from './component/Proyect/Proyect1';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/main" element={<Main />} />
    <Route path="/About" element={<About />} />
    <Route path='/Proyect1' element={<Proyect1/>}/>
    <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
