import React, { useState, useEffect } from 'react'
import MovieListItem from './MovieListItem';
import { MovieDetailsType, MovieItemType } from '../../types';
import { Button } from 'react-bootstrap';
import MovieDetailsModal from './MovieDetailsModal';
import AddMovieModal from './AddMovieModal';
import { getYearFromDate, minutesToHour } from '../../utils/index';
import EmptyCard from '../EmptyCard';
import LoadingCard from '../LoadingCard';
import ErrorCard from '../ErrorCard';

const MovieList = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAddMovieModal, setAddMovieDetailsModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [movieId, setMovieId] = useState(0);
  const hideMovieDetailsModal = () => setShowDetailsModal(false);

  const toggleMovieAddForm = () => {
    setAddMovieDetailsModal(!showAddMovieModal);
  }

  const showDetails = (id: number) => {
    setMovieId(id);
    setShowDetailsModal(true);
  }

  const fetchAllMovies = () => {
    try {
      let allMovies = localStorage.getItem('movies');
      let myMovies: Array<MovieDetailsType> = [];
      if(allMovies != null) {
        myMovies = JSON.parse(allMovies);
        let movielist = myMovies.map((item: MovieDetailsType)=>{
          return ({
            id: item.id,
            name: item.name,
            image: item.image,
            year: getYearFromDate(item.releaseDate),
            contentRating: item.contentRating,
            movieLength: minutesToHour(item.movieLength)
          })
        });
        setMovies(movielist);
      }
      setLoading(false);
    } catch (error) {
      setError('Some error occured. Please try after sometime.');
      setLoading(false);
    }
  }

  const onMovieAddSuccess = () => {
    toggleMovieAddForm();
    fetchAllMovies();
  }

  useEffect(()=>{
    fetchAllMovies();
  },[])



  return (
    <>
      <div>
        <div className="movie-list-header">
          <h2>Movies</h2>
          <Button onClick={toggleMovieAddForm}>Add New Movie</Button>
        </div>
        {
          loading ? <LoadingCard title="Loading movies..." /> :
            error == '' ?
                movies.length == 0 ? <EmptyCard title="No movie available." /> :
                  movies.map((item: MovieItemType)=><MovieListItem key={item.id} onClick={showDetails} movieItem={item} />)
              : <ErrorCard title={error} />
        }  
      </div>
      <MovieDetailsModal showModal={showDetailsModal} movieId={movieId} onClose={hideMovieDetailsModal} />
      <AddMovieModal showModal={showAddMovieModal} onSuccess={onMovieAddSuccess} onClose={toggleMovieAddForm} />
    </>
  )
}

export default MovieList;