import { Routes, Route } from 'react-router';

//componentes
import Ordenes from './components/paginas/Ordenes';

function App() {
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Ordenes />}/>
        </Routes>
     
    </div>
  );
}



export default App;