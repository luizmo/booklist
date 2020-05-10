import React from 'react';
import { Link } from 'react-router-dom';
import api from '../lib/axios';
// import { Container } from './styles';

function Book({data, getData}) {
  function deleteBook(id){
    api.delete(`/books/${id}`)
    .then(() => {
      getData()
    })
  }
  return( 
    <div className="book">
      <h1>{data.name}</h1>
      <p>{data.author}</p>
      <div className="generic-infos">
        <span>Genero: {data.genre} </span>
        <span>ISBN: {data.ISBN}</span>
        <span>Número de Páginas: {data.pages} </span>
      </div>
      <div>
        <Link to={`/edit/${data._id}`} title="Editar">Editar</Link>
        <button onClick={() => deleteBook(data._id)}>Deletar</button>
      </div>
    </div>
  )
}

export default Book;