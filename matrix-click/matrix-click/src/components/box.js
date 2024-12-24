import React from 'react';

const Box = ({ color, onClick }) => {
  return (
    <div 
      className="box" 
      style={{ backgroundColor: color || 'white' }} 
      onClick={onClick}
    />
  );
};

export default Box;
