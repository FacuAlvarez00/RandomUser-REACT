import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './componentes/HomePage';
import PersonDetailed from './componentes/Persons/PersonDetailed';
import PersonsListContainer from './componentes/Persons/PersonsListContainer';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import { PersonProvider } from './context/personContext';








 function App() {
   return (

   
     <PersonProvider> 
     
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/person/:id" element={<PersonDetailed />}></Route> 
          <Route path="/gender/:gendertype" element={<PersonsListContainer firstName="asd" lastName="dad" smallImage="dsada" city="alguna ciudad" country="dsada"/>} />
        </Routes>
      </BrowserRouter>

    </PersonProvider>
      
    
  );
} 

export default App;
