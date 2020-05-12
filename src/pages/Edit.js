import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../lib/axios';

function Edit({match}) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [ISBN, setISBN] = useState('');
  const [pages, setPages] = useState('');

  const history = useHistory();
  
  function initialValues(data){
    setName(data.name);
    setAuthor(data.author);
    setGenre(data.genre);
    setISBN(data.ISBN);
    setPages(data.pages);
  }

  useEffect(() => {
    const { params:{ id } } = match;
    api.get(`/books/${id}`)
    .then((res) => {
      initialValues(res.data)
    })
    .catch((err) => console.log(err))
  }, []);

  
  async function handleSubmit(e){
    e.preventDefault();
    const book = {name, author, genre, ISBN, pages};
    const { params:{ id } } = match;
    try{
      await api.post(`/books/${id}`, book);
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
          Salvar
        </button>
      </form>
    </section>
  );
}

export default Edit;