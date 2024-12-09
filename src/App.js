import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Create from './pages/Create';
import View from './pages/View';

function App() {
  const [livros, setLivros] = useState([
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
    { id: 2, titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881 }
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home livros={livros} setLivros={setLivros} />} />
        <Route path="/create" element={<Create livros={livros} setLivros={setLivros} />} />
        <Route path="/view/:id" element={<View livros={livros} />} />
      </Routes>
    </Router>
  );
}

export default App;

