import React, { useState, useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import MovieDetailsModal from './home/MovieDetailsModal';

interface IMoiveSearch {
  id: number, 
  name: string
}


const MovieSearch = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(0);

  useEffect(()=>{
    fetchAllMovies();
  }, []); 

  const fetchAllMovies = () => {
    try {
      let allMovies = localStorage.getItem('movies');
      let myMovies: Array<IMoiveSearch> = [];
      if(allMovies != null) {
        myMovies = JSON.parse(allMovies);
        let movielist = myMovies.map((item: IMoiveSearch)=>{
          return ({
            id: item.id,
            name: item.name,
          })
        });
        setMovies(movielist);
      }
    } catch (error) {
      
    }
  }

  const handleOnSelect = (item) => {
    // the item selected
    setMovieId(item.id);
    setShowDetailsModal(true);
  }
  const hideMovieDetailsModal = () => setShowDetailsModal(false);
  return (
    <>
    <div className="search-input-container">

      <ReactSearchAutocomplete
         items={movies}
         onSelect={handleOnSelect}
         autoFocus
         placeholder="Search Movie Title..."
       />
    </div>
    <MovieDetailsModal showModal={showDetailsModal} movieId={movieId} onClose={hideMovieDetailsModal} />

  </>
  );
};


export default MovieSearch;