import React, { Component } from 'react';

type EmptyCardType = {
  title: string
}

const EmptyCard = ({ title }: EmptyCardType) => {
  return (
    <div className="empty-card">
      <p>{title}</p>
    </div>
  )
}

export default EmptyCard;