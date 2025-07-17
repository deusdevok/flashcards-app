import React, { useState } from 'react';

function NewFlashcardForm({ onAdd }) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;
    onAdd(front, back);
    setFront('');
    setBack('');
  };

  return (
    <form className="new-flashcard-form" onSubmit={handleSubmit}>
      <input
        value={front}
        onChange={e => setFront(e.target.value)}
        placeholder="Front"
        required
      />
      <input
        value={back}
        onChange={e => setBack(e.target.value)}
        placeholder="Back"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewFlashcardForm;