import React from 'react';
import Upvote from './Upvote';
import { useUpvoteContext } from '../context/UpvoteContext';

const UpvotesList = () => {
  const { upvotes, toggleUpvote, addUpvote } = useUpvoteContext();

  return (
    <div>
      <h2>Upvotes List</h2>
      <button onClick={addUpvote}>Add Upvote</button>
      <div>
        {upvotes.map((isSelected, index) => (
          <Upvote
            key={index}
            isSelected={isSelected}
            onClick={() => toggleUpvote(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default UpvotesList;