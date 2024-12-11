import React from 'react';
import { Link } from 'react-router-dom';

function Home({ livros, setLivros }) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este livro?');
    if (confirmDelete) {
      const novosLivros = livros.filter((livro) => livro.id !== id);
      setLivros(novosLivros);
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Verdana, sans-serif',
        padding: '20px',
        maxWidth: '900px',
        margin: 'auto',
        background: 'linear-gradient(to right, rgb(197 143 90), #ffffff)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#333',
          fontSize: '28px',
          marginBottom: '20px',
          padding: '10px',
          borderBottom: '2px solid #ddd',
        }}
      >
        Lista de Livros
      </h1>

      <div
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        style={{ marginBottom: '20px', textAlign: 'center' }}>
        <Link
          to="/create"
          style={{
            textDecoration: 'none',
            padding: '12px 25px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
          }}

        >
          Adicionar Novo Livro
        </Link>
      </div>

      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {livros.map((livro) => (
          <li
            key={livro.id}
            style={{
              marginBottom: '15px',
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: 'rgba(213, 247, 203, 1)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Link
              to={`/view/${livro.id}`}
              style={{
                textDecoration: 'none',
                color: '#2c3e50',
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              {livro.titulo} - {livro.autor} ({livro.ano})
            </Link>

            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Link
                to={`/edit/${livro.id}`}
                style={{
                  textDecoration: 'none',
                  color: '#3498db',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  margin: '10px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(10deg)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Editar
              </Link>

              <button
                onClick={() => handleDelete(livro.id)}
                style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '7px 15px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '7px 5px 0px 0px rgba(0, 0, 0, 0.1)',
                }}
              >
                Excluir
              </button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
