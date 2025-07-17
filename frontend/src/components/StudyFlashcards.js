import React, { useEffect, useState } from 'react';
import Flashcard from './Flashcard';
import Constants from '../Constants';

function StudyFlashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    fetch(Constants.url.BASE_URL + 'flashcards/')
      .then(res => res.json())
      .then(data => setFlashcards(data));
  }, []);

  if (flashcards.length === 0) {
    return <div className="study-container"><h2>Study Flashcards</h2><p>No flashcards available.</p></div>;
  }

  const handleNext = () => {
    setShowBack(false);
    setCurrent((current + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setShowBack(false);
    setCurrent((current - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="study-container">
      <h2>Study Flashcards</h2>
      <Flashcard
        front={flashcards[current].front}
        back={flashcards[current].back}
        showBack={showBack}
        onClick={() => setShowBack(!showBack)}
      />
      <div className="study-buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={() => setShowBack(!showBack)}>
          {showBack ? 'Show Front' : 'Show Back'}
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default StudyFlashcards;