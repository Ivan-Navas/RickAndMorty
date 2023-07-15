import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicio from './components/Inicio';
import Personaje from './components/Personaje';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>} ></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
