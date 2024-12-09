import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create({ livros, setLivros }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoLivro = {
      id: livros.length > 0 ? livros[livros.length - 1].id + 1 : 1,
      titulo,
      autor,
      ano: parseInt(ano, 10)
    };
    setLivros([...livros, novoLivro]);
    navigate('/');
  };

  return (
    <div>
      <h1>Criar Novo Livro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título: </label>
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Autor: </label>
          <input
            type="text"
            value={autor}
            onChange={e => setAutor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ano: </label>
          <input
            type="number"
            value={ano}
            onChange={e => setAno(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Create;
