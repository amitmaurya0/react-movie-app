import { type } from 'os';
import React, { Component } from 'react'
import { MovieItemType } from '../../types';

type MovieListItemType = {
  movieItem: MovieItemType,
  onClick?: Function
}


const MovieListItem = ({ movieItem, onClick }: MovieListItemType) => {
  return (
    <div className="movie-card" onClick={onClick ? ()=>onClick(movieItem.id) : ()=>{}}>
      <div className="movie-card-left">
        <img src={movieItem.image} />
        <p>{movieItem.name}</p>
      </div>
      <div className="movie-card-right">
        <span>{movieItem.year}</span>
        <span className="movie-rating">{movieItem.contentRating}</span>
        <span>{movieItem.movieLength}</span>
      </div>
      
    </div>
  )
}

export default MovieListItem;