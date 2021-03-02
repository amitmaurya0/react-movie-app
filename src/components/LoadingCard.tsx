import React, { Component } from 'react';

type LoadingCardTypes = {
  title: string
}

const LoadingCard = ({ title }: LoadingCardTypes) => {
  return (
    <div className="loading-card">
      <p>{title}</p>
    </div>
  )
}

export default LoadingCard;