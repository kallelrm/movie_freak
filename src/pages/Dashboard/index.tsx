import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { Title, Form, Movies, Error } from './styles';

interface Movie {
  id: number;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

const Dashboard: React.FC = () => {
  const [newMovie, setNewMovie] = useState('');
  const [inputError, setInputError] = useState('');
  const [movies, setMovies] = useState<Movie[]>(() => {
    const storagedMovies = localStorage.getItem('@TMDB:movies');

    if (storagedMovies) {
      return JSON.parse(storagedMovies);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@TMDB:movies', JSON.stringify(movies));
  }, [movies]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // adição de um novo repo
    event.preventDefault();

    if (!newMovie) {
      try {
        const {
          data: { results },
        } = await api.get('movie/popular');
        console.log(results);
        const movie = results;
        setMovies([...movies, ...movie]);
        setNewMovie('');
        setInputError('');
      } catch (err) {
        setInputError('Erro na busca por esse filme');
      }
    } else {
      try {
        const {
          data: { results },
        } = await api.get('search/movie', {
          params: {
            query: newMovie,
          },
        });
        console.log(results[0]);
        const movie = results[0];
        setMovies([...movies, movie]);
        setNewMovie('');
        setInputError('');
      } catch (err) {
        setInputError('Erro na busca por esse filme');
      }
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
          placeholder="Digite o nome do filme"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Movies>
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <div>
              <strong>{movie.original_title}</strong>
              <p>{movie.overview}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Movies>
    </>
  );
};

export default Dashboard;
