
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Create from './pages/Create';
import View from './pages/View';
import Edit from './pages/Edit';
import './App.css'

function App() {
  const [livros, setLivros] = useState([
    { id: 1, titulo: "A voz do silêncio", autor: "Helena P. Blavatsky", ano: 1889 },
    { id: 2, titulo: "Os Iniciados do Fogo", autor: "Manly P. Hall", ano: 1922 },
    { id: 3, titulo: "História Oculta do mundo", autor: "Édouard Schuré", ano: 1889 }
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home livros={livros} setLivros={setLivros} />} />
        <Route path="/create" element={<Create livros={livros} setLivros={setLivros} />} />
        <Route path="/view/:id" element={<View livros={livros} />} />
        <Route path="/edit/:id" element={<Edit livros={livros} setLivros={setLivros} />} />
      </Routes>
    </Router>
  );
}

export default App;