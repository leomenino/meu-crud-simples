import { useParams, Link } from 'react-router-dom';

function View({ livros }) {
  const { id } = useParams();
  const livro = livros.find((l) => l.id === parseInt(id, 10));

  if (!livro) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Verdana, sans-serif' }}>
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

  return (
    <div
      style={{
        fontFamily: 'Verdana, sans-serif',
        padding: '20px',
        maxWidth: '600px',
        margin: '50px auto',
        background: 'linear-gradient(to right, #f7f9fc, #ffffff)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
        Detalhes do Livro
      </h1>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}>
        <strong>Título:</strong> {livro.titulo}
      </p>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}>
        <strong>Autor:</strong> {livro.autor}
      </p>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
        <strong>Ano:</strong> {livro.ano}
      </p>
      <div style={{ textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            padding: '12px 25px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          Voltar para Lista
        </Link>
      </div>
    </div>
  );
}

export default View;
