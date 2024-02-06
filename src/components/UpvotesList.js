import React, { useState, useEffect } from 'react';
import Upvote from './Upvote';
import './UpvoteList.css'; // Import your CSS file
import AddIcon from '@mui/icons-material/Add';

const UpvotesList = ({ isClickedList }) => {
  const storageKey = isClickedList ? 'unclickedUpvotes' : 'clickedUpvotes';
  const [upvotes, setUpvotes] = useState([]);

  useEffect(() => {
    // Load upvotes from localStorage when component mounts
    const savedUpvotes = localStorage.getItem(storageKey);
    if (savedUpvotes) {
      setUpvotes(JSON.parse(savedUpvotes));
    }
  }, [storageKey]);

  const handleToggle = (index, isSelected) => {
    const newUpvotes = [...upvotes];
    newUpvotes[index] = isSelected;
    setUpvotes(newUpvotes);
    // Save updated upvotes to localStorage
    localStorage.setItem(storageKey, JSON.stringify(newUpvotes));
  };

  const handleAddUpvote = () => {
    setUpvotes([...upvotes, !isClickedList]); // Add upvote based on the list type
    // Save updated upvotes to localStorage
    localStorage.setItem(storageKey, JSON.stringify([...upvotes, !isClickedList]));
  };

  return (
    <div style = {{display:'flex', justifyContent:'center', marginTop:'5%'}}>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width:'80%', borderRadius:'25px' }}>
        {upvotes.map((isSelected, index) => (
          <Upvote
            key={index}
            isSelected={isSelected}
            onToggle={(newState) => handleToggle(index, newState)}
          />
        ))}
      </div>
      <div style={{margin:'10px'}}>
        <button className="upvote-button" onClick={handleAddUpvote}><AddIcon/></button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UpvotesList isClickedList />
      <UpvotesList />
    </div>
  );
};

export default App;
