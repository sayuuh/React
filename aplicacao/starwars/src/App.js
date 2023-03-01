import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Templates
import Header from './template/header/Header';
import Footer from './template/footer/Footer';

// Pages
import Home from './pages/home/Home';
import People from './pages/people/People';
import Person from './pages/person/Person';
import Planets from './pages/planets/planets';
import Planet from './pages/planet/planet';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/person/:number' element={<Person />}/>
        <Route path='/planet/:number' element={<Planet />} />
        <Route path='/people' element={<People />}/>        
        <Route path='/planets' element={<Planets />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
