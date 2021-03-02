import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import MovieDetails from './MovieDetails';

type MovieDetailsModalType = {
  showModal: boolean,
  movieId: number,
  onClose: ()=>{}
}

const MovieDetailsModal = ({ showModal, movieId, onClose }: MovieDetailsModalType) => {

  return (
    <Modal size="lg" show={showModal} onHide={onClose} backdropClassName="blurred-bg-modal" contentClassName="app-dialog">
      <Modal.Header closeButton>
       
      </Modal.Header>
      <MovieDetails movieId={movieId} />
    </Modal>
  );
}


export default MovieDetailsModal;
