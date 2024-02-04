import { createContext, useContext, useState, useEffect } from 'react';

const UpvoteContext = createContext();

export const useUpvoteContext = () => {
  return useContext(UpvoteContext);
};

export const UpvoteProvider = ({ children }) => {
  const [upvotes, setUpvotes] = useState(() => {
    // Retrieve data from local storage or use an empty array if no data exists
    const storedData = localStorage.getItem('upvotes');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Update local storage whenever upvotes change
  useEffect(() => {
    localStorage.setItem('upvotes', JSON.stringify(upvotes));
  }, [upvotes]);

  const toggleUpvote = (index) => {
    const newUpvotes = [...upvotes];
    newUpvotes[index] = !newUpvotes[index];
    setUpvotes(newUpvotes);
  };

  const addUpvote = () => {
    setUpvotes([...upvotes, false]);
  };

  return (
    <UpvoteContext.Provider value={{ upvotes, toggleUpvote, addUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};