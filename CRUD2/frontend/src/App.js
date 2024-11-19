import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/component/read/:id' element={<Read />} /> {/* Doubt */}
        <Route path='/edit/:id' element={<Update />} /> {/* Doubt */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
