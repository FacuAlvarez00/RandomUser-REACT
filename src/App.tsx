import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './componentes/HomePage';
import PersonDetailed from './componentes/Persons/PersonDetailed';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';







 function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/person/:id" element={<PersonDetailed />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
