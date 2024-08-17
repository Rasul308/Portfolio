import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/imgs/left-arrow.png';

const ArrowButton = () => {
  return (
    <Link to="/" className="arrow-button">
      <img src={arrow} alt="Back to Home" />
    </Link>
  );
};

export default ArrowButton;
