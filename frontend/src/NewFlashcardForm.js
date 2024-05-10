import React, { useState } from 'react';
import axios from 'axios';

function NewFlashcardForm() {
    const [term, setTerm] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/flashcards/', { term, definition })
            .then(response => {
                console.log(response.data);
                setTerm('');
                setDefinition('');
                alert('Flashcard added!');
            })
            .catch(error => alert('Error adding flashcard'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Term:
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            </label>
            <label>
                Definition:
                <textarea value={definition} onChange={(e) => setDefinition(e.target.value)} />
            </label>
            <button type="submit">Add Flashcard</button>
        </form>
    );
}

export default NewFlashcardForm;
