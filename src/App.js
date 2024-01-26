import './App.css';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/edit/:id' element={<Update/>}/>
    <Route/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
