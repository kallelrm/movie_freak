import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { Movie, Actor } from '../../@types';

import { Header, MovieInfo, Actors, Content } from './styles';

interface MovieParams {
  movie: string;
}

const MovieDetails: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [actors, setActors] = useState<Actor[]>([]);

  const { params } = useRouteMatch<MovieParams>();

  useEffect(() => {
    api.get(`movie/${params.movie}`).then(response => {
      setMovie(response.data);
    });
    api.get(`movie/${params.movie}/credits`).then(response => {
      const { cast } = response.data;
      // const recast = cast[0];
      setActors([...actors, ...cast]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movie, ...actors]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Movie_freak" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {movie && (
        <MovieInfo>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="Imagem do filme"
          />
          <header />
          <div>
            <strong>{movie.original_title}</strong>
            {/* <p>{repository.description}</p> */}
            <ul>
              <li>
                <strong>{movie.release_date}</strong>
                <span>Release Date</span>
              </li>
              <li>
                <strong>
                  {movie.production_countries[0]?.name || 'Not available'}
                </strong>
                <span>Country of origin</span>
              </li>
              <li>
                <strong>{movie.genres[0]?.name || 'Not Available'}</strong>
                <span>Genre</span>
              </li>
            </ul>
          </div>
          <div>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      )}
      <Content>
        {actors.map(actor => (
          <Actors key={actor.cast_id}>
            <div>
              <img
                src={`http://image.tmdb.org/t/p/w780/${actor.profile_path}`}
                alt="Imagem do ator"
              />
              <strong>{actor.character}</strong>
              <p>{actor.name}</p>
              <FiChevronRight size={20} />
            </div>
          </Actors>
        ))}
      </Content>
    </>
  );
};

export default MovieDetails;
