import React, { useState } from 'react';

function Flashcard({ card, onDelete }) {
  const [showDefinition, setShowDefinition] = useState(false);

  const toggleShowDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div 
      className="flashcard" 
      onClick={toggleShowDefinition} 
      style={{ cursor: 'pointer', padding: '20px', margin: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '5px' }}
    >
      {showDefinition ? card.definition : card.term}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevent the card from toggling when clicking the button
          onDelete(card.id);
        }}
        style={{ float: 'right' }}
      >
        Delete
      </button>
    </div>
  );
}

export default Flashcard;
