import '../FlashcardStyles.css';
import React, { useState } from 'react';

function Flashcard({ card, onDelete }) {
  const [showDefinition, setShowDefinition] = useState(false);

  const toggleShowDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div className="flashcard-container">
      <div className="flashcard" onClick={toggleShowDefinition}>
        <div className={`card-content ${showDefinition ? 'flip' : ''}`}>
          <div className="card-face front">
            {card.term}
          </div>
          <div className="card-face back">
            {card.definition}
          </div>
        </div>
      </div>
      <button 
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent the card from toggling when clicking the button
          onDelete(card.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Flashcard;
