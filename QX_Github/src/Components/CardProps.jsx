// Card.js
import React from 'react';
import './CardProps.css';

const Card = ({ icon, title }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;