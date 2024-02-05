// components/UpvotesList.js
import React, { useState } from 'react';
import './UpvoteList.css'
import Upvote from './Upvote';

const UpvotesList = () => {
  const [unclickedUpvotes, setUnclickedUpvotes] = useState([]);
  const [clickedUpvotes, setClickedUpvotes] = useState([]);

  const handleUpvoteClick = (upvoteId) => {
    // Check if the upvote is in unclickedUpvotes
    const unclickedIndex = unclickedUpvotes.findIndex((upvote) => upvote.id === upvoteId);

    if (unclickedIndex !== -1) {
      // Move from unclicked to clicked list
      const clickedUpvote = unclickedUpvotes[unclickedIndex];
      setUnclickedUpvotes((prevUnclicked) => prevUnclicked.filter((upvote) => upvote.id !== upvoteId));
      setClickedUpvotes((prevClicked) => [...prevClicked, { ...clickedUpvote, isSelected: true }]);
    } else {
      // Move from clicked to unclicked list
      const clickedIndex = clickedUpvotes.findIndex((upvote) => upvote.id === upvoteId);
      const unclickedUpvote = clickedUpvotes[clickedIndex];
      setClickedUpvotes((prevClicked) => prevClicked.filter((upvote) => upvote.id !== upvoteId));
      setUnclickedUpvotes((prevUnclicked) => [...prevUnclicked, { ...unclickedUpvote, isSelected: false }]);
    }
  };

  const handleAddUnclickedUpvote = () => {
    const newUnclickedUpvote = { id: Date.now(), isSelected: false };
    setUnclickedUpvotes([...unclickedUpvotes, newUnclickedUpvote]);
  };

  const handleAddClickedUpvote = () => {
    const newClickedUpvote = { id: Date.now(), isSelected: true };
    setClickedUpvotes([...clickedUpvotes, newClickedUpvote]);
  };

  return (
    <div>
      <h2>Unclicked Upvotes</h2>
      <button onClick={handleAddUnclickedUpvote}>Add Unclicked Upvote</button>
      <div className='upvotes-list-container'>
        <div style={{ display: 'flex' }}>
          {unclickedUpvotes.map((upvote) => (
            <Upvote
              key={upvote.id}
              isSelected={upvote.isSelected}
              onClick={() => handleUpvoteClick(upvote.id)}
            />
          ))}
        </div>
      </div>
      <h2>Clicked Upvotes</h2>
      <div style={{ display: 'flex' }}>
        <div className='upvotes-list-container'>
          <div className='upvotes-list'>
            {clickedUpvotes.map((upvote) => (
              <Upvote
                key={upvote.id}
                isSelected={upvote.isSelected}
                onClick={() => handleUpvoteClick(upvote.id)}
              />
            ))}
          </div>
        </div>
        <div onClick={handleAddClickedUpvote} className='addbutton'>+</div>
      </div>
    </div>
  );
};

export default UpvotesList;
