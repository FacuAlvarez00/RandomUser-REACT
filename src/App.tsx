import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './componentes/HomePage';
import PersonDetailed from './componentes/Persons/PersonDetailed';
import PersonsListContainer from './componentes/Persons/PersonsListContainer';
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
          <Route path="/gender/:gendertype" element={<PersonsListContainer firstName="asd" lastName="dad" smallImage="dsada" city="alguna ciudad" country="dsada"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
