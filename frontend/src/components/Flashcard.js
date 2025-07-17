import React from 'react';
import '../FlashcardStyles.css';

function Flashcard({ front, back, showBack = false, onClick }) {
  return (
    <div className="flashcard" onClick={onClick} tabIndex={0}>
      <div className="flashcard-content">
        {showBack ? back : front}
      </div>
    </div>
  );
}

export default Flashcard;