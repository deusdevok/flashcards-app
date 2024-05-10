import React from 'react';
import Flashcard from './Flashcard';
import NewFlashcardForm from './NewFlashcardForm';

function App() {
  return (
    <div>
      <h1>Flashcards</h1>
      <NewFlashcardForm />
      <Flashcard />
    </div>
  );
}

export default App;