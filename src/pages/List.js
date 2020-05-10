import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../lib/axios';
import Book from '../components/Book';

function List() {
  const [books, setBooks] = useState([]);

  const history = useHistory();

  function getData(){
    api.get('/books')
    .then((res) => {
      setBooks(res.data);
      history.push('/');
    })
    .catch((err) => console.log(err))
  }

  useEffect(getData, []);
  return( 
    <section className="default-interface">
      <h1>Booklist</h1>
      <p>Aplicação para cadastro de livros já lidos. Todos os livros tem os seguintes campos: título, autor, número de páginas, genero e ISBN</p>
      <Link to="/new">Criar</Link>
      <div className="grid">
        {books && books.map((book, key) => {
          return <Book data={book} getData={getData} key={`book-${key}`}/>
        })}
      </div>
    </section>
  );
}

export default List;