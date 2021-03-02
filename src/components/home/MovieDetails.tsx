import React, { useState, useEffect } from 'react';
import { MovieDetailsType } from '../../types';

type MovieStatsItemProps = {
  title: string,
  value: string,
}
type MovieDetailsProps = {
  movieId: number
}

const MovieDetails = ({ movieId }: MovieDetailsProps) => {
  const [movie, setMovie] = useState<MovieDetailsType>({});
  const fetchMovieDetails = () => {
    try {
      let allMovies = localStorage.getItem('movies');
      let myMovies: Array<MovieDetailsType> = [];
      if(allMovies != null) {
        myMovies = JSON.parse(allMovies);
        let movieItem: MovieDetailsType = myMovies.filter((item: MovieDetailsType)=>item.id == movieId)[0];
        setMovie(movieItem);
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchMovieDetails();
  },[movieId])
  return (
    <div className="movie-details">
      <div className="image-container">
        <img src={movie.image} />
      </div>
      <div className="details-container">
        <h3>{movie.name && movie.name.toUpperCase()}</h3>
        {movie.tagline && <h5>{movie.tagline}</h5>}
        <p>{movie.description}</p>
        <p className="genres">{movie.genres}</p>
        <p>{movie.shortDescription}</p>
        <div className="movie-stats">
          <MovieStatsItem title="Original Date" value={movie.releaseDate} />
          <MovieStatsItem title="Running Time" value={`${movie.movieLength} mins`} />
        </div>
        <div className="movie-stats">
          <MovieStatsItem title="Box Office" value={movie.totalEarning} />
          <MovieStatsItem title="Vote Average" value={`${movie.vote}`} />
        </div>
      </div>
    </div>
  )
}

const MovieStatsItem = ({ title, value }: MovieStatsItemProps) => {
  return (
    <div className="movie-stats-item">
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </div>
  )
}

export default MovieDetails;