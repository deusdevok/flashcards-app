import React, { useEffect, useState } from 'react';
import Flashcard from './Flashcard';
import NewFlashcardForm from './NewFlashcardForm';
import Constants from '../Constants';

function ManageFlashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFront, setEditFront] = useState('');
  const [editBack, setEditBack] = useState('');

  useEffect(() => {
    fetch(Constants.url.BASE_URL + 'flashcards/')
      .then(res => res.json())
      .then(data => setFlashcards(data));
  }, []);

  const handleAdd = (front, back) => {
    fetch(Constants.url.BASE_URL + 'flashcards/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ front, back }),
    })
      .then(res => res.json())
      .then(newCard => setFlashcards([...flashcards, newCard]));
  };

  const handleDelete = (id) => {
    fetch(`${Constants.url.BASE_URL}flashcards/${id}/`, { method: 'DELETE' })
      .then(() => setFlashcards(flashcards.filter(card => card.id !== id)));
  };

  const startEdit = (card) => {
    setEditingId(card.id);
    setEditFront(card.front);
    setEditBack(card.back);
  };

  const handleEdit = (id) => {
    fetch(`${Constants.url.BASE_URL}flashcards/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ front: editFront, back: editBack }),
    })
      .then(res => res.json())
      .then(updated => {
        setFlashcards(flashcards.map(card => card.id === id ? updated : card));
        setEditingId(null);
      });
  };

  return (
    <div className="manage-container">
      <h2>Manage Flashcards</h2>
      <NewFlashcardForm onAdd={handleAdd} />
      <div className="flashcard-list">
        {flashcards.map(card => (
          <div key={card.id} className="flashcard-manage">
            {editingId === card.id ? (
              <div className="edit-form">
                <input
                  value={editFront}
                  onChange={e => setEditFront(e.target.value)}
                  placeholder="Front"
                />
                <input
                  value={editBack}
                  onChange={e => setEditBack(e.target.value)}
                  placeholder="Back"
                />
                <button onClick={() => handleEdit(card.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <Flashcard front={card.front} back={card.back} />
                <div className="manage-buttons">
                  <button onClick={() => startEdit(card)}>Edit</button>
                  <button onClick={() => handleDelete(card.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageFlashcards;