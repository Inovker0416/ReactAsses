import React from 'react';
import UpvotesList from './components/UpvotesList';
import { useUpvoteContext } from './context/UpvoteContext';

function App() {
  const { upvotes } = useUpvoteContext();

  return (
    <div className="App">
      <h1>Upvotes List Example</h1>
      <UpvotesList />
      <h2>All Upvotes</h2>
      <ul>
        {upvotes.map((isSelected, index) => (
          <li key={index}>{isSelected ? 'Selected' : 'Not Selected'}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;