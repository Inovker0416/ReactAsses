import React, { useState } from 'react';

const Upvote = ({ isSelected, onClick }) => {
  const handleClick = () => {
    onClick(!isSelected);
  };

  return (
    <div
      className="upvote-container"
      style={{
        backgroundColor: isSelected ? '#E5E8FD' : '#F4F6F8',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '20px',
        width:'50px',
        height:'50px',
        marginLeft: '10px',
        marginTop: '10px',
        marginBottom :'10px'
      }}
      onClick={handleClick}
    >
      <span
        style={{
          color: isSelected ? '#253CF2' : '#343A40',
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        +
      </span>
    </div>
  );
};

export default Upvote;