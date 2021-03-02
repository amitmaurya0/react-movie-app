import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import MovieForm from './MovieForm';

type AddMovieModalType = {
  showModal: boolean,
  onClose: Function,
  onSuccess: Function,
}

const AddMovieModal = ({ showModal, onClose, onSuccess }: AddMovieModalType) => {

  return (
    <Modal show={showModal} onHide={onClose} contentClassName="add-movie-dialog">
      <Modal.Header closeButton>
        <Modal.Title>Add new movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MovieForm onCancelPress={onClose} onSuccess={onSuccess} />
      </Modal.Body>
    </Modal>
  );
}


export default AddMovieModal;
