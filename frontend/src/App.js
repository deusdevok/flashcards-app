import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';
import NewFlashcardForm from './NewFlashcardForm';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/flashcards/')
      .then(response => {
        setFlashcards(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const addFlashcard = (newCard) => {
    setFlashcards([...flashcards, newCard]);
  };

  const deleteFlashcard = (id) => {
    axios.delete(`http://localhost:8000/api/flashcards/${id}/`)
      .then(() => {
        setFlashcards(flashcards.filter(card => card.id !== id));
      })
      .catch(error => console.error('Error deleting flashcard: ', error));
  };

  return (
    <div>
      <h1>Flashcards</h1>
      <NewFlashcardForm onAddFlashcard={addFlashcard} />
      {flashcards.map(card => (
        <Flashcard key={card.id} card={card} onDelete={deleteFlashcard} />
      ))}
    </div>
  );
}

export default App;
