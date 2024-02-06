import React from 'react';
import NorthIcon from '@mui/icons-material/North';

const Upvote = ({ isSelected, onToggle }) => {
  const defaultStyle = {
    backgroundColor: '#F4F6F8',
    color: '#343A40',
    cursor: 'pointer',
    padding: '5px',
    margin: '10px 10px 10px',
    borderRadius: '25px',
    display: 'inline-block',

  };

  const selectedStyle = {
    backgroundColor: '#E5E8FD',
    color: '#253CF2',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '25px',
    margin: '10px 10px 10px',
    display: 'inline-block',
  };

  const arrowStyle = {
    fontSize: '80px',
  };

  const handleClick = () => {
    onToggle(!isSelected);
  };

  return (
    <div
      style={isSelected ? selectedStyle : defaultStyle}
      onClick={handleClick}
    >
      <NorthIcon style={arrowStyle} />
    </div>
  );
};

export default Upvote;
