import React, { useState } from 'react';
import axios from 'axios';

function NewFlashcardForm({ onAddFlashcard }) {
    const [term, setTerm] = useState('');
    const [definition, setDefinition] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/flashcards/', { term, definition, category })
            .then(response => {
                onAddFlashcard(response.data);
                setTerm('');
                setDefinition('');
                setCategory('');
                alert('Flashcard added!');
            })
            .catch(error => alert('Error adding flashcard'));
    };

    return (
        <form className='form-terms' onSubmit={handleSubmit}>
            <label>
                <p>Term:</p>
                <textarea value={term} onChange={(e) => setTerm(e.target.value)} />
            </label>
            <hr />
            <label>
                <p>Definition:</p>
                <textarea value={definition} onChange={(e) => setDefinition(e.target.value)} />
            </label>
            <hr />
            <label>
                <p>Category:</p>
                <textarea value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
            <button type="submit">Add Flashcard</button>
        </form>
    );
}

export default NewFlashcardForm;
