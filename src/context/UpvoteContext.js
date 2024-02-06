import React, { createContext, useContext, useState } from 'react';

// Create a context for managing upvote state
const UpvoteContext = createContext();

// Custom hook to access the upvote context
export const useUpvoteContext = () => useContext(UpvoteContext);

// Provider component to manage upvote state
export const UpvoteProvider = ({ children }) => {
  const [upvotes, setUpvotes] = useState([]);

  const toggleUpvote = (index, isSelected) => {
    const newUpvotes = [...upvotes];
    newUpvotes[index] = isSelected;
    setUpvotes(newUpvotes);
  };

  const addUpvote = (isSelected) => {
    setUpvotes([...upvotes, isSelected]);
  };

  return (
    <UpvoteContext.Provider value={{ upvotes, toggleUpvote, addUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};
