import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Create.css';

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
        <div className="create-container">
            <h1 className="create-heading">Criar Novo Livro</h1>
            <form className="create-form" onSubmit={handleSubmit}>
                <div className="create-input-group">
                    <label className="create-label">Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        required
                        className="create-input"
                    />
                </div>
                <div className="create-input-group">
                    <label className="create-label">Autor:</label>
                    <input
                        type="text"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                        required
                        className="create-input"
                    />
                </div>
                <div className="create-input-group">
                    <label className="create-label">Ano:</label>
                    <input
                        type="number"
                        value={ano}
                        onChange={e => setAno(e.target.value)}
                        required
                        className="create-input"
                    />
                </div>
                <button type="submit" className="create-button">Salvar</button>
            </form>
            <Link to="/" className="create-back-link" >Voltar</Link>
        </div>
    );
}

export default Create;
