import React, {useState} from 'react';
import api from '../lib/axios';
import { useHistory } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [ISBN, setISBN] = useState('');
  const [pages, setPages] = useState('');
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault();
    const book = {name, author, genre, ISBN, pages};
    try{
      await api.post('/books', book);
      history.push('/');
    }
    catch(err){
      console.log(err)
    }
  }
  return( 
    <section className="default-interface">
      <h1>Booklist</h1>
      <form method="POST" onSubmit={handleSubmit} className="default-form">
        <div>
          <label>Título</label>
          <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>Autor</label>
          <input type="text" name="author" value={author} onChange={ (e) => setAuthor(e.target.value) }/>
        </div>
        <div>
          <label>Genero</label>
          <input type="text" name="genre" value={genre} onChange={ (e) => setGenre(e.target.value)}/>
        </div>
        <div>
          <label>ISBN</label>
          <input type="number" name="isbn" value={ISBN} onChange={ (e) => setISBN(e.target.value)}/>
        </div>
        <div>
          <label>Número de Páginas</label>
          <input type="number" name="pages" value={pages} onChange={ (e) => setPages(e.target.value)} />
        </div>

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  );
}

export default Create;