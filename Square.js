// src/components/Square.js
import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
