import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Edit({ livros, setLivros }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const livro = livros.find(l => l.id === parseInt(id, 10));

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');

  useEffect(() => {
    if (livro) {
      setTitulo(livro.titulo);
      setAutor(livro.autor);
      setAno(livro.ano);
    }
  }, [livro]);

  if (!livro) {
    return (
      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        <h1 style={{ color: '#e74c3c' }}>Livro não encontrado.</h1>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Voltar
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const livroAtualizado = {
      ...livro,
      titulo,
      autor,
      ano: parseInt(ano, 10),
    };

    const index = livros.findIndex(l => l.id === livro.id);
    const novaLista = [...livros];
    novaLista[index] = livroAtualizado;

    setLivros(novaLista);
    navigate('/');
  };

  return (
    <div
      style={{
        fontFamily: 'Verdana, sans-serif',
        padding: '30px',
        maxWidth: '600px',
        margin: '50px auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(to right, rgb(197 143 90), #ffffff)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#2c3e50',
          fontSize: '28px',
          marginBottom: '20px',
          borderBottom: '2px solid #ddd',
          paddingBottom: '10px',
        }}
      >
        Editar Livro
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              color: '#555',
              fontWeight: 'bold',
            }}
          >
            Título:
          </label>
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              color: '#555',
              fontWeight: 'bold',
            }}
          >
            Autor:
          </label>
          <input
            type="text"
            value={autor}
            onChange={e => setAutor(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              color: '#555',
              fontWeight: 'bold',
            }}
          >
            Ano:
          </label>
          <input
            type="number"
            value={ano}
            onChange={e => setAno(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Salvar Alterações
          </button>
        </div>
      </form>
      <div
        style={{ textAlign: 'center', marginTop: '15px' }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default Edit;
