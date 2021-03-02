import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

type ErrorCardType = {
  title: string
}

const ErrorCard = ({ title }: ErrorCardType) => {
  return (
    <Alert variant="danger" className="error-card">
      {title}
    </Alert>
  )
}

export default ErrorCard;